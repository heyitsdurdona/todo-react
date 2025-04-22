import React from 'react'
import "../styles/main.css"

export default function Footer({ itemsLeft }) {
    
    return (
        <>
            <li className="footer-li">
                <p className="item-count">{itemsLeft} items left</p>
                <div className="btn-wrapper">
                    <button onClick={() => { }} className="all-btn btn">All</button>
                    <button className="active-btn btn">Active</button>
                    <button className="completed-btn btn">Completed</button>
                </div>
                <button className="clear-completed-btn btn">Clear Completed</button>
            </li>
        </>
    )
}
