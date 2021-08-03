import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

function ExpenseTransaction({expenseTransaction}) {
    const{deleteTransaction}=useContext(GlobalContext)

    
    return (
        <li className='transaction'>
                <span className='transaction-text'>{expenseTransaction.expenseText}</span>
                <span className='transaction-text'>${expenseTransaction.expenseAmount}</span>
                <button className='delete-btn' >
                 <i className="fas fa-trash-alt" onClick={()=>deleteTransaction(expenseTransaction.id)}></i> 
                </button>
            </li>
    )
}

export default ExpenseTransaction
