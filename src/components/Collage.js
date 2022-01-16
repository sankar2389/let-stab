import React from 'react';
import './Collage.css';
import CollageItem from './CollageItem';

function Collage() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC PRODUCTS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* <CollageItem
              src='images/tab/circle.jpg'
            /> */}
            <CollageItem
              
              src='images/tab/tab.jpg'
            />
            <CollageItem
              src='images/tab/lapens.jpg'
             
            />
            <CollageItem
              src='images/tab/pouch.jpg'
             
            />
            {/* <CollageItem
              src='images/tab/sidepouch.jpg'
             
            /> */}
          </ul>
          <ul className='cards__items'>
            <CollageItem
              src='images/tab/losepen.jpg'
             
            />
            <CollageItem
              src='images/tab/type.jpg'
             
            />
            <CollageItem
              src='images/tab/lapens.jpg'
              
            />
            <CollageItem
              src='images/tab/key.jpg'
              
            />
            <CollageItem
              src='images/tab/fullkey.jpg'
             
            />
          </ul>
          <ul className='cards__items'>
            <CollageItem
              src='images/tab/fulltype.jpg'
             
            />
            <CollageItem
              src='images/tab/fullpouch.jpg'
              
            />
            <CollageItem
              src='images/tab/battery.jpg'
              
            />
            <CollageItem
              src='images/tab/hole.jpg'
              
            />
            <CollageItem
              src='images/tab/fullkit.jpg'
             
            />
          </ul>
          <ul className='cards__items'>
            {/* <CollageItem
              src='images/tab/sidekit.jpg'
              
            /> */}
            <CollageItem
              src='images/tab/fullpouch.jpg'
              
            />
            <CollageItem
              src='images/tab/battery.jpg'
              
            />
            <CollageItem
              src='images/tab/hole.jpg' 
            />
            <CollageItem
              src='images/tab/fullkit.jpg'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Collage;
