import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);


