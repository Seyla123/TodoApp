

function TodoCard(props) {
  const {isDone,title,id,getId,done} = props;
  
  return (
    <div className="flex mb-4 items-center">
    <p className={`w-full   text-green ${isDone ? 'line-through': null}`}>{title}</p>
    <button onClick={()=>done(id)}  className="text-nowrap  p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">{isDone ? 'Not Done' : 'Done' }</button>
    <button onClick={()=>getId(id)}  className=" p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
    </div>
  )
}

export default TodoCard