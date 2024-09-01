import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from '../AppReducer';

// Initial state
const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  // Save transactions to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

