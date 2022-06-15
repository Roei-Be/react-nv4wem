import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import '../style/index.css';
import '../style/header.css';

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </React.Fragment>
  );
}

/*
      <div id="search_input_wrapper">
        <h1>search input</h1>
      </div>
      <div id="main_wrapper">
        <div id="filters_tags_wrapper">
          <h1>tags</h1>
        </div>
        <div id="search_results_wrapper">
          <h1>result</h1>
        </div>
      </div>
*/
