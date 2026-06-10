import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import AuthInput from "../components/AuthInput";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post(
        "/auth/login",
        formData
      );

      login(
        response.data.token,
        response.data.user
      );

      toast.success(response.data.message);

      if (
        response.data.user.role === "Admin"
      ) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-zinc-500 text-center mb-8">
          Login to continue
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <AuthInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <AuthInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <p className="text-center text-zinc-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-black font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;