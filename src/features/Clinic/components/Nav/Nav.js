import styled from 'styled-components';
import { blue, white } from '../../../constants/colors';

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
  background: ${(props) => (props.isActive ? blue : white)};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 12px;
  min-width: 160px;
  color: ${(props) => (props.isActive ? white : blue)};
  font-size: 15px;
  line-height: 19px;
  text-align: center;

  @media screen and (max-width: 650px) {
    min-width: 0;
    margin-right: 24px;
    width: max-content;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export { StyledNav, StyledNavButton };
