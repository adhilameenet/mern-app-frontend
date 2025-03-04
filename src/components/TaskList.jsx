import axios from "axios";
import "./TaskList.css"; // Import CSS file

const TaskList = ({ tasks, fetchTasks }) => {
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks();
    };

    return (
        <div className="task-container">
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task._id} className="task-item">
                        {task.title}
                        <button className="delete-btn" onClick={() => deleteTask(task._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
