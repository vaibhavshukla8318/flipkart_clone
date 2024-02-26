import React from 'react'
import style from '../css/cardContainer.module.css'
import forword from '../images/forword_arrow.png'
import { HomeDecorData, TravelEssentialData, TrendingData, TodaysHighlightsData, HealthAndWelnessData, GiftedData } from './data'
import {Link} from 'react-router-dom';

export const HomeDecor = () => {

  const slicedHomeDecorData = HomeDecorData.slice(0, 4);

  return (
    <div className={style.homeDecor}>
      <div className={style.topContainer}>
        <h3>Home Decor</h3>
        <Link to="/homeDecorPage">
          <img src={forword} alt='forwordArrow'/>
        </Link>
      </div>
      <div className={style.bottomContainer}>
        {slicedHomeDecorData.map(item=>(
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.offer}</p>
         </div>
        ))}
      </div>
    </div>
  )
}
export const TravelEssential = () => {

  const slicedTravelEssentialData = TravelEssentialData.slice(0, 4);

  return (
    <div className={style.travelEssential}>
      <div className={style.topContainer}>
        <h3>Travel Essential For You</h3>
        <Link to="/travelEssentialPage">
          <img src={forword} alt='forwordArrow'/>
        </Link>
      </div>
      <div className={style.bottomContainer}>
        {slicedTravelEssentialData.map(item=>(
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.offer}</p>
         </div>
        ))}
      </div>
    </div>
  )
}


export const Trending = () => {

  const slicedTrendingData = TrendingData.slice(0, 4);

  return (
    <div className={style.trending}>
      <div className={style.topContainer}>
        <h3>Trending Gadget & Appliances For You</h3>
        <Link to="/trendingPage">
          <img src={forword} alt='forwordArrow'/>
        </Link>
      </div>
      <div className={style.bottomContainer}>
        {slicedTrendingData.map(item=>(
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.offer}</p>
         </div>
        ))}
      </div>
    </div>
  )
}


export const TodaysHighlights = () => {


  return (
    <div className={style.todaysHighlights}>
      <div className={style.topContainer}>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/1802/250/image/bb3c6e84aa987dce.jpg?q=60' style={{ width: "100%", height: "140px", borderRadius:"0"}} alt="Todays Hightlights"/>
      </div>
      <div className={style.bottomContainer}>
        { TodaysHighlightsData.map(item=>(
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name}/>
         </div>
        ))}
      </div>
    </div>
  )
}


export const HealthAndWelness = () => {

  const slicedHealthAndWelness = HealthAndWelnessData.slice(0, 4);

  return (
    <div className={style.healthAndWelness}>
      <div className={style.topContainer}>
        <h3>Best of Health and Wellness</h3>
        <Link to="/healthAndWelnessPage">
          <img src={forword} alt='forwordArrow'/>
        </Link>
      </div>
      <div className={style.bottomContainer}>
        {slicedHealthAndWelness.map(item=>(
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.offer}</p>
         </div>
        ))}
      </div>
    </div>
  )
}


export const Gifted = () => {

  const slicedGiftedData = GiftedData.slice(0, 4);

  return (
    <div className={style.gifted}>
      <div className={style.topContainer}>
        <h3>Most Loved Gifts</h3>
        <Link to="/giftedPage">
          <img src={forword} alt='forwordArrow'/>
        </Link>
      </div>
      <div className={style.bottomContainer}>
        {slicedGiftedData.map(item=>(
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.offer}</p>
         </div>
        ))}
      </div>
    </div>
  )
}