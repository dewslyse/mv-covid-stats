import { useSelector } from 'react-redux';
import { currentDate } from '../api/api';

const AggregatedData = () => {
  const total = useSelector((state) => state.aggregate);

  return (
    <>
      <div>
        Last Updated:
        {' '}
        {currentDate}
      </div>
      <div>
        <h3>
          <span>Total cases:</span>
          {' '}
          {total.today_confirmed}
        </h3>
        <h3>
          <span>Total deaths:</span>
          {' '}
          {total.today_deaths}
        </h3>
      </div>
    </>
  );
};

export default AggregatedData;
