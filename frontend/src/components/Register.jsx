import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function Register({ onRegisterSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) newErrors.name = "Name is required";

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

    // Confirm password validation
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const user = { name, email };
    onRegisterSuccess(user);
  };

  return (
    
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gbg-gradient-to-r from-[#112240]/50 via-[#112240]/10 to-[#0a192f]/90 p-8 rounded-2xl shadow-2xl space-y-6 transition-shadow border-3 border-l-pink-500 border-r-orange-500 border-t-purple-500 border-b-yellow-300 hover:shadow-pink-500/20"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>
        <p className="text-gray-300 text-center">Create your account to get started</p>

        {/* Name */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm">Name</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full pl-10 px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition hover:shadow-lg hover:border border-cyan-500 hover:shadow-cyan-500/50
                ${errors.name ? "border-red-500 focus:ring-red-500" : ""}
              `}
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaEnvelope />
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
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-10 pr-10 px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition hover:shadow-lg hover:border border-cyan-500 hover:shadow-cyan-500/50
                ${errors.password ? "border-red-500 focus:ring-red-500" : ""}
              `}
            />
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

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm">Confirm Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full pl-10 pr-10 px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition hover:shadow-lg hover:border border-cyan-500 hover:shadow-cyan-500/50
                ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : ""}
              `}
            />
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 shadow-md"
        >
          Sign Up
        </button>

        {/* Already have account */}
        <div className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:text-cyan-500 font-medium transition">
            Sign in
          </a>
        </div>
      </form>
    
  );
}
