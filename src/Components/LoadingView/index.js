import React, { Fragment } from 'react';
import { Spinner } from 'reactstrap';

const LoadingView = () => {
  return (
    <Fragment>
      <Spinner type="grow" />
      <h5 className="mt-3">Loading transactions…</h5>
    </Fragment>
  );
}

export default LoadingView;
