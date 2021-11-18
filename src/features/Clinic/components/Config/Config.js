import React from 'react';
import {
  StyledConfig, StyledConfigButton, StyledConfigButtonIcon,
  StyledConfigInputSearch,
  StyledConfigSearchMobile,
  StyledConfigSortMobile,
  StyledConfigSortSelect,
  StyledConfigSortText,
  StyledConfigSortWrapper,
  StyledConfigTitle,
} from './ConfigStyles';

const Config = function ({ title }) {
  return (
    <StyledConfig>
      <StyledConfigTitle>{title}</StyledConfigTitle>
      {title === 'My Appointments'
        ? (
          <>
            <StyledConfigSortMobile />
            <StyledConfigSortWrapper>
              <StyledConfigSortText>Show:</StyledConfigSortText>
              <StyledConfigSortSelect>
                <option>Upcoming</option>
                <option>Name</option>
              </StyledConfigSortSelect>
            </StyledConfigSortWrapper>
            <StyledConfigButton>
              <StyledConfigButtonIcon />
              Create an appointment
            </StyledConfigButton>
          </>
        )
        : (
          <>
            <StyledConfigInputSearch placeholder="Search" />
            <StyledConfigSearchMobile />
            <StyledConfigSortMobile />
            <StyledConfigSortWrapper>
              <StyledConfigSortText>Sort by:</StyledConfigSortText>
              <StyledConfigSortSelect>
                <option>Date</option>
                <option>Name</option>
              </StyledConfigSortSelect>
            </StyledConfigSortWrapper>
          </>
        )}
    </StyledConfig>
  );
};

export default Config;
