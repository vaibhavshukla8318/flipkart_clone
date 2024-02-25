import React from 'react'
import style from '../css/Home.module.css'
import Category from './Category';
import SlideContainer from './SlideContainer';
import { HomeDecor, TravelEssential, Trending, TodaysHighlights, HealthAndWelness, Gifted } from './CardContainer';

const Home = () => {
  return (
    <div className={style.home}>
     <Category/>
     <SlideContainer />
     <HomeDecor/>
     <TodaysHighlights/>
     <TravelEssential/>
     <Trending/>
     <HealthAndWelness/>
     <Gifted/>
    </div>
  )
}

export default Home