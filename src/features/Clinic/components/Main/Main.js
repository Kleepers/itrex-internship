import React, { useState } from "react";
import styled from "styled-components";
import {StyledNavButton,StyledNav} from "../Nav/Nav";
import Config from "../Config/Config";
import Cards from "../Cards/Cards";

export const StyledMain = styled.main`
  background: #F9FAFF;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px;
  padding: 40px 16px 40px 48px;
  height: calc(100% - 80px);
  @media screen and (max-width: 650px) {
    padding: 40px 24px 95px 24px;
  }
`

const Main = ({pages, startingPage}) => {

  const [activePage,setActivePage] = useState(startingPage)

  const handleActivePage = (page) => {
    setActivePage(page)
  }

  const activePageElement = pages.find((element) => element.page === activePage)


  return (
    <StyledMain>
      <StyledNav >
        {pages.map((element) => (
          <StyledNavButton onClick={() => handleActivePage(element.page)} isActive={activePageElement.page === element.page}>
            {element.page}
          </StyledNavButton>
        ))}
      </StyledNav>
      <Config title={activePageElement.title}/>
      <Cards cards={activePageElement.data}/>
    </StyledMain>
  );
};

export default Main;
