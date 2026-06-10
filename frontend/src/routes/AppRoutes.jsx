import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";

import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";
import UserManagement from "../pages/UserManagement";
import TaskMonitoring from "../pages/TaskMonitoring";
import ActivityLogs from "../pages/ActivityLogs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <UserManagement />
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/tasks"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <TaskMonitoring />
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/activity-logs"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <ActivityLogs />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
