import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { signUpStart } from '../../redux/user/user-actions';

import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signUpStart({ email, password });
  };

  changeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-up'>
        <div className='sign-up-container'>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              value={this.state.email}
              onChange={this.changeHandler}
              type='email'
              name='email'
              placeholder='Email'
            />
            <Input
              value={this.state.password}
              onChange={this.changeHandler}
              type='password'
              name='password'
              placeholder='Password'
            />
            <Input
              value={this.state.confirmPassword}
              onChange={this.changeHandler}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
