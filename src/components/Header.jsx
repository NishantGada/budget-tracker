import React from 'react'

export default function Header({ left }) {
    return (
        <div className="header">
            <h2>Tracker</h2>

            <h3><span>Amount Left:</span> Rs. {left}</h3>
        </div>
    )
}