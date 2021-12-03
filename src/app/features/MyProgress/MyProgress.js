/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, useContext } from "react";
import { MyProgressStyle, PageTitle, PageDiscription, CardsTitle } from "./MyProgress.style";
// import { withStyles } from '@material-ui/core/styles';
import { Grid, MenuItem, Box, Divider } from '@material-ui/core';
import CircularProgressWithLabel from './Charts/circulerProgress'
import LineChart from '../../tamComponents/charts/linechart'
import Activity from '../../tamComponents/activity/activity'
import { TypeSelect } from './MyProgress.style'
import { getRecentActivity, getProfileProgress, getChartData, getByDateData } from './MyProgressService'
import { getRecommendedTools, getFavouriteTools } from '../tools/ToolsServices'
import goIcon from 'app/shared/assets/images/check-arrow.svg';
import chartRightarrow from 'app/shared/assets/images/chart_right_arrow.svg';
import DisabledRightArrow from 'app/shared/assets/images/gray_right_arrow.svg';
import Loader from 'app/tamComponents/Loader/Loader';
import { MetaContext } from 'app/shared/context/MetaProvider';

// import info from 'app/shared/assets/images/info.svg';
import ToolsCard from '../../tamComponents/ToolsCard/index';
import { useHistory } from "react-router";
import { ROUTES } from "app/Routes";

import Caraousel from 'app/tamComponents/carouselToolsCard';
import CarouselItem from 'app/tamComponents/carouselToolsCard/CarouselItem';
import { throttle } from 'lodash';
import moment from 'moment';
import StarRating from 'app/tamComponents/StarRating';

import 'chartjs-adapter-moment';

// import PointCanvas from 'app/tamComponents/point-canvas';

// import {
//   ToolContainer,
// } from '../tools/ToolsPageComponent.styles';
import {
  CardContentWrapper,
  CardsWrapper
} from "app/tamComponents/cards/Cards.styles";
// import { CardIconButton } from "app/tamComponents/ToolsCard/tool-detail/style";

import { defaultMetaData, convertTestimonialArray, getDeviceSize, handleClose, handleOpen } from 'app/shared/Utils/index';

