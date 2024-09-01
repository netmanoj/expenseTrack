import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionType = transaction.amount < 0 ? 'minus' : 'plus';

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this transaction?");
    if (isConfirmed) {
      deleteTransaction(id);
    }
  };

  return (
    <li className={transactionType}>
      <button className="delete-btn" onClick={() => handleDelete(transaction.id)}>
        <i className="fa-solid fa-x"></i>
      </button>
      <span className="transaction-text">
        {transaction.text}
      </span>
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
