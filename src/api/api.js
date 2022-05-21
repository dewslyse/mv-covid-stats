const covidURL = 'https://api.covid19tracking.narrativa.com/api';
const d = new Date();
d.setDate(d.getDate() - 1);
export const currentDate = d.toISOString().slice(0, 10);

const fetchCovidData = () => fetch(`${covidURL}/${currentDate}`)
  .then((response) => response.json());

export default fetchCovidData;
