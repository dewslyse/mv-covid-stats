import AggregatedData from '../components/AggregatedData';
import Countries from '../components/Countries';
import Filter from '../components/Filter';

const Homepage = () => (
  <main>
    <AggregatedData />
    <br />
    <Filter />
    <br />
    <Countries />
  </main>
);

export default Homepage;
