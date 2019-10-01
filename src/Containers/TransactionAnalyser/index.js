import React, { Component, Fragment  } from 'react';
import LoadingView from '../../Components/LoadingView';
import AnalyserInterface from '../../Components/AnalyserInterface';
import parseCsvFile from '../../Utils/csvParser';
import transactionscsv from '../../Data/transactions.csv';
import './transactionAnalyser.scss';

export default class TransactionAnalyser extends Component {

  state = {
    isTransactionDetailsLoading: false,
    transactions: []
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

  render() {
    const { isTransactionDetailsLoading, transactions } = this.state;
    return (
      <Fragment>
        <div className="transaction-analyser">
          {/* Show the loading spinner till the data is available */
            isTransactionDetailsLoading ?
              <LoadingView /> : <AnalyserInterface transactions={transactions} />
          }
        </div>
      </Fragment>
    )
  }
}
