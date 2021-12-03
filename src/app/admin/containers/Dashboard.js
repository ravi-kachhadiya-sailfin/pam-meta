/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Header from './TheHeader';
import Footer from 'app/tamComponents/footer/Footer';
import VerticalChart from '../charts/verticalChart';
import HorizontalChart from '../charts/HorizontalChart';
import {
  getMostAccessTools,
  getLoginUsers,
  getAccessedAssessments,
  getPreDistressScore,
  getAverageRatings,
  getPostDistressScore,
  getFeelingSelected,
  getTraumaCount
} from '../services/dashboardServices';
import { Grid, Box } from '@material-ui/core';
import { FeelingSelect } from '../containers/enums';
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import {
  AdminContainer,
  CounterLG,
  CounterMD,
  CounterSM,
  TextLG,
  TextMD,
  TextSM,
  ChartContainer,
  Title,
  ChartCard,
  ChartAndCounterContainer
} from 'app/admin/containers/DashBoard.style';


const Dashboard = () => {
  const [toolAccessData, setToolAccessData] = useState({})
  const [initialTools, setInitialTools] = useState({})
  const [assessments, setAssessments] = useState({})
  const [loginUser, setLoginUser] = useState([])
  const [unRegUsers, setunRegUsers] = useState([])
  const [ratings, setRatings] = useState([])
  const [avgRatings, setAvgRatings] = useState([])
  const [preDistressScore, setPreDistressScore] = useState([])
  const [selectedTrauma, setSelectedTrauma] = useState([])
  const [favourites, setFavourites] = useState([])
  const [feelingSelect, setFeelingSelect] = useState([])
  const [today, setToday] = useState('');
  const [oneWeek, setOneWeek] = useState('');
  const [twoWeek, setTwoWeek] = useState('');
  const [oneMonth, setOneMonth] = useState('');
  const [traumaList, setTraumaList] = useState([]);
  const Button = styled(MuiButton)(spacing);
  const [active, setActive] = useState("ow")

  // let names = [
  //   FeelingSelect.SAD_OR_DOWN,
  //   FeelingSelect.ANXIOUS_OR_WORRIED,
  //   FeelingSelect.GUILT_OR_REGRET,
  //   FeelingSelect.STRESSED,
  //   FeelingSelect.CONTENT,
  //   FeelingSelect.HAPPY,
  //   FeelingSelect.FRUSTRATED,
  //   FeelingSelect.EXHAUSTED,
  //   FeelingSelect.NOT_SURE
  // ]
  useEffect(() => {
    let curTime = new Date().getTime()
    let todayDate = new Date(curTime + (1000 * 60 * 60 * 24)).toISOString().slice(0, 10);

    let weekTime = new Date(curTime - (7 * 1000 * 60 * 60 * 24)).toISOString().slice(0, 10);
    let weekTwoTime = new Date(curTime - (14 * 1000 * 60 * 60 * 24)).toISOString().slice(0, 10);
    let monthTime = new Date(curTime - (30 * 1000 * 60 * 60 * 24)).toISOString().slice(0, 10);

    setToday(todayDate)
    setOneWeek(weekTime)
    setTwoWeek(weekTwoTime)
    setOneMonth(monthTime)

    getData(weekTime, todayDate);
  }, []);


  let getData = (start_date, end_date) => {
    getLoginUsers(start_date, end_date).then((data) => {
      setLoginUser(data.data.loginUsers);
      setunRegUsers(data.data.unregisteredUsers)
      setFavourites(data.data.totalFavorites)
      setRatings(data.data.satisfactionRating.ratingCount)
    })
    getPreDistressScore(start_date, end_date).then((data) => {
      setPreDistressScore(parseFloat(data.data.preDistressScore.average).toFixed(2))
      setSelectedTrauma(data.data.traumaSelected)
    })
    getTraumaCount(start_date, end_date).then((data) => {
      data.data.trauma = data.data.trauma.sort(function (x, y) { return y.count - x.count });
      let tr_labels = data.data.trauma.map((ln, i) => { return ln = ln.option.length < 70 ? ln.option : ln.option.substring(0, 75).trim() + '...' })
      let tr_count = data.data.trauma.map((ln, i) => { return ln = parseInt(ln.count) })
      console.log(tr_labels);
      let barData = {
        labels: tr_labels,
        datasets: [
          {
            label: 'MOST ACCESS TOOLS',
            data: tr_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            labelFontColor: 'red',
            barThickness: tr_labels.length > 8 ? 30 : 38,
          },
        ],
      }
      setTraumaList(barData)
    })
    getMostAccessTools(start_date, end_date).then((data) => {
      let bar_labels = data.data.topAccessedTools.map((ln, i) => { return ln = ln.name })
      bar_labels = bar_labels.map(x => {
        let label = x;
        if (x.split(" ").length > 3) {
          let firstRow = x.split(" ");
          firstRow = firstRow.slice(0, 2).join(" ");

          let secondRow = x.split(" ");
          secondRow = secondRow.slice(2).join(" ");

          label = [firstRow, secondRow];
        }

        return label;
      });

      let bar_count = data.data.topAccessedTools.map((ln, i) => { return ln = parseInt(ln.accessedCount) })
      let barData = {
        labels: bar_labels,
        datasets: [
          {
            label: 'MOST ACCESS TOOLS',
            data: bar_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            labelFontColor: 'red',
            barThickness: 58,
          },
        ],
      }

      setToolAccessData(barData);
    })
    getAverageRatings(start_date, end_date).then((data) => {
      data.data.ratings = data.data.ratings.sort(function (x, y) { return y.avgRating - x.avgRating });

      let Avg_labels = data.data.ratings.map((ln, i) => { return ln = ln.title })
      let avg_count = data.data.ratings.map((ln, i) => { return ln = parseInt(ln.avgRating) })
      let avgData = {
        labels: Avg_labels,
        datasets: [
          {
            label: 'AVERAGE RATINGS',
            data: avg_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            barThickness: 38,
          },
        ],

      }

      setAvgRatings(avgData);
    })
    getAccessedAssessments(start_date, end_date).then((data) => {

      let assessment_labels = data.data.assessments.map((ln, i) => { return ln = ln.name })
      let assessment_count = data.data.assessments.map((ln, i) => { return ln = parseInt(ln.count) })
      let assessmentData = {
        labels: assessment_labels,
        datasets: [
          {
            label: 'AVERAGE ASSESSMENT SCORE',
            data: assessment_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            barThickness: 58,
          },
        ],
      }
      //  console.log(assessmentData);
      setAssessments(assessmentData);
    })
    getFeelingSelected(start_date, end_date).then((data) => {
      data.data.feelCount = data.data.feelCount.sort(function (x, y) { return y.count - x.count });
      let feeling_labels = data.data.feelCount.map((ln, i) => { return ln = FeelingSelect[ln.name] })
      // console.log("feeling_labels", feeling_labels);
      let feeling_count = data.data.feelCount.map((ln, i) => { return ln = parseInt(ln.count) })
      // debugger
      // console.log(feeling_count);
      let feelingData = {
        labels: feeling_labels,
        datasets: [
          {
            label: 'FEELING COUNT',
            data: feeling_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            indexAxis: 'y',
            barThickness: feeling_labels.length > 8 ? 30 : 38,
          },
        ],

      }
      setFeelingSelect(feelingData);
    })
    getPostDistressScore(start_date, end_date).then((data) => {
      data.data.postDistress = data.data.postDistress.sort(function (x, y) { return y.avgScore - x.avgScore });
      let score_labels = data.data.postDistress.map((ln, i) => { return ln = ln.title })
      let score_count = data.data.postDistress.map((ln, i) => { return ln = parseInt(ln.avgScore) })
      let scoreData = {
        labels: score_labels,
        datasets: [
          {
            label: 'Average Post Distress Score',
            data: score_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            indexAxis: 'y',
            barThickness: score_labels.length > 8 ? 30 : 38,
          },
        ],

      }
      setInitialTools(scoreData);
      //  console.log(initialTools)

    })

  };


  return (
    <AdminContainer>
      <Header />
      <div className="continer page-container content-center">
        <div className="admin-container">

          <div className="button-grid">
            <Button onClick={() => { setActive("ow"); getData(oneWeek, today) }} m={1} className={`${active === "ow" && "active-btn"} data-change-dashabord-btn`}>Week</Button>
            <Button onClick={() => { setActive("tw"); getData(twoWeek, today) }} m={1} className={`${active === "tw" && "active-btn"} data-change-dashabord-btn`}  >2 Weeks</Button>
            <Button onClick={() => { setActive("om"); getData(oneMonth, today) }} m={1} className={`${active === "om" && "active-btn"} data-change-dashabord-btn`}  >Month</Button>
            <Button onClick={() => { setActive("all"); getData("2018-01-01", today) }} m={1} className={`${active === "all" && "active-btn"} data-change-dashabord-btn`} >All</Button>
          </div>

          <Box className="user-counter-box">
            <Box className="counter-box-mid">
              <CounterMD className="font-weight-bold">{loginUser}</CounterMD>
              <TextMD className="font-weight-semi-bold">Registered users</TextMD>
            </Box>
            <Box className="counter-box-mid ml-70">
              <CounterMD className="font-weight-bold">{unRegUsers}</CounterMD>
              <TextMD className="font-weight-semi-bold">Unregistered users</TextMD>
            </Box>
          </Box>

          <ChartContainer >
            <Title className="font-weight-bold">MOST ACCESSED TOOLS</Title>
            <ChartCard className="chart-MH-700">
              <VerticalChart VerticalData={toolAccessData} />
            </ChartCard>
          </ChartContainer>

          <ChartContainer >
            <Title className="font-weight-bold">AVERAGE RATING</Title>
            <ChartCard className="chart-MH-700 pt-0">
              <HorizontalChart HorizontalData={avgRatings} />
            </ChartCard>
          </ChartContainer>

          <ChartContainer >
            <Title className="font-weight-bold">Trauma Choosed</Title>
            <ChartCard className="chart-MH-700 pt-0">
              <HorizontalChart HorizontalData={traumaList} />
            </ChartCard>
          </ChartContainer>

          <ChartAndCounterContainer >
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <ChartContainer>
                <Title className="font-weight-bold">AVERAGE POST DISTRESS SCORE</Title>
                <ChartCard className="chart-MH-500 pt-0">
                  <HorizontalChart HorizontalData={initialTools} />
                </ChartCard>
              </ChartContainer>
            </Grid>


            <Box>
              <Box className="counter-box-sm">
                <CounterSM className="font-weight-bold">{ratings}</CounterSM>
                <TextSM className="font-weight-semi-bold">Number Of Ratings</TextSM>
              </Box>
              <Box className="counter-box-sm">
                <CounterSM className="font-weight-bold">{favourites}</CounterSM>
                <TextSM className="font-weight-semi-bold">Total Favourite</TextSM>
              </Box>
              <Box className="counter-box-sm">
                <CounterSM className="font-weight-bold">{4}</CounterSM>
                <TextSM className="font-weight-semi-bold">Total Share</TextSM>
              </Box>
            </Box>
          </ChartAndCounterContainer>

          <Box className="large-counter-box">
            <Box className="counter-box-lg left">
              <CounterLG className="font-weight-bold">{preDistressScore}</CounterLG>
              <TextLG className="font-weight-semi-bold text-center">Average Pre-distress score</TextLG>
            </Box>
            <Box className="counter-box-lg right ml-60">
              <CounterLG className="font-weight-bold">{selectedTrauma}</CounterLG>
              <TextLG className="font-weight-semi-bold text-center">Count Of Trauma Selected</TextLG>
            </Box>
          </Box>

          <ChartContainer>
            <Title className="font-weight-bold">FEELING SELECTED</Title>
            <ChartCard className="chart-MH-600 pt-10 pb-20">
              <HorizontalChart HorizontalData={feelingSelect} />
            </ChartCard>
          </ChartContainer>

          <ChartContainer className="mb-0">
            <Title className="font-weight-bold">TOTAL ASSESSMENT ATTEMPTED</Title>
            <ChartCard className="chart-MH-500 pb-50 pt-50">
              <VerticalChart VerticalData={assessments} drawTicks={false} padding={[10, 300]} />
            </ChartCard>
          </ChartContainer>

        </div>
      </div>
      <Footer adminClassName="admin-footer" />
    </AdminContainer  >

  );

}
export default Dashboard;