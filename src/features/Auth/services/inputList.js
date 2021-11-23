import React from 'react';
import { ReactComponent as ConfirmIcon } from '../images/confirm.svg';
import { ReactComponent as UserIcon } from '../images/user.svg';
import { ReactComponent as EmailIcon } from '../images/email.svg';
import { ReactComponent as PasswordIcon } from '../images/password.svg';

const inputSettings = {
  firstName: {
    img: <UserIcon />,
    placeholder: 'First Name',
  },
  lastName: {
    img: <UserIcon />,
    placeholder: 'Last Name',
  },
  email: {
    img: <EmailIcon />,
    placeholder: 'Email',
  },
  password: {
    img: <PasswordIcon />,
    placeholder: 'Password',
  },
  confirmPassword: {
    img: <ConfirmIcon />,
    placeholder: 'Confirm Password',
  },

};

export default inputSettings;
