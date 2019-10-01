import React, { Component, Fragment } from 'react';
import Form from '../../Components/Form';
import Balance from '../../Components/Balance';
import balanceCalculator from '../../Utils/balanceCalculator';


export default class AnalyserInterface extends Component {

  state = {
    balanceResult: {}
  }

  calculateBalance = formData => {
    const { transactions } = this.props;
    const balanceResult = balanceCalculator(transactions, formData);
    this.setState({ balanceResult });
  }

  /**
  * As soon as any component in form changes it value, reset the balanceResult
  * so that the Balance view will remove the results shown as part of the
  * previous calculation and reset to the default value.
  */
  handleFormChange = () => {
    this.setState({ balanceResult: {} });
  }

  render() {
    const { balanceResult } = this.state;
    return (
      <Fragment>
        <h2>Relative account balance</h2>
        <p>Please enter the following details.</p>
        <Form onSubmit={this.calculateBalance} onChange={this.handleFormChange} />
        <Balance balanceResult={balanceResult} />
      </Fragment>
    );
  }
}
