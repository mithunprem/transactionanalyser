import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import './form.scss';

export default class Form extends Component {
  state = {
    // Hard coded the form data to be shown by default for representational
    // purpose.
    formData: {
      accountId: "ACC334455",
      fromDate: "2018-10-20T00:00",
      toDate: "2018-10-20T19:00"
    }
  }

  /**
   * Change event handler for the form components.
   */
  handleChange = event => {
    const { value, name } = event.target;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))

    this.props.onChange();
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);
  }

  render() {
    const { accountId, fromDate, toDate } = this.state.formData;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text" placeholder="Account ID"
            name="accountId" value={accountId}
            onChange={this.handleChange} />
          <Input
            type="datetime-local" placeholder="From"
            name="fromDate" value={fromDate}
            onChange={this.handleChange} />
          <Input
            type="datetime-local" placeholder="To"
            name="toDate" value={toDate}
            onChange={this.handleChange} />
          <Button type="submit" label="Calculate" />
        </form>
      </Fragment>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
}
