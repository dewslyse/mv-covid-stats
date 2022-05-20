import { useSelector } from 'react-redux';
import { currentDate } from '../api/api';

const AggregatedData = () => {
  const total = useSelector((state) => state.aggregate);

  return (
    <section className="hero">
      <div className="aggregates">
        <h2>World Covid-19 stats</h2>
        <p>
          Last Updated:
          {' '}
          {currentDate}
        </p>
        <h3>
          Total cases:
          {' '}
          <span>{total.today_confirmed}</span>
        </h3>
        <h3>
          Total deaths:
          {' '}
          <span>{total.today_deaths}</span>
        </h3>
      </div>
    </section>
  );
};

export default AggregatedData;
