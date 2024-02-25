import React, { Component } from 'react';
import style from '../css/slideContainer.module.css';
import { SlideData } from './data';

class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSlides: SlideData.length-1,
      activeSlide: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
          activeSlide: (prevState.activeSlide + 1) % this.state.totalSlides
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { activeSlide } = this.state;
    return (
      <div className={style.slideContainer}>
        {SlideData.map((slide) => (
          <div
            key={slide.id}
            className={style.slide}
            style={{ transform: `translateX(-${activeSlide * 100}%)`}}
          > 
            <img src={slide.image} alt={slide.name}/>
            <div className={style.slideDetals}>
              {/* <h1>{slide.id}</h1>
              <h1>{slide.name}</h1> */}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default SlideContainer;



