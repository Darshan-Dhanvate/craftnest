import React, {useEffect, useState} from 'react';
import {fetchData} from './services/api';
import LoginSignUp from './components/Login-SignUp/LoginSignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


const App= ()=>{
  const [data, setData]= useState(null);

  // useEffect(()=>{
  //   fetchData().then(response => setData(response));
  // }, [])

  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;