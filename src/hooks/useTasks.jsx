import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const formattedTasks = response.data.slice(0, 20).map((task) => ({
          id: task.id,
          title: task.title,
          description: "Sample Description",
          status: task.completed ? "Done" : "To Do",
        }));
        setTasks(formattedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    toast.success("Task Added Successfully");
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.error("Task Deleted Successfully...");
  };

  return { tasks, setTasks, addTask, deleteTask };
};

export default useTasks;
