import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import Signup from './Signup.js';
import Login from './Login.js';
import User_Page from './User_Page.js';

function Main() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/User_Page' element={<User_Page />} />
      </Routes>
    
  );
}
export default Main;