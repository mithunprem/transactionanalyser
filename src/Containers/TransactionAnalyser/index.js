import React, { Component, Fragment  } from 'react';
import Papa from 'papaparse';
import moment from 'moment';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import transactionscsv from '../../Data/transactions.csv';
import './transactionAnalyser.scss'

class TransactionAnalyser extends Component {

  state = {
    transactions: [],
    form: {
      accountId: "ACC334455",
      fromDate: "2018-10-20T00:00",
      toDate: "2018-10-20T19:00"
    },
    balance: 0
  }

  componentDidMount() {
    Papa.parse(transactionscsv, {
      header: true,
      download: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: this.setTransactionsToState
    })
  }

  setTransactionsToState = ({ data: transactions }) => {
    if( transactions && transactions.length > 0 ) {
      this.setState({ transactions });
    }
  }

  render() {
    const { form: { accountId, fromDate, toDate }, balance } = this.state;
    return (
      <Fragment>
        <div className="transaction-analyser">
          <h3>Transaction Analyser</h3>
          <p>Please enter the following details.</p>
          <form onSubmit={this.calculate}>
            <Input type="text" placeholder="Account ID" name="accountId" value={accountId} onChange={this.handleChange} />
            <Input type="datetime-local" placeholder="From" name="fromDate" value={fromDate} onChange={this.handleChange} />
            <Input type="datetime-local" placeholder="To" name="toDate" value={toDate} onChange={this.handleChange} />
            <Button type="submit" label="Calculate" />
          </form>
          <p>Click calculate to show the balance</p>
        </div>
      </Fragment>
    )
  }
}

export default TransactionAnalyser;
