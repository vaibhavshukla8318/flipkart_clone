import React from 'react';
import Navbar from '../Navbar';
import style from '../../css/mobileItem.module.css';
// import style from '../../css/categoryPage.module.css';
import notReadyImage from '../../images/sasiad-o-6.gif'

const MobileItemPages = ({ title }) => {
  return (
    <div className={style.container}>
      <Navbar />
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
            <p className={style.productCount}>
              Mobiles <span>(Showing 1-24 products of item.length)</span>
            </p>
            <div className={style.sortByContainer}>
              <h4>Sort By</h4>
              <p>Price -- Low to High</p>
              <p>Price -- High to Low</p>
            </div>
          </div>
          <div className={style.detailsContainer}>
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70"
              alt="Realme C53"
            />
            <div className={style.details}>
            <ul className={style.mobiledetails}>
                <h3>realme C53 (Champion Gold, 128 GB)</h3>
                <li>6 GB RAM | 128 GB ROM | Expandable Upto 2 TB</li>
                <li>17.12 cm (6.74 inch) HD Display</li>
                <li>108MP + 2MP | 8MP Front Camera</li>
                <li>5000 mAh Battery</li>
                <li>T612 Processor</li>
                <li className={style.warranty}>
                  1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories
                </li>
              </ul>
              <div className={style.priceContainer}>
                <p className={style.price}>₹ 13,999</p>
                <p className={style.crossOffer}>₹ 20,999</p>
                <p className={style.discount}>13% off</p>
              </div>
            </div>
          </div>
          <div className={style.detailsContainer}>
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70"
              alt="Realme C53"
            />
            <div className={style.details}>
            <ul className={style.mobiledetails}>
                <h3>realme C53 (Champion Gold, 128 GB)</h3>
                <li>6 GB RAM | 128 GB ROM | Expandable Upto 2 TB</li>
                <li>17.12 cm (6.74 inch) HD Display</li>
                <li>108MP + 2MP | 8MP Front Camera</li>
                <li>5000 mAh Battery</li>
                <li>T612 Processor</li>
                <li className={style.warranty}>
                  1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories
                </li>
              </ul>
              <div className={style.priceContainer}>
                <p className={style.price}>₹ 13,999</p>
                <p className={style.crossOffer}>₹ 20,999</p>
                <p className={style.discount}>13% off</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    // <>
    //   <div className={style.notReadyPageImage}>
    //     <img src="https://static.wixstatic.com/media/ea6ac8_918c3b694a1f4a408ebf7d1323f10297~mv2.jpg/v1/fill/w_480,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea6ac8_918c3b694a1f4a408ebf7d1323f10297~mv2.jpg"/>
        
    //     <img className={style.gifImage} src={notReadyImage}/>
        
    //   </div>
    // </>
  );
};

export default MobileItemPages;


export const RealmePage = () => (
  <MobileItemPages title="Realme Page" />
)



