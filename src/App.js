
import { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";


const expenses = [
];

function App() {

 

  const [expensess, setExpenses] = useState(expenses)
    

  const addExpenseHandler =(expenseData)=>{

    console.log(expenseData);

    setExpenses((prevState) =>{
      return[expenseData, ...prevState];
    });

  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense addExpense ={addExpenseHandler}/>
      <Expenses expenses = {expensess}/>
    </div>
  );
}

export default App;
