import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('<Button />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.length).toEqual(1);
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('button text', () => {
    const wrapper = shallow(<Button />);
    wrapper.setProps({ buttonText: '100' });
    expect(wrapper.find('button').text()).toBe('100');
  });

  it('supports click handler', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Button handleClick={callback} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });
});