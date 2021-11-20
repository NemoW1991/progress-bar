import React from 'react';
import { shallow,render } from 'enzyme';
import View from '../view';

const defaultValue = {
  data: {
    bars: [65,28,46],
    buttons: [10,20,15,20],
  }
}

describe('<View />', () => {
  let wrapper, wrapperRender;
  beforeEach(() => 
    wrapper = shallow(<View {...defaultValue} />),
    wrapperRender = render(<View {...defaultValue} />)
  );

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render correctly', () => 
    expect(wrapper).toMatchSnapshot());

  it('should has Progresses Select Buttons', () => {
    // @ts-ignore
    expect(wrapper.find('Progress')).toHaveLength(3);
    // @ts-ignore
    expect(wrapper.find('Button')).toHaveLength(4);
    // @ts-ignore
    expect(wrapper.find('Select')).toHaveLength(1);
  });

  it('should render items equal', () => {
    // @ts-ignore
    expect(wrapperRender.find('Progress')).toHaveLength(3);
    // @ts-ignore
    expect(wrapperRender.find('Button')).toHaveLength(4);
    // @ts-ignore
    expect(wrapperRender.find('Select')).toHaveLength(1);
  });

});

