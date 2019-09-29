import React, { Fragment  } from 'react';

const Balance = ({ balance }) => {
  return (
    <Fragment>
      <p className="m-3">{
          balance ?
            `Balance: $${String(balance.toFixed(2)).toLocaleString()}` :
            'Click calculate to show the balance.'
          }
      </p>
    </Fragment>
  )
}

export default Balance;