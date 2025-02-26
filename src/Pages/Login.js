import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { TextField, Button, InputAdornment } from "@mui/material";
import img from "../IMG/Screenshot 2025-02-27 022752.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("https://your-backend-url.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Try again.");
      }

      console.log("Login Success:", data);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex justify-center items-center px-4">
      <motion.div
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-4xl w-full flex flex-col md:flex-row"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side: Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img src={img} alt="Login Illustration" className="rounded-lg shadow-md" />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome Back!
          </motion.h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUser className="text-gray-400" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password Field */}
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock className="text-gray-400" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<FaSignInAlt />}
              fullWidth
              className="bg-blue-500 hover:bg-blue-600 transition-all"
            >
              Login
            </Button>

            {/* Forgot Password & Sign Up */}
            <div className="flex justify-between text-sm opacity-80 mt-4">
              <a href="/forgot-password" className="hover:underline">Forgot Password?</a>
              <a href="/signup" className="hover:underline">Sign Up</a>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}



