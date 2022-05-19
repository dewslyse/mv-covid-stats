import { configureStore } from '@reduxjs/toolkit';
import aggregateReducer from './aggregate/aggregate';
import countryReducer from './country/country';
import detailReducer from './detail/detail';
import filterReducer from './filter/filter';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    aggregate: aggregateReducer,
    filter: filterReducer,
    detail: detailReducer,
  },
});

export default store;
