import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { HomeDecorPage, TravelEssentialPage, TrendingPage, HealthAndWelnessPage, GiftedPage } from './components/CardPagesContainer';




function App() {
  return (
   <BrowserRouter basename="/flipkart_clone">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeDecorPage" element={<HomeDecorPage />} />
        <Route path="/travelEssentialPage" element={<TravelEssentialPage />} />
        <Route path="/trendingPage" element={<TrendingPage />} />
        <Route path="/healthAndWelnessPage" element={<HealthAndWelnessPage />} />
        <Route path="/giftedPage" element={<GiftedPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
