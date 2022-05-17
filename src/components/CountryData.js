import PropTypes from 'prop-types';

const CountryData = (props) => {
  const { country } = props;

  return (
    <li>
      <h2>{country.name}</h2>
      <h3>{country.totalCases}</h3>
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
