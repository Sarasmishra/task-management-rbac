import { useEffect, useState } from "react";
import api from "../api/axios";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response =
        await api.get("/tasks");

      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4">

        <TaskForm
          onTaskCreated={
            fetchTasks
          }
        />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Your Tasks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                refreshTasks={
                  fetchTasks
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;