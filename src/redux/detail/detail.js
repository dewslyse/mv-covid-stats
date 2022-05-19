// import fetchCovidData, { currentDate } from '../../api/api';
import { currentDate } from '../../api/api';

// import  from '../../api/api';

const FETCHED_DETAIL = 'mv-covid-stats/detail/FETCHED_DETAIL';

// export const fetchCountryData = (countryLink) => fetch(`${covidURL}${countryLink}`)
//   .then((response) => response.json());

// Action Creators
const getCountryData = async () => {
  const baseURL = 'https://api.covid19tracking.narrativa.com/api';

  const response = await fetch(`${baseURL}/${currentDate}${window.location.pathname}`);
  // Working

  // .then((response) => response.json())
  // .then((json) => json.dates[currentDate].countries);

  // Working
  const responseData = await response.json();
  const countryData = responseData.dates[currentDate].countries;

  console.log(countryData);

  // dispatch({
  //   type: FETCHED_DETAIL,
  //   payload: countryData,
  // });
  // console.log(countryData);
};

getCountryData();

// Reducer
// const detailReducer = (state = {}, action) => {
//   switch (action.type) {
//     case FETCHED_DETAIL:
//       console.log(action.payload);
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default detailReducer;
export default getCountryData;
