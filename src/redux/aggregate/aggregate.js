import { fetchAggregatedData } from '../../api/api';

const AGGREGATED_DATA = 'mv-covid-stats/aggregate/AGGREGATED_DATA';

export const getAggregatedData = () => async (dispatch) => {
  const aggregatedData = await fetchAggregatedData();
  const totals = aggregatedData;

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
