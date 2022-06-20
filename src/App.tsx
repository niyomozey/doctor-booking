import React from 'react';
import Doctors from './components/Doctor/Doctors';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Doctors/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
