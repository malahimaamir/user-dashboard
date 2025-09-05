/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/admin/login", { password });
    if (res.data.success) {
      navigate("/admindashboard");
    } 
  } catch (error) {
    alert("Invalid password!" );
  }
};


  return (
    <>
    <center>
      <section className="bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-600  " >
    <div className="p-6 max-w-sm flex flex-col items-center justify-center min-h-[700px]">
      <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">Admin Login</h2>
      
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-[400px] border p-2 mb-3 text-center  rounded-2xl px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
      />
      
      <button onClick={handleLogin} className="px-16 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-lg">
        Login
      </button>
    </div>
    </section>
    </center>
    
    </>
  );
};

export default AdminLogin;
