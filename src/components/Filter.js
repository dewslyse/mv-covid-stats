import { useDispatch } from 'react-redux';
import { filterCountry } from '../redux/filter/filter';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const countryName = e.target.value.trim();
    dispatch(filterCountry(countryName));
  };

  return (
    <div>
      <input
        id="submit"
        placeholder="Filter by country"
        onChange={handleInput}
      />
    </div>
  );
};

export default Filter;
