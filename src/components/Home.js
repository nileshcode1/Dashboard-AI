import React from "react";
import { Bar, Pie } from "react-chartjs-2";

// Bar chart data for the overview
const barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Income",
      data: [1200, 1900, 3000, 5000, 2400, 3200, 2345],
      backgroundColor: "#4C6EF5",
      borderWidth: 2,
    },
    {
      label: "Expenses",
      data: [1000, 1600, 2200, 4500, 2000, 2900, 2214.5],
      backgroundColor: "#A5B4FC",
      borderWidth: 2,
    },
  ],
};

// Bar chart options with responsiveness and display enhancements
const barOptions = {
  responsive: true,
  maintainAspectRatio: false, // Ensure chart scales properly
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis gridlines for a cleaner look
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `₹${value}`; // Display y-axis ticks with currency format
        },
      },
      grid: {
        color: "#E5E7EB", // Light gridline color
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `₹${tooltipItem.raw}`; // Show currency in tooltips
        },
      },
    },
    legend: {
      display: true,
      position: "top", // Legend at the top of the chart
    },
  },
};

// Pie chart data for monthly expenses
const pieData = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      data: [55, 45],
      backgroundColor: ["#4C6EF5", "#A5B4FC"],
      hoverBackgroundColor: ["#3B82F6", "#93C5FD"],
    },
  ],
};

// Pie chart data for household expenses
const donutData = {
  labels: ["Household", "Technology", "Leisure", "Restaurants"],
  datasets: [
    {
      data: [40, 30, 20, 10],
      backgroundColor: ["#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE"],
    },
  ],
};

function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">My Finances</h2>
        <nav className="space-y-4">
          <a href="/" className="block text-lg">
            Overview
          </a>
          <a href="/" className="block text-lg">
            Wallet
          </a>
          <a href="/" className="block text-lg">
            Invoices
          </a>
          <a href="/" className="block text-lg">
            Transfers
          </a>
          <a href="/" className="block text-lg">
            Notifications
          </a>
          <a href="/" className="block text-lg">
            Reports
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Section: Overview and Bar Chart */}
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          {/* Overview Section with hover effect */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-6 lg:mb-0 lg:mr-4">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <p>Income</p>
                <p>Expenses</p>
                <p>Investments</p>
                <p>Donations</p>
              </div>
              <div className="relative h-2 bg-gray-200 mt-1 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                  style={{ width: "55%" }}
                />
                <div
                  className="absolute top-0 left-0 h-full bg-blue-300 rounded-full"
                  style={{ width: "25%", marginLeft: "55%" }}
                />
              </div>
            </div>
            <div className="h-64">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          {/* User Details Section with hover effect */}
          <div className="w-full lg:w-1/3 bg-blue-100 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-bold">Nilesh Pandey</h3>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold">₹1,00,547.62</p>
              <p className="text-gray-600 mt-2">Balance</p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-4">Recent activities</h4>
              <ul className="text-gray-600">
                <li className="flex justify-between mb-2">
                  <span>Insurance</span> <span>-₹8010.50</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span>From SBI</span> <span>+₹10,274.94</span>
                </li>
                <li className="flex justify-between">
                  <span>Big Bazaar</span> <span>-₹30,215.50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Pie Charts with Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Monthly Data</h3>
            <Pie data={pieData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Household Expenses</h3>
            <Pie data={donutData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
