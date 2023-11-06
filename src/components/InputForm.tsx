import { nanoid } from "nanoid"
import { useState } from "react"
import { addTodo } from "../redux/actions/todoReducer"
import { useDispatch } from "react-redux"

interface HandleChangeProps {
  preventDefault: () => void
  target: { value: string }
}

interface TodoPros {
  id: string
  task: string
  completed: boolean
}

function InputForm() {
  const [todoInput, setTodoInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event: HandleChangeProps) => {
    event.preventDefault()
    setTodoInput(event.target.value)
    
  }

  const handleAddTask = (event: { preventDefault: () => void }) => { 
    event.preventDefault()
    const task: TodoPros = {
      id: nanoid(),
      task: todoInput,
      completed: false
    }
    setTodoInput('')
    
    console.log(task);
    dispatch(addTodo(task))
  }
  return (
    <div className="border flex justify-between rounded-full truncate gap-2">
      <input className="py-2 px-2 outline-none grow" type="text" name="task" id="task" placeholder='Add Task' onChange={handleChange} value={todoInput} />
      <button onClick={handleAddTask} className="px-4 text-white font-bold bg-yellow-800 rounded-r-full w-" type="submit">Add</button>
    </div>
  )
}

export default InputForm