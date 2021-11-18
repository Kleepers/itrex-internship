import React from 'react';
import {
  StyledUserAvatar, StyledUserInfo, StyledUsername, StyledUser, StyledUserType, StyledUserIndicator,
} from './HeaderUserStyles';
import avatar from './images/avatar.png';

const HeaderUser = function ({ name, type }) {
  return (
    <StyledUser>
      <StyledUserInfo>
        <StyledUsername>
          {name}
        </StyledUsername>
        <StyledUserType>
          {type}
        </StyledUserType>
      </StyledUserInfo>
      <StyledUserIndicator />
      <StyledUserAvatar src={avatar} />
    </StyledUser>
  );
};

export default HeaderUser;
