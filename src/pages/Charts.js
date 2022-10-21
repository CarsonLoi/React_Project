import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { Bar, Line, Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import "./charts.css";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartDataLabels,
  Title
);

var chartType = "line";

const myData = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 7 * 100)
);

const mySecondData = Array.from({ length: 7 }, () =>
  Math.floor(Math.random() * 7 * 100)
);

export const data = {
  labels: [
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ],
  datasets: [
    {
      type: "bar",
      label: "Actual Demand",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      fill: false,
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      //data: [65, 59, 80, 81, 56, 55, 40]
      data: myData
    },
    {
      type: "line",
      label: "Recommended Tables",
      backgroundColor: "rgba(53, 162, 235)",
      borderColor: "rgb(53, 162, 235)",
      fill: false,
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(0,99,132,1)",
      //data: [65, 59, 80, 81, 56, 55, 40]
      data: mySecondData
    }
  ]
};

class Charts extends React.Component {
  render() {
    if (chartType === "bar")
      return (
        <Bar
          data={data}
          options={{
            maintainAspectRatio: true,
            responsive: true
          }}
          width="600"
          height="200"
        />
      );
    else
      return (
        <Line
          data={data}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            plugins: {
              datalabels: {
                display: true,
                color: "black"
              }
            }
          }}
          width="600"
          height="200"
        />
      );
  }
}

export default Charts;
