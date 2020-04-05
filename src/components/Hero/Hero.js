import React from 'react';

import Button from '../Button/Button';

import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <h2>
          Exclusive Offer:
          <br /> All Sweatshirts 20% OFF
        </h2>
        <Button to='/shop' primary>
          Go To Shop <i className='fas fa-long-arrow-alt-right'></i>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
