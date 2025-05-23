import React from 'react';
import { useState } from 'react'
import './App.css'
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className='App'>
        <NavBar />
        <Banner />
      </div>
  )
}

export default App
