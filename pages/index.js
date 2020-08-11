import React, { Component } from 'react'
import Flights from '../src/Flights';
import Header from '../src/Header';
import Footer from '../src/Footer';

export default class extends Component {
  render () {
    return (
      <div className="App">
      <div className="App-header">
        <div className="container d-flex flex-column">
          <Header/>
          <Flights/>
          <Footer/>
        </div>
      </div> 
    </div>
    )
  }
}