import React from "react";
import styled from "styled-components";

const StyledNavButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${props => props.isActive ? '#7297ff' : 'white'};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 12px;
  min-width: 160px;
  color: ${ props => props.isActive ? 'white' : '#7297ff'};
  font-size: 15px;
  line-height: 140%;
  text-align: center;

  @media screen and (max-width: 650px) {  
    min-width: 120px;
    margin-right: 24px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const NavButton = ({isActive, text}) => {
  return (
    <StyledNavButton isActive={isActive}>
      {text}
    </StyledNavButton>
  );
};

export default NavButton;
