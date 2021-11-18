import styled from 'styled-components';

const StyledNav = styled.nav`
  
  margin-bottom: 56px;
  
  @media screen and (max-width: 650px) {
      display: flex;
      margin-bottom: 40px;
  }
`;
const StyledNavButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${(props) => (props.isActive ? '#7297ff' : 'white')};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 12px;
  min-width: 160px;
  color: ${(props) => (props.isActive ? 'white' : '#7297ff')};
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
`;

export { StyledNav, StyledNavButton };
