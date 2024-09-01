import React from 'react';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionType = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={transactionType}>
      {transaction.text}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
