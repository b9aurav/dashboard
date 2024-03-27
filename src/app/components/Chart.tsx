import { LineChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";

type Props = {};

const Chart = (props: Props) => {
  const [chartWidth, setChartWidth] = useState(0);
  
  useEffect(() => {
    // Update the chart width when the window is resized
    const handleResize = () => setChartWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    setChartWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LineChart
      xAxis={[
        {
          data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          scaleType: "point",
        },
      ]}
      series={[
        {
          data: [100, 200, 350, 275, 50, 400, 125],
          showMark: false,
          label: "Instagram",
        },
        {
          data: [200, 300, 76, 385, 115, 225, 265],
          showMark: false,
          label: "Facebook",
        },
      ]}
      width={Math.max(chartWidth - 310, 300)} // Adjust the width of the chart
      height={350}
      slotProps={{
        legend: {
          position: {
            vertical: "bottom",
            horizontal: "middle",
          },
          padding: -5,
        },
      }}
    />
  );
};

export default Chart;
