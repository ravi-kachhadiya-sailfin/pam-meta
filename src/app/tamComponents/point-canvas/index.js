import React, { useEffect, useState } from "react";

const PointCanvas = (props) => {
  console.log("render canvas")

  const [canvas, setCanvas] = useState();
  const [dctx, setdctx] = useState();

  useEffect(() => {
    setCanvas(document.getElementById('canvas'));
    console.log("canvas", canvas)
    if (canvas) {
      setdctx(canvas.getContext("2d"));
    }
    console.log("dctx", dctx)
    if (dctx) {
      var w = 20;
      var x = 26;
      var y = 26;

      console.log("dctx inner", dctx)
      let datactx = dctx;
      console.log("datactx inner", datactx)
      datactx.beginPath();
      datactx.fillStyle = "rgb(200,0,0)";
      datactx.arc(x, y, w / 2, 0, 2 * Math.PI, false);
      datactx.fill();

      datactx.font = '8pt Calibri';
      datactx.fillStyle = 'white';
      datactx.textAlign = 'center';
      datactx.fillText('pqr', x, y + 3);

      console.log("datactx", datactx);
      setdctx(datactx);
    }
  }, [canvas, dctx]);

  console.log("canvas new", document.getElementById('canvas'))
  // var dctx = canvas.getContext("2d");
  // var w = 20;
  // var x = 26;
  // var y = 26;

  // dctx.beginPath();
  // dctx.fillStyle = "rgb(200,0,0)";
  // dctx.arc(x, y, w / 2, 0, 2 * Math.PI, false);
  // dctx.fill();

  // dctx.font = '8pt Calibri';
  // dctx.fillStyle = 'white';
  // dctx.textAlign = 'center';
  // dctx.fillText('pqr', x, y + 3);

  // Chart.pluginService.register({
  //   afterUpdate: function (chart) {
  //     chart.config.data.datasets[0]._meta[0].data[7]._model.pointStyle = document.getElementById('canvas');
  //     chart.config.data.datasets[1]._meta[0].data[2]._model.pointStyle = cloud;
  //   }
  // });

  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //     datasets: [
  //       {
  //         label: "Tokyo",
  //         fill: false,
  //         borderColor: "rgba(75,192,192,1)",
  //         pointBackgroundColor: "#fff",
  //         pointRadius: 5,
  //         data: [7, 7, 9.5, 14.5, 18, 22, 25.5, 26.5, 23.5, 18, 14, 9.5],
  //       },
  //       {
  //         label: "London",
  //         fill: false,
  //         borderColor: "rgba(192,192,75,1)",
  //         pointBackgroundColor: "#fff",
  //         pointRadius: 5,
  //         data: [4, 4.5, 6, 8, 12, 15, 17, 16, 14, 11, 7, 5],
  //       }
  //     ]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }]
  //     },
  //     tooltips: {
  //       mode: "label"
  //     }
  //   }
  // });


  return (
    <canvas id="canvas" style={{ height: "100px", width: "100px" }}></canvas>
  )
}

export default PointCanvas;