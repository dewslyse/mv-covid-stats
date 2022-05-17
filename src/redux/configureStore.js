import { configureStore } from '@reduxjs/toolkit';
import aggregateReducer from './aggregate/aggregate';
import countryReducer from './country/country';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    aggregate: aggregateReducer,
  },
});

export default store;
