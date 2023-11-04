
function Todo() {
  return (
    <div className="my-8 py-2 flex items-center justify-between gap-2 border-b-2">
      <input className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-800 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" name="task" id="task" />
      <label className="grow" htmlFor="task">Make breakfast</label>
      <span className="material-symbols-outlined text-red-500 cursor-pointer">delete</span>
    </div>
  )
}

export default Todo