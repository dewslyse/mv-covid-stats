// import { currentDate } from '../../api/api';

const FETCHED_DETAIL = 'mv-covid-stats/detail/FETCHED_DETAIL';

// Action Creators
export const getCountryData = () => async (dispatch) => {
  const baseURL = 'https://disease.sh/v3/covid-19';

  const response = await fetch(`${baseURL}${window.location.pathname}`);
  const responseData = await response.json();
  const countryData = responseData;

  dispatch({
    type: FETCHED_DETAIL,
    payload: countryData,
  });
};

// Reducer
const detailReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHED_DETAIL:
      return action.payload;

    default:
      return state;
  }
};

export default detailReducer;
