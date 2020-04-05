import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectGenderCategory,
  selectCategory
} from '../../redux/category/category-selectors';

import Card from '../../components/Card/Card';

import './Shop.scss';

const Shop = ({ categoriesGender, categories }) => (
  <div className='shop'>
    <h2>Select a Category</h2>
    <div className='shop__genders'>
      {categoriesGender.map(({ id, ...otherProps }) => (
        <Card key={id} {...otherProps} size='large'>
          {otherProps.title}
        </Card>
      ))}
    </div>
    <div className='shop__categories'>
      {categories.map(({ id, ...otherProps }) => (
        <Card key={id} {...otherProps}>
          {otherProps.title}
        </Card>
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  categoriesGender: selectGenderCategory,
  categories: selectCategory
});

export default connect(mapStateToProps)(Shop);
