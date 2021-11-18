import React from "react";
import background from './images/bg.jpg'
import SignUpForm from "./components/SignUp/SignUpForm";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import SignInForm from "./components/SignIn/SignInForm";
import RestorePass from "./components/RestorePass/RestorePass";

const StyledAuth = styled.div`
  font-family: Poppins, sans-serif, Arial;
  font-style: normal;
  font-weight: 400;
  display: flex;
  position: relative;
  background-repeat: no-repeat;
  background-image: url(${background});
  min-height: 100vh;
  background-size: cover;
  @media screen and (max-width: 559px) {
      flex-direction: column;
      background-size: auto 242px;
  }
`

const Auth = () => {
  return (
    <StyledAuth>
      <Routes>
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/signin' element={<SignInForm />} />
        <Route path='/restore-pass' element={<RestorePass />} />
      </Routes>
    </StyledAuth>
  );
};

export default Auth;
