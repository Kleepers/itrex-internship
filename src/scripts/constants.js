const signUpInputList = [
  {
    icon: "icon-user",
    type: "text",
    placeholder: "First Name",
    name: "firstName",
  },
  {
    icon: "icon-user",
    type: "text",
    placeholder: "Last Name",
    name: "lastName",
  },
  {
    icon: "icon-mail",
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    icon: "icon-pass",
    type: "password",
    placeholder: "Password",
    name: "password",
  },
  {
    icon: "icon-confirm-pass",
    type: "password",
    placeholder: "Confirm password",
    name: "confirmPassword",
  },
];

const signInInputList = [
  {
    icon: "icon-mail",
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    icon: "icon-pass",
    type: "password",
    placeholder: "Password",
    name: "password",
  },
];

const restorePasswordInputList = [
  {
    icon: "icon-mail",
    type: "email",
    placeholder: "Email",
    name: "email",
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

export {
  validationSettings, restorePasswordInputList, signInInputList, signUpInputList,
};