const MyProgress = ({ title, banner }) => {
  const [recentActivity, setRecentActivity] = useState([])
  const [btmType, setBtmType] = useState(1)
  const [recTools, setRecTools] = useState(null)
  const [fvtTools, setFvtTools] = useState(null)
  const [byDate, setByDate] = useState([])
  const [profileProgress, setProfileProgress] = useState({})
  const [chart, setChart] = useState(1)
  const [destressData, setDestressData] = useState([])
  const [depressionData, setDepressionData] = useState([])
  const [anxietyData, setAnxietyData] = useState([])
  const [traumaData, setTraumaData] = useState([])
  const [loading, setLoading] = useState(true)
  const [alertMessage, setAlertMessage] = useState("")
  const [, setChartLoader] = useState(true);
  const { meta, setMeta } = useContext(MetaContext);

  const history = useHistory()
  const chartRef = useRef();
  const [startDate, setStartDate] = useState(moment().subtract(6, "days").format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const todayDate = moment().format("YYYY-MM-DD");

  const [pointData, setPointData] = useState([]);

  const [canvas, setCanvas] = useState([]);
  const [dctx, setdctx] = useState([]);

  let deviceCode = getDeviceSize();
  // const [, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))
  const [deviceSizeForChart, setDeviceSizeForChart] = useState(['xl', 'lg', 'md', 'sm', 'xs'].indexOf(deviceCode))

  const responsiveDataValue = {
    responsiveDayFontSize: [30, 25, 20, 16, 12],
    responsiveTitleFontSize: [24, 20, 18, 16, 12],
    responsiveYAxisFontSize: [15, 15, 14, 13, 12],
    responsiveMonthFontSize: [25, 20, 16, 13, 10],
    responsivePointSize: [25, 24, 20, 16, 14],
    responsivePointBorderSize: [3, 3, 2.3, 2, 1.5],
    responsiveTickPadding: [28, 24, 20, 15, 9],
    responsivePointFontSize: [18, 15, 11, 9, 9],
    responsiveYPoint: [5.5, 4.5, 3.5, 3, 2.5],
    responsiveScaleHeight: [45, 40, 35, 30, 20],
    responsiveChartPaddingLeft: [-35, -30, -25, -20, -15],
    responsiveChartPaddingRight: [70, 60, 50, 40, 30],
    responsiveBorderWidth: [4, 3.5, 3, 2.5, 2]
  }

  useEffect(() => {
    // console.log("pointData: ", pointData)
    if (pointData.length > 0) {
      for (let i = 0; i < pointData.length; i++) {
        for (let j = 0; j < pointData[i].length; j++) {
          if (canvas.length < pointData.length) {
            // debugger

            let canvasTemp = Array.from({ length: pointData.length }, _ => []);
            let dtcxTemp = Array.from({ length: pointData.length }, _ => []);

            for (let point = 0; point < pointData.length; point++) {
              canvasTemp[point] = Array.from({ length: pointData[point].length }, _ => 0);
              dtcxTemp[point] = Array.from({ length: pointData[point].length }, _ => 0);

              setCanvas(canvasTemp)
              setdctx(dtcxTemp);
            }
          }
          else {
            let canvasTemp = canvas;
            //console.log("canvasTemp", canvasTemp, pointData)
            // debugger
            canvasTemp[i][j] = document.getElementById(`canvas${i}${j}`);
            setCanvas(canvasTemp);
            //console.log("canvas", canvas)
            if (canvas[i][j]) {
              let tempDCTX = dctx;
              tempDCTX[i][j] = canvas[i][j].getContext("2d");
              setdctx(tempDCTX);
            }
            //console.log("dctx", dctx[i][j])
            if (dctx[i][j]) {
              var w = responsiveDataValue.responsivePointSize[deviceSizeForChart];
              var x = 150;
              var y = 75;

              //console.log("dctx inner", dctx[i][j])
              let datactx = dctx;
              //console.log("datactx inner", datactx[i][j])
              datactx[i][j].clearRect(0, 0, 200, 100);
              datactx[i][j].beginPath();
              datactx[i][j].fillStyle = "#0099BA";
              datactx[i][j].arc(x, y, w / 2, 0, 2 * Math.PI);

              datactx[i][j].fill();
              datactx[i][j].lineWidth = responsiveDataValue.responsivePointBorderSize[deviceSizeForChart];
              datactx[i][j].strokeStyle = "#09425A";
              datactx[i][j].stroke();

              const fontValue = `bold ${responsiveDataValue.responsivePointFontSize[deviceSizeForChart]}px "Source Sans Pro", sans-serif`;
              //console.log("fontValue", fontValue)
              datactx[i][j].font = fontValue;
              datactx[i][j].fontSize = 25;
              datactx[i][j].fillStyle = 'white';
              datactx[i][j].textAlign = 'center';
              // console.log("pointData", deviceSizeForChart, pointData, i, j) 
              datactx[i][j].fillText(pointData[i][j] === -1 ? "" : pointData[i][j], x, y + (responsiveDataValue.responsiveYPoint[deviceSizeForChart]));
              // datactx[i][j].fillText(pointData[i][j].toString() === "0" ? "" : pointData[i][j], x, y + (responsiveDataValue.responsiveYPoint[deviceSizeForChart]));

              //console.log("datactx", datactx[i][j]);
              setdctx(datactx);
            }
          }
        }
      }
    }
  }, [canvas, dctx, pointData]);

  useEffect(() => {
    let alertStatus = true;
    for (let i = 0; i < pointData.length; i++) {
      for (let j = 0; j < pointData[i].length; j++) {
        if (pointData[i][j] !== undefined) {
          console.log("if:", pointData[i][j])
          alertStatus = false;
          break;
        }
      }
    }

    console.log("alert", pointData, alertStatus)

    if (alertStatus) {
      setAlertMessage("Not performed assesment in this week!");
    }
    else {
      setAlertMessage("");
    }

  }, [pointData]);

  function getDates() {
    return {
      startDate: startDate,
      endDate: endDate
    }
  }

  function changeDates(back = false) {
    if (back) {
      setStartDate(moment(startDate, "YYYY-MM-DD").subtract(7, "days").format("YYYY-MM-DD"))
      setEndDate(moment(startDate, "YYYY-MM-DD").subtract(1, "days").format("YYYY-MM-DD"))
    } else {
      if (endDate !== todayDate) {
        setStartDate(moment(endDate, "YYYY-MM-DD").add(1, "days").format("YYYY-MM-DD"))
        setEndDate(moment(endDate, "YYYY-MM-DD").add(7, "days").format("YYYY-MM-DD"))
      }
    }
  }

  // const canvas = document.getElementByID('canvas');
  // function formatDate(date) {
  //   var d = new Date(date),
  //     month = '' + (d.getMonth() + 1),
  //     day = '' + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2)
  //     month = '0' + month;
  //   if (day.length < 2)
  //     day = '0' + day;

  //   return [year, month, day].join('-');
  // }

  useEffect(() => {
    getProfileProgress().then(async (data) => {
      await setProfileProgress(data.data.progress)
      setLoading(false)
    })
    getRecentActivity().then((data) => {
      let list = data.data.list
      list = list.slice(0, 4)
      setRecentActivity(list)
    })
    getByDateData().then((data) => {
      setByDate(data.data.list)
    })
    // let graphBody = getDates()
    getRecommendedTools().then((data) => {
      let qtools = data.data.quickTools.list
      let stools = data.data.specializedTools.list
      let allTools = qtools.concat(stools)
      setRecTools(allTools)
    })
    getFavouriteTools().then((data) => {
      setFvtTools(data.data.list)
    })

    const metaData = {
      title: "PAM | My Progress",
      url: window.location.href,
    }
    setMeta({ ...meta, ...metaData });
    generateChartData();

    return () => {
      setMeta(defaultMetaData());
    };

  }, []);

  //console.log("all data", traumaData, destressData, depressionData, anxietyData)
  const generateChartData = () => {

    let graphBody = getDates()
    graphBody.type = chart
    getChartData(graphBody).then((data) => {
      //console.log("data ---", data.chart);
      let chart_labels = data.chart.map(ln => moment(ln.date, "YYYY-MM-DD"))
      //console.log("chart_labels ---", chart_labels);
      let chartData = {
        labels: chart_labels,
        datasets: [],
        options: {
          layout: {
            padding: {
              left: responsiveDataValue.responsiveChartPaddingLeft[deviceSizeForChart],
              right: responsiveDataValue.responsiveChartPaddingRight[deviceSizeForChart],
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
                size: responsiveDataValue.responsiveTitleFontSize[deviceSizeForChart]
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
                  // console.log("cont:", context, document.getElementById('chartjs-tooltip'));
                  var title = context[0].label || '';
                  //console.log("title", Number(title))

                  return moment(Number(title)).format("DD MMM")
                },
                label: function (context, i) {
                  // console.log("context:", context.formattedValue);
                  var title = context.dataset.label || '';
                  return '   ' + title + (context.formattedValue.toString() === "-1" ? ": " : ": " + context.formattedValue);
                }
              }
            },
          },
          scales: {
            xAxis1: {
              afterFit: function (scale) {
                scale.height = responsiveDataValue.responsiveScaleHeight[deviceSizeForChart] //<-- set value as you wish 
              },
              id: 'xAxis1',
              grid: {
                display: false
              },
              type: "category",
              display: true,
              offset: false,
              ticks: {
                backdropPadding: 500,
                padding: responsiveDataValue.responsiveTickPadding[deviceSizeForChart],
                major: {
                  enabled: false
                },
                color: "#09425A",
                font: {
                  size: responsiveDataValue.responsiveDayFontSize[deviceSizeForChart],
                  weight: "700",
                  lineHeight: 0,
                  family: `"Source Sans Pro", sans-serif`,
                },
                callback: function (val, index) {
                  val = this.getLabelForValue(val);
                  val = moment(val).format("ddd");
                  return val;
                }

              }
            },
            xAxis2: {

              id: 'xAxis2',
              type: "category",
              offset: false,
              display: true,
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                padding: 0,
                major: {
                  enabled: true
                },
                color: "#CFD7D9",
                font: {
                  weight: "700",
                  size: responsiveDataValue.responsiveMonthFontSize[deviceSizeForChart],
                  family: `"Source Sans Pro", sans-serif`,
                },
                callback: function (val, index) {
                  val = this.getLabelForValue(val);
                  val = deviceSizeForChart < 3 ? moment(val).format("MMM DD") : '';
                  return val;
                }
              }
            },
            y: {
              title: {
                display: true,
              },
              grid: {
                display: true
              },
              ticks: {
                padding: responsiveDataValue.responsiveTickPadding[deviceSizeForChart],
                precision: 0,
                color: "#09425A",
                font: {
                  size: responsiveDataValue.responsiveYAxisFontSize[deviceSizeForChart],
                  weight: 700,
                  family: `"Source Sans Pro", sans-serif`,
                },
                callback: function (val, index) {
                  return val.toString().padStart(2, '0');
                }
              }
            },
          }
        }
      }
      if (chart > 1) {
        let is_zero = true
        let line_score = data.chart.map((ln, i) => { if (ln.score !== 0) { is_zero = false } return ln = ln.score === -1 ? undefined : ln.score })
        let lineData1 = {
          label: chart === 2 ? "Depression Level" : chart === 3 ? "Anxiety Level" : "Trauma Level",
          is_zero: is_zero,
          data: line_score,
          xAxisID: 'xAxis1',
          borderColor: "#09425a",
          borderWidth: responsiveDataValue.responsiveBorderWidth[deviceSizeForChart],
          backgroundColor: "#0099ba",
          pointStyle: Array.from({ length: line_score.length }, (_, i) => document.getElementById(`canvas${0}${i}`)),
          pointRadius: 10,
        }
        chartData.datasets.push(lineData1)
        setPointData([lineData1.data])
      } else if (chart === 1) {
        let line1_score = data.chart.map((ln, i) => { return ln = ln.postDistressScore === -1 ? undefined : ln.postDistressScore })
        let line2_score = data.chart.map((ln, i) => { return ln = ln.preDistressScore === -1 ? undefined : ln.preDistressScore })
        let lineData1 = {
          label: "Post-activity distress level",
          data: line1_score,
          xAxisID: 'xAxis1',
          borderColor: "#09425a",
          borderWidth: responsiveDataValue.responsiveBorderWidth[deviceSizeForChart],
          backgroundColor: "#0099ba",
          pointStyle: Array.from({ length: line1_score.length }, (_, i) => document.getElementById(`canvas${0}${i}`)),
          pointRadius: 10
        }
        let lineData2 = {
          label: "Pre-activity distress level",
          data: line2_score,
          xAxisID: 'xAxis1',
          borderColor: "orange",
          borderWidth: responsiveDataValue.responsiveBorderWidth[deviceSizeForChart],
          backgroundColor: "#0099ba",
          pointStyle: Array.from({ length: line2_score.length }, (_, i) => document.getElementById(`canvas${1}${i}`)),
          pointRadius: 10
        }
        chartData.datasets.push(lineData1)
        chartData.datasets.push(lineData2)
        setPointData([lineData1.data, lineData2.data])
      }
      switch (chart) {
        case 1:
          setDestressData(chartData)
          setDepressionData([])
          setAnxietyData([])
          setTraumaData([])
          break;
        case 2:
          setDestressData([])
          setDepressionData(chartData)
          setAnxietyData([])
          setTraumaData([])
          break;
        case 3:
          setDestressData([])
          setDepressionData([])
          setAnxietyData(chartData)
          setTraumaData([])
          break;
        case 4:
          setDestressData([])
          setDepressionData([])
          setAnxietyData([])
          setTraumaData(chartData)
          break;
        default:
          break;
      }
    })
    setChartLoader(false);
  }

  useEffect(() => {
    // pointData.length > 0 && Array.from({ length: pointData.reduce((total, x) => total + x.length, 0) }, (_, i) =>

    //   var grapharea = document.getElementById(`canvas${(pointData[0].length - 1) >= i ? 0 : 1}${(pointData[0].length - 1) >= i ? i : (i - (pointData[0].length))}`).getContext("2d");
    //   grapharea.clear();
    //   return;
    // );

    // for (var i = 0; i < 7; i++) {
    //   for (var j = 0; j < 7; j++) {
    //     var grapharea;
    //     if (pointData.length > 1) {
    //       grapharea = document.getElementById(`canvas${i}${j}`);
    //       if (grapharea) {
    //         grapharea = grapharea.getContext("2d");
    //         grapharea.clearRect(0, 0, grapharea.width, grapharea.height);
    //       }
    //     }
    //     else {
    //       grapharea = document.getElementById(`canvas${i}${j}`);
    //       if (grapharea) {
    //         grapharea = grapharea.getContext("2d");
    //         grapharea.clearRect(0, 0, grapharea.width, grapharea.height);
    //       }
    //     }
    //   }
    // }
    setDestressData([])
    setDepressionData([])
    setAnxietyData([])
    setTraumaData([])
    if (chart === 1) {
      generateChartData();
    }
    generateChartData();
  }, [chart, deviceSizeForChart, startDate]);


  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    // setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
    setDeviceSizeForChart(['xl', 'lg', 'md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  const fvtToolsDataArray = convertTestimonialArray(fvtTools, true, 3);
  const recToolsDataArray = convertTestimonialArray(recTools, true, 3);
  const recentActivityDataArray = convertTestimonialArray(recentActivity, true, 4);

  //console.log("length", deviceSize > -1 ? 1 : 4)

  // const ChartToolTips = withStyles((theme) => ({
  //   tooltip: {
  //     backgroundColor: '#A9BDC5',
  //     color: 'fff',
  //     maxWidth: 456,
  //     padding: '15px',
  //     borderRadius: '20px',
  //     fontSize: theme.typography.pxToRem(12),
  //     border: '0px solid #dadde9',
  //   },
  // }))(Tooltip);

  //console.log("chart data", destressData, recentActivityDataArray, pointData);
  //console.log("point data", pointData);
  // console.log("char loader:", chartLoader)


  // const tooltip = <div className="info_tooltip">This is an example of how a popup would appear when a user hovers over the information icon.</div>
  return (
    <MyProgressStyle>
      <div class="container">
        {pointData.length > 0 && Array.from({ length: pointData.reduce((total, x) => total + x.length, 0) }, (_, i) =>
          <canvas id={`canvas${(pointData[0].length - 1) >= i ? 0 : 1}${(pointData[0].length - 1) >= i ? i : (i - (pointData[0].length))}`}
            style={{ height: "100px", width: "200px", display: "none" }}>

          </canvas>
        )}
        <Grid container direction="row">
          <Grid item lg={8} md={8} sm={7} xs={12}>
            <PageTitle>My Progress</PageTitle>
            {/* <PointCanvas /> */}
            <PageDiscription >See your activities and track your progress</PageDiscription>
            <div className="click_button click_button_mobile text-underline" onClick={() => { window.location.href = "/understanding-you" }}>
              <span>Click here to do another assessment now</span>
            </div>
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ "margin-bottom": "36px" }}>
          <Grid item lg={6} md={6} sm={7} xs={12}>
            <CardsTitle className="profile_text">MY PROFILE</CardsTitle>
            <PageDiscription>The more complete your assessment and profile are, the more personalized we can make your recommendations.</PageDiscription>
            <div className="click_button click_button_desk text-underline" onClick={() => { window.location.href = "/understanding-you" }}>
              <span>Click here to do another assessment now</span>
            </div>
            <div className="click_button complete_profile_link text-underline">
              <span onClick={() => { window.location.href = "/profile" }} >Complete My Profile</span>
            </div>
          </Grid>
          <Grid className="progress_bar_wrapper" item lg={4} md={4} sm={5} xs={12} style={{ paddingTop: "100px", minHeight: "220px", float: 'right' }}>
            <div className="progress_bar">
              {!loading && <CircularProgressWithLabel value={!!profileProgress.overallPercentage ? profileProgress.overallPercentage : 0} />}
            </div>

            <div className="click_button click_button_circle" style={{ "width": "100%", cursor: "pointer" }} onClick={() => { window.location.href = "/profile" }}>
              {!!profileProgress.overallPercentage && profileProgress.overallPercentage === 100 ?
                <span style={{ fontWeight: "bold", marginLeft: 100, color: "#0099ba" }}>Completed</span> :
                <span className="text-underline" style={{ color: "#0099ba" }} onClick={() => { window.location.href = "/profile" }}>Complete My Profile</span>}
            </div>
          </Grid>
        </Grid>
        <Grid item lg={10} md={10} sm={12} xs={12} >
          <div class="">
            <div class="panel-group panel-body" id="accordion">

              <div className="chart_header">

                <span></span>
                {/* <ChartToolTips title={tooltip} placement="top-start">
                  <img className="info_icon" src={info} alt="info" />
                </ChartToolTips> */}

                <TypeSelect
                  id="registrationRace"
                  name="registrationRace"
                  label="registrationRace"
                  disableUnderline={true}
                  fullWidth={true}
                  value={chart}
                  className="chart-dropdown"
                  // style={{ width: "40%", float: "right" }}
                  onOpen={handleOpen}
                  onClose={handleClose}
                >
                  <MenuItem
                    key={"distress"}
                    value={1}
                    style={{ fontSize: '16px' }}
                    onClick={() => {
                      setChartLoader(true);
                      setAlertMessage("")
                      setChart(1)
                    }}
                  >
                    {"Distress"}
                  </MenuItem>
                  <MenuItem
                    key={"depression"}
                    value={2}
                    style={{ fontSize: '16px' }}
                    onClick={() => {
                      setChartLoader(true);
                      setChart(2);
                      if (depressionData && depressionData?.datasets && depressionData?.datasets[0]?.is_zero) {
                        setAlertMessage("Start completing the full assessment to track your depression.")
                      } else {
                        setAlertMessage("")
                      }
                    }}
                  >
                    {"Depression"}
                  </MenuItem>
                  <MenuItem
                    key={"anxiety"}
                    value={3}
                    style={{ fontSize: '16px' }}
                    onClick={() => {
                      setChartLoader(true);
                      setChart(3)
                      if (anxietyData && anxietyData?.datasets && anxietyData?.datasets[0]?.is_zero) {
                        setAlertMessage("Start completing the full assessment to track your anxiety.")
                      } else {
                        setAlertMessage("")
                      }

                    }}
                  >
                    {"Anxiety"}
                  </MenuItem>
                  <MenuItem
                    key={"trauma"}
                    value={4}
                    style={{ fontSize: '16px' }}
                    onClick={() => {
                      setChartLoader(true);
                      setChart(4);
                      if (traumaData && traumaData?.datasets && traumaData?.datasets[0]?.is_zero) {
                        setAlertMessage("Start completing the full assessment to track your trauma.")
                      } else {
                        setAlertMessage("")
                      }

                    }}
                  >
                    {"Trauma"}
                  </MenuItem>
                </TypeSelect>
              </div>

              {alertMessage !== "" && <span style={{ paddingTop: 10 }}>{alertMessage}</span>}
              <div className="chart">
                {(chart === 1 && destressData.length <= 0) ?
                  <Loader />
                  : (chart === 2 && depressionData.length <= 0) ?
                    <Loader />
                    : (chart === 3 && anxietyData.length <= 0) ?
                      <Loader />
                      : (chart === 4 && traumaData.length <= 0) ?
                        <Loader />
                        :
                        <>
                          <img className="chart-left-arrow" onClick={() => changeDates(true)} src={chartRightarrow} alt="chart left arrow" />
                          <LineChart ref={chartRef} className="chart-canvas" lineData={chart === 1 ? destressData : chart === 2 ? depressionData : chart === 3 ? anxietyData : traumaData} />
                          <img className={`${endDate === todayDate ? "disabled" : ""} chart-right-arrow`} onClick={() => changeDates()} src={endDate === todayDate ? DisabledRightArrow : chartRightarrow} alt="chart right arrow" />
                        </>
                }
              </div>
            </div>
          </div>
        </Grid>
        <CardsTitle className="recent_activity_title" style={{ color: "#09425A" }}>MY RECENT ACTIVITY
          <img alt="go" src={goIcon} style={{ marginTop: -5, width: 15, marginLeft: 10 }}></img></CardsTitle>
        {/* <Grid className="recent_activity" container direction="row" item lg={12} md={12} sm={12} xs={12}>
          {!!recentActivity && recentActivity.map((act) => {
            return <Grid className="recent_activity_col" item lg={3} md={6} sm={12} xs={12}>
              <Activity activity={act} />
            </Grid>
          })}
        </Grid> */}


        {/* <Grid className="recent_activity" container direction="row" item lg={12} md={12} sm={12} xs={12}> */}
        {
          recentActivityDataArray && recentActivityDataArray.length > 0 && (
            // <ToolContainer>
            <div className="row main_tools_slider_row">
              <div className="col-md-12 sliderContainer main_tools_slider">
                <Caraousel
                  indicatorIconButtonProps={{
                    style: {
                      border: '1px solid #a9bdc5',
                    },
                  }}
                  navButtonsAlwaysInvisible={!(recentActivityDataArray?.length > 1)}
                  navButtonsAlwaysVisible={recentActivityDataArray?.length > 1}
                  name="recentActivityDataArray"
                  // data={recentActivityDataArray}
                  withCustomButton={true}
                >
                  {recentActivityDataArray
                    && recentActivityDataArray.map((item, index) => {
                      return (
                        <CarouselItem componentName="activity" allItems={recentActivityDataArray} data={item.Items[0]} desktopMode={true} length={2} itemLength={3} index={index} key={index} component={Activity} />
                      );
                    })}
                </Caraousel>
              </div>
            </div>
            // </ToolContainer>
          )
        }

        {/* </Grid> */}



        {/* <Grid className="progress_tool_tab tab_home " container direction="row"  item lg={12} md={12} sm={12} xs={12} >
          <CardsTitle onClick={() => { setBtmType(1) }} style={btmType === 1 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 1 ? <u>MY FAVORITE TOOLS </u> : "MY FAVORITE TOOLS"} </CardsTitle>
          <CardsTitle onClick={() => { setBtmType(2) }} style={btmType === 2 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 2 ? <u>BY DATE </u> : "BY DATE"}  </CardsTitle>
          <CardsTitle onClick={() => { setBtmType(3) }} style={btmType === 3 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 3 ? <u>RECOMMENDED TOOLS </u> : "RECOMMENDED TOOLS"} </CardsTitle>
        </Grid> */}
        <Grid container className="progress_tool_tab tab_home" direction="row" item lg={12} md={12} sm={12} xs={12} >
          <CardsTitle className={`${btmType === 1 ? "activetab " : "tab_text"}`} onClick={() => { setBtmType(1) }} style={btmType === 1 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 1 ? <u>MY FAVORITE TOOLS </u> : "MY FAVORITE TOOLS"} </CardsTitle>
          <CardsTitle className={`${btmType === 2 ? "activetab " : "tab_text"}`} onClick={() => { setBtmType(2) }} style={btmType === 2 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 2 ? <u>BY DATE </u> : "BY DATE"}  </CardsTitle>
          <CardsTitle className={`${btmType === 3 ? "activetab " : "tab_text"}`} onClick={() => { setBtmType(3) }} style={btmType === 3 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 3 ? <u>RECOMMENDED TOOLS </u> : "RECOMMENDED TOOLS"} </CardsTitle>
        </Grid>
        {
          btmType === 1 && <>
            {/* {fvtTools && fvtTools.length > 0 ? (
            <div className="">
              <ToolContainer>
                {fvtTools
                  ? fvtTools.map((ele) => (
                    <div className="col-xl-2 col-lg-4 col-md-12" key={ele.id}>
                      <ToolsCard cardData={ele} id={ele.id} />
                    </div>
                  ))
                  : null}
              </ToolContainer>
            </div>
          ) : (
            <Box className="no-Tool-found">
              <span>No tools found</span>
            </Box>
          )} */}
            {fvtToolsDataArray === null &&
              <Box className="no-Tool-found">
                <span>Loading...</span>
              </Box>
            }
            {fvtToolsDataArray && fvtToolsDataArray.length > 0 && (
              <div className="row main_tools_slider_row">
                <div className="col-md-12 sliderContainer main_tools_slider">
                  <Caraousel
                    indicatorIconButtonProps={{
                      style: {
                        border: '1px solid #a9bdc5',
                      },
                    }}
                    navButtonsAlwaysInvisible={!(fvtToolsDataArray?.length > 1)}
                    navButtonsAlwaysVisible={fvtToolsDataArray?.length > 1}
                    withCustomButton={true}
                  >
                    {fvtToolsDataArray
                      && fvtToolsDataArray.map((item, index) => {
                        return (
                          <CarouselItem allItems={fvtToolsDataArray} data={item.Items[0]} desktopMode={true} length={2} itemLength={3} index={index} key={index} component={ToolsCard} />
                        );
                      })}
                  </Caraousel>
                </div>
              </div>
              // </div>
              // </ToolContainer>
            )}
            {fvtToolsDataArray && fvtToolsDataArray?.length === 0 && (
              <Box className="no-Tool-found">
                <span>No tools found</span>
              </Box>
            )}
          </>}
        {
          btmType === 2 && <>
            <Grid className="by_date_row" container direction="row" item lg={12} md={12} sm={12} xs={12}>
              {byDate.map((elm, i) => {
                let date = new Date(elm.date).toDateString()
                return <div className="bt_date_col col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <CardsWrapper className="activate_bucket" >
                    <div className="activate_bucket_scroll">
                      <CardContentWrapper className="bucket_wrapper" >
                        <div className="activate_bucket_title" style={{ color: "#09425A", fontWeight: "bold" }}>{date}<br /></div>
                        {elm.tools.map((tool) => {
                          return <>
                            <Divider style={{ backgroundColor: "#F19840", }} />
                            <div className="row activate_bucket_row"  >
                              <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                <div className="bucket_tools_title" onClick={() => {
                                  if (tool.slug === "flexible-thinking") {
                                    history.push({ pathname: ROUTES.flexi + "/" + tool.toolId, state: { id: tool.toolID } });
                                  } else if (tool.slug === "find-a-solution") {
                                    history.push({ pathname: ROUTES.probsolve + "/" + tool.toolId, state: { id: tool.toolID } });
                                  } else if (tool.slug === "fill-your-bucket") {
                                    history.push({ pathname: ROUTES.fillbucket + "/" + tool.toolId, state: { id: tool.toolID } });
                                  } else {
                                    history.push({ pathname: ROUTES.tool_detail + "/" + tool.toolId, state: { id: tool.toolID } });
                                  }
                                }} style={{ cursor: "pointer" }}>{tool.title}</div>
                                {/* <div style={{ fontSize: "12px", color: "#A9BDC5" }}>Session 20</div> */}
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 by_date_rate_heart_col" >
                                {/* <CardRating
                                  disabled={true}
                                  name={"demo1"}
                                  defaultValue={3}
                                  size="large"
                                  className="mt-12"
                                  onChange={(e, value) => {
                                  }}
                                /> */}
                                <StarRating
                                  disabled={true}
                                  className="mt-12 date-by-star-rating"
                                  name={i}
                                  defaultValue={3}
                                  size="large"
                                  onChange={(e, value) => {
                                  }} />
                                {/* <div className="bucket_heart" >
                                  <CardIconButton aria-label="favorite">
                                    <i className="fa fa-heart favorite-icon"></i>
                                  </CardIconButton>
                                </div> */}
                              </div>
                            </div>
                          </>
                        })
                        }
                      </CardContentWrapper>
                    </div>
                  </CardsWrapper>
                </div>

              })}
            </Grid>
          </>
        }
        {
          btmType === 3 && <>
            {recToolsDataArray === null &&
              <Box className="no-Tool-found">
                <span>Loading...</span>
              </Box>
            }
            {recToolsDataArray && recToolsDataArray.length > 0 && (
              // <ToolContainer>
              <div className="row main_tools_slider_row">
                <div className="col-md-12 sliderContainer main_tools_slider">
                  <Caraousel
                    indicatorIconButtonProps={{
                      style: {
                        border: '1px solid #a9bdc5',
                      },
                    }}
                    navButtonsAlwaysInvisible={!(recToolsDataArray?.length > 1)}
                    navButtonsAlwaysVisible={recToolsDataArray?.length > 1}
                    withCustomButton={true}
                  >
                    {recToolsDataArray
                      && recToolsDataArray.map((item, index) => {
                        return (
                          <CarouselItem allItems={recToolsDataArray} data={item.Items[0]} desktopMode={true} length={2} itemLength={3} index={index} key={index} component={ToolsCard} />
                        );
                      })}
                  </Caraousel>
                </div>
              </div>
              // </ToolContainer>
            )}
            {recToolsDataArray && recToolsDataArray?.length === 0 && (
              <Box className="no-Tool-found">
                <span>No tools found</span>
              </Box>
            )}
          </>
        }
      </div >
      <script></script>
    </MyProgressStyle >
  );
};

MyProgress.propTypes = {};

export default MyProgress;
