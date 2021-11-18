import React, { useState } from "react";
import {
  StyledInput,
  StyledInputError,
  StyledInputWrapper,
  StyledIcon,
  StyledPasswordButton
} from "./InputStyles";
import inputList from "../../services/inputList";


const Input = ({ name, handleChange, handleBlur, value, error, touched }) => {

  const icon = inputList[name].img

  const { placeholder } = inputList[name]

  const [isVisible, setIsVisible] = useState(false)

  const isPasswordField = name === 'password' || name === 'confirmPassword'

  const handlePasswordButton = () => {
    setIsVisible(!isVisible)
  }

  const passwordType = isVisible ? 'text' : 'password'

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
        type={type === 'password' ? passwordType : type}
        name={name}
        placeholder={placeholder}
        error={error}
        touched={touched}/>
      {isPasswordField
        ? <StyledPasswordButton onClick={handlePasswordButton}/>
      : ''
      }
      <StyledInputError>{error}</StyledInputError>
    </StyledInputWrapper>
  );
};

export default Input;
