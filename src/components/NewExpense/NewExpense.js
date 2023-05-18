import React, { useState } from "react";
import './NewExpense.css'
import { ExpenseForm } from "./ExpenseForm";


export const NewExpense = ({addExpense}) => {

  const [appearForm, setAppearform] = useState(false)
  const onSaveExpenseHandler =(expenseData)=>{
    const expense = {
      ...expenseData,
      id:Math.random().toString()
    }
   addExpense(expense);

  };

  const startEditing =()=>{
    setAppearform(true);
  };

  const cancelEditing = () =>{
    setAppearform(false);
  }
  return (
    <div className="new-expense">


      {
        !appearForm 
        ? <button onClick={startEditing}>Add Expense</button> 
        :<ExpenseForm onSaveExpense ={onSaveExpenseHandler} cancelEditing={cancelEditing}/>
      }
        
        

    </div>
  );
};
