import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function Todolist(){
    const[toDoTasks,seToDoTasks] = useState([]);
    const[newTask,setNewTask] =useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(data => setTasks(data));
      }, []);

    const InputChange = event => {
    setNewTask(event.target.value);
    }

    const AddNewTask = () => {
          const newTask = {
            id: tasks.length + 1,
            title: newTask,
            completed: false
          };
        setTasks((oldTaks) => [Task, ...oldTaks]);
        };

        return (
            <div>
              <h1>Todo List</h1>
              <div>
                <input type="text" value={newTask} onChange={handleInputChange} />
                <button onClick={handleAddTask}>Add Task</button>
              </div>
              <ul>
                {tasks.map(task => (
                  <li key={task.id}>{task.title}</li>
                ))}
              </ul>
            </div>
          );
        };
    

