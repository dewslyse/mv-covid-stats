import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryData = (props) => {
  const { country } = props;

  // const imgURL = `https://countryflagsapi.com/png/${country.name}`;

  return (
    <li>
      <Link
        to={`/country/${country.name}`}
      >
        {/* <img src={imgURL} alt="" /> */}
        <h2>{country.name}</h2>
        <p>{country.totalCases}</p>
      </Link>
    </li>
  );
};

CountryData.defaultProps = {
  country: [],
};

CountryData.propTypes = {
  country: PropTypes.shape(
    {
      name: PropTypes.string,
      totalCases: PropTypes.number,
    },
  ),
};

export default CountryData;
