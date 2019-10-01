import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AnalyserInterface from '../../Components/AnalyserInterface';
import Form from '../../Components/Form';
import Balance from '../../Components/Balance';

describe("AnalyserInterface", () => {
  it("should render a heading, a text span, a Form component and a Balance component", () => {
    const wrapper = shallow(<AnalyserInterface />);
    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.find(Form)).to.have.length(1);
    expect(wrapper.find(Balance)).to.have.length(1);
  });
});
