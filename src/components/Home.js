import React from 'react'
import style from '../css/Home.module.css'
import Navbar from './Navbar';
import Category from './Category';
import SlideContainer from './SlideContainer';

import HomePage from './CardContainer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className={style.home}>
      <Category/>
      <SlideContainer />
      <HomePage/>
      </div>
    </>
  )
}

export default Home