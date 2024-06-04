// import todoArr from "../data";
// import TodoCard from "./TodoCard"
// import { useState,useRef } from "react";
// function TodoList() {
//     const [todoList, setTodoList] = useState(todoArr);
//     const addItem = (newItem) => {
//       setTodoList(todoList => [...todoList, newItem]);
//     };
//    // Ensure the addItem function is only set once
//     function getIdTodo(id){
//         const newTodo = todoList.filter(todo => todo.id!==id)
//         setTodoList(newTodo);
//     }
//     function isDone (id){
//       const todoUpdate = todoList.filter(todo => todo.id==id)
//       const newTodo = [...todoList]
//       todoUpdate[0].isDone=!todoUpdate[0].isDone
//       setTodoList(newTodo);
//     };
//   return (
//     <div>
//         {todoList.map(todo => {
//             return <TodoCard  {...todo}  getId={getIdTodo} done={isDone}   key={todo.id}/>
//         })}
//     </div>
//   )
// }

// export default TodoList