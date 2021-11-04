export default class Model {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    this.data = { email: "admin@admin.ru", password: "admin" };
  }

  signUp(user) {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));
    return true;
  }

  signIn(currentUser) {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    return this.users.some((user) => (user.email === currentUser.email) && (user.password === currentUser.password));
  }
}
