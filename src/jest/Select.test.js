import { shallow } from 'enzyme';
import Select from '../components/Select';

describe('<Select />', () => {
  it('renders without crashing', () => {
    const component = shallow(<Select />);
    expect(component.length).toBe(1);
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has default options', () => {
    const component = shallow(<Select />);
    component.setProps({ options: [0,1,2,3,4]});
    expect(component.find('option').length).toBe(5);
    expect(component.find('option').first().prop('value')).toBe(0);
  });

  it('support change handler', () => {
    const callback = jest.fn();
    const component = shallow(<Select handleChange={callback} />);
    component.find('select').simulate('change');
    expect(callback).toHaveBeenCalledTimes(1);
  });

})