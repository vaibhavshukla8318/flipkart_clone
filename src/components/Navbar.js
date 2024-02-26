import React, { useState, useEffect, useRef } from 'react';
import style from '../css/navbar.module.css';
import Cart from '../images/cart.png';
import Menu from '../images/menu.png';
// import ProductContainer from './ProductContainer';
import SearchComponent from './Search';
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const menuRef = useRef(null);
  const productContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuClicked(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleProductContainerClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbarContainer}>
          <div className={style.left}>
            <div
              ref={menuRef}
              className={`${style.menuContainer} ${isMenuClicked ? style.menuContainerClicked : ''}`}
              onClick={() => setIsMenuClicked(!isMenuClicked)}
            >
              <img src={Menu} alt='menu'/>
            </div>
            <Link to="/" className={style.logo}>
              <h2>Shopping</h2> 
              <span>cart</span>
            </Link>
          </div>
          <div className={style.center}>
            {/* <input type="text" placeholder="search..."/> */}
            <SearchComponent/>
          </div>
          <div className={style.right}>
            <img src={Cart} alt="cart"/>
          </div>
        </div>
        <div className={style.inputNoneContainer}>
          {/* <input type="text" placeholder="search..."/> */}
          <SearchComponent/>
        </div>
      </div>
      <div 
        ref={productContainerRef}
        className={`${style.productContainer} ${isMenuClicked ? style.productContainerExpanded : ''}`}
        onClick={handleProductContainerClick}
      ></div>
    </>
  );
};

export default Navbar;
