import styled from 'styled-components';
import arrow from './images/arrow.svg';
import { blue, darkBlue } from '../../../constants/colors';

const StyledButtonSubmit = styled.button`
  height: 56px;
  min-height: 56px;
  margin-right: auto;
  background-color: ${blue};
  border-radius: 8px;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 32px 0 24px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;
  margin-bottom: 32px;

  &:active, &:focus {
    border: none;
    outline:none;
  }
  &:hover {
    background-color: ${darkBlue};
  ;
    @media screen and (max-width: 559px) {
        background-position: right 24px top 17px;
        font-size: 15px;
        line-height: 19px;
        padding: 0 24px 0 16px;
        height: 48px;
        min-height: 48px;
      }
  `;

const StyledButtonIcon = styled.span`
  margin-left: 16px;
  background: url(${arrow});
  width: 8px;
  height: 13px;
`;

export { StyledButtonIcon, StyledButtonSubmit };
