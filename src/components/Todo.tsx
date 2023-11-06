import { useDispatch, useSelector } from "react-redux"
import { completeTodo, deleteTodo } from "../redux/actions/todoReducer"
import { MouseEventHandler } from "react"
import classNames from "classnames"

interface TodoPros {
  id: string
  task: string
  completed: boolean
}

function Todo() {
  const dispatch = useDispatch()
  const todos: TodoPros[] = useSelector((state: TodoPros) => state.todo)

  const handleRemove: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault()
    const { id } = event.target as HTMLSpanElement
    dispatch(deleteTodo(id));
  }

  const handleComplete: MouseEventHandler<HTMLSpanElement> = (event) => {
    const { id } = event.target as HTMLSpanElement
    dispatch(completeTodo(id));
  }

  return (
    todos.length > 0
      ? (
        todos.map((todo: TodoPros) => (
          <div key={todo.id} className="my-8 py-2 flex items-center justify-between gap-2 border-b-2">
            <input
              className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-800 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              name="task"
              id={todo.id}
              onClick={handleComplete}
              checked={todo.completed}
            />
            <label className={classNames([
              "grow",
              todo.completed && 'line-through',
            ])} htmlFor="task">{todo.task}</label>
            <span
              id={todo.id}
              onClick={handleRemove}
              className="material-symbols-outlined text-red-500 cursor-pointer">delete</span>
          </div>
        ))
        )
      : <h1 className="text-4xl font-bold my-12 text-gray-500">No Task Found...</h1>
  )
}

export default Todo