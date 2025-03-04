import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/Taskform";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await axios.get("https://task-manager-f5dx.onrender.com/api/tasks");
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <center><h1>Task Manager</h1></center>
            <TaskForm fetchTasks={fetchTasks} />
            <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </div>
    );
};

export default App;
