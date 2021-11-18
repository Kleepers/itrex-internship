import React from 'react';
import { StyledButtonSubmit, StyledButtonIcon } from './StyledButtonSubmit';

const ButtonSubmit = function ({ children, type }) {
  return (
    <StyledButtonSubmit type={type}>
      {children}
      <StyledButtonIcon />
    </StyledButtonSubmit>
  );
};

export default ButtonSubmit;
