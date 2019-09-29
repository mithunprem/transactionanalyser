import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { dateValidator, compareDates } from '../../Utils/dateValidator';
import './form.scss';

export default class Form extends Component {
  state = {
    // Hard coded the form data to be shown by default for representational
    // purpose.
    formData: {
      accountId: "ACC334455",
      fromDate: "20/10/2018 12:00:00",
      toDate: "20/10/2018 19:00:00"
    },
    hasError: false,
    formErrors: {
      fromDate: false,
      toDate: false
    },
    errorMessage: ''
  }

  /**
   * Change event handler for the form components.
   */
  handleChange = event => {
    const { value, name } = event.target;
    let { formErrors, errorMessage, hasError } = this.state;

    if (name === 'fromDate' || name === 'toDate') {
      const isValid  = dateValidator(value);
      // Set the error to true if isValid is false.
      formErrors[name] = !isValid;
      errorMessage = 'The date is not in a valid format';
      hasError = !isValid;
    }

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
      formErrors,
      errorMessage,
      hasError
    }))

    this.props.onChange();
  }

  onSubmit = event => {
    event.preventDefault();

    const { formData, formErrors } = this.state;
    const { fromDate, toDate } = formData;
    const isValid = compareDates(fromDate, toDate);

    if (isValid) {
      this.props.onSubmit(this.state.formData);
    } else {
      formErrors.fromDate = true;
      this.setState({
        formErrors,
        errorMessage: 'From date cannot be greater than To date',
        hasError: true
      });
    }
  }

  render() {
    const { formData, formErrors, errorMessage, hasError } = this.state;
    const { accountId, fromDate, toDate } = formData;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text" placeholder="Account ID"
            name="accountId" value={accountId}
            onChange={this.handleChange} />
          <Input
            type="text" placeholder="From Date"
            name="fromDate" value={fromDate}
            hasError={formErrors.fromDate}
            onChange={this.handleChange} />
          <Input
            type="text" placeholder="To Date"
            name="toDate" value={toDate}
            hasError={formErrors.toDate}
            onChange={this.handleChange} />
          <div className="m-2">
            {
              hasError ?
                <span className="p-2 alert alert-danger" role="alert">
                  {errorMessage}
                </span> : ''
            }
          </div>
          <Button
            disabled={formErrors.fromDate || formErrors.toDate}
            type="submit" label="Calculate" />
        </form>
      </Fragment>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
}
