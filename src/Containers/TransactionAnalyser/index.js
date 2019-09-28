import React, { Component, Fragment  } from 'react';
import Papa from 'papaparse';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import transactionscsv from '../../Data/transactions.csv';
import './transactionAnalyser.scss'

class TransactionAnalyser extends Component {

  state = {
    transactions: []
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
    return (
      <Fragment>
        <div className="transaction-analyser">
          <h3>Transaction Analyser</h3>
          <p>Please enter the following details.</p>
          <form onSubmit={this.calculate}>
            <Input type="text" placeholder="Account ID" name="accountId" />
            <Input type="datetime-local" placeholder="From" name="fromDate" />
            <Input type="datetime-local" placeholder="To" name="toDate" />
            <Button type="submit" label="Calculate" />
          </form>
          <p>Click calculate to show the balance</p>
        </div>
      </Fragment>
    )
  }
}

export default TransactionAnalyser;
