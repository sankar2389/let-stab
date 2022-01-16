import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC PRODUCTS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/web/penlap.jpg'
              path='/products'
            />
            <CardItem
              src='images/web/ecom.jpg'
              path='/products'
            />
            <CardItem
              src='images/web/smart.jpg'
              path='/products'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/web/multi.jpg'
              path='/products'
            />
            <CardItem
              src='images/web/never.jpg'
              path='/products'
            />
            <CardItem
              src='images/web/and.jpg'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/web/penlap.jpg'
              path='/products'
            />
            <CardItem
              src='images/web/ecom.jpg'
              path='/products'
            />
            <CardItem
              src='images/web/smart.jpg'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
