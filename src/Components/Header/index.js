import React, { Fragment } from 'react';
import './header.scss';

function Header () {
  return (
    <Fragment>
      <header className="transaction-analyser-header">
        <h5 className="ml-3 header-text">Financial Transaction Analyser</h5>
      </header>
    </Fragment>
  );
}

export default Header;
