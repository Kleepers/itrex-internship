import React from 'react';
import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';
import Doctor from './routes/Doctor';
import User from './routes/User';

const StyledClinic = styled.div`
  font-family: 'Poppins','sans-serif';
  background: #E4EBFF;
  display: flex;
  flex-direction: column;
  padding-right: 64px;
  padding-left: 64px;
  padding-bottom: 48px;
  box-sizing: border-box;
  max-height: 100vh;
  height: 100vh;
  @media screen and (max-width: 650px) {
      padding: 0;
  }
`;

const Clinic = function () {
  return (
    <StyledClinic>
      <Routes>
        <Route exact path="/" element={<Doctor />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </StyledClinic>
  );
};

export default Clinic;
