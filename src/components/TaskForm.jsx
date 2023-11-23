import { useState } from "react";
import "../stylesheets/TaskForm.css";
import { v4 as uuidv4 } from "uuid";
const TaskForm = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value); //extraer valor del campo de texto y se asigna al campo de texto
  };
  const handleSend = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false,
    };
    props.onSubmit(newTask);
  };
  return (
    <form className="taskForm" onSubmit={handleSend}>
      <input
        className="taskInput"
        type="text"
        placeholder="Agrega una tarea"
        name="text"
        onChange={handleChange}
      />
      <button className="taskButton">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
