import React from 'react';
import { create } from 'react-test-renderer';
import Balance from '../../Components/Balance';

describe("Balance", () => {
  const successBalanceResult = {
    status : 'success',
    balance: 10,
    includedTransactions: 2
  }

  const errorBalanceResult = {
    status : 'error',
    message: 'No transactions found'
  }

  const defaultBalanceResult = {};

  test("should render without throwing an error for successful balance calculation", () => {
    const balance = create(<Balance balanceResult={successBalanceResult} />).toJSON()
    expect(balance).toMatchSnapshot()
  });

  test("should render without throwing an error for no transactions found scenario", () => {
    const balance = create(<Balance balanceResult={errorBalanceResult} />).toJSON()
    expect(balance).toMatchSnapshot()
  });

  test("should render without throwing an error for default case", () => {
    const balance = create(<Balance balanceResult={defaultBalanceResult} />).toJSON()
    expect(balance).toMatchSnapshot()
  });
});
