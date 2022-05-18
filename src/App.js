import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { getAggregatedData } from './redux/aggregate/aggregate';
import { getCovidData } from './redux/country/country';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCovidData());
    dispatch(getAggregatedData());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
