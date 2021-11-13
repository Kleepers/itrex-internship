import {signInError} from "./constants";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  render(url) {
    if (url === "/" || url === "/signup") {
      this.view.renderSignUp();
      this.view.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.model.signUp()
        window.history.pushState({ url }, null, "signin");
        this.render("/signin");
      });
      this.view.form.querySelectorAll(".input").forEach((input) => {
        input.addEventListener("change", (evt) => {
          this.model.data[evt.target.name] = evt.target.value;
        });
      });
    } else if (url === "/signin") {
      this.view.renderSignIn();
      const emailInput = this.view.form.querySelector('#email');
      const passInput = this.view.form.querySelector('#password');
      this.view.form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (this.model.signIn()) {
          window.history.pushState({ url }, null, "clinic");
          this.render("/clinic");
        } else {
          this.view.validator.showInputError(emailInput,signInError);
          this.view.validator.showInputError(passInput,signInError);
        }
      });
      this.view.form.querySelectorAll(".input").forEach((input) => {
        input.addEventListener("change", (evt) => {
          console.log(evt.target.name);
          this.model.data[evt.target.name] = evt.target.value;
        });
      });
    } else if (url === "/restore-pass") {
      this.view.renderRestorePass();
    } else if (url === "/clinic") {
      this.view.renderClinic();
    }

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("click", (evt) => {
        evt.preventDefault();
        const { pathname: path } = new URL(evt.target.href);
        console.log(window.location.origin + path);
        window.history.pushState({ path }, null, window.location.origin + path);
        this.render(path);
      });
    });
  }

  enableRouting() {
    this.render("/");
    window.addEventListener("popstate", () => {
      this.render(new URL(window.location.href).pathname);
    });
  }
}
