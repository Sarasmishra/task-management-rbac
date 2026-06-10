import { useEffect, useState } from "react";
import api from "../api/axios";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get("/tasks");

      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4">
        <TaskForm onTaskCreated={fetchTasks} />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>

          {tasks.length === 0 ? (
            <div className="bg-white border rounded-xl p-10 text-center">
              <h3 className="text-xl font-semibold">No Tasks Found</h3>

              <p className="text-zinc-500 mt-2">Create your first task.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  refreshTasks={fetchTasks}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
