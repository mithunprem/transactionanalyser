import React, { Fragment  } from 'react';

const Balance = ({ balance }) => {
  return (
    <Fragment>
      <p>{
          balance ?
            `Balance: $${String(balance.toFixed(2)).toLocaleString()}` :
            'Click calculate to show the balance.'
          }
      </p>
    </Fragment>
  )
}

export default Balance;
