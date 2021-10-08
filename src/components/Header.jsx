import React from 'react'

export default function Header({ amountLeft }) {
    return (
        <div className="header">
            <h2>Tracker</h2>

            <h3><span>Amount Left:</span> Rs. {amountLeft}</h3>
        </div>
    )
}