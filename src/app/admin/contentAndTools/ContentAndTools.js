/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import Header from '../containers/TheHeader';
import Footer from 'app/tamComponents/footer/Footer';
import { getAccessedContent } from '../services/ContentToolServices';
// import Pagination from '@material-ui/lab/Pagination';
// import usePagination from "../users/Pagination";
import { getMostAccessTools, getAverageRatings } from '../services/dashboardServices';
import VerticalChart from '../charts/verticalChart';
import HorizontalChart from '../charts/HorizontalChart';
import { type } from '../containers/enums';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button as MuiButton } from '@material-ui/core';
import { useJsonToCsv } from 'react-json-csv';
import { makeStyles } from '@material-ui/core/styles';

import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'app/Routes';

import {
  AdminContainer,
  NormalCard,
  CardHeader,
  TableContainer,
  TableData,
  TableHeader,
  TableID,
  PaginationContainer,
  ChartContainer,
  Title,
  ChartCard,
  // Tags,
  Tag
} from 'app/admin/containers/DashBoard.style';
// import MenuIcon from '@material-ui/icons/Menu';

// import { GenderData, RaceOrEthicityData} from "app/features/login/RegistrationPageData";


const ContentAndTools = () => {
  const [accessedContent, setAccessedContent] = useState([])
  const [toolAccessData, setToolAccessData] = useState([])
  const [avgRatings, setAvgRatings] = useState([])
  const { saveAsCsv } = useJsonToCsv();
  const [accessedContentData, setAccessedContentData] = useState([])
  const history = useHistory();
  // let [page, setPage] = useState(1);
  // const PER_PAGE = 12;
  // const count = Math.ceil(accessedContent.length / PER_PAGE);
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

  const downloadCsv = () => {
    let csv_data = []

    accessedContentData.forEach(content => {
      let tags = []
      for (let i = 1; i < content.tags.uiTags.length; i++) {
        const tag = content.tags.uiTags[i];
        tags.push(
          tag.name
        );
      }
      let tagsString = tags.toString();

      csv_data.push({
        name: content.name,
        type: type[content.type],
        duration: content.duration,
        noOfTimesAccessed: content.noOfTimesAccessed,
        isCompleted: content.isCompleted,
        favourite: content.favourite,
        share: content.share,
        tags: tagsString
      });
    });
    const filename = 'Content-Tools',
      fields = {
        "name": "toolName",
        "type": "Type",
        "duration": "Duration",
        "noOfTimesAccessed": "Number Of Time Accessed",
        "isCompleted": "IsCompleted",
        "favourite": "Favorite",
        "rating": "Rating",
        "share": "sharing",
        "tags": "Tags"
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
    getAccessedContent().then((data) => {
      setAccessedContentData(data.data.accessedContent)
      setAccessedContent(data.data.accessedContent);
      console.log(data.data.accessedContent);
      // setPageCount(Math.ceil(data.length / postsPerPage))
    })
    let curTime = new Date().getTime()
    let todayDate = new Date(curTime + (1000 * 60 * 60 * 24)).toISOString().slice(0, 10);

    getMostAccessTools("2018-01-01", todayDate).then((data) => {
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
            barThickness: 58,
          },
        ],
      }
      setToolAccessData(barData);

    })
    getAverageRatings("2018-01-01", todayDate).then((data) => {
      let Avg_labels = data.data.ratings.map((ln, i) => { return ln = ln.title })
      let avg_count = data.data.ratings.map((ln, i) => { return ln = parseInt(ln.avgRating) })
      let avgData = {
        labels: Avg_labels,
        datasets: [
          {
            label: 'AVERAGE RATING',
            data: avg_count,
            backgroundColor: ["#09425A", "#007C91", "#0099BA", "#A9BDC5"],
            indexAxis: 'y',
            barThickness: Avg_labels > 8 ? 30 : 38,
          },
        ],

      }
      console.log(avgData);
      setAvgRatings(avgData);
    })




  }, [])
  // const PG_DATA= usePagination(accessedContent, PER_PAGE);
  // const handleChange = (e, p) => {
  //   setPage(p);
  //   PG_DATA.jump(p);
  // };

  return (
    <AdminContainer>
      <Header />
      <div className="continer page-container">
        <div className="admin-container">

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

        </div>
        {/* <div className="container" style={{ paddingLeft: "100px" }}>
          <Grid item lg={11} md={11} sm={11} xs={11} style={{ borderRadius: "39px", backgroundColor: "#FFFFFF", align: "center", padding: "25px" }}>
            < HorizontalChart HorizontalData={avgRatings} />
          </Grid>
        </div>
        <div className="container" style={{ paddingLeft: "100px" }}>
          <Grid item lg={11} md={11} sm={11} xs={11} style={{ borderRadius: "39px", backgroundColor: "#FFFFFF", align: "center", padding: "30px" }}>
            <VerticalChart VerticalData={toolAccessData} />
          </Grid>
        </div> */}

        <NormalCard>
          <CardHeader>
            <div className="user-details-header">
              {/* <MenuIcon className="hamburger-icon" /> */}
              <Button onClick={() => { downloadCsv() }} className="btn data-change-btn shadow-none">Export To CSV</Button>
            </div>
          </CardHeader>

          <TableContainer>
            <TableContainer className="border-btm table-MH-700 p-0">
              <Table stickyHeader aria-label="sticky table">
                <colgroup>
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '15%' }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Tool Name</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Type</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Duaration</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Number of Time Accessed</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Number of Time Completed</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Favorite Count</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Rating Count</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Share Count</TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Tags</TableHeader>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {accessedContent && accessedContent.map((content, i) => {
                    let tag = content.tags.uiTags.map((tag) => {
                      return (
                        <Tag>{tag.name}</Tag>
                      )
                    });
                    return (
                      <TableRow key={tag}>
                        <TableData component="th" scope="row" className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`} >
                          <TableID>
                            <a href={"/ContentToolDetail/" + content.toolId}>{content.name}</a>
                          </TableID>
                        </TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>{type[content.type]}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>{content.duration}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>{content.noOfTimesAccessed}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>{content.isCompleted}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>{content.favourite}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>{content.rating}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>{content.share}</TableData>
                        <TableData className={`${classes.tableRightBorder} border-r-none ${i === accessedContent.length - 1 ? "border-b-none" : ""}`}>
                          {/* <Tags>
                            {tag}
                          </Tags> */}
                          {content.tags.uiTags.map((ele) => ele.name.split('').map((x, i) => i === 0 ? x.toUpperCase() : x).join('')).join(', ')}
                        </TableData>
                      </TableRow >
                    )
                  })}
                </TableBody>

              </Table>
            </TableContainer>
          </TableContainer>
        </NormalCard>
        <PaginationContainer>
          <section></section>
          <Button onClick={() => { history.push(ROUTES.Dashboard); scrollTop(); }} className="btn data-change-btn shadow-display">Back</Button>
        </PaginationContainer>
      </div>
      <Footer adminClassName="admin-footer" />

    </AdminContainer >
  );
}
export default ContentAndTools;