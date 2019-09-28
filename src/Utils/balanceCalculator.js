import moment from 'moment';

const calculate = ( transactions, formData ) => {
  let balance = 0;
  const { accountId, fromDate, toDate } = formData;

  transactions.filter(record => (
    record.fromAccountId === accountId &&
    record.createdAt > moment(fromDate) &&
    record.createdAt < moment(toDate) &&
    transactions.findIndex(transaction => (
      transaction.transactionType === "REVERSAL" &&
      transaction.relatedTransaction === record.transactionId
    )) === -1
  )).map(item => {
    if (item.transactionType === "PAYMENT") balance -= item.amount
    if (item.transactionType === "REVERSAL") balance += item.amount
    return true;
  })

return balance;

}

export default calculate;
