import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Homepage from './Homepage';

describe('Homepage Component Rendering', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Homepage />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
