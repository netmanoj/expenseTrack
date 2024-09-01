import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history">
      <h3>History</h3>
      {transactions.length === 0 ? (
        <p>No current Transaction</p> // Display this message if no transactions
      ) : (
        <ul className="list">
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;
