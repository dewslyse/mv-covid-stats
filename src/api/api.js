const covidURL = 'https://disease.sh/v3/covid-19/';

const fetchCovidData = () => fetch(`${covidURL}countries`)
  .then((response) => response.json());

const fetchAggregatedData = () => fetch(`${covidURL}all`)
  .then((response) => response.json());

export { fetchCovidData, fetchAggregatedData };
