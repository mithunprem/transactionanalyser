import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Components/Input';
import { dateValidator } from '../../Utils/dateValidator';

export default class DateView extends Component {

  state = {
    hasError: false
  }

  /**
   * Handle the change event and validate the date value before passing
   * the event to the parent component.
   */
  handleChange = event => {
    const { value } = event.target;
    const { isValidDate, errorMessage } = dateValidator(value);
    // Set hasError to true if the date is not valid.
    this.setState({ hasError: !isValidDate, errorMessage });
    // Call the onChange function of the parent and pass the event.
    this.props.onChange(event, isValidDate, errorMessage);
  }

  render() {
    const { placeholder, name, value } = this.props;
    const { hasError, errorMessage } = this.state;
    return (
      <Fragment>
        <Input
          placeholder={placeholder} name={name} value={value}
          hasError={hasError} errorMessage={errorMessage} onChange={this.handleChange}
        />
      </Fragment>
    )
  }
}

DateView.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
