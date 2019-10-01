import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Components/Input';
import DateView from '../../Components/DateView';
import Button from '../../Components/Button';
import { compareDates } from '../../Utils/dateValidator';
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
    errorMessage: ''
  }

  /**
   * Change event handler for the form components.
   */
  handleChange = (event, isValidChange) => {
    const { value, name } = event.target;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
      hasError: !isValidChange
    }))

    this.props.onChange();
  }

  onSubmit = event => {
    event.preventDefault();

    const { formData } = this.state;
    const { fromDate, toDate } = formData;
    const isValid = compareDates(fromDate, toDate);

    if (isValid) {
      this.props.onSubmit(this.state.formData);
    } else {
      this.setState({
        errorMessage: 'From date cannot be greater than To date',
        hasError: true
      });
    }
  }

  render() {
    const { formData, errorMessage, hasError } = this.state;
    const { accountId, fromDate, toDate } = formData;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <Input placeholder="Account ID" name="accountId"  value={accountId} onChange={this.handleChange} />
          <DateView placeholder="From Date" name="fromDate" value={fromDate} onChange={this.handleChange} />
          <DateView placeholder="To Date" name="toDate" value={toDate} onChange={this.handleChange} />
          <Button disabled={hasError} type="submit" label="Calculate" />
        </form>
      </Fragment>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
}
