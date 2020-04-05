import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = props => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        onClick={props.onClick}
        className={`btn ${props.primary &&
          'btn--primary'} ${props.isGoogleSignIn &&
          'btn--google'} ${props.addToCart &&
          'btn--add-to-cart'} ${props.inverse &&
          'btn--inverse'} ${props.disabled === true && 'btn--disabled'}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`btn ${props.primary && 'btn--primary'} ${props.addToCart &&
        'btn--add-to-cart'} ${props.isGoogleSignIn &&
        'btn--google'} ${props.inverse && 'btn--inverse'} ${props.disabled ===
        true && 'btn--disabled'}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
