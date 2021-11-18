import React from "react";
import Header from "../components/Header/Header";
import { userNavButtons } from "../constants/navButtons";
import { appointments } from "../constants/appointments";
import Main from "../components/Main/Main";

const User = () => {
  return (
    <>
      <Header name='Larry Prinston' type='Patient'/>
      <Main buttons={userNavButtons} configTitle='My Appointments' isUser={false} cards={appointments}/>
    </>
  );
};

export default User;
