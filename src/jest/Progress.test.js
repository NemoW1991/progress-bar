import { shallow } from 'enzyme';
import Progress from '../components/Progress';

const mockData = {bar: 30, limit: 200};
describe('<Progress>', () => {
  
  let wrapper;
  beforeEach(() => wrapper = shallow(
    <Progress 
      bar = {mockData.bar}
      limit = {mockData.limit}
    />
  ));

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should has correct value', () => {
    expect(wrapper.find('progress').prop('value')).toBe(30)
  });

  it('should has correct max value', () => {
    expect(wrapper.find('progress').prop('max')).toBe(200)
  })

})