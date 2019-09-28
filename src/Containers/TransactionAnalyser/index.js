import React, { Component, Fragment  } from 'react';
import moment from 'moment';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import parseCsvFile from '../../Utils/csvParser';
import transactionscsv from '../../Data/transactions.csv';
import './transactionAnalyser.scss'

class TransactionAnalyser extends Component {

  state = {
    isTransactionDetailsLoading: false,
    transactions: [],
    form: {
      accountId: "ACC334455",
      fromDate: "2018-10-20T00:00",
      toDate: "2018-10-20T19:00"
    },
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
