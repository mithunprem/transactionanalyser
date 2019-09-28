import React, { Component  } from "react"
import Papa from 'papaparse';
import transactionscsv from '../../Data/transactions.csv';

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
    return <h3>Transaction Analyser</h3>;
  }
}

export default TransactionAnalyser;
