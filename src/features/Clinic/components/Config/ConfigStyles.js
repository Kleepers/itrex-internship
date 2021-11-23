import styled from 'styled-components';
import search from './images/search.svg';
import sort from './images/sort.svg';
import plus from './images/plus-icon.svg';
import { blue } from '../../../constants/colors';

const StyledConfig = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const StyledConfigTitle = styled.h2`
  margin: 0 auto 0 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
`;

const StyledConfigInputSearch = styled.input`
    display: none;

  @media screen and (min-width: 779px) {
    display: block;
    padding-left: 40px;
    background-image: url(${search});
    background-size: 20px 20px;
    background-position: center left;
    background-repeat: no-repeat;
    background-color: transparent;
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    width: 93px;
    font-size: 15px;
    line-height: 21px;
    height: 32px;
    margin-right: 48px;

    &::placeholder {
      color: #A1ABC9;
    }

    &:active, &:focus {
      outline: none;
    }
  }

`;

const StyledConfigSearchMobile = styled.span`
  @media screen and (max-width: 769px) {
    background-image: url(${search});
    height: 20px;
    width: 20px;
    margin-right: 28px;
  }
  
`;

const StyledConfigSortMobile = styled.span`
  @media screen and (max-width: 769px) {
    background-image: url(${sort});
    height: 20px;
    width: 20px;
    margin-right: 58px;
  }

  @media screen and (max-width: 650px) {
      margin-right: 2px;
  }
`;

const StyledConfigSortWrapper = styled.div`
  display: none;

  @media screen and (min-width: 779px) {
      display: flex;
      margin-right: 60px;
  }
`;

const StyledConfigSortText = styled.p`
  margin: 0 16px 0 0;
  font-size: 15px;
  line-height: 21px;
  color: #a1abc9;
  align-self: center;
`;

const StyledConfigSortSelect = styled.select`
  border: none;
  background: transparent;
  color: ${blue};
  font-size: 15px;
  line-height: 21px;

  &:active, &:focus {
    border: none;
    outline: none;
  }
`;

const StyledConfigButton = styled.button`
  display: none;
  
  @media screen and (min-width: 779px) {
    padding: 14px 16px 14px 20px;
    background: ${blue};
    border-radius: 8px;
    border: none;
    cursor: pointer;
    min-width: 160px;
    color: white;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    display: flex;
    align-items: center;
    margin-right: 60px;
  }

`;

const StyledConfigButtonIcon = styled.span`
  background-image: url(${plus});
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

export {
  StyledConfig, StyledConfigSortSelect, StyledConfigSortMobile, StyledConfigSortWrapper,
  StyledConfigTitle, StyledConfigSortText, StyledConfigInputSearch,
  StyledConfigSearchMobile, StyledConfigButton, StyledConfigButtonIcon,
};
