import { shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => 
    wrapper = shallow(<App />),
  );

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render correctly', () => 
    expect(wrapper).toMatchSnapshot());  
});

