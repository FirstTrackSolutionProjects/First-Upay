import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with ${formData.email} and ${formData.password}`);
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked");
  };

  return (
     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Image */}
       <div className="w-full md:w-1/2 flex justify-center m-4">
        <img
          src="/images/login.jpg" 
          alt="Login Illustration"
          className="w-full h-80 object-cover"
        />
      </div>
      {/*Form */}
     <div className="flex w-full md:w-1/2 items-center justify-center p-6">
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

      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FcGoogle className="mr-2" size={20} />
        Continue with Google
      </button>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
</div>
</div>
  );
}
