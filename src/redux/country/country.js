import { fetchCovidData } from '../../api/api';

const FETCHED_COUNTRIES = 'mv-covid-stats/country/FETCHED_COUNTRIES';

const initialState = [];

// Action Creators
export const getCovidData = () => async (dispatch) => {
  const allData = await fetchCovidData()
    .then((json) => json.map((country, index) => (
      {
        id: index,
        name: country.country,
        totalCases: country.cases,
        totalDeaths: country.deaths,
        flag: country.countryInfo.flag,
      }
    )));

  dispatch({
    type: FETCHED_COUNTRIES,
    payload: allData,
  });
};

// Reducer
const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export default countryReducer;
