import fetchCovidData from '../../api/api';

const AGGREGATED_DATA = 'mv-covid-stats/aggregate/AGGREGATED_DATA';

export const getAggregatedData = () => async (dispatch) => {
  const aggregatedData = await fetchCovidData();
  const totals = aggregatedData.total;

  dispatch({
    type: AGGREGATED_DATA,
    payload: totals,
  });
};

const aggregateReducer = (state = [], action) => {
  switch (action.type) {
    case AGGREGATED_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default aggregateReducer;
