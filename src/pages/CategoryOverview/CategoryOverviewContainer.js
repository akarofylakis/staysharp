import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  selectGenderCategory,
  selectCategory,
} from '../../redux/category/category-selectors';
import { selectShopCollectionsIsFetching } from '../../redux/shop/shop-selectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionOverview from './CategoryOverview';

const mapStateToProps = createStructuredSelector({
  categoriesGender: selectGenderCategory,
  categories: selectCategory,
  isLoading: selectShopCollectionsIsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
