const FILTERED_COUNTRY = 'mv-covid-stats/filter/FILTERED_COUNTRY';
const ERASE = 'mv-covid-stats/filter/ERASE';

export const filterCountry = (payload) => ({
  type: FILTERED_COUNTRY,
  payload,
});

export const eraseFilter = () => ({
  type: ERASE,
});

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTERED_COUNTRY:
      return action.payload;

    case ERASE:
      return '';

    default:
      return state;
  }
};

export default filterReducer;
