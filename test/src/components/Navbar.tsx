import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-600 text-white p-4 flex justify-between">
      
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/register">UserRegistration</Link>
        <Link to="/admin">Admin</Link>        
        <Link to="/userdashboard">UserDashboard</Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
