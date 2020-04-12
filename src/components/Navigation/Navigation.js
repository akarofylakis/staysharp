import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { signOutStart } from '../../redux/user/user-actions';

import CartDropdown from '../CartDropdown/CartDropdown';
import BasketNav from '../BasketNav/BasketNav';

import './Navigation.scss';

const Navigation = ({ currentUser, signOutStart }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <ul className='navbar__left'>
          <li>
            <NavLink to='/' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <NavLink to='/'>
          <div className='navbar__logo-container'></div>
        </NavLink>
        <ul className='navbar__right'>
          <li>
            {currentUser ? (
              <a href='/' onClick={signOutStart}>
                Sign Out
              </a>
            ) : (
              <NavLink to='/signin'>Sign In</NavLink>
            )}
          </li>
          <BasketNav />
        </ul>
      </div>
      <CartDropdown />
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
