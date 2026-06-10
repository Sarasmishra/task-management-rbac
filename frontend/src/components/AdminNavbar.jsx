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
          <Link to="/admin" className="hover:text-zinc-500">
            Analytics
          </Link>

          <Link to="/admin/users" className="hover:text-zinc-500">
            Users
          </Link>

          <Link to="/admin/tasks" className="hover:text-zinc-500">
            Tasks
          </Link>

          <Link to="/admin/activity-logs" className="hover:text-zinc-500">
            Logs
          </Link>
          <Link to="/" className="hover:text-zinc-500">
  User Dashboard
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