import { useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", {
        title,
        description,
      });

      toast.success(
        "Task created successfully"
      );

      setTitle("");
      setDescription("");

      onTaskCreated();
    } catch (error) {
      toast.error(
        error?.response?.data?.message
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-zinc-200 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Create Task
      </h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border border-zinc-300 rounded-lg p-3 mb-3"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        className="w-full border border-zinc-300 rounded-lg p-3 mb-3"
      />

      <button
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;