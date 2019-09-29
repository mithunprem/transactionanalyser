import moment from 'moment';

/**
  * Calculates the balance amount based on the user input in form.

  * All the transactions data available will be searched first to find valid
  * records that fall within the date range specified and with the matching
  * accountId. While getting the list, those records will be omitted which
  * has a corresponding 'REVERSAL' transaction at any time.

  * Once the transactions subset that matches the criteria is obtained, traverse
  * the array and calculate the balance amount based on the transaction type.

  * Return a success/error status and message along with the balance amount so
  * that the caller component can display the balance or error accordingly.
*/
const calculateBalance = ( transactions, formData ) => {
  let balance = 0, status = '', message = '';
  const { accountId, fromDate, toDate } = formData;

  transactions =
    transactions.filter(({ fromAccountId, createdAt, transactionId }) => (
      // Find records within the date range and matching the accountId
      fromAccountId === accountId &&
      createdAt > moment(fromDate) &&
      createdAt < moment(toDate) &&
      // Remove those transactions which has a corresponding REVERSAL transaction
      transactions.findIndex(({ transactionType, relatedTransaction }) => (
        transactionType === "REVERSAL" &&
        relatedTransaction === transactionId
      )) === -1
  ));

  if (transactions.length > 0) {
    transactions.forEach(({ transactionType, amount }) => {
      if (transactionType === "PAYMENT") balance -= amount;
      if (transactionType === "REVERSAL") balance += amount;
    });
    status = 'success';
    message = 'Balance calculated';
  } else {
    status = 'error';
    message = 'No transactions found for the given criteria.';
  }

  return { status, message, balance };
}

export default calculateBalance;
