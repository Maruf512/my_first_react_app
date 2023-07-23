// 1. create input and add button and a list div
// 2. create addTask function
// 3. vied data on list div
// 4. create delet function
// 5. add compleate button
// 6. if task is completed mark that as done and change background color to green

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Welcome... Save time by Managing your Task's.</h1>
            <div className="addTaskDiv">
                <input type="text" />
                <button>Add a Task</button>
            </div>
            <div className="viewTasks"></div>
        </div>
    );
}

export default App;
