import fetchCovidData, { currentDate } from '../../api/api';

const FETCHED_COUNTRIES = 'mv-covid-stats/country/FETCHED_COUNTRIES';

const initialState = [];

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

  // const myNewData = allData.dates[currentDate].countries;
  // console.log(myNewData);

  // const countries = Object.keys(myNewData).map((key, index) => (
  //   {
  //     id: index,
  //     name: myNewData[key].name,
  //     totalCases: myNewData[key].today_confirmed,
  //     totalDeaths: myNewData[key].today_deaths,
  //   }
  // ));

  dispatch({
    type: FETCHED_COUNTRIES,
    payload: allData,
  });
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_COUNTRIES:
      // console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default countryReducer;
