import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { doctorNavButtons } from "../constants/navButtons";
import { patients } from "../constants/patients";

const Doctor = () => {
  return (
    <>
      <Header name='Miranda Nelson' type='Doctor' />
      <Main buttons={doctorNavButtons} configTitle='My Patients' cards={patients}/>
    </>
  );
};

export default Doctor;
