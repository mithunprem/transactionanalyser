import React from 'react'
import TransactionAnalyser from '../../Containers/TransactionAnalyser'
import { create } from 'react-test-renderer';

describe("TransactionAnalyser", () => {
  test('should render without throwing an error', () => {
    const transactionAnalyser = create(<TransactionAnalyser />).toJSON();
    expect(transactionAnalyser).toMatchSnapshot()
  });
});
