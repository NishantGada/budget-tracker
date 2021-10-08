import React from 'react'

export default function ExpenseList({ expenseList, totalExpense }) {

    const listItems = expenseList.map(function (item) {
        return <p key={item.key}> {item.name} <span>Rs. {item.amount}</span></p>
    })

    return (
        <div className="expenseList">
            <h3>Expense</h3>

            <div className="expList">

                {listItems}

                <h4>Total <span>Rs. {totalExpense}</span></h4>
            </div>
        </div>
    )
}
