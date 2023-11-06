import InputForm from "./components/InputForm"
import Todo from "./components/Todo"

function App() {

  return (
    <div className="container mx-auto px-8">
      <h1 className="text-5xl font-bold text-gray-500 text-center my-12">Todos</h1>
      <InputForm />
      <Todo />
    </div>
  )
}

export default App
