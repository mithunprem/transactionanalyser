import moment from 'moment';
import { defaultDateFormat } from './dateValidator';

/**
  * Calculates the balance amount based on the user input in form.

  * All the transactions data will be searched first to find valid records that
  * fall within the date range specified and with the matching accountId.
  *
  * While getting the list, those records will be omitted which has a
  * corresponding 'REVERSAL' transaction at any time. Once the transactions
  * subset that matches the input criteria is obtained, traverse the array and
  * calculate the balance amount based on the transaction type.
  *
  * Return a success/error status and message along with the balance amount so
  * that the caller component can display the balance or error accordingly.
*/
const calculateBalance = ( transactions, formData ) => {
  let balance = 0, status = '', message = '' ;
  const { accountId, fromDate, toDate } = formData;

  transactions =
    transactions.filter(({ transactionId, fromAccountId, toAccountId, createdAt, transactionType }) => (
      // Find all PAYMENT records within the date range and matching the accountId
      transactionType === "PAYMENT" &&
      (fromAccountId === accountId || toAccountId === accountId) &&
      createdAt.diff(moment(fromDate, defaultDateFormat)) >= 0 &&
      createdAt.diff(moment(toDate, defaultDateFormat)) <= 0 &&
      // Remove those transactions which has a corresponding REVERSAL transaction
      transactions.findIndex(({ transactionType, relatedTransaction }) => (
        transactionType === "REVERSAL" &&
        relatedTransaction === transactionId
      )) === -1
  ));

  let includedTransactions = transactions.length;
  if (includedTransactions > 0) {
    transactions.forEach(({ fromAccountId, toAccountId, transactionType, amount }) => {
      // If the account is a from account, then the transaction indicates a debit.
      // And if it is a to account, then the transaction indicates a credit.
      if (accountId === fromAccountId) {
        balance -= amount;
      } else {
        balance += amount;
      }
    });
    status = 'success';
    message = 'Balance calculated';
  } else {
    status = 'error';
    message = 'No transactions found for the given criteria.';
  }

  return { status, message, balance, includedTransactions };
}

export default calculateBalance;
