import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px 0;
  @media screen and (max-width: 650px) {
      margin: 16px 24px 20px 24px;
  }
`

const StyledHeaderLogo = styled.img`
  width: 132px;
  height: 32px;
  margin-right: auto;
`

export {StyledHeader, StyledHeaderLogo}

