import "./TransactionsList.css";
import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
