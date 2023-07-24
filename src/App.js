import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
    // creating Hook
    const [toDoList, setToDoList] = useState([]);
    const [newToDo, setNewToDo] = useState("");

    // functions
    const handleChange = (event) => {
        setNewToDo(event.target.value);
    };

    // add a task
    const addTask = () => {
        const task = {
            id:
                toDoList.length === 0
                    ? 1
                    : toDoList[toDoList.length - 1].id + 1,
            taskName: newToDo,
            complete: false,
        };
        setToDoList(task.taskName !== "" ? [...toDoList, task] : toDoList);
    };

    // delet a task
    const deleteTask = (id) => {
        setToDoList(toDoList.filter((task) => task.id !== id));
    };

    // task completed
    const completeTask = (id) => {
        toDoList.forEach((toDo) => {
            if (toDo.id === id) {
                toDo.complete = true;
            }
        });
    };

    return (
        <div className="App">
            <h1>Welcome... Save time by Managing your Task's.</h1>
            <div className="addTaskDiv">
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="viewTasks">
                {toDoList.map((task) => {
                    return (
                        <div className="task">
                            <Task
                                taskName={task.taskName}
                                id={task.id}
                                complete={task.complete}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
