import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({}); // new state for validation errors

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // stop submission if validation fails

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      onLoginSuccess(res.data.user); // update header
      localStorage.setItem("token", res.data.token); // save token
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md bg-gradient-to-br from-gray-700 via-gray-900 to-gray-600 p-8 rounded-2xl shadow-2xl space-y-6 transition-shadow border-3 border-l-pink-500 border-r-orange-500 border-t-purple-500 border-b-yellow-300 hover:shadow-pink-500/20" 
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-white">Sign In </h2>
      <p className="text-gray-300 text-center">Welcome back! Please enter your details</p>

      {/* Email */}
      <div>
        <label className="block text-gray-300 mb-2 text-sm">Email</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            📧
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full pl-10 px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition hover:shadow-lg hover:border border-cyan-500 hover:shadow-cyan-500/50
              ${errors.email ? "border-red-500 focus:ring-red-500" : ""}
            `}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-300 mb-2 text-sm">Password</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            🔒
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full pl-10 pr-10 px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition hover:shadow-lg hover:border border-cyan-500 hover:shadow-cyan-500/50
              ${errors.password ? "border-red-500 focus:ring-red-500" : ""}
            `}
          />
          {/* Toggle button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Button */}
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
      >
        Sign In
      </button>

      {/* Forgot password */}
      <div className="text-right text-sm text-gray-400">
        <a href="#" className="text-blue-500 hover:text-blue-600 transition">Forgot password?</a>
      </div>

      {/* Create account */}
      <div className="text-center text-gray-400 text-sm">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:text-blue-600 font-medium transition">
          Create account
        </a>
      </div>
    </form>
  );
}
