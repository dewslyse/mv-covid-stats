import { currentDate } from '../../api/api';

const FETCHED_DETAIL = 'mv-covid-stats/detail/FETCHED_DETAIL';

// Action Creators
export const getCountryData = () => async (dispatch) => {
  const baseURL = 'https://api.covid19tracking.narrativa.com/api';

  const response = await fetch(`${baseURL}/${currentDate}${window.location.pathname}`);
  const responseData = await response.json();
  const countryData = Object.entries(responseData.dates[currentDate].countries)[0][1];

  dispatch({
    type: FETCHED_DETAIL,
    payload: countryData,
  });
};

// Reducer
const detailReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHED_DETAIL:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default detailReducer;
