import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollectionItems } from '../../redux/shop/shop-selectors';
import Item from '../../components/Item/Item';

import './Category.scss';

const Category = props => {
  return (
    <div className='category'>
      <div className='category-container'>
        <h2>{props.match.params.categoryId}</h2>
        <ul className='items-list'>
          {props.items.items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: selectShopCollectionItems(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Category);
