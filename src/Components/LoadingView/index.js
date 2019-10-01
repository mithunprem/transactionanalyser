import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingView = () => {
  return (
    <Fragment>
      <Loader type="TailSpin" color="#ffffff" />
      <h5 className="mt-3"> Loading transactions… </h5>
    </Fragment>
  );
}

export default LoadingView;
