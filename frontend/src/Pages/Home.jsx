import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from '../Components/Header'
import Body from '../Components/Body';
import Test from '../Components/Test';
import Trust from '../Components/Trust';
import Footor from '../Components/Footor';

const Home = () => {
  return (
    <div>
         <Header/>
      <Body/>
      <Test/>
      <Trust/>
      <Footor/>



    </div>
  )
}

export default Home