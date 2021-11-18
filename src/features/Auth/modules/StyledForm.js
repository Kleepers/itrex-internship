import styled from "styled-components";

export const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  align-content: center;
  flex-direction: column;
  background: #F9FAFF;
  width: 560px;
  margin-left: auto;
  z-index: 3;
  max-height: 100vh;
  padding: 0 96px 0;
  @media screen and (max-height: 970px) {
      max-height: none;
  }

  @media screen and (max-width: 559px) {
      width: 100%;
      height: calc(100% - 72px);
      min-width: 320px;
      padding-left: 32px;
      padding-right: 32px;
      margin-left: 0;
      margin-top: 72px;
      border-radius: 24px 24px 0 0;
      min-height: calc(100vh - 72px);
  }
`