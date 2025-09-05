import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[700px] bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-600 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">Welcome to User Management App</h1>
        <div className="space-x-4 ">
          <label htmlFor="dropdown">select the role:</label>
          <select
            id="dropdown"
            className="w-[200px] border p-2 mb-3 text-center rounded-2xl"
            onChange={(e) => {
              if (e.target.value === "user") {
                navigate("/register");
              } else if (e.target.value === "admin") {
                navigate("/admin");
              }
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Home;
