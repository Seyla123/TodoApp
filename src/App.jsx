
import { useState } from 'react';
import './App.css'
import todoArr from "./data";
import TodoCard from "./components/TodoCard"

function App() {

  const [todoList, setTodoList] = useState(todoArr);
    const addItem = (newItem) => {
      setTodoList(todoList => [...todoList, newItem]);
    };
    function getIdTodo(id){
        const newTodo = todoList.filter(todo => todo.id!==id)
        setTodoList(newTodo);
    }
    function isDone (id){
      const todoUpdate = todoList.filter(todo => todo.id==id)
      const newTodo = [...todoList]
      todoUpdate[0].isDone=!todoUpdate[0].isDone
      setTodoList(newTodo);
    };
  const handleAddItem = (e) => {
    e.preventDefault()
    const input = document.querySelector("#inputField");
    const title = input.value
    const newItem = { id: todoList.length, title: title, isDone: false, isDeleted: false };;
    if(input.value.length>0){
      setTodoList([...todoList,newItem]); 
    }
  };
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <form className="flex mt-4">
              <input id='inputField' className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
              <button onClick={handleAddItem} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </form>
          </div>
          <div>
            {todoList.map(todo => {
              return <TodoCard  {...todo} getId={getIdTodo} done={isDone} key={todo.id} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
