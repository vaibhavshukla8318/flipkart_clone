import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeDecorPage, TravelEssentialPage, TrendingPage, HealthAndWelnessPage, GiftedPage } from '../pages/CardPagesContainer.js';
import { MobilePage, FashionPage } from '../pages/CategoryPages.js';

export const CardPagesContainerRouters = () => {
  return (
    <Routes>
      <Route path="/homeDecorPage" element={<HomeDecorPage />} />
      <Route path="/travelEssentialPage" element={<TravelEssentialPage />} />
      <Route path="/trendingPage" element={<TrendingPage />} />
      <Route path="/healthAndWelnessPage" element={<HealthAndWelnessPage />} />
      <Route path="/giftedPage" element={<GiftedPage />} />
    </Routes>
  );
};

export const CategoryPagesRouters = () =>{
  return(
    <Routes>
      <Route path="/mobilePage" element={<MobilePage/>} />
      {/* <Route path="/fashionPage" element={<FashionPage />} /> */}
    </Routes>
  )
}