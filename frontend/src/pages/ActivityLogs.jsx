import { useEffect, useState } from "react";
import api from "../api/axios";
import AdminNavbar from "../components/AdminNavbar";

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    const response =
      await api.get(
        "/admin/activity-logs"
      );

    setLogs(response.data.logs);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Activity Logs
        </h1>
        {logs.length === 0 ? (
  <div className="bg-white border rounded-xl p-10 text-center">
    No Activity Logs Found
  </div>
) : (

        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log._id}
              className="bg-white border rounded-xl p-4"
            >
              <p>
                <strong>
                  {
                    log.userId
                      ?.name
                  }
                </strong>
              </p>

              <p>
                {log.action}
              </p>

              <p className="text-zinc-500">
                {new Date(
                  log.createdAt
                ).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
)}
      </div>
    </div>
  );
};

export default ActivityLogs;