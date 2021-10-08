import React from 'react'

export default function ExpenseList() {
    return (
        <div className="expenseList">
            <h3>Expense List</h3>

            <div className="expList">
                <p>Keyboard classes <span>Rs. 1500</span></p>
                <p>French classes <span>Rs. 1200</span></p>
                <p>Stocks <span>Rs. 12000</span></p>
                <p>Grocery <span>Rs. 500</span></p>
                <p>Total <span>Rs. 15200</span></p>
            </div>
        </div>
    )
}