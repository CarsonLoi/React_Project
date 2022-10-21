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
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import myJson from "../pages/data/chart.json";

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

function Demand_Chart(props) {
  const data = myJson[props.pit];
  const data_chart = {
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
        data: data[0].Actual
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
        data: data[1].Proposed
      },
      {
        type: "line",
        label: "Table Cap",
        borderColor: "rgb(25, 25, 25)",
        pointRadius: 0,
        fill: false,
        borderWidth: 1,
        data: data[2].Cap
      }
    ]
  };

  return (
    <Chart
      type="bar"
      data={data_chart}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
          datalabels: {
            display: function (context) {
              return context.dataset.data[context.dataIndex] > 0;
            },
            color: "rgb(53, 162, 235)",
            anchor: "end",
            offset: -30,
            align: "start",
            font: {
              weight: "bold",
              size: 14
            },
            formatter: (value, context) =>
              context.datasetIndex == 1 ? value : ""
          },
          title: {
            display: false,
            text: "Hourly Demand Chart"
          }
        },
        scales: {
          x: {
            grid: { display: false }
          }
        }
      }}
      width="600"
      height="200"
    />
  );
}

export default Demand_Chart;
