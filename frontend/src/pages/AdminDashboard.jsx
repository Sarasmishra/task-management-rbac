import { useEffect, useState } from "react";
import api from "../api/axios";
import AdminNavbar from "../components/AdminNavbar";

const AdminDashboard = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const fetchAnalytics = async () => {
    try {
      const response =
        await api.get(
          "/admin/analytics"
        );

      setAnalytics(
        response.data.analytics
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (!analytics)
    return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-zinc-50">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Analytics
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white border rounded-xl p-5">
            <h3>Total Users</h3>
            <p className="text-3xl font-bold">
              {analytics.totalUsers}
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3>Total Tasks</h3>
            <p className="text-3xl font-bold">
              {analytics.totalTasks}
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3>Completed</h3>
            <p className="text-3xl font-bold">
              {
                analytics.completedTasks
              }
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3>Pending</h3>
            <p className="text-3xl font-bold">
              {analytics.pendingTasks}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;