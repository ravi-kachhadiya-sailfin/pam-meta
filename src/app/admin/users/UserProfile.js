import React, { useEffect, useState } from 'react';
import Header from '../containers/TheHeader';
// import TheSidebar from '../containers/TheSidebar';
import Footer from 'app/tamComponents/footer/Footer';
// import '../../../../node_modules/simple-line-icons/css/simple-line-icons.css';
import {
  getUserGenericProfile,
  getLoginHistory,
  getAssessments,
  getContentAndTools,
  // getUserHealthCareProfile,
  getCsvFile
} from '../services/userServices';

import {
  AdminContainer,
  NormalCard,
  PageTitle,
  CardHeader,
  TableContainer,
  TableData,
  TableHeader,
  PaginationContainer,
  Title
} from 'app/admin/containers/DashBoard.style';

// import profile from "app/shared/assets/images/profile.svg"
// import profile_camera from "app/shared/assets/images/profile-camera.svg";

import { status, position_in_healthcare, job_role, job_role_name, health_care_facility, experience_arr, caregiver_arr, GenderDataObj } from '../containers/enums';

// import MenuIcon from '@material-ui/icons/Menu';
import { CSVLink } from "react-csv";
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Table, TableBody, TableHead, TableRow, styled, Button as MuiButton } from '@material-ui/core';
import { spacing } from "@material-ui/system";
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'app/Routes';

