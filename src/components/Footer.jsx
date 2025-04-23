import React from 'react'
import "../styles/main.css"

export default function Footer({ itemsLeft, setFilterType, clearCompleted }) {
  return (
    <li className="footer-li">
      <p className="item-count">{itemsLeft} items left</p>
      <div className="btn-wrapper">
        <button onClick={() => setFilterType("all")} className="all-btn btn">All</button>
        <button onClick={() => setFilterType("active")} className="active-btn btn">Active</button>
        <button onClick={() => setFilterType("completed")} className="completed-btn btn">Completed</button>
      </div>
      <button onClick={clearCompleted} className="clear-completed-btn btn">Clear Completed</button>
    </li>
  )
}
