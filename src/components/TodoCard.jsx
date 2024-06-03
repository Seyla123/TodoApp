function TodoCard() {
  return (
    <div className="flex mb-4 items-center">
    <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
    <button className="text-nowrap  p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
    <button className=" p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
    </div>
  )
}

export default TodoCard