import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Config from "../Config/Config";
import Cards from "../Cards/Cards";

const StyledMain = styled.main`
  background: #F9FAFF;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px;
  padding: 40px 16px 40px 48px;
  height: calc(100% - 80px);
  @media screen and (max-width: 650px) {
    padding: 40px 24px 95px 24px;
  }
`

const Main = ({buttons, configTitle, cards}) => {
  return (
    <StyledMain>
      <Nav buttons={buttons}/>
      <Config title={configTitle}/>
      <Cards cards={cards}/>
    </StyledMain>
  );
};

export default Main;
