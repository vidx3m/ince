"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn("credentials", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <label className="block text-sm mb-2">Username</label>
        <input type="text" name="username" className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white" required />
        <label className="block text-sm mb-2">Password</label>
        <input type="password" name="password" className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white" required />
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}
