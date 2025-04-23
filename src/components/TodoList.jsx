import React from 'react'
import "../styles/main.css"
import DeleteImg from "../images/delete.svg"

export default function TodoList({ task, updateTodo, deleteTask }) {
  function handleChange(e) {
    const updated = { ...task, isCompleted: e.target.checked }
    updateTodo(updated)
  }

  return (
    <li className="task-list">
      <input
        onChange={handleChange}
        id={task.id}
        checked={task.isCompleted}
        className="visually-hidden checkbox"
        type="checkbox"
      />
      <label htmlFor={task.id} className="task-checkbox" />
      <h3 className="task-title">{task.title}</h3>
      <img onClick={()=> deleteTask(task.id)} className='delete-img' src={DeleteImg} alt="" />
    </li>
  )
}
