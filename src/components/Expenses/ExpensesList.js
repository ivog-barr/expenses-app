import React from 'react'
import { ExpenseItem } from './ExpenseItem';
import './ExpensesList.css'

export const ExpensesList = ({filteredExpenses}) => {

  return (
    <ul className='expenses-list'>
         {
      filteredExpenses.length === 0 
      ?(

        <h3 className='expenses-list__fallback'>No expenses found</h3>
      ):

      (
        filteredExpenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={new Date(e.date)}
          />
        ))
      )
      }
    </ul>
    
  )
};
