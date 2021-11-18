import styled from "styled-components";
import button from './images/card-btn.svg'
import clock from './images/clock.svg'
import clipboard from './images/clipboard.svg'

const StyledCard = styled.article`
  
  background-color: #ffffff;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  
  `

const StyledCardClient = styled.div`

    display: grid;
    grid-template-rows: 32px 16px;
    grid-template-columns: 64px 16px auto 40px;
    padding: 24px 32px;
    grid-template-areas:
            "avatar name name button"
            "avatar ${props => props.type === 'appointment' ? 'status' : 'indicator'} status button";
    border-bottom: 1px solid #dce0ec;

  @media screen and (max-width: 650px) {
      padding: 16px 24px;
      grid-template-rows: 32px 32px;
  }
`

const StyledCardClientAvatar = styled.img`
  grid-area: avatar;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

const StyledCardClientName = styled.h3`
  grid-area: name;
  margin: 0;
  font-weight: 600;
  font-size: 17px;
  line-height: 130%;
`

const StyledCardClientStatus = styled.p`
  grid-area: status;
  margin: 0;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #a1abc9;
`

const StyledCardClientIndicator = styled.span`
  grid-area: indicator;
  background: #34C197;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-top: 4px;
`

const StyledCardClientButton = styled.button`
  grid-area: button;
  background-image: url(${button});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const StyledCardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 24px 16px;
  padding: 24px 32px 40px 32px;
`

const StyledCardInfoClock = styled.span`
  background-image: url(${clock});
  background-position: center;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
`

const StyledCardInfoTime = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
`

const StyledCardInfoClipboard = styled.span`
  background-image: url(${clipboard});
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
`

const StyledCardInfoMessage = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 140%;
`

export {StyledCardClientButton,StyledCardClientAvatar,StyledCardClientIndicator,
  StyledCardClientStatus,StyledCardClientName,StyledCardClient,StyledCard,
  StyledCardInfoMessage,StyledCardInfoTime,StyledCardInfoClock,StyledCardInfoClipboard,StyledCardInfo}




