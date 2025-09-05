import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  fatherName: string;
  phone: string;
  email: string;
  cnic: string;
  location: string;
  age: number;
  gender: string;
  profession: string;
  photo: string;
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editing, setEditing] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data));
  }, []);

  const handleUpdate = async () => {
    if (editing) {
      await axios.put(
        `http://localhost:5000/api/users/${editing._id}`,
        editing
      );
      alert("User Updated!");
      setEditing(null);

      const res = await axios.get<User[]>("http://localhost:5000/api/users");
      setUsers(res.data);
    }
  };

  return (
    <div className="p-8 bg-gray-50 bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-600 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
        Admin Dashboard
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {users.map((u) => (
          <div
            key={u._id}
            className=" rounded-2xl p-5 flex flex-col items-center bg-white/20 backdrop-blur-lg shadow-2xl border border-white/30 "
          >
            <img
              src={u.photo || "/default-avatar.png"} 
              alt={u.name}
              className="w-24 h-24 rounded-full object-cover border mb-3"
            />

            <h3 className="font-semibold text-lg">{u.name}</h3>
            <p className="text-gray-500">{u.email}</p>
            <button
              onClick={() => setEditing(u)}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {editing && (
        <div className="mt-10 max-w-4xl mx-auto  shadow-lg rounded-2xl p-8 w-full  bg-white/20 backdrop-blur-lg  border border-white/30 ">
          <h1 className="font-bold text-2xl text-center mb-6 text-green-700">
            Edit User
          </h1>
          {/* this logic only use if i want to show the images of the live url  */}
          {/* <div className="flex flex-col items-center mb-6">
            <img
              src={editing.photo}
              alt={editing.name}
              className="w-32 h-32 object-cover rounded-full border shadow"
            />
          </div> */}

          <div className="grid md:grid-cols-2 gap-6">
            {(Object.keys(editing) as (keyof User | "__v")[]).map((key) =>
              key !== "_id" && key !== "__v" ? (
                <div key={key} className="flex flex-col">
                  <label className="font-medium mb-1 capitalize text-gray-700">
                    {key}
                  </label>
                  <input
                    type={key === "age" ? "number" : "text"}
                    value={String(editing[key])}
                    onChange={(e) =>
                      setEditing({ ...editing, [key]: e.target.value } as User)
                    }
                    className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              ) : null
            )}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleUpdate}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
