import React from 'react';
import Navbar from '../Navbar';
import Category from '../Category';
import style from '../../css/cardPagesContainer.module.css';
import { HomeDecorData, TravelEssentialData, TrendingData, HealthAndWelnessData, GiftedData} from '../data'

const Page = ({ title, data }) => {
  return (
    <>
      <Navbar />
      <div className={style.overflowHidden}>
        <Category />
      </div>
      <div className={style.container}>
        <div className={style.topContainer}>
          <h2>{title}</h2>
          <p>{data.length} item</p>
        </div>
        <div className={style.bottomContainer}>
          {data.map((item) => (
            <div className={style.card} key={item.id}>
              <img src={item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <p>{item.offer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const HomeDecorPage = () => (
  <Page title="Home Decor" data={HomeDecorData} />
);

export const TravelEssentialPage = () => (
  <Page title="Travel Essential For You" data={TravelEssentialData} />
);

export const TrendingPage = () => (
  <Page title="Trending" data={TrendingData} />
);

export const HealthAndWelnessPage = () => (
  <Page title="Best of Health and Wellness" data={HealthAndWelnessData} />
);

export const GiftedPage = () => (
  <Page title="Most Loved Gifts" data={GiftedData} />
);
