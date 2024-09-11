import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import UserTable from "./UserTable";

function Analytics() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <BarChart />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <PieChart />
        </div>
      </div>
      <div className="mt-4">
        <UserTable />
      </div>
    </div>
  );
}

export default Analytics;
