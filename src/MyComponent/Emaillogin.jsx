import { useState } from "react";

export default function Emaillogin() {
  const [formData, setformData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-24 mt-8 flex items-center justify-center bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold  text-center mb-6 text-red-600">
          Login to your account
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="
              w-full px-4 py-2
              border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-green-500
              transition
            "
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="
              w-full px-4 py-2
              border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-green-500
              transition
            "
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="w-4 h-4 text-green-600 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-600">
            Remember me
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full py-3
            bg-red-600 text-white font-semibold
            rounded-lg
            hover:bg-green-700
            transition duration-300
          "
        >
          Login
        </button>
      </form>
    </div>
  );
}
