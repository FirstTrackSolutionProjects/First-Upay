import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with ${formData.email} and ${formData.password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="block text-gray-700">
          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="block text-gray-700">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
</div>
  );
}
