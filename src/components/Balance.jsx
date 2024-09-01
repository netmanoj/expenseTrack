import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Determine the color based on the balance
  const balanceColor = total < 0 ? 'red' : 'green';

  return (
    <div className="balance">
      <h4 style={{ color: balanceColor }}>Current Balance</h4>
      <h1>₹{total}</h1>
    </div>
  );
};

export default Balance;
