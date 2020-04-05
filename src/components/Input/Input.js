import React from 'react';

import './Input.scss';

const Input = ({ onChange, ...otherProps }) => {
  return <input className='input' onChange={onChange} {...otherProps} />;
};

export default Input;
