import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByDataTestAttr } from '../../../utils';
const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('Should render without errors', () => {
    const component = findByDataTestAttr(wrapper, 'headerComponent');

    expect(component.length).toBe(1);
  });
  it('Should render a logo', () => {
    const logo = findByDataTestAttr(wrapper, 'logoImg');
    expect(logo.length).toBe(1);
  });
});
