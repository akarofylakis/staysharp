import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  selectGenderCategory,
  selectCategory,
} from '../../redux/category/category-selectors';
import { selectShopCollectionsIsLoaded } from '../../redux/shop/shop-selectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Category from './Category';

const mapStateToProps = createStructuredSelector({
  categoriesGender: selectGenderCategory,
  categories: selectCategory,
  isLoading: (state) => !selectShopCollectionsIsLoaded(state),
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Category);

export default CategoryContainer;
