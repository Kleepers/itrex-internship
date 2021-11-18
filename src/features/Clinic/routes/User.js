import React from 'react';
import Header from '../components/Header/Header';
import { appointments } from '../constants/appointments';
import Main from '../components/Main/Main';

const User = function () {
  const userDataPages = [
    {
      page: 'Profile',
      title: 'My Profile',
      data: {},
    },
    {
      page: 'Appointments',
      title: 'My Appointments',
      data: appointments,
    },
    {
      page: 'Resolutions',
      title: 'Resolutions',
      data: {},
    },

  ];
  return (
    <>
      <Header name="Larry Prinston" type="Patient" />
      <Main configTitle="My Appointments" pages={userDataPages} startingPage="Appointments" />
    </>
  );
};

export default User;
