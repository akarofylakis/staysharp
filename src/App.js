import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/Homepage/Homepage';
import Category from './pages/Category/Category';
import Shop from './pages/Shop/Shop';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/category/:categoryId' exact component={Category} />
          <Route
            path='/signin'
            exact
            render={() =>
              this.props.currentuser ? <Redirect to='/' /> : <SignIn />
            }
          />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/checkout' exact component={Cart} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentuser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