const UserProfile = () => {

  const [personalProfile, setPersonalProfile] = useState({})
  const [healthCareProfile, setHealthCareProfile] = useState([])
  const [loginHistory, setLoginHistory] = useState([])
  const [assessments, setAssessments] = useState([])
  const [toolHistory, setToolHistory] = useState([])
  const [csvData, setCsvData] = useState([])
  const [hcExp, setHcExp] = useState([])
  const [cgExp, setcgExp] = useState([])
  const { uid } = useParams()
  const history = useHistory();

  const Button = styled(MuiButton)(spacing);

  const scrollTop = () => {
    var topScroll = 0;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

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

  useEffect(() => {

    getCsvFile(uid).then(async (data) => {
      await setCsvData(data);
    })
    getUserGenericProfile(uid).then(async (data) => {
      setPersonalProfile(data.data.personalProfile);
      setHealthCareProfile(data.data.healthcareProfile);
      if (!!data.data.healthcareProfile && !!data.data.healthcareProfile.experienceInHealthcare && data.data.healthcareProfile.experienceInHealthcare.length > 0) {
        let data_arr = data.data.healthcareProfile.experienceInHealthcare
        let expErr = []
        data_arr.forEach((exp_id) => {
          expErr.push(experience_arr[exp_id - 1])
        });
        setHcExp(expErr)
      }
      if (!!data.data.healthcareProfile && !!data.data.healthcareProfile.caregiver && data.data.healthcareProfile.caregiver.length > 0) {
        let data_arr = data.data.healthcareProfile.caregiver
        let expErr = []
        data_arr.forEach((exp_id) => {
          expErr.push(caregiver_arr[exp_id - 1])
        });
        setcgExp(expErr)
      }
    })
    getLoginHistory(uid).then(async (data) => {
      await setLoginHistory(data.data.loginHistory);
    })
    getAssessments(uid).then(async (data) => {
      await setAssessments(data.data.assessmentSurvey);
    })
    getContentAndTools(uid).then(async (data) => {
      await setToolHistory(data.data.usedToolHistory);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log("assessments", assessments, job_role[personalProfile.role]);
  function shortLoginByProperty(type, pr) {
    let lgin = []
    if (pr === "ondate") {
      if (type === "ac") {
        lgin = loginHistory.sort(function (x, y) { return (new Date(x[pr]).getTime()) - (new Date(y[pr]).getTime()) });
      } else if (type === "dc") {
        lgin = loginHistory.sort(function (x, y) { return (new Date(y[pr]).getTime()) - (new Date(x[pr]).getTime()) });
      }
    } else {
      if (type === "ac") {
        lgin = loginHistory.sort(function (x, y) { return x[pr] - y[pr] });
      } else if (type === "dc") {
        lgin = loginHistory.sort(function (x, y) { return y[pr] - x[pr] });
      }
    }
    setLoginHistory([...lgin])
  }

  function shortSurveyByProperty(type, pr) {
    let ass = []
    if (pr === "datetime") {
      if (type === "ac") {
        ass = assessments.sort(function (x, y) { return (new Date(x[pr]).getTime()) - (new Date(y[pr]).getTime()) });
      } else if (type === "dc") {
        ass = assessments.sort(function (x, y) { return (new Date(y[pr]).getTime()) - (new Date(x[pr]).getTime()) });
      }
    } else if (pr === "name") {
      if (type === "ac") {
        ass = assessments.sort(function (x, y) { return x[pr].localeCompare(y[pr]) });
      } else if (type === "dc") {
        ass = assessments.sort(function (x, y) { return y[pr].localeCompare(x[pr]) });
      }
    } else {
      if (type === "ac") {
        ass = assessments.sort(function (x, y) { return x[pr] - y[pr] });
      } else if (type === "dc") {
        ass = assessments.sort(function (x, y) { return y[pr] - x[pr] });
      }
    }
    setAssessments([...ass])
  }
  return (
    <AdminContainer>
      <Header />
      <div className="continer page-container">

        <div className="user-profile-header">
          <PageTitle className="user-detials-title">User Profile</PageTitle>

          <Box>
            {/* <Box className="profileIcon"> */}
            {/* {formik.values.userProfile !== "" ?
              <img className="profileImg" src={formik.values.userProfile} alt={formik.values.userProfile} />
              : */}
            <PaginationContainer>
              <section></section>
              <Button onClick={() => { history.push(ROUTES.Users); scrollTop(); }} className="btn data-change-btn shadow-display">Back</Button>
            </PaginationContainer>
            {/* <img className="profile_placeholder" src={profile} alt="profile" /> */}
            {/* } */}

            {/* )} */}
            {/* <CameraIconBox onClick={openFileManager}>
            <img className="profile_placeholder_camera" src={profile_camera} alt="profile_camera" />
          </CameraIconBox> */}
          </Box>
        </div>

        <NormalCard>
          <CardHeader>
            <div className="user-details-header">
              {/* <MenuIcon className="hamburger-icon" /> */}
              <Button className="btn data-change-btn shadow-none"><CSVLink className="CSV-link" data={csvData}>Export To CSV</CSVLink></Button>
            </div>
          </CardHeader>

          <TableContainer>
            <Title className="font-weight-bold p-0 title-line-height">GENERIC PROFILE</Title>

            <TableContainer className="table-MH-700 p-0 border-btm">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Role</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Status</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Age</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Phone</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Reaserch</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Race</TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Gender</TableHeader>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableData component="th" scope="row" className={`${classes.tableRightBorder} border-b-none`} >{job_role[personalProfile.role]}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{status[personalProfile.status]}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{personalProfile.age}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{personalProfile.phone}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{personalProfile.research ? "Yes" : "No"}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{personalProfile.race}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>{GenderDataObj[personalProfile.gender]}</TableData>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

          </TableContainer>

          <TableContainer>
            <Title className="font-weight-bold p-0 title-line-height">HEALTHCARE PROFILE OF USERS</Title>

            <TableContainer className="table-MH-700 p-0 width-960 border-btm">
              <Table stickyHeader aria-label="sticky table">
                {/* <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup> */}
                <TableHead>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Facility</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Position</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Role</TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} `}>Experience</TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Caregiver</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableRow>
                    <TableData component="th" scope="row" className={`${classes.tableRightBorder} border-b-none`}>{health_care_facility[healthCareProfile?.healthcareFacility] || ""}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{position_in_healthcare[healthCareProfile?.leftHealthcarePosition] || ""}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{job_role_name[healthCareProfile?.healthcareRole] || ""}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}>{hcExp.toString()}</TableData>
                    <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>{cgExp.toString()}</TableData>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainer>

          {loginHistory && loginHistory.length > 0 && <TableContainer>
            <Title className="font-weight-bold p-0 title-line-height">LOGIN HISTORY</Title>

            <TableContainer className="table-MH-700 p-0 width-960 border-btm">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Date/Time
                      <span onClick={() => { shortLoginByProperty("dc", "ondate") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortLoginByProperty("ac", "ondate") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Assessments
                      <span onClick={() => { shortLoginByProperty("dc", "assessments") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortLoginByProperty("ac", "assessments") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Content Accessed
                      <span onClick={() => { shortLoginByProperty("dc", "contentaccessed") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortLoginByProperty("ac", "contentaccessed") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {loginHistory && loginHistory.length > 0 ? loginHistory.map((loginhistory, i) => (
                    <TableRow>
                      <TableData component="th" scope="row" className={`${classes.tableRightBorder} ${i === loginHistory.length - 1 ? "border-b-none" : ""}`}>{new Date(loginhistory.ondate).toLocaleDateString()}</TableData>
                      <TableData className={`${classes.tableRightBorder} ${i === loginHistory.length - 1 ? "border-b-none" : ""}`}>{loginhistory.assessments}</TableData>
                      <TableData className={`${classes.tableRightBorder} border-r-none ${i === loginHistory.length - 1 ? "border-b-none" : ""}`}>{loginhistory.contentaccessed}</TableData>
                    </TableRow>
                  ))
                    :
                    <TableRow>
                      <TableData component="th" scope="row" className={`${classes.tableRightBorder} border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder}  border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>{""}</TableData>
                    </TableRow>
                  }
                </TableBody>
              </Table>
            </TableContainer>

          </TableContainer>}

          {assessments && assessments.length > 0 && <TableContainer>
            <Title className="font-weight-bold p-0 title-line-height">ASSESSMENTS/SURVEY</Title>

            <TableContainer className="table-MH-700 p-0 width-800 border-btm">
              <Table stickyHeader aria-label="sticky table">
                {/* <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup> */}
                <TableHead>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Date/Time
                      <span onClick={() => { shortSurveyByProperty("dc", "datetime") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortSurveyByProperty("ac", "datetime") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Assessment Name
                      <span onClick={() => { shortSurveyByProperty("dc", "name") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortSurveyByProperty("ac", "name") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Score
                      <span onClick={() => { shortSurveyByProperty("dc", "score") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↑</span>
                      <span onClick={() => { shortSurveyByProperty("ac", "score") }} style={{ fontSize: "11px", padding: "0px 0px 0px 3px", cursor: "pointer", fontWeight: "1000" }}>↓</span>
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assessments && assessments.length > 0 ? assessments.map((assessment, i) => (
                    <TableRow>
                      <TableData component="th" scope="row" className={`${classes.tableRightBorder} ${i === assessments.length - 1 ? "border-b-none" : ""}`}>{new Date(assessment.datetime).toLocaleDateString()}</TableData>
                      <TableData className={`${classes.tableRightBorder} ${i === assessments.length - 1 ? "border-b-none" : ""}`}>{assessment.name}</TableData>
                      <TableData className={`${classes.tableRightBorder} border-r-none ${i === assessments.length - 1 ? "border-b-none" : ""}`}>{assessment.score}</TableData>
                    </TableRow>
                  ))
                    :
                    <TableRow>
                      <TableData component="th" scope="row" className={`${classes.tableRightBorder} border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder}  border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>{""}</TableData>
                    </TableRow>
                  }
                </TableBody>
              </Table>
            </TableContainer >
          </TableContainer>}

          {toolHistory && toolHistory.length > 0 && <TableContainer>
            <Title className="font-weight-bold p-0 title-line-height">CONTENT/TOOLS</Title>

            <TableContainer className="table-MH-700 p-0 border-btm">
              <Table stickyHeader aria-label="sticky table">
                <colgroup>
                  <col style={{ width: '35%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Tool Name</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Date/Time</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Ratings</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Status</TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>Post Distress Score </TableHeader>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {toolHistory && toolHistory.length > 0 ? toolHistory.map((toolhistory, i) => {
                    console.log("toolhistory", toolhistory, toolhistory.rating)
                    let dateTime = toolhistory.rating.map((dateTime) => {
                      return (
                        <TableData className={classes.tableRightBorder}>{new Date(dateTime.datetime).toLocaleDateString()}</TableData>
                      )
                    });
                    let rating = toolhistory.rating.map((ratings) => {
                      return (
                        <TableData className={classes.tableRightBorder}>{ratings.rating}</TableData>
                      )
                    });
                    let score = toolhistory.distressScore.map((scores) => {
                      return (
                        <TableData className={classes.tableRightBorder}>{scores.score}</TableData>
                      )
                    });
                    return (
                      <TableRow>
                        <TableData component="th" scope="row" className={`${classes.tableRightBorder} ${i === toolHistory.length - 1 ? "border-b-none" : ""}`}>{toolhistory.title}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === toolHistory.length - 1 ? "border-b-none" : ""}`}>{dateTime}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === toolHistory.length - 1 ? "border-b-none" : ""}`}>{rating}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === toolHistory.length - 1 ? "border-b-none" : ""}`}>{""}</TableData> {/* toolhistory.status */}
                        <TableData className={`${classes.tableRightBorder} border-r-none ${i === toolHistory.length - 1 ? "border-b-none" : ""}`}>{score}</TableData>
                      </TableRow>
                    )
                  })
                    :
                    <TableRow>
                      <TableData component="th" scope="row" className={`${classes.tableRightBorder} border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder}  border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>{""}</TableData>
                      <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>{""}</TableData>
                    </TableRow>
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainer>}
        </NormalCard>

        <PaginationContainer>
          <section></section>
          <Button onClick={() => { history.push(ROUTES.Users); scrollTop(); }} className="btn data-change-btn shadow-display">Back</Button>
        </PaginationContainer>
      </div>

      <Footer adminClassName="admin-footer" />
    </AdminContainer >
  )
}
export default UserProfile;