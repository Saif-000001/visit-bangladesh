import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate(); // Import useNavigate to redirect after successful registration

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("User registered successfully");
        // Redirect to login page after successful registration
        navigate("/login");
      } else {
        toast.error(data.detail || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  // Check if all form fields are filled
  const isFormComplete = form.username && form.email && form.password;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>

        <label className="block mb-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </label>

        <label className="block mb-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </label>

        <label className="block mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </label>

        <button
          onClick={handleSubmit}
          disabled={!isFormComplete} // Disable button if form is not complete
          className={`w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            !isFormComplete ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Register"} 
        </button>

        <p className="text-center mt-5">
          Already have an account{" "}
          <Link to="/login" className="text-secondary font-bold">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Registration;
