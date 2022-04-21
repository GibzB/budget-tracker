import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 12, name: 'Rent', cost: 40 },
        { id: 13, name: 'Construction', cost: 400 },
        { id: 14, name: 'Sacco ', cost: 50 },
    ];

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList