const covidURL = 'https://api.covid19tracking.narrativa.com/api';
const d = new Date();
d.setDate(d.getDate() - 1);
export const currentDate = d.toISOString().slice(0, 10);
console.log(currentDate);

// const fetchCovidData = () => fetch(covidURL)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));

const fetchCovidData = async () => {
  const response = await fetch(`${covidURL}/${currentDate}`);
  const data = response.json();
  return data;
};

export default fetchCovidData;
