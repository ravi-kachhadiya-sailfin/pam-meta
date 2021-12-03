/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import Header from '../containers/TheHeader';
import Footer from 'app/tamComponents/footer/Footer';
import { getAssessmentCount } from '../services/AssessmentAndSurveyServices';
import usePagination from "../users/Pagination";
import { getAccessedAssessments, getPostDistressScore } from '../services/dashboardServices';
import VerticalChart from '../charts/verticalChart';
// import HorizontalChart from '../charts/HorizontalChart';
import CustomPagination from "app/admin/users/CustomPagination";

import {
  useJsonToCsv
} from 'react-json-csv';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
// import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'app/Routes';

import {
  AdminContainer,
  NormalCard,
  CardHeader,
  PaginationContainer,
  TableID,
  ChartContainer,
  Title,
  ChartCard,
  TableContainer,
  TableData,
  TableHeader,
  // ChartAndCounterContainer
} from 'app/admin/containers/DashBoard.style';

const AssessmentsAndSurvey = () => {
  const history = useHistory();

  const [assessmentCount, setAssessmentCount] = useState([])
  const [assessments, setAssessments] = useState({})
  const [initialTools, setInitialTools] = useState({})
  const { saveAsCsv } = useJsonToCsv();
  const [assessmentData, setAssessmentData] = useState([])
  const useStyles = makeStyles(theme => ({
    root: {},
    tableRightBorder: {
      borderWidth: 1,
      borderRightWidth: 1,
      borderColor: '#eae4e4;',
      borderStyle: 'solid',
    },
  }));
  const classes = useStyles();

  const Button = styled(MuiButton)(spacing);

  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const count = Math.ceil(assessmentCount.length / PER_PAGE);

  const downloadCsv = () => {
    let csv_data = []
    assessmentData.forEach((assessment) => {
      csv_data.push(assessment)
    })
    const filename = 'AssessmentAndSurvey',
      fields = {
        "name": "Name",
        "noOfTimesCompleted": "Number Of Time Completed",
        "lastAccessedOn": "Last Access",
        "avgPostdistressScore": "Average Post Distress Score"
      },
      data = csv_data;
    saveAsCsv({ data, fields, filename });
  }

  const scrollTop = () => {
    var topScroll = 0;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  useEffect(() => {
    // require('./../css/style.css');
    let todayDate = new Date().toISOString().slice(0, 10);

    getAssessmentCount("2018-01-01", todayDate).then((data) => {
      setAssessmentData(data.data.assessmentsTaken)
      setAssessmentCount(data.data.assessmentsTaken);

    })
    getPostDistressScore("2018-01-01", todayDate).then((data) => {
      let score_labels = data.data.postDistress.map((ln, i) => { return ln = ln.title })
      let score_count = data.data.postDistress.map((ln, i) => { return ln = parseInt(ln.avgScore) })
      let scoreData = {
        labels: score_labels,
        datasets: [
          {
            label: 'ACCESSED ASSESSMENT SCORE',
            data: score_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            indexAxis: 'y',
            barThickness: 58,
          },
        ],

      }
      setInitialTools(scoreData);
      console.log(initialTools)

    })

    getAccessedAssessments("2018-01-01", todayDate).then((data) => {
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
      console.log(assessmentData);
      setAssessments(assessmentData);
    })
  }, [])
  const PG_DATA = usePagination(assessmentCount, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    PG_DATA.jump(p);
  };
  return (
    <AdminContainer>
      <Header />
      <div className="continer page-container">
        <div className="admin-container">

          {/* <Grid item lg={8} md={8} sm={12} xs={12}>
            <ChartContainer>
              <Title className="font-weight-bold">AVERAGE POST DISTRESS SCORE</Title>
              <ChartCard className="chart-MH-500 pt-0">
                <HorizontalChart HorizontalData={initialTools} />
              </ChartCard>
            </ChartContainer>
          </Grid> */}

          <ChartContainer>
            <Title className="font-weight-bold">ASSESSMENT ATTEMPTED</Title>
            <ChartCard className="chart-MH-500 pb-50 pt-50">
              <VerticalChart VerticalData={assessments} drawTicks={false} padding={[10, 300]} />
            </ChartCard>
          </ChartContainer>

        </div>

        {/* <div className="container" style={{ paddingLeft: "180px" }}>
          <Grid item lg={10} md={10} sm={12} xs={12} style={{ borderRadius: "39px", backgroundColor: "#FFFFFF", align: "center", padding: "50px" }}>
            <VerticalChart VerticalData={assessments} />
          </Grid>
        </div> */}
        <NormalCard>
          <CardHeader>
            <div className="user-details-header">
              <div className="user-details-header">
                {/* <MenuIcon className="hamburger-icon" /> */}
                <Title className="font-weight-bold mb-0 p-0 pl-10 ml-25">CONTENTS</Title>
              </div>
              <Button onClick={() => { downloadCsv() }} className="btn data-change-btn shadow-none">Export To CSV</Button>
            </div>
          </CardHeader>

          <TableContainer>
            <TableContainer className="border-btm p-0">
              <Table stickyHeader aria-label="sticky table">
                <TableHead style={{ backgroundColor: "#FFFFFF" }}>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Name</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>No Of Time Completed</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Last Accessed</TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Average Assessment Score</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PG_DATA.currentData().map((assessment, i) => {
                    return (
                      <TableRow key={assessment}>
                        <TableData component="th" scope="row" className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>
                          <TableID>
                            <a href={"/AssessmentDetail/" + assessment.id}>{assessment.name}</a>
                          </TableID>
                        </TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{assessment.noOfTimesCompleted}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{new Date(assessment.lastAccessedOn).toLocaleDateString()}</TableData>
                        <TableData className={`${classes.tableRightBorder} border-r-none ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{assessment.avgPostdistressScore}</TableData>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainer>
        </NormalCard>

        <PaginationContainer>
          <CustomPagination
            count={count}
            size="large"
            page={page}
            onChange={handleChange}
          />
          <Button onClick={() => { history.push(ROUTES.Dashboard); scrollTop(); }} className="btn data-change-btn shadow-display">Back</Button>
        </PaginationContainer>


      </div>
      <Footer adminClassName="admin-footer" />
    </AdminContainer>
  );
}
export default AssessmentsAndSurvey;