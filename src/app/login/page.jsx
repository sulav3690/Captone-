"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F8F9]">
      <div className="w-full max-w-sm bg-[#F0F4F8] rounded-2xl shadow-md p-10 flex flex-col items-center gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl font-extrabold text-[#1FA463] tracking-tight">VeritasAI</h1>
          <p className="text-gray-500 text-sm">An AI detector System</p>
        </div>

        {/* Form */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Username:</label>
            <input
              id="login-username"
              name="username"
              type="text"
              required
              placeholder="Enter username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-full border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1FA463]/50 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Password:</label>
            <input
              id="login-password"
              name="password"
              type="password"
              required
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-full border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1FA463]/50 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-1">
            <button
              id="login-submit"
              type="submit"
              className="flex-1 py-2.5 rounded-full bg-[#1FA463] hover:bg-[#178a52] text-white font-bold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Login
            </button>
            <button
              id="login-register"
              type="button"
              onClick={() => router.push('/register')}
              className="flex-1 py-2.5 rounded-full bg-[#F36C3D] hover:bg-[#e05a2b] text-white font-bold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Register
            </button>
          </div>
        </form>

        {/* Language Badge */}
        <div className="flex justify-start w-full">
          <span className="bg-[#3B6FB5] text-white text-xs font-semibold px-3 py-1 rounded-full">
            English
          </span>
        </div>
      </div>
    </div>
  );
}
