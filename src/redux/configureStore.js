import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/country';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
