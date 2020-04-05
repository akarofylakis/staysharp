import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Card.scss';

const Card = props => {
  return (
    <div className={`card card--${props.size || 'small'}`}>
      <div
        className='card__image'
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
      ></div>
      <Link to={`category/${props.linkUrl}`} className='card__content'>
        {props.children}
      </Link>
    </div>
  );
};

export default withRouter(Card);
