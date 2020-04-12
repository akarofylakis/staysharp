import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectShopCollectionsIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export const selectShopCollectionItems = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
