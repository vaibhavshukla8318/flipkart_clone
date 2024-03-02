import React, {useState} from 'react'
import Navbar from '../Navbar'
import style from '../../css/mobileItem.module.css'

 const MobileItemPages = ({title}) => {

  

  return (
    <div className={style.container}>
      <Navbar/>
      <div className={style.mobilePageItemContainer}>
        <section className={style.leftSide}>
          <h3>Filter</h3>
          <span>CLEAR ALL</span>
        </section>
        <section className={style.rightSide}>
          <div className={style.topContainer}>
            <div>
              <span>Home</span>
              <span className={style.greaterThanSymbol}>&#62;</span>
              <span>Mobiles</span>
            </div>
            <p className={style.productCount}>Mobiles <span>(Showing 1-24 products of item.length)</span></p>
            <div className={style.sortByContainer}>
              <h4>Sort By</h4>
              <p>Price -- Low to High</p>
              <p>Price -- High to Low</p>
            </div>
          </div>
          <div className={style.detailsContainer}>
            <div className={style.imageContainer}>
              <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70"/>

              <ul className={style.details}>
                <h3>realme C53 <br/> (Champion Gold, 128 GB)</h3>
                <li>6 GB RAM | 128 GB ROM | Expandable Upto 2 TB</li>
                <li>17.12 cm (6.74 inch) HD Display</li> 
                <li>108MP + 2MP | 8MP Front Camera</li>
                <li> 5000 mAh Battery</li>
                <li>T612 Processor</li>
                <li className={style.warranty}>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories</li>
              </ul>
            </div>
          
            <div className={style.priceContainer}>
              <p className={style.price}>₹ 13,999</p>
              <p className={style.crossOffer}>₹ 20,999</p>
              <p className={style.discount}>13% off</p>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  )
}


export const RealmePage = () => (
  <MobileItemPages title="Realme Page" />
)