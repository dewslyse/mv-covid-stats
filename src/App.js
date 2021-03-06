import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import Homepage from './pages/Homepage';
import { getAggregatedData } from './redux/aggregate/aggregate';
import { getCovidData } from './redux/country/country';
import './App.scss';
import Nav from './components/Nav';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCovidData());
    dispatch(getAggregatedData());
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries/:countryName" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
