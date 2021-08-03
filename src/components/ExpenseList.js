import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction'

function ExpenseList() {
    const{expenseTransactions}=useContext(GlobalContext)
  
    return (
        <div className='transactions transactions-expense'> 
            <h2>Transaction History</h2>
            <ul className='transaction-list'>
            {expenseTransactions.map((expense) => (
                
            <ExpenseTransaction key={expense.id} expenseTransaction={expense}/>
            ))}

           
            </ul>
        </div>
    )
}

export default ExpenseList
