import React, { Fragment } from 'react';
import { Tooltip as ErrorTooltip } from 'reactstrap';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = "text", placeholder, name, value, showError, errorMessage, onChange = () => { } }) => {
  return (
    <Fragment>
      <div className="input">
        <label htmlFor={name}>{placeholder}</label>
        <br/>
        <input
          id={name}
          placeholder={placeholder}
          className={showError ? 'has-error' : ''}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <ErrorTooltip placement="top" target={name} fade={false} isOpen={showError}>{errorMessage}</ErrorTooltip>
      </div>
    </Fragment>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  showError: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
