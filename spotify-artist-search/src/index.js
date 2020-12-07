import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);


