import React, { useState } from "react";

import { Bar } from "react-chartjs-2";

export default function HorizontalChart(props) {
  const [option] = useState({
    indexAxis: 'y',
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
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

        // callbacks: {
        //   labelColor: function (tooltipItem, chart) {
        //     return {
        //       labelColor: "#09425A",
        //       backgroundColor: 'rgb(255, 0, 0)'
        //     }
        //   },
        // },
        callbacks: {
          title: function (context, i) {
            console.log("context 2", context)

            var title = context[0].label;
            return title + ': ' + context[0].parsed.x;
          },
          label: function (context, i) { }
        }
      },
    },
    scales: {
      y: {
        display: true,
        grid: {
          borderColor: '#A9BDC5',
          borderWidth: 7
        },
        ticks: {
          crossAlign: 'far',
          padding: 10,
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
      x: {
        offset: false,
        title: {
          display: true,
        },
        grid: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          padding: 0,
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
    <Bar data={props.HorizontalData} options={option} />
  );
}