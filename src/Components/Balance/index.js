import React, { Fragment  } from 'react';

const Balance = ({ balanceResult }) => {
  return (
    <Fragment>
      <p className="m-3">
        {
          renderSwitch(balanceResult)
        }
      </p>
    </Fragment>
  )
}

const renderSwitch = ({ status, message, balance, includedTransactions }) => {
  switch(status) {
    case 'success':
      const negativeSign = (balance < 0) ? '-' : '';
      const balanceString = String(Math.abs(balance).toFixed(2)).toLocaleString();
      return (
        <Fragment>
          <span>
            {`Relative balance for the period is: ${negativeSign}$${balanceString}`}
          </span>
          <br />
          <span>
            {`Number of transactions included is: ${includedTransactions}`}
          </span>
        </Fragment>
      )
    case 'error':
      return message;
    default:
      return 'Click calculate to show the balance.';
  }
}

export default Balance;
