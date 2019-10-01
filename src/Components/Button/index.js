import React, { Fragment  } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ type = "text", label, disabled, onClick = () => { } }) => {
  return (
    <Fragment>
      <button
        className="mt-3 button"
        type={type} onClick={onClick}
        disabled={disabled}
        >
        {label}
      </button>
    </Fragment>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;
