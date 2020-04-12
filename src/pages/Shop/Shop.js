import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

import CategoryOverviewComponent from '../../pages/CategoryOverview/CategoryOverviewContainer';
import CategoryComponent from '../../pages/Category/CategoryContainer';

import './Shop.scss';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop'>
        <Route
          exact
          path={`${match.path}`}
          component={CategoryOverviewComponent}
        />
        <Route
          path={`${match.path}/category/:categoryId`}
          component={CategoryComponent}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
