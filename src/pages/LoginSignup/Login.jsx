import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Regex for Gmail validation (case-insensitive)
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

    if (!gmailRegex.test(email)) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    setError("");
    // Login logic here
    alert(`Logged in with: ${email}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 px-6 py-8 ">
      {/* Breadcrumb */}
      <div className="mb-4">
        <span className="text-sm text-gray-600">
            <a href="/"><span className="text-indigo-600 font-semibold">Home</span> /{" "}</a>
          
          <span className="text-gray-800">Login</span>
        </span>
      </div>

      {/* Centered Login Form */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white px-10 py-12 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#4F46E5] mb-6 text-center">
            Welcome back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-gray-600 text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
