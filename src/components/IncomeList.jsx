import React from 'react'

export default function IncomeList({ income }) {
    return (
        <div className="incomeList">
            <h3>Income List</h3>

            <div className="incList">
                <p>Salary <span>Rs. 48000</span></p>
                <p>Stocks <span>Rs. 2000</span></p>
                <p>Tracker (App) <span>Rs. 5000</span></p>
                <h4>Total <span>Rs. {income}</span></h4>
            </div>
        </div>
    )
}