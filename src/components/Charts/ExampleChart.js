// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    label: "HTML",
    value: "80",
  },
  {
    label: "CSS",
    value: "95",
  },
  {
    label: "JavaScript",
    value: "80",
  },
  {
    label: "PHP",
    value: "85",
  },
  {
    label: "React",
    value: "75",
  },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Front End Programming Languages",
      //Set the chart subcaption
      subCaption: "",
      //Set the x-axis name
      xAxisName: "Language",
      //Set the y-axis name
      yAxisName: "Popularity",
      numberSuffix: "%",
      //Set the theme for your chart
      theme: "fusion",
    },
    // Chart Data
    data: chartData,
  },
};

const ChartComponent = () => {
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
