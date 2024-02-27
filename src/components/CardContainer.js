import React from 'react';
import style from '../css/cardContainer.module.css';
import forword from '../images/forword_arrow.png';
import { Link } from 'react-router-dom';
import { HomeDecorData, TodaysHighlightsData, TravelEssentialData, TrendingData, HealthAndWelnessData, GiftedData } from './data';


 const TodaysHighlights = ({ data }) => {

  return (
    <div className={style.todaysHighlights}>
      <div className={style.topContainer}>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/1802/250/image/bb3c6e84aa987dce.jpg?q=60' style={{ width: "100%", height: "140px", borderRadius:"0"}} alt="Todays Hightlights"/>
      </div>
      <div className={style.bottomContainer}>
        { data.map(item=>(
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name}/>
         </div>
        ))}
      </div>
    </div>
  )
}



const CardContainer = ({ title, data, link }) => {
  const slicedData = data.slice(0, 4);

  return (
    <div className={style.cardContainer}>
      <div className={style.topContainer}>
        <h3>{title}</h3>
        <Link to={link}>
          <img src={forword} alt='forwordArrow' />
        </Link>
      </div>
      <div className={style.bottomContainer}>
        {slicedData.map(item => (
          <div className={style.card} key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <div className={style.homeDecor}>
        <CardContainer  title="Home  Decor" data={HomeDecorData} link="/homeDecorPage" />
      </div>

      {/* start todays hightlights */}
        <TodaysHighlights data={TodaysHighlightsData}/>
      {/* end todays hightlights */}
    
      <div className={style.travelEssential}>
        <CardContainer title="Travel Essential For You" data={TravelEssentialData} link="/travelEssentialPage" />
      </div>
      <div className={style.trending}>
       <CardContainer title="Trending Gadget & Appliances For You" data={TrendingData} link="/trendingPage" />
      </div>
      <div className={style.healthAndWelness}>
        <CardContainer title="Best of Health and Wellness" data={HealthAndWelnessData} link="/healthAndWelnessPage" />
      </div>
      <div className={style.gifted}>
       <CardContainer title="Most Loved Gifts" data={GiftedData} link="/giftedPage" />
      </div>
    </div>
  );
};

export default HomePage;
