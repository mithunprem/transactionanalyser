import React, { Fragment } from 'react';
import './input.scss';

const Input = ({ type = "text", placeholder, name, value, onChange = () => { } }) => {
  return (
    <Fragment>
      <div className="input">
        <label htmlFor={name}> {placeholder}</label>
        <br/>
        <input type={type} name={name} value={value} onChange={onChange} />
      </div>
    </Fragment>
  )
}

export default Input;
