import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Components/Input';
import DateView from '../../Components/DateView';
import Button from '../../Components/Button';
import { compareDates } from '../../Utils/dateValidator';
import './form.scss';

export default class Form extends Component {
  state = {
    // Hard coded the form data to be shown by default for representational purpose.
    formData: {
      accountId: "ACC334455",
      fromDate: "20/10/2018 12:00:00",
      toDate: "20/10/2018 19:00:00"
    },
    formErrors: {
      fromDate: false,
      toDate: false
    },
    hasDateRangeError: false,
    errorMessage: ''
  }

  /**
   * Change event handler for the form components. Validate and set the changes
   * to the state and call the onChange method from the caller component.
   */
  handleChange = (event, isValidChange) => {
    const { value, name } = event.target;
    const { formErrors } = this.state;

    formErrors[name] = !isValidChange;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
      formErrors,
      errorMessage: '',
      hasDateRangeError: false
    }))

    this.props.onChange();
  }

  /**
   * Validate the form data on submit and if the data is valid, call the
   * onSubmit method passed from the parent component.
   */
  onSubmit = event => {
    event.preventDefault();

    const { formData } = this.state;
    const { fromDate, toDate } = formData;
    const isValidDateRange = compareDates(fromDate, toDate);

    if(isValidDateRange) {
      this.props.onSubmit(formData);
    } else {
      this.setState({
        hasDateRangeError: true,
        errorMessage: 'From date cannot be greater than To date'
      });
    }
  }

  render() {
    const { formData, formErrors, errorMessage, hasDateRangeError } = this.state;
    const { accountId, fromDate, toDate } = formData;
    const shouldDisableCalculateButton =
       hasDateRangeError || formErrors.fromDate || formErrors.toDate;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit} id="form">
          <Input
            placeholder="Account ID" name="accountId"
            value={accountId} onChange={this.handleChange} />
          <DateView
            placeholder="From Date" name="fromDate" value={fromDate}
            dateRangeErrorMessage={errorMessage} onChange={this.handleChange} />
          <DateView
            placeholder="To Date" name="toDate" value={toDate}
            onChange={this.handleChange} />
          <Button
            disabled={ shouldDisableCalculateButton } type="submit" label="Calculate" />
        </form>
      </Fragment>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
}
