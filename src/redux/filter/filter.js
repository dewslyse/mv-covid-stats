const FILTERED_COUNTRY = 'mv-covid-stats/filter/FILTERED_COUNTRY';

export const filterCountry = (payload) => ({
  type: FILTERED_COUNTRY,
  payload,
});

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTERED_COUNTRY:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
