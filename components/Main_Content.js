import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Search_Results from './main_content/Search_Results.js';
//import Signup from './Signup.js';
//import Login from './Login.js';
//import User_Page from './User_Page.js';

function Main_Content() {
  return (
    <React.Fragment>
        <Route path='/' element={<Search_Results />} />
        <Route path='/Search_Results' element={<Search_Results />} />
        <Route path='/Search_Results' element={<Search_Results />} />
        <Route path='/Search_Results' element={<Search_Results />} />
    </React.Fragment>  
  );
}
export default Main_Content;