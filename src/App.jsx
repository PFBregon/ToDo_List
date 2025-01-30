import { useState } from 'react'
import './App.css'
import TodoForm from './Components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <div> 
         <TodoForm/>
      </div>

    </div> 

  )
}

export default App;
