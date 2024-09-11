import React from "react";

const users = [
  { name: "Vipul Prakash", email: "vipul@fireai.co.in", status: "Active" },
  { name: "Kunal R Jani", email: "kunal@fireai.co.in", status: "Inactive" },
  { name: "Nilesh Pandey", email: "mark@example.com", status: "Active" },
];

const UserTable = () => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Name</th>
          <th className="py-2 px-4 border">Email</th>
          <th className="py-2 px-4 border">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border">{user.name}</td>
            <td className="py-2 px-4 border">{user.email}</td>
            <td className="py-2 px-4 border">{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
