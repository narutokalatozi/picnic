import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function UniBarchart({ labels }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "University Survey",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Facebook",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Instagram",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
      {
        label: "Linkedin",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 1",
      },
      {
        label: "Snapchat",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: "rgb(234, 255, 0)",
        stack: "Stack 1",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
