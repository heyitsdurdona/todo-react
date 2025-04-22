import TodoList from "./TodoList";

export function uiRender({todo, type}){
    if (type === "all"){
        todo.map((todo) => {
            return <TodoList taskTitle={todo.title} taskId={todo.id} />
        })
    } else if (type === "active"){
        let res = todo.filter((todo) => todo.isCompleted === false);    
        res.map((todo) => {
            return <TodoList taskTitle={todo.title} taskId={todo.id} />
        })
    }else if (type === "completed"){
        let res = todo.filter((todo) => todo.isCompleted === true);
        res.map((todo) => {
            return <TodoList taskTitle={todo.title} taskId={todo.id} />
        })
    }
}