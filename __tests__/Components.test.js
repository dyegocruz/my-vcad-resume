import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import Section from '../src/common/template/Section';
import Container from '../src/myVcard/components/Container';
import NavBar from '../src/myVcard/components/NavBar';
import Content from '../src/myVcard/components/Content';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('Components Render', () => {
  describe('Container', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Container />);
    });

    it('Should render Container component', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('Should contains NavBar component', () => {
      expect(wrapper.contains([<NavBar />])).toEqual(true);
    });

    it('Should contains Content component', () => {
      expect(wrapper.contains([<Content />])).toEqual(true);
    });
  });

  describe('NavBar', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <NavBar />
        </Provider>);
    });

    it('Should render NavBar component', () => {
      expect(wrapper.length).toEqual(1);
    });

  });

  describe('Section', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Section />);
    });

    it('Should be render Section component', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('Should contains section html element', () => {
      expect(wrapper.find('section')).toHaveLength(1);
    });
  });
});
