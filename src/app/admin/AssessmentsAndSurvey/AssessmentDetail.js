
import React, { useEffect, useState } from 'react';
import Header from '../containers/TheHeader';
import Footer from 'app/tamComponents/footer/Footer';
import { useParams } from 'react-router';
import { getAssessmentDetail, updateAssessmentQuestion, updateAssessmentStatus } from '../services/AssessmentAndSurveyServices';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Switch from 'app/tamComponents/ISOSwitch';
// import MenuIcon from '@material-ui/icons/Menu';
import MuiButton from "@material-ui/core/Button";
import { ROUTES } from 'app/Routes';
import { useHistory } from 'react-router-dom';
import { spacing } from "@material-ui/system";
import { styled } from "@material-ui/core/styles";

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import ToolRating from './tool-rating/starrating';
import { ProblemSolvingPopup } from 'app/features/ProblemSolving/style';

import {
  AdminContainer,
  NormalCard,
  CardHeader,
  PaginationContainer,
  FormFeildname,
  Title,
  TableContainer,
  TableData,
  TableHeader,
  FeildContainer,
  TableID,
  // ChartAndCounterContainer
} from 'app/admin/containers/DashBoard.style';


const AssessmentDetail = () => {
  const [assessmentDetail, setAssessmentDetail] = useState([]);
  const { aid } = useParams();
  const [open, setOpen] = React.useState(false);
  const [scroll] = React.useState('paper');
  const [selectedQuestion, setSelectedQuestion] = React.useState({});
  const Button = styled(MuiButton)(spacing);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
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

  const scrollTop = () => {
    var topScroll = 0;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  useEffect(() => {

    getAssessmentDetail(aid).then((data) => {
      setAssessmentDetail(data.data.assessment);
      console.log(data.data.assessment);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateQuestion = () => {
    let body = {
      "questionId": selectedQuestion.id,
      "question": selectedQuestion.question
    }
    updateAssessmentQuestion(body).then((res) => {
      if (res.statusCode === 200) {
        let questions = assessmentDetail.questions
        let index = questions.findIndex(x => x.id === selectedQuestion.id);
        questions[index].question = selectedQuestion.question
        setAssessmentDetail({ ...assessmentDetail, questions: questions })
        alert("Qusetion successfully updated.")
        handleClose()
      } else {
        alert("Something went wrong.")
        handleClose()
      }
    })
  };

  const updateQuestionStatus = (id, status) => {
    let body = {
      "questionId": id,
      "status": status
    }
    updateAssessmentStatus(body).then((res) => {
      if (res.statusCode === 200) {
        let questions = assessmentDetail.questions
        let index = questions.findIndex(x => x.id === id);
        questions[index].status = status
        setAssessmentDetail({ ...assessmentDetail, questions: questions })
        alert("Question status successfully updated.")
      } else {
        alert("Something went wrong.")
      }
    })
  };

  return (
    <AdminContainer>
      <Header />
      <div className="continer page-container">

        <NormalCard>
          <form enctype="multipart/form-data" className="p-50">
            <FeildContainer>
              <FormFeildname>Title</FormFeildname>
              <input className="normal-input-feild" type="text" value={assessmentDetail.name} name="title" placeholder="Title" disabled />
            </FeildContainer>

            {/* <FeildContainer>
              <FormFeildname>Status</FormFeildname>
              <Switch
                checked={assessmentDetail.status === 1 ? true : false}
                // onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </FeildContainer>
           */}
          </form>
        </NormalCard>

        <NormalCard >
          <CardHeader>
            <div className="user-details-header">
              <div className="user-details-header">
                {/* <MenuIcon className="hamburger-icon" /> */}

                <Title className="font-weight-bold mb-0 p-0 pl-10 ml-25">QUESTIONS</Title>
              </div>
            </div>
          </CardHeader>

          <TableContainer>
            <TableContainer className="border-btm p-0">
              <Table aria-label="simple table">
                <TableHead style={{ backgroundColor: "#FFFFFF" }}>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Question</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Action</TableHeader>
                    <TableHeader className={`${classes.tableRightBorder} border-r-none`}>IsActive</TableHeader>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {assessmentDetail.questions && assessmentDetail.questions.map((question, i) => {
                    return (
                      <TableRow>
                        <TableData className={`${classes.tableRightBorder} ${i === assessmentDetail.questions.length - 1 ? "border-b-none" : ""}`}>{question.question}</TableData>
                        <TableData className={`${classes.tableRightBorder} ${i === assessmentDetail.questions.length - 1 ? "border-b-none" : ""}`}>
                          <TableID onClick={() => {
                            setSelectedQuestion(question)
                            setOpen(true)
                          }}>Edit</TableID>
                        </TableData>
                        <TableData className={`${classes.tableRightBorder} border-r-none ${i === assessmentDetail.questions.length - 1 ? "border-b-none" : ""}`}>
                          <Switch
                            checked={question.status === 1 ? true : false}
                            onChange={() => {
                              updateQuestionStatus(question.id, question.status === 1 ? 0 : 1)
                            }}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                        </TableData>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainer>
        </NormalCard>

        <NormalCard>
          <CardHeader>
            <div className="user-details-header">
              <div className="user-details-header">
                {/* <MenuIcon className="hamburger-icon" /> */}
                <Title className="font-weight-bold mb-0 p-0 pl-10 ml-25">OPTIONS</Title>
              </div>
            </div>
          </CardHeader>

          <TableContainer>
            <TableContainer className="border-btm p-0">
              <Table aria-label="simple table">
                <TableHead style={{ backgroundColor: "#FFFFFF" }}>
                  <TableRow>
                    <TableHeader className={classes.tableRightBorder}>Options</TableHeader>
                    <TableHeader className={classes.tableRightBorder}>Score</TableHeader>
                    {/* <TableHeader className={`${classes.tableRightBorder} border-r-none`}>IsActive</TableHeader> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableData className={classes.tableRightBorder}>Not At All</TableData>
                    <TableData className={classes.tableRightBorder}>0</TableData>
                    {/* <TableData className={`${classes.tableRightBorder} border-r-none`}>
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </TableData>
                   */}
                  </TableRow>
                  <TableRow>
                    <TableData className={classes.tableRightBorder}>Several Days</TableData>
                    <TableData className={classes.tableRightBorder}>1</TableData>
                    {/* <TableData className={`${classes.tableRightBorder} border-r-none`}>
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </TableData>
                   */}
                  </TableRow>
                  <TableRow>
                    <TableData className={classes.tableRightBorder}>More than Half the Days</TableData>
                    <TableData className={classes.tableRightBorder}>2</TableData>
                    {/* <TableData className={`${classes.tableRightBorder} border-r-none `}>
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </TableData>
                   */}
                  </TableRow>
                  <TableRow>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}> Nearly Everyday</TableData>
                    <TableData className={`${classes.tableRightBorder} border-b-none`}> 3</TableData>
                    {/* <TableData className={`${classes.tableRightBorder} border-r-none border-b-none`}>
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </TableData>
                   */}
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>
          </TableContainer>
        </NormalCard>

        <PaginationContainer>
          <div></div>
          <Button onClick={() => { history.push(ROUTES.AssessmentsAndSurvey); scrollTop(); }} className="btn data-change-btn shadow-display">Back</Button>
        </PaginationContainer>
      </div >

      <Dialog className="problem_solving_popup"
        open={open}
        style={{ minWidth: 350 }}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ProblemSolvingPopup className="popup_card" >
              <input className="" type="text"
                onChange={(e) => {
                  let text = e.target.value
                  setSelectedQuestion({ ...selectedQuestion, question: text })
                }}
                value={selectedQuestion.question} style={{ width: "100%" }} name="title" placeholder="Title" />
              <div className="popup_text_btn">
                <div className="popup_btn" onClick={() => { handleClose() }} >Cancle</div>
                <div className="popup_btn popup_btn_yes" onClick={() => { updateQuestion() }} >Update</div>
              </div>
            </ProblemSolvingPopup>

          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>

      <Footer adminClassName="admin-footer" />
    </AdminContainer >


    // </div>  
  );
}
export default AssessmentDetail;