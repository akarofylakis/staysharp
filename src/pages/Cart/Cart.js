import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart-selectors';

import CartItem from '../../components/CartItem/CartItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

import './Cart.scss';

const Cart = ({ cartItems, cartTotal }) => {
  return (
    <div className='cart'>
      <div className='cart-container'>
        <h2>Cart</h2>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        <h3 className='cart__total'>
          Total: <span>${cartTotal}.00</span>
        </h3>
        <StripeCheckoutButton price={cartTotal} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
