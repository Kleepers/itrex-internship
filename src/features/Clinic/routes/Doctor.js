import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { patients } from '../constants/patients';

const Doctor = function () {
  const doctorDataPages = [
    {
      page: 'Patients',
      title: 'My Patients',
      data: patients,
    },
    {
      page: 'Resolutions',
      title: 'My Resolutions',
      data: {},
    },
  ];

  return (
    <>
      <Header name="Miranda Nelson" type="Doctor" />
      <Main configTitle="My Patients" pages={doctorDataPages} startingPage="Patients" />
    </>
  );
};

export default Doctor;
