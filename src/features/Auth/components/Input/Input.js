import React, { useState, useMemo } from 'react';
import {
  StyledInput,
  StyledInputError,
  StyledInputWrapper,
  StyledIcon,
  StyledPasswordButton,
} from './InputStyles';
import inputList from '../../services/inputList';

const Input = function ({
  name, handleChange, handleBlur, value, error, touched,
}) {
  const icon = inputList[name].img;

  const { placeholder } = inputList[name];

  const [isVisible, setIsVisible] = useState(false);

  const isPasswordField = (name === 'password' || name === 'confirmPassword');

  const handlePasswordButton = () => {
    setIsVisible(!isVisible);
  };
  const type = useMemo(() => {
    if (isPasswordField) {
      return (isVisible ? 'text' : 'password');
    }
    if (name === 'email') return 'email';
    return 'text';
  }, [name, isVisible]);

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
        touched={touched}
      />
      {isPasswordField && (
        <StyledPasswordButton onClick={handlePasswordButton} />
      )}
      {(touched && error) && (
        <StyledInputError>{error}</StyledInputError>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
