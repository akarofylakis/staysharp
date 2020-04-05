import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartHidden
} from '../../redux/cart/cart-selectors';

import Button from '../Button/Button';
import DropdownItem from '../DropdownItem/DropdownItem';

import './CartDropdown.scss';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartDropdown = ({ history, hidden, cartItems, dispatch }) => {
  return (
    <div className='cart-container'>
      {hidden ? (
        <div className='cart-dropdown'>
          <div className='cart-items'>
            {cartItems.length ? (
              cartItems.map(cartItem => (
                <DropdownItem key={cartItem.id} item={cartItem} />
              ))
            ) : (
              <span className='empty-message'>Your basket is empty</span>
            )}
          </div>
          <Button
            onClick={() => {
              history.push('/checkout');
              dispatch(toggleCartHidden());
            }}
            primary
          >
            Checkout
          </Button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
