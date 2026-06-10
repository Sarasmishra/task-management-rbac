import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import AdminNavbar from "../components/AdminNavbar";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response =
      await api.get("/admin/users");

    setUsers(response.data.users);
  };

  const deleteUser = async (id) => {
    await api.delete(
      `/admin/users/${id}`
    );

    toast.success("User deleted");

    fetchUsers();
  };

  const updateStatus = async (
    id,
    status
  ) => {
    await api.patch(
      `/admin/users/${id}/status`,
      {
        status,
      }
    );

    toast.success(
      "Status updated"
    );

    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          User Management
        </h1>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white border rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">
                  {user.name}
                </h3>

                <p>{user.email}</p>

                <p>
                  {user.role}
                  {" | "}
                  {user.status}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() =>
                    updateStatus(
                      user._id,
                      "Active"
                    )
                  }
                  className="bg-green-600 text-white px-3 py-2 rounded"
                >
                  Active
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      user._id,
                      "Inactive"
                    )
                  }
                  className="bg-orange-500 text-white px-3 py-2 rounded"
                >
                  Inactive
                </button>

                <button
                  onClick={() =>
                    deleteUser(
                      user._id
                    )
                  }
                  className="bg-black text-white px-3 py-2 rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;