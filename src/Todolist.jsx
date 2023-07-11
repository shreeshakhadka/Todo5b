import { useEffect, useState } from "react";

function Todolist() {

  const[toDoTasks,setToDoTasks] = useState([]);
  const[newTask,setNewTask] =useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => setToDoTasks(data)
      )
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const deleteButton = () => {
    setToDoTasks((oldTasks) => oldTasks.filter((task) => task.id !== taskId));
  };

  const addTask = () => {
    const newTask = {
      id: toDoTasks.length + 1,
      title: newTask,
      completed: false,
    };

    setToDoTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={newTask} onChange={handleChange}></input>
      <button onClick={() => addTask()}>Add Task</button>
      <ul>
        {toDoTasks.map((task) => (
          <li className="beauti-list" key={task.id}>
            {task.title}
            <button
              onClick={() => {
                deleteButton(task.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;