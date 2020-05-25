import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Header/Header';

ReactDOM.render(
  <>
    <Router>
    <Navbar/>
      <App />
    </Router>
  </>,
  document.getElementById('root')
);
