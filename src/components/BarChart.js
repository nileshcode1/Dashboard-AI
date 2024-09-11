import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "AI-enhanced Sales",
        data: [
          1200, 1900, 3000, 5000, 2400, 3200, 4300, 5400, 4500, 3900, 6200,
          5300,
        ],
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "#36D1DC"); // Light blue
          gradient.addColorStop(1, "#5B86E5"); // Dark blue
          return gradient;
        },
        borderColor: "#5B86E5",
        borderWidth: 1,
        hoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            return `Sales: $${tooltipItem.raw}`;
          },
        },
        backgroundColor: "#000000",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        borderColor: "#5B86E5",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#5B86E5",
        },
      },
      y: {
        grid: {
          display: true,
          color: "#E0E0E0",
        },
        ticks: {
          color: "#5B86E5",
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "easeInBounce",
        from: 0.5,
        to: 0,
        loop: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">
        AI-enhanced Sales Visualization
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
