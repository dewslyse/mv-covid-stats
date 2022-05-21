import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eraseFilter } from '../redux/filter/filter';

const Nav = () => {
  const dispatch = useDispatch();

  const currentYear = new Date().getFullYear();

  const click = () => {
    dispatch(eraseFilter());
  };

  return (
    <header className="header">
      <div className="back">
        <Link to="/" className="back-btn" onClick={click}>
          <IoIosArrowBack
            className="chevron-left"
          />
        </Link>
        <span className="year">{currentYear}</span>
      </div>
      <h1 className="app-caption">Covid Tracker</h1>
      <div>
        <HiOutlineMicrophone
          className="microphone"
        />
        <IoIosSettings
          className="cog"
        />
      </div>
    </header>
  );
};

export default Nav;
