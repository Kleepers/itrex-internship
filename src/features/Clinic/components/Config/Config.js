import React from "react";
import styled from "styled-components";
import {
  StyledConfig,
  StyledConfigInputSearch,
  StyledConfigSearchMobile,
  StyledConfigSortMobile,
  StyledConfigSortSelect,
  StyledConfigSortText,
  StyledConfigSortWrapper,
  StyledConfigTitle,
} from "./ConfigStyles";


const Config = ({title, isUser}) => {
  return (
    <StyledConfig>
      <StyledConfigTitle>{title}</StyledConfigTitle>
        <StyledConfigInputSearch placeholder='Search' />
        <StyledConfigSearchMobile />
        <StyledConfigSortMobile />
        <StyledConfigSortWrapper>
        <StyledConfigSortText>Sort by:</StyledConfigSortText>
        <StyledConfigSortSelect>
        <option>Date</option>
        <option>Name</option>
        </StyledConfigSortSelect>
        </StyledConfigSortWrapper>
    </StyledConfig>
  );
};

export default Config;
