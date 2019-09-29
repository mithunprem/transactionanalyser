import React, { Component, Fragment  } from 'react';
import Loader from 'react-loader-spinner';
import Form from '../../Components/Form';
import Balance from '../../Components/Balance';
import parseCsvFile from '../../Utils/csvParser';
import balanceCalculator from '../../Utils/balanceCalculator';
import transactionscsv from '../../Data/transactions.csv';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './transactionAnalyser.scss';

export default class TransactionAnalyser extends Component {

  state = {
    isTransactionDetailsLoading: false,
    transactions: [],
    balanceResult: {}
  }

  componentDidMount() {
    // Set a loading flag and try to load the data in the csv file.
    this.setState(
      {
        isTransactionDetailsLoading: true
      },
      async () => {
        const transactions = await parseCsvFile(transactionscsv);
        this.setState({
          // Set the loading flag to false once data is loaded.
          isTransactionDetailsLoading: false,
          transactions
        });
      }
    );
  }

  calculateBalance = formData => {
    const { transactions } = this.state;
    const balanceResult = balanceCalculator(transactions, formData);
    this.setState({ balanceResult });
  }

  render() {
    const { isTransactionDetailsLoading, balanceResult } = this.state;
    return (
      <Fragment>
        <div className="transaction-analyser">
          {/* Show the loading spinner till the data is available */
            isTransactionDetailsLoading ?
            (
              <Fragment>
                <Loader type="TailSpin" color="#ffffff" />
                <h5 className="mt-3"> Loading transactions… </h5>
              </Fragment>
            ) :
            (
              <Fragment>
                <h2>Relative account balance</h2>
                <p>Please enter the following details.</p>
                <Form onSubmit={this.calculateBalance} />
                <Balance balanceResult={balanceResult} />
              </Fragment>
            )
          }
        </div>
      </Fragment>
    )
  }
}
