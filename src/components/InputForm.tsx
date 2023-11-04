
function InputForm() {
  return (
    <div className="border flex justify-between rounded-full truncate gap-2">
      <input className="py-2 px-2 outline-none grow" type="text" name="task" id="task" placeholder='Add Task' />
      <button className="px-4 text-white font-bold bg-yellow-800 rounded-r-full w-" type="submit">Add</button>
    </div>
  )
}

export default InputForm