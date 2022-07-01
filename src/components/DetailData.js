import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../redux/detail/detail';

const DetailData = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryData());
  }, []);

  const imgURL = `https://countryflagsapi.com/png/${detail.country}`;
  const currentDate = Date(`${detail.updated}`).slice(4, 15);

  return (
    <section>
      <section className="details-hero">
        <div className="details-aggregate">
          <img src={imgURL} alt="" />
          <h2>{detail.country}</h2>
          <p>
            Total cases:
            {' '}
            <span>{detail.cases}</span>
          </p>
        </div>
      </section>
      <section>
        <div className="details-caption">
          <h3>Country Breakdown</h3>
          <span>
            Updated:
            {' '}
            {currentDate}
          </span>
        </div>

        <ul className="details-stats">
          <li className="stat">
            <p className="stat-caption">New cases:</p>
            <p className="stat-value">
              {detail.todayCases}
            </p>
          </li>
          <li className="stat">
            <p className="stat-caption">Active cases:</p>
            <p className="stat-value">
              {detail.active}
            </p>
          </li>
          <li className="stat">
            <p className="stat-caption">Total deaths:</p>
            <p className="stat-value">
              {detail.deaths}
            </p>
          </li>
          <li className="stat">
            <p className="stat-caption">Total recoveries:</p>
            <p className="stat-value">
              {detail.recovered}
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default DetailData;
