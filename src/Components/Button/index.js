import React, { Fragment  } from 'react';
import './button.scss';

const Button = ({ type = "text", label, onClick = () => { } }) => {
  return (
    <Fragment>
      <button className="button" type={type} onClick={onClick}>{label}</button>
    </Fragment>
  )
}

export default Button;
