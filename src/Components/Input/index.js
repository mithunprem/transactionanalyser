import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = "text", placeholder, name, value, hasError, onChange = () => { } }) => {
  return (
    <Fragment>
      <div className="input">
        <label htmlFor={name}>{placeholder}</label>
        <br/>
        <input
          placeholder={placeholder}
          className={hasError ? 'has-error' : ''}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </Fragment>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
