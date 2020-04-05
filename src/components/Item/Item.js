import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import { addItem } from '../../redux/cart/cart-actions';

import './Item.scss';

const Item = ({ addItem, item }) => {
  return (
    <div className='item'>
      <div className='item__preview'>
        <div
          className='item__image'
          style={{
            backgroundImage: `url(${item.imageUrl})`
          }}
        ></div>
        <Button onClick={() => addItem(item)} addToCart primary>
          Add To Cart
        </Button>
      </div>
      <div className='item__details'>
        <h4 className='item__title'>{item.name}</h4>
        <h4 className='item__price'>${item.price}</h4>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Item);
