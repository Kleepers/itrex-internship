import React from "react";
import {
  StyledCard,
  StyledCardClient,
  StyledCardClientAvatar,
  StyledCardClientButton,
  StyledCardClientIndicator,
  StyledCardClientName,
  StyledCardClientStatus,
  StyledCardInfo,
  StyledCardInfoClipboard,
  StyledCardInfoClock, StyledCardInfoMessage,
  StyledCardInfoTime
} from "./CardStyles";


const Card = ({name, status, time, message, avatar}) => {
  return (
    <StyledCard>
      <StyledCardClient>
        <StyledCardClientAvatar src={avatar} alt='avatar'/>
        <StyledCardClientName>{name}</StyledCardClientName>
        <StyledCardClientStatus>{status}</StyledCardClientStatus>
        <StyledCardClientIndicator />
        <StyledCardClientButton />
      </StyledCardClient>
      <StyledCardInfo>
        <StyledCardInfoClock />
        <StyledCardInfoTime>{time}</StyledCardInfoTime>
        <StyledCardInfoClipboard/>
        <StyledCardInfoMessage>{message}</StyledCardInfoMessage>
      </StyledCardInfo>
    </StyledCard>
  );
};

export default Card;
