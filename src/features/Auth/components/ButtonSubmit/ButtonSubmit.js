import React from 'react';
import { StyledButtonSubmit, StyledButtonIcon } from './StyledButtonSubmit';

const ButtonSubmit = function ({ children, type, isActive }) {
  return (
    <StyledButtonSubmit type={type} isActive={isActive} disabled={isActive}>
      {children}
      <StyledButtonIcon />
    </StyledButtonSubmit>
  );
};

export default ButtonSubmit;
