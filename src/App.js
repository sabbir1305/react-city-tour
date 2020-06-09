
import React, { Component } from 'react'
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar.js';
import TourList from './components/TourList';
 class App extends Component {

  render() {
    return (
      <>
      <Navbar/>
      <TourList/>
      </>
    )
  }
}

export default App

