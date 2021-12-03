import React, { useEffect, useState } from 'react';
import Header from '../containers/TheHeader';
import Footer from 'app/tamComponents/footer/Footer';
import { getUserDetail } from '../services/userServices';
import { job_role, content_access } from '../containers/enums';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import usePagination from "./Pagination";
import { useJsonToCsv } from 'react-json-csv';
// import MenuIcon from '@material-ui/icons/Menu';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

import CustomPagination from "app/admin/users/CustomPagination";
import { ROUTES } from 'app/Routes';
import { useHistory } from 'react-router-dom';

import {
  AdminContainer,
  NormalCard,
  PageTitle,
  CardHeader,
  TableContainer,
  TableData,
  TableHeader,
  TableID,
  PaginationContainer
} from 'app/admin/containers/DashBoard.style';

const Users = () => {
  const [users, setUsers] = useState([])
  const { saveAsCsv } = useJsonToCsv();
  const [usersData, setUsersData] = useState([])
  const [showableUsers, setShowebleUsers] = useState([])
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const count = Math.ceil(users.length / PER_PAGE);
  const history = useHistory();
  const useStyles = makeStyles(theme => ({
    root: {},
    tableRightBorder: {
      borderWidth: 1,
      borderRightWidth: 1,
      borderColor: '#00000026',
      borderStyle: 'solid',
    },
  }));
  const classes = useStyles();

  const Button = styled(MuiButton)(spacing);

  const downloadCsv = () => {
    let csv_data = []
    usersData.forEach((usr) => {
      usr.role = job_role[usr.role]
      csv_data.push(usr)
    })
    const filename = 'User-Data',
      fields = {
        "UID": "UniqueId",
        "role": "Role",
        "assessments": "assessments",
        "contentAccessed": "contentAccessed",
        "lastLogin": "lastLogin",
        "privacyPreference": "privacyPreference",
        "researchParticipationConsent": "researchParticipationConsent",
      },
      data = csv_data;
    saveAsCsv({ data, fields, filename })
  }

  const countShowable = (p) => {
    let sIndex = (p - 1) * PER_PAGE
    // let sUsers = users.slice(sIndex, PER_PAGE)
    let sUsers = []
    for (let i = sIndex; i < (sIndex + PER_PAGE); i++) {
      sUsers.push(usersData[i])
    }
    setShowebleUsers(sUsers)
  }

  useEffect(() => {
    // require('./../css/style.css');
    getUserDetail().then((data) => {
      setUsersData(data.data.users);
      setUsers(data.data.users);
      let sUsers = []
      for (let i = 1; i < (1 + PER_PAGE); i++) {
        sUsers.push(data.data.users[i])
      }
      setShowebleUsers(sUsers)
    })

  }, [])
  let PG_DATA = usePagination(users, PER_PAGE);
  const handleChange = (e, p) => {
    countShowable(p)
    setPage(p);
    PG_DATA.jump(p);
    scrollTop(true);
  };

  function shortByProperty(type, pr) {
    let usr = []
    if (pr === "role") {
      if (type === "ac") {
        usr = users.sort(function (x, y) { return Object.keys(job_role).indexOf(x[pr]) - Object.keys(job_role).indexOf(y[pr]) });
      } else if (type === "dc") {
        usr = users.sort(function (x, y) { return Object.keys(job_role).indexOf(y[pr]) - Object.keys(job_role).indexOf(x[pr]) });
      }
    } else if (pr === "lastLogin") {
      if (type === "ac") {
        usr = users.sort(function (x, y) { return (new Date(x[pr]).getTime()) - (new Date(y[pr]).getTime()) });
      } else if (type === "dc") {
        usr = users.sort(function (x, y) { return (new Date(y[pr]).getTime()) - (new Date(x[pr]).getTime()) });
      }
    } else {
      if (type === "ac") {
        usr = users.sort(function (x, y) { return x[pr] - y[pr] });
      } else if (type === "dc") {
        usr = users.sort(function (x, y) { return y[pr] - x[pr] });
      }
    }
    setUsers([...usr])
    let sIndex = (page - 1) * PER_PAGE
    let sUsers = []
    for (let i = sIndex; i < (sIndex + PER_PAGE); i++) {
      sUsers.push(usr[i])
    }
    setShowebleUsers(sUsers)

  }
  const scrollTop = (pagination = false) => {
    var topScroll;
    if (pagination) {
      topScroll = document.getElementById("table-card").offsetTop - 10;
    } else {
      topScroll = 0;
    }
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  return (
    <AdminContainer>
      <Header />
      <div className="continer page-container">
        <PageTitle className="user-detials-title">User Details</PageTitle>
        <NormalCard id="table-card">
          <CardHeader>
            <div className="user-details-header">
              {/* <MenuIcon className="hamburger-icon" /> */}
              <Button onClick={() => { downloadCsv() }} className="btn data-change-btn shadow-none">Export To CSV</Button>
              {/* <button type="button" onClick={() => { downloadCsv() }} className="btn btn-primary" style={{ fontSize: "large", float: "right", backgroundColor: "#0099BA" }}>Export To CSV</button> */}
            </div>
          </CardHeader>
          <TableContainer>
            <TableContainer className="border-btm p-0">
              <Table aria-label="simple table">
                <colgroup>
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Unique ID</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Role
                      <span onClick={() => { shortByProperty("dc", "role") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortByProperty("ac", "role") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Privacy Preference</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Research Participation </TableHeader>
                    <TableHeader className={classes.tableRightBorder}>No Of Login(s)
                      <span onClick={() => { shortByProperty("dc", "loginCount") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortByProperty("ac", "loginCount") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Last Login
                      <span onClick={() => { shortByProperty("dc", "lastLogin") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortByProperty("ac", "lastLogin") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Assessments
                      <span onClick={() => { shortByProperty("dc", "assessments") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortByProperty("ac", "assessments") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Accessed Content
                      <span onClick={() => { shortByProperty("dc", "contentAccessed") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortByProperty("ac", "contentAccessed") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {showableUsers.map((user, i) => {
                    if (!user) {
                      return false
                    }
                    return (
                      <TableRow key={"user_" + i}>
                        <TableData component="th" scope="row" className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`} ><TableID href={"/UserProfile/" + user.UID}>{user.UID}</TableID></TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{job_role[user.role]}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{!!user.privacyPreference ? content_access[user.privacyPreference] : "-"}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{user.researchParticipationConsent === true ? "Yes" : "No"}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{user.loginCount}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{new Date(user.lastLogin).toLocaleString()}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`}>{user.assessments}</TableData>
                        <TableData className={`${classes.tableRightBorder} border-r-none ${i === PG_DATA.currentData().length - 1 ? "border-b-none" : ""}`} >{user.contentAccessed}</TableData>
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
            // variant="outlined"
            // shape="rounded"
            onChange={handleChange}
          />
          <Button onClick={() => { history.push(ROUTES.Dashboard); scrollTop(); }} className="btn data-change-btn shadow-display">Back</Button>
        </PaginationContainer>
      </div>


      <Footer adminClassName="admin-footer" />

    </AdminContainer >
  );
}
export default Users;