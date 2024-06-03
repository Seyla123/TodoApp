import todoArr from "../data";
import TodoCard from "./TodoCard"
import { useState } from "react";
function TodoList() {
    const [todoList, setTodoList] = useState(todoArr);
    function getIdTodo(id){
        const newTodo = todoList.filter(todo => todo.id!==id)
        setTodoList(newTodo);
    }
    function isDone(id){
    //     const newTodo = todoList.filter(todo => todo.id!==id)
         const findTodo = todoList.reduce(app,todo => {
           console.log("", todo.id);
        },[])
        console.log(findTodo)
    //     newTodo[id].isDone = !newTodo[id].isDone;
    //    setTodoList(newTodo.concat(findTodo));
       //({...todoList,...findTodo.isDone=!findTodo.isDone});
    }
  return (
    <div>
        {todoList.map(todo => {
            return <TodoCard  {...todo}  getId={getIdTodo} done={isDone}   key={todo.id}/>
        })}
    </div>
  )
}

export default TodoList