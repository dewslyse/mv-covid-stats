import { useSelector } from 'react-redux';

const AggregatedData = () => {
  const total = useSelector((state) => state.aggregate);

  const currentDate = Date(`${total.updated}`).slice(4, 15);

  return (
    <section className="hero">
      <div className="aggregates">
        <h2>World Covid-19 stats</h2>
        <h3>
          Total cases:
          {' '}
          <span>{total.cases}</span>
        </h3>
        <h3>
          Total deaths:
          {' '}
          <span>{total.deaths}</span>
        </h3>
        <p>
          Updated:
          {' '}
          {currentDate}
        </p>
      </div>
    </section>
  );
};

export default AggregatedData;
