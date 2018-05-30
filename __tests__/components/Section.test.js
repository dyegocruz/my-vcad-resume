import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Section from '../../src/common/template/Section';

configure({ adapter: new Adapter() });

// Snapshot for Section React Component
describe('Section Component Snapshot', () => {
  it('+++capturing Snapshot of Home', () => {
    const renderedValue = renderer.create(<Section />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('Shallow Render Section React Component', () => {
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
