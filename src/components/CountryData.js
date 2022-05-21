import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs';

const CountryData = (props) => {
  const { country } = props;

  const imgURL = `https://countryflagsapi.com/png/${country.name}`;

  return (
    <Link
      to={`/country/${country.name}`}
      className="country-box"
    >
      <img src={imgURL} alt="" />

      <BsArrowRightCircle />
      <div>
        <h2>{country.name}</h2>
        <p>
          {country.totalCases}
          {' '}
          <span>cases</span>
        </p>
      </div>
    </Link>
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
