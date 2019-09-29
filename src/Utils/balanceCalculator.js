import moment from 'moment';

const calculate = ( transactions, formData ) => {
  let balance = 0, status = '', message = '';
  const { accountId, fromDate, toDate } = formData;

  transactions =
    transactions.filter(({ fromAccountId, createdAt, transactionId }) => (
      fromAccountId === accountId &&
      createdAt > moment(fromDate) &&
      createdAt < moment(toDate) &&
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

export default calculate;
