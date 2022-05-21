import AggregatedData from '../components/AggregatedData';
import Countries from '../components/Countries';
import Filter from '../components/Filter';

const Homepage = () => (
  <main>
    <div className="container">
      <AggregatedData />
      <Filter />
      <Countries />
    </div>
  </main>
);

export default Homepage;
