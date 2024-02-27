import React, { useState } from 'react';
import { CategoryData, HomeDecorData, TravelEssentialData, TrendingData, HealthAndWelnessData, GiftedData } from './data';
import style from '../css/navbar.module.css';
import { Link } from 'react-router-dom';
import search from '../images/search.png';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const allData = [...HomeDecorData, ...TravelEssentialData, ...TrendingData, ...HealthAndWelnessData, ...GiftedData];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchTerm('');
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
    
      {searchTerm && (
        <ul>
          {
              CategoryData
              .filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(item => (
                <Link to={item.link} style={{textDecoration:"none", color:"white"}}>
                  <li key={item.id} onClick={() => handleItemClick(item)}>
                    <img className={style.categoryImage} src={item.image} alt="search"/>
                    <h3>{item.name}</h3>
                  </li>
                </Link>
              ))
            }
          {allData
            .filter(item =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(item => (
              <Link to={item.link} style={{textDecoration:"none", color:"white"}}>
                <li key={item.id} onClick={() => handleItemClick(item)}>
                  <img src={search} alt="search" />
                  <h3>{item.name}</h3>
                </li>
              </Link>
            ))
          }
          {/* {MobilePageData
              .filter(item =>
                item.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.items.some(product =>
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
              )
              .map(brand => (
                brand.items.map(product => (
                  <Link to={`/${product.link}`} style={{textDecoration:"none", color:"white"}} key={product.id}>
                    <li onClick={() => handleItemClick(product)}>
                      <img src={product.image} alt="search" />
                      <h3>{product.name}</h3>
                    </li>
                  </Link>
                ))
              ))
           } */}

        </ul>
      )}     
    </>
  );
};

export default SearchComponent;
