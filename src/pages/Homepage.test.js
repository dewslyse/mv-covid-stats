import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import DetailsPage from './DetailsPage';

describe('Details Component Rendering', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailsPage />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
