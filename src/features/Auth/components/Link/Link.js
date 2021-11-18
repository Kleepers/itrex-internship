import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledLinkWrapper = styled.p`
  font-size: 15px;
  line-height: 21px;
  color: #A1ABC9;
  margin: ${(props) => (props.isFooter ? 'auto 0 80px' : '0')};
  @media screen and (max-width: 559px) {
      display: flex;
      flex-direction: column;
      margin: auto 0 44px;
  }
`;

const StyledLink = styled.a`
  color: #7297FF;
  text-decoration-line: underline;
  cursor: pointer;
  font-weight: ${(props) => (props.isFooter ? '600' : '500')};
  margin-left: ${(props) => (props.isFooter ? '12px' : '0')};
  transition: 0.3s color ease-in-out;
  font-size: 15px;
  line-height: 24px;
  &:hover {
    color: #7288ff ;
  }
  
  @media screen and (max-width: 559px) {
      margin: 0;
  }
`;

const Link = function ({
  text, linkText, path, isFooter,
}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };
  return (
    <StyledLinkWrapper isFooter={isFooter}>
      {text}
      <StyledLink isFooter={isFooter} onClick={handleNavigate}>{linkText}</StyledLink>
    </StyledLinkWrapper>
  );
};

export default Link;
