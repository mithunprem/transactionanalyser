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

const renderSwitch = ({ status, message, balance }) => {
  switch(status) {
    case 'success':
      return `Balance: $${String(balance.toFixed(2)).toLocaleString()}`;
    case 'error':
      return message;
    default:
      return 'Click calculate to show the balance.';
  }
}

export default Balance;
