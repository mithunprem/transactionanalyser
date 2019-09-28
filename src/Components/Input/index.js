import React, { Fragment } from 'react';
import './input.scss';

const Input = ({ type = "text", placeholder, name }) => {
  return (
    <Fragment>
      <div className="input">
        <label htmlFor={name}> {placeholder}</label>
        <br/>
        <input type={type} name={name} />
      </div>
    </Fragment>
  )
}

export default Input;
