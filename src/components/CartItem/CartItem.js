import React from 'react';
import { connect } from 'react-redux';

import { removeItem, clearItem, addItem } from '../../redux/cart/cart-actions';

import './CartItem.scss';

const CartItem = ({ item, removeItem, clearItem, addItem }) => {
  return (
    <div className='cartItem'>
      <div
        className='cartItem__image'
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      ></div>
      <div className='cartItem__details'>
        <h3>{item.name}</h3>
        <h6>Just a dummy description for this cart item.</h6>
      </div>
      <div className='cartItem__quantity'>
        <i className='fas fa-minus' onClick={() => removeItem(item)}></i>
        <h4>{item.quantity}</h4>
        <i className='fas fa-plus' onClick={() => addItem(item)}></i>
      </div>
      <h3 className='cartItem__price'>${item.price}.00</h3>
      <i className='fas fa-trash-alt' onClick={() => clearItem(item)}></i>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
