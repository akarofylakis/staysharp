import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const BasketNav = ({ toggleCartHidden, itemCount }) => {
  return (
    <li className='basket-nav' onClick={toggleCartHidden}>
      <a href='#basket'>
        <i className='fas fa-shopping-basket'></i>Your Basket
        <span className='item-count'>({itemCount})</span>
      </a>
    </li>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketNav);
