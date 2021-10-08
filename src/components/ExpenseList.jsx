import React from 'react'

export default function ExpenseList({ expense }) {
    return (
        <div className="expenseList">
            <h3>Expense</h3>

            <div className="expList">
                <p>Keyboard classes <span>Rs. 1500</span></p>
                <p>French classes <span>Rs. 1200</span></p>
                <p>Stocks <span>Rs. 12000</span></p>
                <p>Grocery <span>Rs. 500</span></p>
                <h4>Total <span>Rs. {expense}</span></h4>
            </div>
        </div>
    )
}