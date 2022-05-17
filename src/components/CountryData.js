import PropTypes from 'prop-types';

const CountryData = (props) => {
  const { country } = props;

  return (
    <li>
      <h2>{country.name}</h2>
      <p>{country.totalCases}</p>
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
