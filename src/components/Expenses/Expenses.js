import React, { useState } from "react";
import "./Expenses.css";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const onFilterHandler = (date) => {
    setSelectedYear(date);
  };

  const filteredExpenses = expenses.filter((e) => {
    return e.date.split("-")[0] === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultDate={selectedYear}
        onFilterChange={onFilterHandler}
      />

      <ExpensesList filteredExpenses = {filteredExpenses}/>

     
    </Card>
  );
};
