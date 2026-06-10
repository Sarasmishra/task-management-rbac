import toast from "react-hot-toast";
import api from "../api/axios";

const TaskCard = ({
  task,
  refreshTasks,
}) => {
  const toggleComplete = async () => {
    try {
      await api.put(
        `/tasks/${task._id}`,
        {
          completed: !task.completed,
        }
      );

      toast.success(
        "Task updated"
      );

      refreshTasks();
    } catch (error) {
      toast.error(
        error?.response?.data?.message
      );
    }
  };

  const deleteTask = async () => {
    try {
      await api.delete(
        `/tasks/${task._id}`
      );

      toast.success(
        "Task deleted"
      );

      refreshTasks();
    } catch (error) {
      toast.error(
        error?.response?.data?.message
      );
    }
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-5">
      <h3 className="font-bold text-lg">
        {task.title}
      </h3>

      <p className="text-zinc-600 mt-2">
        {task.description}
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={toggleComplete}
          className={`px-3 py-2 rounded-lg text-white ${
            task.completed
              ? "bg-green-600"
              : "bg-orange-500"
          }`}
        >
          {task.completed
            ? "Completed"
            : "Pending"}
        </button>

        <button
          onClick={deleteTask}
          className="bg-black text-white px-3 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;