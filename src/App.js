import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (data) => {
  return (
    <div>
      {<h1>{data.company}</h1>}
      {<h2>{data.position}</h2>}
      {<h2>{data.salary}</h2>}
    </div>
  );
};

export default App;
