import React from 'react';
import { Routes, Route} from "react-router-dom";
import Auth from "./features/Auth/Auth";
import Clinic from "./features/Clinic/Clinic";



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/*' element={<Auth />} />
        <Route path='/clinic/*' element={<Clinic />} />
      </Routes>
    </div>
  );
}

export default App;
