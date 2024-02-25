import React from 'react';
import style from '../css/category.module.css';
import { CategoryData } from './data';

const Category = () => {
  const handleImageError = (event) => {
    event.target.onerror = null; // Remove event listener to prevent infinite loop
    event.target.src = event.target.dataset.altimage; // Load alternative image
  };
  return (
    <div className={style.categoryContainer}>
      {CategoryData.map((category, index) => (
        <img 
          key={index} 
          src={category.image} 
          alt={category.name} 
          data-altimage={category.image1} 
          onError={handleImageError} 
        />
      ))}
    </div>
  );
};

export default Category;
