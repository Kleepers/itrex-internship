import {admin} from "./constants";

export default class Model {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [{ email: "admin@admin.ru", password: "admin01" }];
    this.data = admin;
  }

  signUp() {
    this.users = JSON.parse(localStorage.getItem("users")) || [admin];
    this.users.push(this.data);
    localStorage.setItem("users", JSON.stringify(this.users));
    return true;
  }

  signIn() {
    this.users = JSON.parse(localStorage.getItem("users")) || [admin];
    console.log(this.users.some((user) => (user.email === this.data.email) && (user.password === this.data.password)))
    return this.users.some((user) => (user.email === this.data.email) && (user.password === this.data.password));
  }
}
