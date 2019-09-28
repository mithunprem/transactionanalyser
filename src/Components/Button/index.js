import React, { Fragment  } from 'react';
import './button.scss';

const Button = ({ type = "text", label }) => {
  return (
    <Fragment>
      <button className="button" type={type}>{label}</button>
    </Fragment>
  )
}

export default Button;
