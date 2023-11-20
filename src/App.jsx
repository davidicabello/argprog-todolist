import "./App.css";
import LogoArgentinaPrograma from "./components/BannerArgPrograma";
import Task from "./components/Task";
function App() {
  return (
    <div className="App">
      <LogoArgentinaPrograma />
      <div className="tasks-main">
        <h1>Tasks</h1>
        <Task text="ArgPrograma React" />
      </div>
    </div>
  );
}

export default App;
