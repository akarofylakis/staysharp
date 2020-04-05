import { createSelector } from 'reselect';

const selectCategories = state => state.category;

export const selectGenderCategory = createSelector(
  [selectCategories],
  category => category.categoriesGender
);

export const selectCategory = createSelector(
  [selectCategories],
  category => category.categories
);
