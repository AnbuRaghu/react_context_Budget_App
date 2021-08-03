import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid' // to create unique id
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {

   
  //destructuring addIncome function from globalstate
  const { addIncome } = useContext(GlobalContext)
  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0,
  })
  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value })
    console.log(income)
  }
  const onSubmitIncome = (e) => {
    e.preventDefault()
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText: income.incomeText,
      incomeAmount: income.incomeAmount * 1, // it gives number format for string cz of type cohersion
    }
    addIncome(newIncomeTransaction)
    setIncome({
      incomeText: '',
      incomeAmount: 0,
    })
  }

  const { addExpense } = useContext(GlobalContext)
  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0,
  })
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value })
    console.log(expense)
  }
  const onSubmitExpense = (e) => {
    e.preventDefault()
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText: expense.expenseText,
      expenseAmount: expense.expenseAmount * 1, // it gives number format for string cz of type cohersion
    }
    addExpense(newExpenseTransaction)
    setExpense({
      expenseText: '',
      expenseAmount: 0,
    })
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income.."
            autoComplete="off"
            value={income.incomeText}
            onChange={onChangeIncome}
          />

          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            value={income.incomeAmount}
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="Add Expenses.."
            name="expenseText"
            autoComplete="off"
            value={expense.expenseText}
            onChange={onChangeExpense}
          />

          <input
            type="number"
            name="expenseAmount"
            placeholder="amount"
            autoComplete="off"
            onChange={onChangeExpense}
            value={expense.expenseAmount}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
