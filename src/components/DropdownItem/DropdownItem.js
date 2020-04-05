import React from 'react';

import './DropdownItem.scss';

const DropdownItem = ({ item }) => {
  return (
    <div className='dropdownItem'>
      <div
        className='dropdownItem__image'
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      ></div>
      <div className='dropdownItem__details'>
        <h3>{item.name}</h3>
        <div className='dropdownItem__numbers'>
          <h6>{item.quantity}</h6> <span>x</span> <h6>${item.price}</h6>
        </div>
      </div>
      <i></i>
    </div>
  );
};

export default DropdownItem;
