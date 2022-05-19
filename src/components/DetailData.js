import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentDate } from '../api/api';
import { getCountryData } from '../redux/detail/detail';

const DetailData = () => {
  const detail = useSelector((state) => state.detail);
  console.log(detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryData());
  }, []);

  return (
    <ul>
      <li>{currentDate}</li>
      <li>
        <p>
          Name:
          {' '}
          {detail.name}
        </p>
      </li>
      <li>
        <p>
          Total cases:
          {' '}
          {detail.today_confirmed}
        </p>
      </li>
      <li>
        <p>
          Total deaths:
          {' '}
          {detail.today_deaths}
        </p>
      </li>
      <li>
        <p>
          New cases:
          {' '}
          {detail.today_new_confirmed}
        </p>
      </li>
    </ul>
  );
};

export default DetailData;
