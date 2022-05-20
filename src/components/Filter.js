import { useDispatch } from 'react-redux';
import { filterCountry } from '../redux/filter/filter';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const countryName = e.target.value.trim();
    dispatch(filterCountry(countryName));
  };

  return (
    <div className="filter">
      <p>Stats by Country</p>
      <input
        id="submit"
        placeholder="Search..."
        onChange={handleInput}
      />
    </div>
  );
};

export default Filter;
