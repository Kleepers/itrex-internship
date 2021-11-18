import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton/NavButton";

const StyledNav = styled.nav`
  
  margin-bottom: 56px;
  
  @media screen and (max-width: 650px) {
      display: flex;
      margin-bottom: 40px;
  }
`

const Nav = ({buttons}) => {
  return (
    <StyledNav>
      {
        buttons.map((button, index) => (
          <NavButton key={index} isActive={button.isActive} text={button.name} />
        ))
      }
    </StyledNav>
  );
};

export default Nav;
