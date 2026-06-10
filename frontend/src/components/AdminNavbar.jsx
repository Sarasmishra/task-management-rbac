import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminNavbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Admin Dashboard
        </h1>

        <div className="flex gap-4 items-center">
          <Link to="/admin">
            Analytics
          </Link>

          <Link to="/admin/users">
            Users
          </Link>

          <Link to="/admin/tasks">
            Tasks
          </Link>

          <Link to="/admin/activity-logs">
            Logs
          </Link>

          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;