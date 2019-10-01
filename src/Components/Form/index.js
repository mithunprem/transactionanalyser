import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Components/Input';
import DateView from '../../Components/DateView';
import Button from '../../Components/Button';
import { compareDates } from '../../Utils/dateValidator';
import './form.scss';

export default class Form extends Component {
  state = {
    formData: {
      accountId: '',
      fromDate: '',
      toDate: ''
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
    const formHasData = accountId.length > 0 && fromDate.length > 0 && toDate.length > 0;
    const shouldDisableCalculateButton =
       !formHasData || hasDateRangeError || formErrors.fromDate || formErrors.toDate;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit} id="form">
          <Input
            label="Account ID" placeholder="Account ID" name="accountId"
            value={accountId} onChange={this.handleChange} />
          <DateView
            label="From Date" placeholder="DD/MM/YYYY HH:MM:SS" name="fromDate" value={fromDate}
            dateRangeErrorMessage={errorMessage} onChange={this.handleChange} />
          <DateView
            label="To Date" placeholder="DD/MM/YYYY HH:MM:SS" name="toDate" value={toDate}
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
