import React from "react";
import { StyledInput, StyledInputError, StyledInputWrapper, StyledIcon } from "./InputStyles";
import inputList from "../../services/inputList";


const Input = ({ name, handleChange, handleBlur, value, error, touched }) => {

  const icon = inputList[name].img

  const { placeholder } = inputList[name]

  let type = '';

  if (name === 'password' || name === 'confirmPassword') {
    type = 'password'
  } else if (name === 'email') {
    type = 'email';
  }
  else {
    type = 'text'
  }

  return (
    <StyledInputWrapper>
      <StyledIcon>
        {icon}
      </StyledIcon>
      <StyledInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        error={error}
        touched={touched}/>
      <StyledInputError>{error}</StyledInputError>
    </StyledInputWrapper>
  );
};

export default Input;
