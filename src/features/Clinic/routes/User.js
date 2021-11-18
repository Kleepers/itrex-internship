import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { userNavButtons } from "../constants/navButtons";
import { appointments } from "../constants/appointments";

const User = () => {
  return (
    <>
      <Header name='Larry Prinston' type='Patient'/>
      <Main buttons={userNavButtons} configTitle='My Appointments' isDoctor={false} cards={appointments}/>
    </>
  );
};

export default User;
