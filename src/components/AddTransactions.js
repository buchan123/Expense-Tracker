import "./AddTransactions.css";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Income");

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    if (text !== "" && +amount !== 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: type === "Income" ? +amount : -amount,
      };

      addTransaction(newTransaction);
      setText("");
      setAmount(0);
      setType("Income");
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <input
            type="radio"
            id="income"
            name="income-expense"
            onChange={(e) => setType("Income")}
            checked={type === "Income" ? true : false}
          ></input>
          <label htmlFor="income">Income</label>
          <input
            type="radio"
            id="expense"
            name="income-expense"
            onChange={(e) => setType("Expense")}
            checked={type === "Expense" ? true : false}
          ></input>
          <label htmlFor="expense">Expense</label>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
