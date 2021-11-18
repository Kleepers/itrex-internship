import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    height: 32px;
    display: flex;
    align-items: center;
`;

const StyledHeaderWrapper = styled.div`
  margin: ${(props) => (props.isSignUp ? '16.4vh 0 40px 0' : '26vh 0 40px 0')};
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Header = function ({ children, text, isSignUp }) {
  return (
    <StyledHeaderWrapper isSignUp={isSignUp}>
      {children}
      <StyledHeader>
        {text}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
