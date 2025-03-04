import { useState } from "react";
import axios from "axios";
import "./TaskForm.css"; // Import CSS file

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/tasks", { title });
        setTitle("");
        fetchTasks();
    };

    return (
        <div className="form-container">
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task"
                    className="task-input"
                />
                <button type="submit" className="task-button">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
