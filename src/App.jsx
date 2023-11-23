import { useEffect } from "react";
import "./App.css";
import LogoArgentinaPrograma from "./components/BannerArgPrograma";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {

  return (
    <div className="App">
      <LogoArgentinaPrograma />
      <div className="tasks-main">
        <h1>Lista de Tareas</h1>
        {/* <Task text="ArgPrograma React" /> */}
        {/* <TaskForm /> */}
        <TaskList />
      </div>
    </div>
  );
}

export default App;
