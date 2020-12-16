import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {

  return (
    <ul className="transactions">
      {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
    </ul >);
}

export default TransactionList;