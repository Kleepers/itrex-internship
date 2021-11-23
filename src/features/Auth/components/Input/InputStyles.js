import styled from 'styled-components';
import eye from './images/eye.svg';
import { blue } from '../../../constants/colors';

const StyledInputWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &:last-of-type {
    margin-bottom: 64px;
  }
  @media screen and (max-width: 559px) {
    margin-bottom: 24px;
    &:last-of-type {
      margin-bottom: 32px;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 17px;
  line-height: 24px;
  border: 1px solid #DCE0EC;
  padding: 15px 40px 15px 64px;
  border-radius: 8px;
  &:focus, &:active {
    border: 1px solid ${blue};
    outline: none;
  }
  &::placeholder {
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    color: #A1ABC9;
  }
  @media screen and (max-width: 559px) {
      padding: 9px 35px 9px 48px;
      font-size: 15px;
      line-height: 21px;
    &::placeholder {
      font-size: 15px;
      line-height: 21px;
    }
  }
`;

const StyledInputError = styled.span`
  color: #F6657F;
  font-size: 13px;
  line-height: 16px;
  margin-top: 8px;
  letter-spacing: -0.24px;
  @media screen and (max-width: 559px) {
      margin-top: 15px;
  }
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 8px;
  left: 16px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 560px) {
    top: 16px;
  }
`;

const StyledPasswordButton = styled.span`
  cursor: pointer;
  position: absolute;
  right: 26px;
  top: 18px;
  width: 20px;
  height: 20px;
  background: url(${eye});
  @media screen and (max-width: 559px) {
    right: 18px;
    top: 10px;
  }
`;

export {
  StyledInputWrapper, StyledInputError, StyledInput, StyledIcon, StyledPasswordButton,
};
