import React from 'react'
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom';
import Body from './Components/Body';
import Test from './Components/Test';
import Trust from './Components/Trust';

const App = () => {
  return (
    <div >

      <Header/>
      <Body/>
      <Test/>
      <Trust/>
      <Footor/>
    </div>

  )
}

export default App