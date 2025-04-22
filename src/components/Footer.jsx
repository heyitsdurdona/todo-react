import React from 'react'
import "../styles/main.css"
import { uiRender } from './Header'

export default function Footer({ itemsLeft }) {
    
    return (
        <>
            <li className="footer-li">
                <p className="item-count">{itemsLeft} items left</p>
                <div className="btn-wrapper">
                    <button onClick={() => {uiRender({todo: JSON.parse(localStorage.getItem('todos')) || [], type: "all"})}} className="all-btn btn">All</button>
                    <button onClick={() => {uiRender({todo: JSON.parse(localStorage.getItem('todos')) || [], type: "active"})}} className="active-btn btn">Active</button>
                    <button onClick={() => {uiRender({todo: JSON.parse(localStorage.getItem('todos')) || [], type: "completed"})}} className="completed-btn btn">Completed</button>
                </div>
                <button className="clear-completed-btn btn">Clear Completed</button>
            </li>
        </>
    )
}
