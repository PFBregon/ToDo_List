import { useState } from "react";

function TodoForm () {
   
    const [tasks, setTasks] = useState(["Learn JavaScript", "Give styles in Sass", "TDD in Java"]);
    const [newTask, setNewTask] = useState("");
   
    function handleInputChange (event) {
        setNewTask(event.target.value);
    }
    function addTask (){
        if(newTask.trim()!== ""){
           setTasks (t => [...t, newTask]);
           setNewTask("");
        }
    }
    function deleteTask (index){
        const updatedTask = tasks.filter((element, i) => i !== index); 
        setTasks(updatedTask); 
    }

    function moveTaskUp (index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks();
        }
    }

    function moveTaskDown (index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks();
        }
    }

    return (
     <div className="to-do-list">  
        
      <form>
          <label htmlFor="new-todo-input" className="label__lg">
          </label>

          <input 
              type="text" 
              placeholder="Add a new task"
              value={newTask}
              onChange={handleInputChange}
              />
                <button 
                   type="button" 
                   className="btn btn__primary btn__lg"
                   onClick={addTask}>
                    Add
                </button>
      </form> 

      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button"
                    onClick={() => deleteTask(index)}>
                Delete
            </button>
            <button className="move-button"
                    onClick={() => moveTaskUp(index)}>
                ⬆️
            </button>
            <button className="move-button"
                    onClick={() => moveTaskDown(index)}>
                ⬇️
            </button>

          </li>
         )}
      </ol>


    </div>);
};

export default TodoForm;