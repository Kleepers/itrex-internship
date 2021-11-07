const signUpInputList = [
  {
    icon: "icon-user",
    type: "text",
    placeholder: "First Name",
    name: "firstName",
    minLength: 4,
  },
  {
    icon: "icon-user",
    type: "text",
    placeholder: "Last Name",
    name: "lastName",
    minLength: 4,
  },
  {
    icon: "icon-mail",
    type: "email",
    placeholder: "Email",
    name: "email",
    minLength: 4,
  },
  {
    icon: "icon-pass",
    type: "password",
    placeholder: "Password",
    name: "password",
    minLength: 6,
  },
  {
    icon: "icon-confirm-pass",
    type: "password",
    placeholder: "Confirm password",
    name: "confirmPassword",
    minLength: 6,
  },
];

const signInInputList = [
  {
    icon: "icon-mail",
    type: "email",
    placeholder: "Email",
    name: "email",
    minLength: 4,
  },
  {
    icon: "icon-pass",
    type: "password",
    placeholder: "Password",
    name: "password",
    minLength: 6,
  },
];

const restorePasswordInputList = [
  {
    icon: "icon-mail",
    type: "email",
    placeholder: "Email",
    name: "email",
    minLength: 4,
  },
];

const validationSettings = ({
  formSelector: ".authorization",
  inputSelector: ".input",
  submitButtonSelector: ".authorization__submit",
  inactiveButtonClass: "authorization__submit_disabled",
  inputErrorClass: "input-invalid",
  errorClass: "input-error",
});

const passwordMatchError = "Пароли не совпадают";

export {
  validationSettings, restorePasswordInputList, signInInputList, signUpInputList, passwordMatchError,
};
