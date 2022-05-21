import countryReducer from './country';

const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

describe('Fetch action works', () => {
  const state = [];
  const data = {
    country: [
      {
        id: 'country-1',
        name: 'country-1',
        totalCases: '50',
        totalDeaths: '10',
      },
    ],
  };

  test('funtion should return', () => {
    const result = countryReducer(state, { type: FETCH_COUNTRIES, payload: data });
    expect(result).toEqual(state);
  });
});
