import React, { useState } from 'react';
import { CategoryData, SlideData, HomeDecorData } from './data';
// import style from '../css/Navbar.module.css';
import {Link} from 'react-router-dom'

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

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
                <>
                 <li key={item.id} onClick={() => handleItemClick(item)}>
                   <img src={item.image}/>
                   <h3>{item.name}</h3>
                 </li>
                </>
              ))
            }
          {
              HomeDecorData
              .filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(item => (
                <>
                 <li key={item.id} onClick={() => handleItemClick(item)}>
                   <img src={item.image}/>
                   <h3>{item.name}</h3>
                 </li>
                </>
              ))
            }
        </ul>
      )}     
    </>
  );
};

export default SearchComponent;



