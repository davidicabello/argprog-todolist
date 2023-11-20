import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Task = ({ text, complete }) => {
  return (
    <div className={complete ? "task-container complete" : "task-container"}>
      <div className="task-text">{text}</div>
      <div className="task-icon">
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;
