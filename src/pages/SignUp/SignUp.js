import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { signUpStart } from '../../redux/user/user-actions';

import './SignUp.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signUpStart({ email, password });
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <div className='sign-up-container'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={changeHandler}
            type='email'
            name='email'
            placeholder='Email'
          />
          <Input
            value={password}
            onChange={changeHandler}
            type='password'
            name='password'
            placeholder='Password'
          />
          <Input
            value={confirmPassword}
            onChange={changeHandler}
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
          />
          <div className='buttons'>
            <Button primary type='submit'>
              Sign Up
            </Button>
            <h6>Already have an account?</h6>
            <Button to='/signin' primary>
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
