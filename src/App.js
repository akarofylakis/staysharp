import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

import './App.scss';

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' component={Shop} />

          <Route
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignIn />
            }
          />
          <Route
            path='/signUp'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignUp />
            }
          />
          <Route path='/checkout' component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
