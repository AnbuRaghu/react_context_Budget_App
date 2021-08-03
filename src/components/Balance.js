import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  //getting income transaction and expense transaction from global scope
  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)

  const incomeAmounts = incomeTransactions.map((income) => income.incomeAmount)

 const expenseAmounts = expenseTransactions.map(
    (expense) => expense.expenseAmount
  ) 
 const totalIncome = incomeAmounts.reduce((accu, item) => (accu += item),0).toFixed(2)
  const totalExpense = expenseAmounts.reduce((accu, item) => (accu += item), 0).toFixed(2)

  return (
    <div className="balance">
      <h2>Your balance</h2>
      <h3>${(totalIncome-totalExpense).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${totalExpense}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
