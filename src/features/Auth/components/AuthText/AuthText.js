import React from 'react';
import styled from 'styled-components';

const StyledAuthText = styled.p`
  font-size: 15px;
  line-height: 19px;
  color: #A1ABC9;
  margin-bottom: 40px;
  max-width: 368px;
  margin-top: 0;
  @media screen and (max-width: 559px) {
      margin-top: 0;
      margin-bottom: 24px;
  }
`;

const AuthText = function ({ children }) {
  return (
    <StyledAuthText>
      {children}
    </StyledAuthText>
  );
};

export default AuthText;
