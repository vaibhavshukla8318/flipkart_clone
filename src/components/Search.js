import React, { useState } from 'react';
import { CategoryData, HomeDecorData, TravelEssentialData, TrendingData, HealthAndWelnessData, GiftedData, MobilePageData } from './data';
import style from '../css/navbar.module.css';
import { Link } from 'react-router-dom';
import search from '../images/search.png';
import Category from './Category';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const allData = [...HomeDecorData, ...TravelEssentialData, ...TrendingData, ...HealthAndWelnessData, ...GiftedData];

  const filteredBrandData = MobilePageData.filter(item =>
    item.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.items.some(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );


  const filteredCategoryData = CategoryData.filter(item =>
    item.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.allBrands.some(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );



  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchTerm('');
  };
  document.body.addEventListener('click', handleItemClick)

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
    
      {searchTerm && (
        <ul className={style.searchList}>

           {filteredBrandData.map(brand => (
              <React.Fragment key={brand.id}>
                <Link to={`/${brand.link}`} >
                  <li>
                    <img src={search} alt="search" />
                    <h3>{brand.brandName}</h3>
                  </li>
                </Link>
                {brand.items
                  .filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map(product => (
                    <Link to={`/${product.link}`} style={{textDecoration:"none", color:"white"}} key={product.id}>
                      <li onClick={() => handleItemClick(product)}>
                        <img src={product.image} alt="search" />
                        <h3>{product.name}</h3>
                      </li>
                    </Link>
                  ))}
              </React.Fragment>
           ))}
       
           {filteredCategoryData.map(category => (
            <React.Fragment key={category.id}>
              <li>
                <img src={category.image} alt="search" />
                <h3>{category.categoryName}</h3>
              </li>
              {category.allBrands
                .map(product => (
                  <Link to={`/${product.link}`} style={{textDecoration:"none", color:"white"}} key={product.id}>
                    <li onClick={() => handleItemClick(product)}>
                      <img src={product.image} alt="search" />
                      <h3>{product.name}</h3>
                    </li>
                  </Link>
                ))}
            </React.Fragment>
          ))}  

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

          

        </ul>
      )}     
    </>
  );
};

export default SearchComponent;






