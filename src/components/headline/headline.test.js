import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr, checkProps } from '../../../utils';
import Headline from './index';

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [
          {
            fName: 'Test first',
            lName: 'Test last',
            email: 'Test email',
            age: 33,
            onlineStatus: false
          }
        ]
      };
      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setup(props);
    });
    it('Should render without errors', () => {
      const component = findByDataTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });
    it('Should render a H1 header', () => {
      const h1 = findByDataTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });
    it('Should render a description', () => {
      const desc = findByDataTestAttr(wrapper, 'description');
      expect(desc.length).toBe(1);
    });
  });
  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it('Should not render', () => {
      const component = findByDataTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
