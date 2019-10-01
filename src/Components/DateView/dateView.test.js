import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DateView from '../../Components/DateView';
import Input from '../../Components/Input';

describe("AnalyserInterface", () => {
  it("should render a Input view", () => {
    const wrapper = shallow(<DateView />);
    expect(wrapper.find(Input)).to.have.length(1);
  });
});
