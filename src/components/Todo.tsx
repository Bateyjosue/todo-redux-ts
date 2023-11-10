import { useDispatch, useSelector } from "react-redux"
import { completeTodo, deleteTodo, editTodo } from "../redux/actions/todoReducer"
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from "react"
import classNames from "classnames"

interface TodoPros {
  id: string
  task: string
  completed: boolean
}
interface EditedProps {
  id: string, task: string
}

function Todo() {
  const dispatch = useDispatch()
  const todos: TodoPros[] = useSelector((state: TodoPros) => state.todo)

  console.log(todos);
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState<EditedProps>({ id: '', task: '' })

  const handleRemove: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault()
    const { id } = event.target as HTMLSpanElement
    dispatch(deleteTodo(id));
  }

  const handleComplete: MouseEventHandler<HTMLSpanElement> = (event) => {
    const { id } = event.target as HTMLSpanElement
    dispatch(completeTodo(id));
  }

  const handleEdit: MouseEventHandler<HTMLSpanElement> = (event) => {
    const { id, innerText: task } = event.target as HTMLSpanElement
    setEditText({ id, task })
    setEdit(true)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // event.preventDefault()
    const { value } = event.target as HTMLInputElement
    setEditText(prev => {
      return {
        ...prev,
        task: value
      }
    })
  }

  const handleSave: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      if (editText.id && editText.task.trim() !== "") {
        dispatch(editTodo(editText))
        setEdit(false)
      }
    }
  }

  return (
    todos.length > 0
      ? (
        todos.map((todo: TodoPros) => (
          <div key={todo.id} className={classNames([
            "my-8 py-2 flex items-center justify-between gap-2 border-b-2",
            todo.completed && 'opacity-40',
          ])}>
            <input
              className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-800 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              name="task"
              id={todo.id}
              onClick={handleComplete}
              checked={todo.completed} />
            <label id={todo.id} onDoubleClick={handleEdit} className={classNames([
              "grow",
              todo.completed && 'line-through',
              edit && editText.id === todo.id ? 'hidden' : 'block'
            ])} htmlFor="task">{todo.task}</label>
            {/* input to update task*/}
            <input
              className={classNames([
                "outline-none absolute left-14 text-red-200",
                edit && editText.id === todo.id ? 'block w-full' : 'hidden'
              ])}
              type="text"
              name="task"
              id={editText.id}
              value={editText.task}
              onKeyDown={handleSave}
              onChange={handleChange}
            />
            <span
              id={todo.id}
              onClick={handleRemove}
              className="material-symbols-outlined text-red-500 cursor-pointer">
              delete
            </span>
          </div>
        ))
        )
      : <h1 className="text-4xl font-bold my-12 text-gray-500">No Task Found...</h1>
  )
}

export default Todo