import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = ({onSaveExpense, cancelEditing}) => {
  const [expense, setExpense] = useState({ title: "", amount: "", date: "" });

  const onCaptureData = ({ target }) => {
    const { name, value } = target;

    
    setExpense((prevState) => {

      return {
        ...prevState,
        [name]: value,

      };
      
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    
    onSaveExpense(expense);
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onCaptureData} name="title" value={expense.title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={onCaptureData} name="amount" value={expense.amount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            name="date"
            onChange={onCaptureData}
            value={expense.date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelEditing}>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};
