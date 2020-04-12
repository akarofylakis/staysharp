import React from 'react';

import Card from '../../components/Card/Card';

const CategoryOverview = ({ categories, categoriesGender }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default CategoryOverview;
