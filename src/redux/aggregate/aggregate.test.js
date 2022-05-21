import aggregateReducer from './aggregate';

const AGGREGATED_DATA = 'AGGREGATED_DATA';

describe('Fetch aggregated data', () => {
  const state = {};
  const data = {
    id: 'country',
    name: 'country',
    totalCases: '50',
    totalDeaths: '10',
  };

  test('funtion should return', () => {
    const result = aggregateReducer(state, { type: AGGREGATED_DATA, payload: data });
    expect(result).toEqual(state);
  });
});
