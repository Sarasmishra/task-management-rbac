import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import AdminNavbar from "../components/AdminNavbar";

const TaskMonitoring = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response =
      await api.get("/admin/tasks");

    setTasks(response.data.tasks);
  };

  const deleteTask = async (id) => {
    await api.delete(
      `/admin/tasks/${id}`
    );

    toast.success("Task deleted");

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Task Monitoring
        </h1>

{tasks.length === 0 ? (
  <div className="bg-white border rounded-xl p-10 text-center">
    No Tasks Found
  </div>
) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white border rounded-xl p-4 flex justify-between"
            >
              <div>
                <h3 className="font-bold">
                  {task.title}
                </h3>

                <p>
                  {
                    task.createdBy
                      ?.name
                  }
                </p>

                <p>
                  {task.completed
                    ? "Completed"
                    : "Pending"}
                </p>
              </div>

              <button
                onClick={() =>
                  deleteTask(
                    task._id
                  )
                }
                className="bg-black text-white px-3 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
)}
      </div>
    </div>
  );
};

export default TaskMonitoring;