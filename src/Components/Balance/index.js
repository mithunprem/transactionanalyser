import React, { Fragment  } from 'react';
import './balance.scss';

const Balance = ({ balanceResult }) => {
  return (
    <Fragment>
      <p className="m-3 balance">
        {
          balanceRenderSwitch(balanceResult)
        }
      </p>
    </Fragment>
  )
}

/**
  Renders the balance figure to be displayed based on the result.
  If the computation is success, then display the result figure and also
  the number of transactions that were included in the computation.
  If the computation resulted in error, then display the error message.
  For the default case, i.e on page load, show the default string.
*/
const balanceRenderSwitch = ({ status, message, balance, includedTransactions }) => {
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
      return 'Click calculate to show the balance';
  }
}

export default Balance;
