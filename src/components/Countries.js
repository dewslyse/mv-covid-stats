import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCovidData } from '../redux/country/country';
import CountryData from './CountryData';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, []);

  return (
    <ul>
      {countries.map((country) => (
        <CountryData key={country.id} country={country} />
      ))}
    </ul>
  );
};

export default Countries;
