import React from 'react';
import './slogan.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Slogan = () => {
  return (
    <div>
        <div className='slogan-container'>
            <img className='slogan-img' src={require('../../assets/spin.png')} />
            <p className='slogan-text'>TIAMAT
            <br />重新定义创作的无限可能</p>
        </div>
    </div>
  )
}

export default Slogan