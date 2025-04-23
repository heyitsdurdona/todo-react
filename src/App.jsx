import { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {
  const [t, setT] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filterType, setFilterType] = useState('all');

  const getFilteredTodos = () => {
    if (filterType === "active") return t.filter(todo => !todo.isCompleted);
    if (filterType === "completed") return t.filter(todo => todo.isCompleted);
    return t; 
  }

  const updateTodo = (updateTodo) => {
    const updatedList = t.map(todo => todo.id === updateTodo.id? updateTodo : todo);
    setT(updatedList);
  }

  const clearCompleted = () => {
    const activeTodos = t.filter(todo => !todo.isCompleted);
    setT(activeTodos);
  }

  const deleteTodo = (id) =>{
    const res = t.filter(todo => todo.id !== id);
    setT(res);
  }

  return (
    <>
      <Header
        t={getFilteredTodos()}
        setT={setT}
        setFilterType={setFilterType}
        fullTodoList={t}
        updateTodo={updateTodo}
        clearCompleted={clearCompleted}
        deleteTask={deleteTodo}
      />
    </>
  )
}

export default App
