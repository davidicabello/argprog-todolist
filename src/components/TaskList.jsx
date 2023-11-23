import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../stylesheets/TaskList.css";
const TaskList = () => {
  const [tasks, setTasks] = useState([]); //se inicia el estado con un array vacio

  const addTask = (task) => {
    if (task.text.trim()) {
      //verifica cadena vacia
      task.text = task.text.trim(); //saca espacios
      const updatedTasks = [task, ...tasks]; //arreglo anterior y nuevas
      setTasks(updatedTasks); //actualiza
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="taskListContainer">
        {tasks.map((task) => (
          <Task
            key={task.id} //identifica elemento en la lista
            id={task.id} //se pasa como prop
            text={task.text}
            complete={task.complete}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
