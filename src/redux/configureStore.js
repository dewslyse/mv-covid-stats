import { configureStore } from '@reduxjs/toolkit';
import aggregateReducer from './aggregate/aggregate';
import countryReducer from './country/country';
import filterReducer from './filter/filter';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    aggregate: aggregateReducer,
    filter: filterReducer,
  },
});

export default store;
