import React, { useState } from 'react'
import "../styles/main.css"
import TodoList from './TodoList'
// Importing images
import Moon from "../images/moon.svg"
import TodoLogo from "../images/todo-logo.svg"
import Footer from './Footer';

export function uiRender({todo, type}){
    if (type == "all"){
        todo.map((task) => {
            return <TodoList taskTitle={task.title} taskId={task.id} />
        })
    } else if (type == "active"){
        let res = todo.filter((task) => task.isCompleted === false);    
        res.map((task) => {
            return <TodoList taskTitle={task.title} taskId={task.id} />
        })
    }else if (type == "completed"){
        let res = todo.filter((task) => task.isCompleted === true);
        res.map((task) => {
            return <TodoList taskTitle={task.title} taskId={task.id} />
        })
    }
}

export default function Header() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const [task, setTask] = useState(todos);

    function addTask(todo){
        let res = [...todos, todo];
        localStorage.setItem('todos', JSON.stringify(res));
        setTask(res);
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
        addTask({title: formData.get('input'), id: Date.now(), isCompleted: false});
        
        e.target.reset()
    }
    console.log(uiRender(task, 'all'))
    
    return (
        <>
        {/* HEADER */}
            <header className="header">
                <div className="container">
                    <div className="header-container">
                        <a href="#" className="logo-link">
                            <img src={TodoLogo} alt="" className="logo-img" />
                        </a>
                        <img className="moon-img" src={Moon} alt="todo logo" />
                    </div>

                    {/* INPUT FORM */}
                    <form onSubmit={submitTask} onInput={checkInput} className='inputForm'>
                        <input className='input' name="input" type="text" placeholder='Create a new todo...' autoComplete="off" minLength={5} />
                    </form>
                    
                    {/* TASK LIST */}
                    <ul className="task-li">
                        {uiRender(task, 'all')}
                        {task.length > 0 ? <Footer itemsLeft={task.length} />: undefined}
                    </ul>
                </div>
            </header>
        </>
    )
}
