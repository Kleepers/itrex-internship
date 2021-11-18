import styled from "styled-components";

const StyledUser = styled.div`
    display: flex;
    align-items: center;
`

const StyledUserType = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #a1abc9;
  margin: 0;
  text-align: right;
`

const StyledUsername = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  margin-bottom: 4px;
  margin-top: 0;
`

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  @media screen and (max-width: 650px) {
      display: none;
`

const StyledUserIndicator = styled.span`
  background: #34C197;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  border: 3px solid #E3EBFF;
  box-sizing: content-box;
`

const StyledUserAvatar = styled.img`
  width: 40px;
  height: 40px;
`

export {StyledUser, StyledUsername,StyledUserInfo,StyledUserType,StyledUserAvatar,StyledUserIndicator}
