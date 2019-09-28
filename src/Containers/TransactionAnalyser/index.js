import React, { Component, Fragment  } from 'react';
import moment from 'moment';
import Form from '../../Components/Form';
import parseCsvFile from '../../Utils/csvParser';
import transactionscsv from '../../Data/transactions.csv';
import './transactionAnalyser.scss'

export default class TransactionAnalyser extends Component {

  state = {
    isTransactionDetailsLoading: false,
    transactions: [],
    balance: 0
  }

  componentDidMount() {
    this.setState(
      {
        isTransactionDetailsLoading: true
      },
      async () => {
        const transactions = await parseCsvFile(transactionscsv);
        this.setState({
          isTransactionDetailsLoading: false,
          transactions
        });
      }
    );
  }

  }

  render() {
    const { balance } = this.state;
    return (
      <Fragment>
        <div className="transaction-analyser">
          <h2>Relative account balance</h2>
          <p>Please enter the following details.</p>
          <Form onSubmit={this.calculate} />
          <p>{balance ? `Balance: $${String(balance.toFixed(2)).toLocaleString()}` : "Click calculate to show the balance."}</p>
        </div>
      </Fragment>
    )
  }
}
