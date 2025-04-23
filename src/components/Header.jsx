import React from 'react'
import "../styles/main.css"
import TodoList from './TodoList'
import Moon from "../images/moon.svg"
import TodoLogo from "../images/todo-logo.svg"
import Footer from './Footer';

export default function Header({ t, setT, fullTodoList, setFilterType, updateTodo, clearCompleted, deleteTask }) {

  function addTask(todo) {
    let res = [...fullTodoList, todo];
    localStorage.setItem('todos', JSON.stringify(res));
    setT(res);
  }

  function checkInput(e) {
    let input = e.target.value;
    let pattern = /^\s+/g;
    if (pattern.test(input)) {
      e.target.value = input.trimStart()
    }
  }

  function submitTask(e) {
    e.preventDefault()
    if (e.target.input.value.length < 5) return;

    const formData = new FormData(e.target);
    addTask({ title: formData.get('input'), id: Date.now(), isCompleted: false });

    e.target.reset()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <a href="#" className="logo-link">
            <img src={TodoLogo} alt="" className="logo-img" />
          </a>
          <img className="moon-img" src={Moon} alt="todo logo" />
        </div>

        <form onSubmit={submitTask} onInput={checkInput} className='inputForm'>
          <input className='input' name="input" type="text" placeholder='Create a new todo...' autoComplete="off" minLength={5} />
        </form>

        <ul className="task-li">
          {t.map((task) => (
            <TodoList key={task.id} task={task} updateTodo={updateTodo} deleteTask={deleteTask} />
          ))}
          {fullTodoList.length > 0 && (
            <Footer 
              itemsLeft={fullTodoList.filter(todo => !todo.isCompleted).length}
              setFilterType={setFilterType}
              clearCompleted={clearCompleted}
            />
          )}
        </ul>
      </div>
    </header>
  )
}
