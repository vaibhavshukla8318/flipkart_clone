import React from 'react'
import Navbar from './Navbar'
import Category from './Category'
import style from '../css/cardPagesContainer.module.css'
import { HomeDecorData, TravelEssentialData, TrendingData, HealthAndWelnessData, GiftedData} from './data'

export const HomeDecorPage = () => {
  return (
    <>
      <Navbar/>
      <div className={style.overflowHidden}>
        <Category/>
      </div> 
      <div className={style.container}>
          <div className={style.topContainer}>
            <h2>Home Decor</h2>
            <p> {HomeDecorData.length} item</p>
          </div>
          <div className={style.bottomContainer}>
            {HomeDecorData.map(item =>(
              <div className={style.card} key={item.id}>
                <img src={item.image} alt={item.name}/>
                <h5>{item.name}</h5>
                <p>{item.offer}</p>
              </div>
            ))}
          </div>
      </div>  
    </>
  )
}


export const TravelEssentialPage = () => {
  return (
    <>
      <Navbar/>
      <div className={style.overflowHidden}>
        <Category/>
      </div> 
      <div className={style.container}>
          <div className={style.topContainer}>
            <h2>Travel Essential For You</h2>
            <p> {TravelEssentialData.length} item</p>
          </div>
          <div className={style.bottomContainer}>
            {TravelEssentialData.map(item =>(
              <div className={style.card} key={item.id}>
                <img src={item.image} alt={item.name}/>
                <h5>{item.name}</h5>
                <p>{item.offer}</p>
              </div>
            ))}
          </div>
      </div>  
    </>
  )
}


export const TrendingPage = () => {
  return (
    <>
      <Navbar/>
      <div className={style.overflowHidden}>
        <Category/>
      </div> 
      <div className={style.container}>
          <div className={style.topContainer}>
            <h2>Trending</h2>
            <p> {TrendingData.length} item</p>
          </div>
          <div className={style.bottomContainer}>
            {TrendingData.map(item =>(
              <div className={style.card} key={item.id}>
                <img src={item.image} alt={item.name}/>
                <h5>{item.name}</h5>
                <p>{item.offer}</p>
              </div>
            ))}
          </div>
      </div>  
    </>
  )
}


export const HealthAndWelnessPage = () => {
  return (
    <>
      <Navbar/>
      <div className={style.overflowHidden}>
        <Category/>
      </div> 
      <div className={style.container}>
          <div className={style.topContainer}>
            <h2>Best of Health and Wellness</h2>
            <p> {HealthAndWelnessData.length} item</p>
          </div>
          <div className={style.bottomContainer}>
            {HealthAndWelnessData.map(item =>(
              <div className={style.card} key={item.id}>
                <img src={item.image} alt={item.name}/>
                <h5>{item.name}</h5>
                <p>{item.offer}</p>
              </div>
            ))}
          </div>
      </div>  
    </>
  )
}

export const GiftedPage = () => {
  return (
    <>
      <Navbar/>
      <div className={style.overflowHidden}>
        <Category/>
      </div> 
      <div className={style.container}>
          <div className={style.topContainer}>
            <h2>Most Loved Gifts</h2>
            <p> {GiftedData.length} item</p>
          </div>
          <div className={style.bottomContainer}>
            {GiftedData.map(item =>(
              <div className={style.card} key={item.id}>
                <img src={item.image} alt={item.name}/>
                <h5>{item.name}</h5>
                <p>{item.offer}</p>
              </div>
            ))}
          </div>
      </div>  
    </>
  )
}
