import React, { Fragment  } from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ type = "text", label, onClick = () => { } }) => {
  return (
    <Fragment>
      <button className="mt-3 button" type={type} onClick={onClick}>
        {label}
      </button>
    </Fragment>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
