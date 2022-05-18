import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CountryData from './CountryData';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const filter = useSelector((state) => state.filter);
  const [filterList, setFilterList] = useState([]);

  const filtered = (input) => {
    if (input !== '') {
      setFilterList(() => (
        countries.filter((country) => (
          country.name.toLowerCase().includes(input.toLowerCase())
        ))
      ));
    }
  };

  useEffect(() => {
    filtered(filter);
  }, [filter]);

  return (
    <ul>
      {filterList.length === 0
        && (countries.map((country) => (
          <CountryData key={country.id} country={country} />
        )))}

      {filterList.length !== 0
        && (filterList.map((country) => (
          <CountryData key={country.id} country={country} />
        )))}
    </ul>
  );
};

export default Countries;
