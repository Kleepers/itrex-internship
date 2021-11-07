export default class Model {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [{ email: "admin@admin.ru", password: "admin01" }];
    this.data = { email: "admin@admin.ru", password: "admin01" };
  }

  signUp() {
    this.users = JSON.parse(localStorage.getItem("users")) || [{ email: "admin@admin.ru", password: "admin01" }];
    this.users.push(this.data);
    localStorage.setItem("users", JSON.stringify(this.users));
    return true;
  }

  signIn() {
    this.users = JSON.parse(localStorage.getItem("users")) || [{ email: "admin@admin.ru", password: "admin01" }];
    return this.users.some((user) => (user.email === this.data.email) && (user.password === this.data.password));
  }
}
