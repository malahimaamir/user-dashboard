import React, { useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  fatherName: string;
  phone: string;
  email: string;
  cnic: string;
  location: string;
  age: string;
  gender: string;
  profession: string;
  photo: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    cnic: "",
    location: "",
    age: "",
    gender: "",
    profession: "",
    photo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value,files } = e.target;
   if (files) {
    setFormData((prev) => ({ ...prev, [name]: files[0], }));
  }else{
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    await axios.post("http://localhost:5000/api/users",data,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert("User Registered!");
  };

  const handleEdit = () => {
    window.location.href = "/userdashboard";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-600 px-4">
      <div className="w-full max-w-2xl p-8 rounded-3xl bg-white/20 backdrop-blur-lg shadow-2xl border border-white/30">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
          User Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              value={formData.fatherName}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            type="text"
            name="cnic"
            placeholder="CNIC"
            value={formData.cnic}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <input
            type="file"
            name="photo"            
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleEdit}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-lg"
            >
              Edit
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 transition-all shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
