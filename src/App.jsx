import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import useTasks from "./hooks/useTasks";
import AddTaskModal from "./components/AddTaskModal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { tasks, addTask, deleteTask, setTasks } = useTasks(); 
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ToastContainer />
      <Navbar onAddClick={() => setShowModal(true)} />
      <Table tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
      {showModal && (
        <AddTaskModal
          addTask={addTask}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default App;
