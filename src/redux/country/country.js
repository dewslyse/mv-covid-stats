import fetchCovidData, { currentDate } from '../../api/api';

const FETCHED_COUNTRIES = 'mv-covid-stats/country/FETCHED_COUNTRIES';

const initialState = [];

// Action Creators
export const getCovidData = () => async (dispatch) => {
  const allData = await fetchCovidData()
    .then((json) => {
      const { countries } = json.dates[currentDate];

      return Object.keys(countries).map((key, index) => (
        {
          id: index,
          name: countries[key].name,
          totalCases: countries[key].today_confirmed,
          totalDeaths: countries[key].today_deaths,
        }
      ));
    });

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
