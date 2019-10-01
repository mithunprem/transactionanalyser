import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import DateView from '../../Components/DateView';

describe("Form", () => {
  it("should render one Input component", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(Input)).to.have.length(1);
  });

  it("should render two DateView components", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(DateView)).to.have.length(2);
  });

  it("should render one Button components", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(Button)).to.have.length(1);
  });
});
