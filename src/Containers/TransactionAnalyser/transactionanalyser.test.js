import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TransactionAnalyser from '../../Containers/TransactionAnalyser'
import LoadingView from '../../Components/LoadingView';
import AnalyserInterface from '../../Components/AnalyserInterface';

describe("TransactionAnalyser", () => {
  it("should render LoadingView when the isTransactionDetailsLoading flag is true", () => {
    const wrapper = shallow(<TransactionAnalyser />);
    wrapper.setState({ isTransactionDetailsLoading: true });
    expect(wrapper.find(LoadingView)).to.have.length(1);
  });

  it("should render AnalyserInterface when the isTransactionDetailsLoading flag is false", () => {
    const wrapper = shallow(<TransactionAnalyser />);
    wrapper.setState({ isTransactionDetailsLoading: false });
    expect(wrapper.find(AnalyserInterface)).to.have.length(1);
  });
});
