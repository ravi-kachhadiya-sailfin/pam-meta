import React, { useState } from "react";
// import "./styles.css";

import { Bar } from "react-chartjs-2";

export default function VerticalChart({ VerticalData, drawTicks = true, padding = [0, -10] }) {

  const [option] = useState({
    layout: {
      padding: {
        left: padding[1],
        right: padding[1],
        bottom: padding[0],
        top: padding[0],
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        titleFont: {
          size: 20
        },
        backgroundColor: "#eff3f4",
        titleColor: "#09425A",
        bodyColor: "#09425A",
        bodySpacing: 5,
        padding: 6,
        callbacks: {
          title: function (context, i) {
            console.log("context 2", context)

            var title = context[0].label.split(",").join(" ") || '';
            return title + ': ' + context[0].parsed.y + '  ';
          },
          label: function (context, i) {
            // // console.log("context", context)

            // // var title = context.dataset.label || '';
            // return '   ' + title + ': ' + context.parsed.y;
          }
        }
      },
    },
    scales: {
      x: {
        display: true,
        // offset: false,
        grid: {
          // display: false,
          drawBorder: false,
        },
        ticks: {
          padding: 0,
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          major: {
            enabled: true
          },
          color: "#09425A",
          font: {
            weight: "700",
            size: 20,
            family: `"Source Sans Pro", sans-serif`,
          },
        }
      },
      y: {
        offset: false,
        title: {
          display: true,
        },
        grid: {
          display: true,
          borderColor: '#A9BDC5',
          borderWidth: 7,
          drawTicks: drawTicks,
        },
        ticks: {
          padding: 10,
          precision: 0,
          color: "#09425A",
          font: {
            size: 15,
            weight: 700,
            family: `"Source Sans Pro", sans-serif`,
          },
        }
      },
    }
  });

  return (
    <Bar data={VerticalData} options={option} />
  );
}