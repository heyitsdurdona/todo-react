import React from 'react'
import "../styles/main.css"


export default function TodoList({ taskTitle, taskId }) {
  return (
    <>
      <li className="task-list">
        <input
          id={taskId}
          className="visually-hidden"
          type="checkbox"
        />
        <label htmlFor={taskId} className="task-checkbox" />
        <h3 className="task-title">{taskTitle}</h3>
      </li>
    </>
  )
}
