import React from 'react';
import { StyledHeader, StyledHeaderLogo } from './HeaderStyles';
import logo from './images/logo.png';
import HeaderUser from './HeaderUser/HeaderUser';

const Header = function ({ name, type }) {
  return (
    <StyledHeader>
      <StyledHeaderLogo src={logo} />
      <HeaderUser name={name} type={type} />
    </StyledHeader>
  );
};

export default Header;
