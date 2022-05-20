import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentDate } from '../api/api';
import { getCountryData } from '../redux/detail/detail';

const DetailData = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryData());
  }, []);

  const imgURL = `https://countryflagsapi.com/png/${detail.name}`;

  return (
    <section>
      <section className="details-hero">
        <div className="details-aggregate">
          <img src={imgURL} alt="" />
          <h2>{detail.name}</h2>
          <p>
            Total cases:
            {' '}
            <span>{detail.today_confirmed}</span>
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
              {detail.today_new_confirmed}
            </p>
          </li>
          <li className="stat">
            <p className="stat-caption">Total deaths:</p>
            <p className="stat-value">
              {detail.today_deaths}
            </p>
          </li>
          <li className="stat">
            <p className="stat-caption">Total recoveries:</p>
            <p className="stat-value">
              {detail.today_recovered}
            </p>
          </li>
          <li className="stat">
            <p className="stat-caption">Open cases:</p>
            <p className="stat-value">
              {detail.today_open_cases}
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default DetailData;
