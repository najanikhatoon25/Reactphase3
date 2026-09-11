import { useState } from "react";
import validationForm from "./validation";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
   
    const error = validationForm(name, email, password);

    if (error !== "") {
      setError(error);
      return;
    }

    setError("");
    alert("Form submitted successfully");
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 p-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl border border-red-400 shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Registration Form
        </h2>

        {/* Name Field */}
        <div className="w-full mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full block border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Email Field */}
        <div className="w-full mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full block border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Password Field */}
        <div className="w-full mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full block border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
        >
          Submit
        </button>

      </form>
    </div>
  );
}
