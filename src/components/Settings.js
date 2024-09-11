import React, { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("Nilesh Pandey");
  const [email, setEmail] = useState("nileshpandey0021@gmail.com");

  const handleUpdate = () => {
    alert("User details updated!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Details
      </button>
    </div>
  );
};

export default Settings;