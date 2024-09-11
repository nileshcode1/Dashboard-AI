import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Electronics", "Clothing", "Accessories", "Furniture"],
    datasets: [
      {
        label: "Product Categories",
        data: [30, 20, 15, 35],
        backgroundColor: [
          "#36D1DC", // Light Blue
          "#FF6384", // Pink
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
        ],
        hoverOffset: 10,
        borderWidth: 1,
        hoverBorderColor: "#ffffff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#5B86E5", // AI-inspired color for the legend text
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Category: ${tooltipItem.label} - ${tooltipItem.raw}%`;
          },
          afterLabel: () => {
            return "Predicted growth: 10%";
          },
        },
        backgroundColor: "#000000",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        borderColor: "#5B86E5",
        borderWidth: 1,
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "easeOutBounce",
        from: 0.5,
        to: 0,
        loop: true,
      },
    },
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4"
      style={{ boxShadow: "0 0 20px rgba(91, 134, 229, 0.7)" }}
    >
      <h2 className="text-2xl font-bold mb-4">
        AI-enhanced Product Categories Distribution
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
