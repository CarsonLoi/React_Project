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
import myJson2 from "../pages/data/chart2.json";

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

function Demand_Chart2(props) {
  const data = myJson[props.pit];
  const data2 = myJson2[props.pit];
  const minbetArray = Object.entries(data2[0]["Actual"]).map(([k,v]) => `${k}`)
  const data_len = data2[1].Proposed.length;
  

  const useCallback = () => {
    let len = data2[1].Proposed.length;
    var bgArray = [];
    for(var i = 0; i < len; i++){
      if (i === len - 1){
        bgArray.push("rgba(24,173,254,0.8)");
        }
      else {bgArray.push("rgba(24,173,254,0.4)");}
    }
    return (bgArray)}
/*console.log(minbetArray.map((e) => {return (data2[0]["Actual"][e])})) console.log(Object.keys(data2[0]["Actual"]).map((e) => {return Object.keys(data2[0]["Actual"][0]})) ,*/
  const data_chart = {
    labels: ["7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","0","1","2","3","4","5","6"],
    datasets: [
      {
        type: "line",
        label: "Recommended Tables",
        backgroundColor: "rgba(53, 162, 235)",
        borderColor: "rgb(53, 162, 235)",
        fill: false,
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(0,99,132,1)",
        yAxisID: "y",
        //data: [65, 59, 80, 81, 56, 55, 40]
        data: data2[1].Proposed
      },
      {
        type: "line",
        label: "Table Cap",
        borderColor: "rgb(25, 25, 25)",
        pointRadius: 0,
        fill: false,
        borderWidth: 1,
        yAxisID: "y",
        data: data2[2].Cap
      },
      {
       
        label: "500",
        backgroundColor: useCallback ,
        borderColor: "rgba(255,99,132,1)",
        fill: false,
        borderWidth: 0,
        hoverBackgroundColor: "rgba(24,173,254,0.9)",
        hoverBorderColor: "rgba(24,173,254,1)",
        stack: "y2",
        //data: [65, 59, 80, 81, 56, 55, 40]
        data: data2[0]["Actual"][500]
      },
      {
        label: "1000",
        backgroundColor: () => {
          var bgArray = [];
          for(var i = 0; i < data_len; i++){
            if (i === data_len - 1){
              bgArray.push("rgba(253,49,54,0.8)");
              }
            else {bgArray.push("rgba(253,49,54,0.4)");}
          }
          return (bgArray)},
        borderColor: "rgba(53, 162, 235,1)",
        fill: false,
        borderWidth: 0,
        hoverBackgroundColor: "rgba(253,49,54,0.9)",
        hoverBorderColor: "rgba(253,49,54,1)",
        stack: "y2",
        data: data2[0]["Actual"][1000]
      } ,
      {
        label: "2000",
        backgroundColor: () => {
          var bgArray = [];
          for(var i = 0; i < data_len; i++){
            if (i === data_len - 1){
              bgArray.push("rgba(0,255,124,0.8)");
              }
            else {bgArray.push("rgba(0,255,124,0.4)");}
          }
          return (bgArray)},
        borderColor: "rgba(53, 162, 235,1)",
        fill: false,
        borderWidth: 0,
        hoverBackgroundColor: "rgba(0,255,124,0.9)",
        hoverBorderColor: "rgba(0,255,124,1)",
        stack: "y2",
        data: data2[0]["Actual"][2000]
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
            color: "rgb(25, 25, 25)",
            anchor: "end",
            offset: -30,
            align: "start",
            font: {
              weight: "bold",
              size: 14
            },
            formatter: (value, context) =>
              context.datasetIndex === 0 ? value : ""
          },
          title: {
            display: false,
            text: "Hourly Demand Chart"
          }
        },
        scales: {
          x: {grid: { display: false } , stacked: true} ,

        }
      }}
      width="600"
      height="200"
    />
  );
}

export default Demand_Chart2;
