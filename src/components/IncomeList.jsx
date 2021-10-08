import React from 'react'

export default function IncomeList({ incomeList, totalIncome }) {

    const listItems = incomeList.map(function (item) {
        return <p key={item.key}> {item.name} <span>Rs. {item.amount}</span></p>
    })

    return (
        <div className="incomeList">
            <h3>Income</h3>

            <div className="incList">
                {listItems}
                <h4>Total <span>Rs. {totalIncome}</span></h4>
            </div>
        </div>
    )
}