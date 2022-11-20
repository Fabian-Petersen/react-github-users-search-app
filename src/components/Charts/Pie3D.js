//! The code below was copied from the example chart and the array with the data deleted.
//! The below data is passed in from the props.

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

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d", // The chart type. Change the name from fusion Charts to Change the Chart Type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Languages",
        decimals: 1,
        pieRadius: "50%",
        theme: "fusion",
      },
      // Chart Data
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
