import React, { useRef } from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";

export default function LineChart(props) {
  const chartRef = useRef();

  return (
    <Line data={props.lineData} options={props.lineData?.options} ref={chartRef} />
  );
}