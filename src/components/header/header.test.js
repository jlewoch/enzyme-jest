import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByDataTestAttr } from '../../../utils';
const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it('Should render without errors', () => {
    const wrapper = findByDataTestAttr(component, 'headerComponent');

    expect(wrapper.length).toBe(1);
  });
  it('Should render a logo', () => {
    const logo = findByDataTestAttr(component, 'imgLogo');
    expect(logo.length).toBe(1);
  });
});
