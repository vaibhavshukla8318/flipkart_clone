import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { CardPagesContainerRouters, CategoryPagesRouters } from './components/routers/Routers';



function App() {
  return (
   <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <CardPagesContainerRouters />
        <CategoryPagesRouters />
      </div>
   </BrowserRouter>
  );
}

export default App;
