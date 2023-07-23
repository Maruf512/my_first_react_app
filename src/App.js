// 1. create input and add button and a list div
// 2. create addTask function
// 3. vied data on list div
// 4. create delet function
// 5. add compleate button
// 6. if task is completed mark that as done and change background color to green

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
            compleat: false,
        };
        setToDoList(task.taskName !== "" ? [...toDoList, task] : toDoList);
    };

    // delet a task
    const deleteTask = (id) => {
        setToDoList(toDoList.filter((task) => task.id !== id));
    };

    // task completed
    const completeTask = (id) => {
        console.log("CompleteTask");
        console.log(id);
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
                                compleat={task.compleat}
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
