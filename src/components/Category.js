import React from 'react';
import style from '../css/category.module.css';
import { CategoryData } from './data';
import {Link} from 'react-router-dom'

const Category = () => {
  const handleImageError = (event) => {
    event.target.onerror = null; // Remove event listener to prevent infinite loop
    event.target.src = event.target.dataset.altimage; // Load alternative image
  };
  return (
    <div className={style.categoryContainer}>
      {CategoryData.map((category, index) => (
        <Link to={category.link} style={{textDecoration:"none", color:"white"}}>
          <img 
            key={index} 
            src={category.image} 
            alt={category.name} 
            data-altimage={category.image1} 
            onError={handleImageError} 
          />
        </Link>
      ))}
    </div>
  );


};

export default Category;



