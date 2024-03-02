import React from 'react';
import Navbar from '../Navbar';
import style from '../../css/categoryPage.module.css';
import { MobilePageData } from '../data';
import notReadyImage from '../../images/sasiad-o-6.gif'
import {Link} from 'react-router-dom'

export const MobilePage = () => {

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();


  return (
    <>
      <Navbar/>
      <div className={style.container}>
        <section className={style.mobileFest}>
          <h1>Mobile Phone Month End Fest {currentMonth} {currentYear}</h1>

          <p>
            Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs. The information you are reading has been last updated on 27-Feb-24. 
          </p>

          <div>
            <a href="/flipkart_clone/homeDecorPage">iPhone 15</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">iPhone 15 Plus</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">iPhone 15 Pro</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">iPhone 15 pro Max</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">Vivo x 100</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">Oppo Reno 11</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">Oppo Reno 11 Pro</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">Infinix Smart 8</a> <span> | </span>
            <a href="/flipkart_clone/homeDecorPage">Moto Edge 40</a> <span> | </span>
          </div>

          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/25caf73002a3cde9.jpg?q=50" alt=""/>
        </section>

        <section className={style.upCommingLaunches}>
          <div className={style.headerContainer}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/bbbaa1dfc63f58e4.jpg?q=50" alt=""/>
          </div>
          <div className={style.sameWidthContainer}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/06232488d858ccda.jpg?q=50" alt=""/>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/efc3096525987c06.jpg?q=50" alt=""/>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/d0ebc8be07ab507d.jpg?q=50" alt=""/>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/f75795235d423457.jpg?q=50" alt=""/>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/ed56e3a80eb5b5a4.jpg?q=50" alt=""/>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/cb67818c829dac95.jpg?q=50" alt=""/>
          </div>
          <div className={style.threeCardsContainer}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/960/960/image/5f7c76652b4e2585.jpg?q=50" alt=""/>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/960/960/image/6fd7536e22e853b4.jpg?q=50" alt=""/>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/960/960/image/7ab7c7eb534f2576.jpg?q=50" alt=""/>
          </div>
        </section>

        <section className={style.shopByBrand}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/2680e8b6696e8c0f.jpg?q=50" alt=""/>

         {/* Start Cards */}

          {MobilePageData.map(category => (
            <div key={category.id}>
          
                <div key={category.id}>
                  <div className={style.topContainer}>
                    <p className={style.brandName}>{category.brandName}</p>
                    <Link to={`/${category.link}`}>
                      <p className={style.viewAll}>VIEW ALL</p>
                    </Link>
                  </div>
                  <div className={style.bottomContainer}>
                    {category.items.slice(0, 6).reverse().map(item => ( 
                      <div className={style.cards} key={item.id}>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <h3>&#8377; {item.price} <span className={style.crossOfferPrice}>&#8377; {item.crossOffer}</span> <span className={style.offer}>{item.discount}</span></h3>
                      </div>
                    ))}
                  </div>
                </div>
            
            </div>
          ))}

         {/* End Cards */}
        </section>
      </div>
    </>
  );
};



// Its Not Ready yet

export const CategoryPages = () => {
   return(
    <>
     <div className={style.notReadyPageImage}>
        <img src="https://static.wixstatic.com/media/ea6ac8_918c3b694a1f4a408ebf7d1323f10297~mv2.jpg/v1/fill/w_480,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea6ac8_918c3b694a1f4a408ebf7d1323f10297~mv2.jpg"/>
       
       <img className={style.gifImage} src={notReadyImage}/>
        
     </div>
    </>
   )
} 