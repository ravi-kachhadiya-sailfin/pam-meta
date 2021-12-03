import { Box, Card, Step, StepConnector, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TAMAlert from "app/tamComponents/alert/TAMAlert";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
// import moment from 'moment';

import {
  //   BoardText,
  //   BoardSubTitle,
  //   StepperWrapper,
  // StepperDetails,
  ModalWrapper,
  //   FtTextField
} from './style';

import {
  BoardText,
  BoardSubTitle,
  StepperWrapper,
  // StepperDetails,
  // FtTextField,
  // ToolTipEffect,
  // ToolTipTitle,
  FtTextArea,
  StepShower,
  StepContainer,
  NextIconWrapper,
  PrevIconWrapper,
} from 'app/features/ProblemSolving/style';

import PriOption from './PriOption';
import CustomButton from 'app/tamComponents/button';
import PopUp from './Popup';
import ToolRating from './tool-rating';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import gray_collapse_arrow from 'app/shared/assets/images/gray-collapse-arrow.svg'


import bucket_tree from 'app/shared/assets/images/bucket/ring1.svg';
// import bucket from 'app/shared/assets/images/bucket/bucket.svg';
// import bucket1 from 'app/shared/assets/images/bucket/bucket1.svg';
// import bucket2 from 'app/shared/assets/images/bucket/bucket2.svg';
// import bucket3 from 'app/shared/assets/images/bucket/bucket3.svg';
// import bucket4 from 'app/shared/assets/images/bucket/bucket4.svg';
import bucket_step2 from 'app/shared/assets/images/bucket/fill-step-2.svg';
import bucket_step3 from 'app/shared/assets/images/bucket/bucket_step3.svg';
import * as FBService from "./toolDetailService";
// import { TextField } from '@material-ui/core';
import ICalendarLink from "react-icalendar-link";

import { throttle } from 'lodash';
import { getDeviceSize } from 'app/shared/Utils/index';
import arrow from 'app/shared/assets/images/arrow.svg';

// import Dialog from '@material-ui/core/Dialog';
// import {
//   ToolsBody,
//   ToolPageTitle,
//   ToolDescription,
//   ModalWrapper
// } from './style'
// import cl from '../../shared/assets/images/closeAcc.svg'

const Connector = withStyles({
  alternativeLabel: {
    top: 10,
    left: '0px',
    right: '0px',
  },
  active: {
    '& $line': {
      borderColor: '#0099ba',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#0099ba',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
    width: '100%',
  },
})(StepConnector);
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: '33.33%',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
// }));
const FBAssessment = (props) => {
  const [step, setStep] = useState(1)
  const [activity, setActivity] = useState("")
  const [fbid, setFbid] = useState("")
  const [errorOpen, setErrorOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [whatTime, setWhatTime] = useState(new Date().toISOString())
  const [howLong, setHowLong] = useState(new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString())
  const [whoInvolved, setWhoInvolved] = useState("")
  const [whatNeeded, setWhatNeeded] = useState("")

  //
  const [toolDetail, setToolDetail] = useState(props.toolDetail);
  const [expanded, setExpanded] = useState(false);
  // const [scroll] = useState('paper');
  const [showPopup, setShowPopup] = useState(false)
  const [showModel, setShowModel] = useState(false)

  const [event, setEvent] = useState({
    title: "ACTIVATE: FILL YOUR BUCKET",
    description: props.discription,
    startTime: new Date().toISOString(),
    endTime: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
    location: props.location
  })

  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize]);


  const togglePopUp = () => {
    setShowModel(!showModel);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const useStyles = makeStyles(theme => ({
  //   root: {},
  //   outerColumn: {
  //     borderWidth: 1,
  //     borderRightWidth: 1,
  //     borderColor: '#00000026',
  //     borderStyle: 'solid',
  //   },
  // }));
  // const classes = useStyles();

  // const scrollTop = () => {
  //   var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
  //   // console.log(topScroll);
  //   // hideButton();
  //   document.body.scrollTop = topScroll;
  //   document.documentElement.scrollTop = topScroll;
  // }

  function scrollTop(textArea = false) {
    var topScroll;
    const id = "text-area-activity";
    if (textArea) {
      //  // //document.getElementById(id).scrollIntoView();

      const yOffset = -150;
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

    }
    else {
      console.log(textArea, "arrow_sticky_wrapper");
      topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
      document.body.scrollTop = topScroll;
      document.documentElement.scrollTop = topScroll;
    }
    // hideButton();

  }


  function reStart() {
    setStep(1)
    setShowPopup(false)
  }
  useEffect(() => {
    if (props.toolDetail.videoLink) {
      props.toolDetail.videoLink = props.toolDetail.videoLink.replace("?", "/")
      props.toolDetail.videoLink = props.toolDetail.videoLink.replace("watch", "embed")
      props.toolDetail.videoLink = props.toolDetail.videoLink.replace("v=", "")

      setToolDetail(props.toolDetail)
    }
    // FBService.getPendingForm().then((data) => {
    // if (!!data.data.result) {
    //   let form = data.data.result
    //   setFtid(form.id)
    //   if (!form.step1) {
    //     setStep(1)
    //   } else if (!form.step2) {
    //     setStep(2)
    //   } else if (!form.step3) {
    //     setStep(4)
    //   } else if (!form.step4) {
    //     setStep(5)
    //   } else if (!form.step5) {
    //     setStep(6)
    //   } else if (!form.step6) {
    //     setStep(7)
    //   }
    //   if (!!form.what_happened) {
    //     setHappen(form.what_happened)
    //   }
    //   if (!!form.what_did_you_say_to_yourself) {
    //     setUpsating(form.what_did_you_say_to_yourself)
    //   }
    //   if (!!form.what_facts_support_this_thought) {
    //     setFstt(form.what_facts_support_this_thought)
    //   }
    //   if (!!form.do_any_facts_not_support_this_thought) {
    //     setFsnt(form.do_any_facts_not_support_this_thought)
    //   }
    //   if (!!form.shift_perspective) {
    //     setSper(form.shift_perspective)
    //   }
    //   if (!!form.is_it_a_helpful_thought) {
    //     setImpact(form.is_it_a_helpful_thought)
    //   }
    //   if (!!form.diﬀerent_way_of_looking_more_helpful) {
    //     setDiffWay(form.diﬀerent_way_of_looking_more_helpful)
    //   }
    // }
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function showError(msg) {
    setErrorOpen(true)
    setErrorMsg(msg)
    setTimeout(() => {
      setErrorOpen(false)
      setErrorMsg("")
    }, 5000)
  }
  function submitOne() {
    reStart()
    let body = {
      "toolId": props.toolId
    }
    FBService.stepOne(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setFbid(res.data.result.id);
        console.log("step 2")
        setStep(2);
      }
    })
  }


  // function submitInitial() {
  //   let body = {
  //     "flexibleThinkingId": ftid,
  //     "feeling": moods_list[curMood],
  //     "distressScore": preDistress
  //   }
  //   FTService.stepInitialTwo(body).then((res) => {
  //     if (res.statusCode === 200 || res.statusCode === 201) {
  //       setStep(3)
  //     }
  //   })
  // }
  function submitSecond() {
    if (!activity || activity === "") {
      showError("Please specify your activity to move forward.")
      return false
    }
    let body = {
      "fillYourBucketId": fbid,
      "activity": activity,
    }
    FBService.stepTwo(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        let evt = event;
        evt.description = `Activity - ${activity}\\n\\n` +
          `Who else is involved (if anyone)?\\n- ${whoInvolved}\\n\\n` +
          `What do I need to do the activity?\\n- ${whatNeeded}`
        setEvent(event)
        setStep(3)
      }
    })
  }

  function submitThird() {
    let body = {
      "fillYourBucketId": fbid,
      "what_time": whatTime,
      "how_long": howLong,
      "who_involved": whoInvolved,
      "what_need": whatNeeded
    }
    FBService.stepThree(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setStep(4)
      }
    })
  }

  // function submitForth() {
  //   let body = {
  //     "flexibleThinkingId": ftid,
  //     "is_it_a_helpful_thought": impact
  //   }
  //   FTService.stepFour(body).then((res) => {
  //     if (res.statusCode === 200 || res.statusCode === 201) {
  //       setStep(6)
  //     }
  //   })
  // }

  // function submitFifth() {
  //   let body = {
  //     "flexibleThinkingId": ftid,
  //     "diﬀerent_way_of_looking_more_helpful": diffWay
  //   }
  //   FTService.stepFive(body).then((res) => {
  //     if (res.statusCode === 200 || res.statusCode === 201) {
  //       setStep(7)
  //     }
  //   })
  // }

  // function submitSixth() {
  //   let body = {
  //     "flexibleThinkingId": ftid,
  //     "feeling": moods_list[postMood],
  //     "distressScore": postDistress
  //   }
  //   FTService.stepSix(body).then((res) => {
  //     if (res.statusCode === 200 || res.statusCode === 201) {
  //       // props.setScreen(1)
  //       // alert("completed")
  //       setShowPopup(true)
  //     }
  //   })
  // }

  let scoreUpdated = async (diff) => {
    if (diff > 0) {
      // showFinalPopup()
    }
  }

  useEffect(() => {
    scrollTop()
  }, [step]);

  useEffect(() => {

  }, [activity])

  console.log("toolsDetail:", toolDetail);

  return (
    <>
      <div className="luke_card_wrapper" id="arrow_sticky_wrapper">


        {step !== 1 && step !== 4 && <>
          <PrevIconWrapper onClick={() => { setStep(step - 1); scrollTop(); }} id="prev-btn">
            <img className="pre-arrrow" alt={"img"} src={arrow} />
          </PrevIconWrapper>

          {step === 3 ?
            <NextIconWrapper id="next-btn" onClick={() => { setTimeout(() => { submitThird() }, 1000) }} >
              <img className="next-arrrow" alt={"img"} src={arrow} />
            </NextIconWrapper>
            : step === 4 ?
              <NextIconWrapper id="next-btn" onClick={() => { window.location.href = '/tools' }}>
                <img className="next-arrrow" alt={"img"} src={arrow} />
              </NextIconWrapper>

              : <NextIconWrapper id="next-btn" onClick={() => { step === 1 ? submitOne() : step === 2 ? submitSecond() : setStep(step + 1) }}>
                <img className="next-arrrow" alt={"img"} src={arrow} />
              </NextIconWrapper>
          }
        </>}
        <Card className={`luke_card fill-your-buckets ${step <= 0 && "home-luke-card"}`} id="main-card">
          {step > 0 && step < 4 &&
            <Box className="problem_step stepper-width">
              <StepContainer>
                <StepShower steps={3}>
                  {Array.from({ length: 3 }, (_, i) => (<div className="step-number">{i + 1 === step && `Step ${step}`}</div>))}
                </StepShower>
                <StepperWrapper activeStep={step} connector={<Connector />}>
                  {Array.from({ length: 4 }, (_, i) => (<Step />))}
                </StepperWrapper>
              </StepContainer>
            </Box>}
          {step === 0 && <>
            {/* <div className="row" style={{ minHeight: "400px" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <img alt={"img"} src={bucket} style={{ marginLeft: "auto", marginRight: "auto", display: "block", paddingTop: "98%" }} />
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <img alt={"img"} src={bucket2} style={{ marginLeft: "auto", marginRight: "auto", display: "block", paddingTop: "80%" }} />
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <img alt={"img"} src={bucket4} style={{ marginLeft: "auto", marginRight: "auto", display: "block", paddingTop: "58%" }} />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <img alt={"img"} src={bucket1} style={{ marginLeft: "auto", marginRight: "auto", display: "block", paddingTop: "25%" }} />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <img alt={"img"} src={bucket3} style={{ marginLeft: "auto", marginRight: "auto", display: "block", paddingTop: "8%" }} />
              </div>

            </div>
          </div> */}
          </>}
          {step === 1 &&
            <>
              <div className="row">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 iframe-block">
                  <iframe className="fill-frame" width="100%" src={toolDetail.videoLink ? toolDetail.videoLink : "https://www.youtube.com/embed/-d_AA9H4z9U"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>

            </>
          }

          {step === 2 &&
            <>
              <div className="row problem_solving_row full-width-fill">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text">
                  <BoardSubTitle className="fill-card-title">
                    Choose one activity
                  </BoardSubTitle>
                  <div className="collapse-space">
                    <Accordion className="fill-collapse" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                      <AccordionSummary className="fill-collapse-header" expandIcon={<img src={gray_collapse_arrow} alt="gray_collapse_arrow" className="arrow-icon" />}>
                        <Typography className="fill-collapse-title">social activities</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" item lg={12} md={12} sm={12} xs={12}>
                          <Grid item lg={6} md={6} sm={12} xs={12} justifyContent="flex-start" style={{ fontFamily: "Source Sans Pro" }}>
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true); scrollTop(true) }} text="Spend time with friends/relatives" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Planning an activity with people I care for" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Contact someone from work, my place of worship, or the community that I’d like to get to know better" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Being at celebrations (birthdays, weddings, baptisms, parties, family get-togethers, etc.)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Meeting a friend for lunch or coffee" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Text with a friend or loved one" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Text with a friend or loved one" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Stopping in to visit friends" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Calling up someone I enjoy talking to" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Smiling at people on a walk or when I am out in public" />

                          </Grid>
                          <Grid item lg={6} md={6} sm={12} xs={12} style={{ fontFamily: "Source Sans Pro" }} className="padding-left-35">
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Giving compliments, or praise" selectText="Giving compliments, or praise" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Good natured teasing/bantering" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Amusing people or making them laugh" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Playing with children" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Helping someone (counseling, advising, listening)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Visiting someone who needs companionship" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Talking about old times or special interests with someone" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Host a game night or a movie night" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Organizing a party or get-together" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Watching people" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="fill-collapse" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                      <AccordionSummary className="fill-collapse-header" expandIcon={<img src={gray_collapse_arrow} alt="gray_collapse_arrow" className="arrow-icon" />}>
                        <Typography className="fill-collapse-title">PHYSICAL ACTIVITIES</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} >
                          <Grid item lg={6} md={6} sm={12} xs={12} justifyContent="flex-start" style={{ fontFamily: "Source Sans Pro" }}>
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Going for a bike ride" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Taking a walk" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Playing sports (e.g., tennis, basketball, softball, racquetball, golf, horseshoes)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Hiking" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Go to the gym" />

                          </Grid>
                          <Grid item lg={6} md={6} sm={12} xs={12} style={{ fontFamily: "Source Sans Pro" }} className="padding-left-35">
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Do yoga" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Swim" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Go tubing" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Sled, snowshoe or play in the snow" />
                          </Grid>
                        </Grid>

                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="fill-collapse" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                      <AccordionSummary className="fill-collapse-header" expandIcon={<img src={gray_collapse_arrow} alt="gray_collapse_arrow" className="arrow-icon" />}>
                        <Typography className="fill-collapse-title">SOOTHING ACTIVITIES</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" item lg={12} md={12} sm={12} xs={12}>
                          <Grid item lg={6} md={6} sm={12} xs={12} justifyContent="flex-start" style={{ fontFamily: "Source Sans Pro" }}>
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Going for a drive " />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Go to botanical gardens, a zoo, or another outdoor setting" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Writing or journaling" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Relaxing, giving myself peace and quiet" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Playing with a pet" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Going out alone for coffee, baked good, or other snack" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Going to bed early to catch up on sleep" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Putting on comfortable clothes" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Being outdoors (e.g., beach, country, mountains, kicking leaves, walking in the sand, floating in lakes)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Getting or giving a backrub" />


                          </Grid>
                          <Grid item lg={6} md={6} sm={12} xs={12} style={{ fontFamily: "Source Sans Pro" }} className="padding-left-35">
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Daydreaming" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Get a haircut, manicure, pedicure, or massage" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Grooming myself (e.g., bathing, combing hair, shaving)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Helping someone (counseling, advising, listening)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Grooming myself (e.g., bathing, combing hair, shaving)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Planning a day trip or vacations" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Visiting a museum" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Being with animals" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Window shopping" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Play a game" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="fill-collapse" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                      <AccordionSummary className="fill-collapse-header" expandIcon={<img src={gray_collapse_arrow} alt="gray_collapse_arrow" className="arrow-icon" />}>
                        <Typography className="fill-collapse-title">CREATIVE ACTIVITIES</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} >
                          <Grid item lg={6} md={6} sm={6} xs={6} justifyContent="flex-start" style={{ fontFamily: "Source Sans Pro" }}>
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="A hobby (e.g., fishing, woodworking, photography, acting, gardening, collecting things)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Doing artwork (e.g., painting, sculpture, drawing)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Beautifying my home (redecorating, cleaning, yardwork, etc.)" />
                          </Grid>
                          <Grid item lg={6} md={6} sm={12} xs={12} style={{ fontFamily: "Source Sans Pro" }} className="padding-left-35">
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Knitting, sewing " />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Going to garage sales, goodwill, etc." />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Create a photo album" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Take pictures of things or people" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="fill-collapse" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                      <AccordionSummary className="fill-collapse-header" expandIcon={<img src={gray_collapse_arrow} alt="gray_collapse_arrow" className="arrow-icon" />}>
                        <Typography className="fill-collapse-title">USING MY SENSES</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" item lg={12} md={12} sm={12} xs={12}>
                          <Grid item lg={6} md={6} sm={6} xs={6} justifyContent="flex-start" style={{ fontFamily: "Source Sans Pro" }}>
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Listening to music I enjoy" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Enjoying scenery on a walk or drive" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Watching a favorite show or movie" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Going to a concert, opera, ballet, or play" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Listening to nature sounds" />
                          </Grid>
                          <Grid item lg={6} md={6} sm={12} xs={12} style={{ fontFamily: "Source Sans Pro" }} className="padding-left-35">
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Playing an instrument or singing " />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Watching the weather outside (wind, rain, etc)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Smelling a flower" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Read a magazine" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Reading (novels, poems, magazines, newspapers, etc.)" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="fill-collapse" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                      <AccordionSummary className="fill-collapse-header" expandIcon={<img src={gray_collapse_arrow} alt="gray_collapse_arrow" className="arrow-icon" />}>
                        <Typography className="fill-collapse-title">MEANINGFUL ACTIVITIES</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} >
                          <Grid item lg={6} md={6} sm={6} xs={6} justifyContent="flex-start" style={{ fontFamily: "Source Sans Pro" }}>
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Expressing true affection (verbal or physical) " />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Writing down and celebrating successes and strengths in myself, family or friends" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Volunteer work, community service, etc" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Contributing to religious, charitable, or other groups" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Spending time on my appearance (e.g., seeking medical or dental help, improving my diet, going to a barber or beautician)" />

                          </Grid>
                          <Grid item lg={6} md={6} sm={12} xs={12} style={{ fontFamily: "Source Sans Pro" }} className="padding-left-35">
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Protesting injustice, protecting someone, stopping fraud or abuse " />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Reading sacred or inspirational texts" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Feeling the presence of a Higher Power in my life. Praying, worshiping, etc." />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Shopping/buying something I like for myself" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="fill-collapse" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                      <AccordionSummary expandIcon={<img src={gray_collapse_arrow} alt="gray_collapse_arrow" className="arrow-icon" />}>
                        <Typography className="fill-collapse-title">CAREER/EDUCATIONAL ACTIVITIES</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} >
                          <Grid item lg={6} md={6} sm={6} xs={6} justifyContent="flex-start" style={{ fontFamily: "Source Sans Pro" }}>
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Doing something challenging that I can do well if I put my mind to it " />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Learning something new (e.g., fixing leaks, new hobby, new language)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Repairing something (sewing, fixing a car or bike, etc.)" />
                          </Grid>
                          <Grid item lg={6} md={6} sm={12} xs={12} style={{ fontFamily: "Source Sans Pro" }} className="padding-left-35">
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Solving a problem or puzzle" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Going to a meeting (convention, business, civic)" />
                            <PriOption updateText={(val) => { setActivity(val); scrollTop(true) }} text="Planning/budgeting time" />

                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <BoardSubTitle className="fill-card-title-2">
                    Type your own activity
                  </BoardSubTitle>

                  <BoardText className="fill-card-sub-title">
                    This can be populated from the above list, or you can write one in a text box if you don’t see your choice of activity
                  </BoardText>

                  <FtTextArea id="text-area-activity" className="fill-input add_input_wrapper example_text_area example_text_area_step_three"
                    value={activity}
                    onChange={(e) => { setActivity(e.target.value) }}
                    placeholder="Type here..." >
                  </FtTextArea>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img">
                  <img className="luke_image" alt={"img"} src={bucket_step2} style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "100%", paddingTop: "10px" }} />
                </div>
              </div>
            </>
          }

          {step === 3 &&
            <>
              <div className="row problem_solving_row add-bottom-space ">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text fill-padding">
                  <BoardSubTitle className="fill-card-title">
                    Please enter the following
                  </BoardSubTitle>
                  <BoardSubTitle className="fill-card-title-2">
                    What time will I do the activity?
                  </BoardSubTitle>
                  {/* <FtTextField
                  value={whatTime}
                  onChange={(e) => { setWhatTime(e.target.value) }}
                  style={{ width: "100%", fontSize: "25px", fontFamily: "Source Sans Pro" }}
                  placeholder="Type here..." >
                </FtTextField> */}
                  <MuiPickersUtilsProvider utils={DateFnsUtils} className="date-feild-container">
                    <DateTimePicker
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      InputProps={{ disableUnderline: true }}
                      className="date-field fill-input-2 "
                      onChange={(e) => {
                        console.log("date", e)
                        setWhatTime(e)
                        let evt = event
                        let dateStr = new Date(e).toISOString()
                        evt.startTime = dateStr
                        setEvent(event)
                      }}
                      value={whatTime}
                      hideTabs={true}
                      format="LLL d, yyyy h:mm aa"
                    />
                  </MuiPickersUtilsProvider>
                  {/* <FtTextField className="fill-input-2"
                  value={whatTime}
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setWhatTime(e.target.value)
                    let evt = event
                    let dateStr = new Date(e.target.value).toISOString()
                    evt.startTime = dateStr
                    setEvent(event)
                  }}
                /> */}
                  <BoardSubTitle className="fill-card-title-2">
                    At what time (approximatly) activity will be get completed?
                    {/* For how long will I do this activity? */}
                  </BoardSubTitle>
                  {/* <FtTextField
                  value={howLong}
                  onChange={(e) => { setHowLong(e.target.value) }}
                  style={{ width: "100%", fontSize: "25px", fontFamily: "Source Sans Pro" }}
                  placeholder="Type here..." >
                </FtTextField> */}

                  <MuiPickersUtilsProvider utils={DateFnsUtils} className="date-feild-container">
                    <DateTimePicker
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      InputProps={{ disableUnderline: true }}
                      className="date-field fill-input-2 "
                      onChange={(e) => {
                        setHowLong(e)
                        let evt = event
                        let dateStr = new Date(e).toISOString()
                        evt.endTime = dateStr
                        setEvent(event)
                      }}
                      value={howLong}
                      hideTabs={true}
                      format="LLL d, yyyy h:mm aa"
                    />
                  </MuiPickersUtilsProvider>
                  {/* <FtTextField className="fill-input-2"
                  value={howLong}
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setHowLong(e.target.value)
                    let evt = event
                    let dateStr = new Date(e.target.value).toISOString()
                    evt.endTime = dateStr
                    setEvent(event)
                  }}
                /> */}
                  <BoardSubTitle className="fill-card-title-2 ">
                    Who else is involved (if anyone)?
                  </BoardSubTitle>
                  <FtTextArea className="fill-textarea"
                    value={whoInvolved}
                    onChange={(e) => {
                      setWhoInvolved(e.target.value)
                      let evt = event
                      evt.description = `Activity - ${activity}\\n\\n` +
                        `Who else is involved (if anyone)?\\n- ${e.target.value}\\n\\n` +
                        `What do I need to do the activity?\\n- ${whatNeeded}`
                      setEvent(event)
                    }}
                    placeholder="Type here..." >
                  </FtTextArea>
                  <BoardSubTitle className="fill-card-title-2">
                    What do I need for the activity?
                  </BoardSubTitle>
                  <FtTextArea className="fill-textarea"
                    value={whatNeeded}
                    onChange={(e) => {
                      setWhatNeeded(e.target.value)
                      let evt = event
                      evt.description = `Activity - ${activity}\\n\\n` +
                        `Who else is involved (if anyone)?\\n- ${whoInvolved}\\n\\n` +
                        `What do I need to do the activity?\\n- ${e.target.value}`
                      setEvent(event)
                    }}
                    placeholder="Type here..." >
                  </FtTextArea>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img">
                  <img alt={"img"} className="luke_image" src={bucket_step3} style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "100%" }} />
                </div>
              </div>
            </>
          }
          {step === 4 && <>
            <div className="row problem_solving_row example_step_one_row add-more-space-top" style={{ minHeight: "400px" }}>

              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text fill-padding " >
                <BoardSubTitle className="fill-card-title-2">
                  You've set a reminder. Check back tomorrow to assess your progress.
                </BoardSubTitle>
                <div className="problem_solving_img  mobile-view add-top-space">
                  <img className="luke_image" alt={"img"} src={bucket_tree} />
                </div>
              </div>


              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img desktop-view">
                <img className="luke_image" alt={"img"} src={bucket_tree} />
              </div>
            </div>
          </>}
          {errorOpen && <TAMAlert
            kind={"error"}
            message={errorMsg}
          />}
        </Card>
      </div>


      <Grid direction="row" id="btn2" className={`${(step !== 1 && step !== 4) && 'large_btn_luke start_button_step'} ${(step === 1 || step === 4) && 'flex-end'} luke_button`}>
        {step !== 1 && step !== 4 &&
          <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step !== 1 && step !== 4) ? 12 : 5} xs={deviceSize > 0 && (step !== 1 && step !== 4) ? 12 : 6} justifyContent="flex-start">

            <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>
          </Grid>
        }
        {(step !== 1 || step !== 4) &&
          <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start" />
        }
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 ? 12 : 5} xs={deviceSize > 0 ? 12 : 6} justifyContent="flex-start">
          {step === 3 ?
            <ICalendarLink event={event} >
              <CustomButton onClick={() => { console.log("event", event); setTimeout(() => { submitThird() }, 1000); props.setCompletedTimes(1) }} color="#F19840">Next Step</CustomButton>
            </ICalendarLink>
            : step === 4 ?
              <CustomButton onClick={() => { window.location.href = '/tools' }} color="#F19840">Explore Other Tools</CustomButton>
              // : <CustomButton onClick={() => {  === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
              : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitSecond() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}

        </Grid>
      </Grid >



      {/* <div className="row luke_button">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 1 || step === 4 ?
            null
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 3 ?
            <ICalendarLink event={event} >
              <CustomButton onClick={() => { setTimeout(() => { submitThird() }, 1000) }} color="#F19840">Next Step</CustomButton>
            </ICalendarLink>
            : step === 4 ?
              <CustomButton onClick={() => { window.location.href = '/tools' }} color="#F19840">Explore Other Tools</CustomButton>
              // : <CustomButton onClick={() => {  === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
              : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitSecond() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div>
      </div> */}


      <div id="border" className="luke_border"></div>

      {showPopup &&
        <PopUp reStart={() => { reStart() }} setScreen={(id) => { props.setScreen(id) }} toolDetail={toolDetail} updateRating={(val) => { props.updateRating(val) }} />
      }
      <ModalWrapper open={showModel} onClose={togglePopUp}>
        <ToolRating toolDetail={toolDetail} fbid={fbid} updateRating={(val) => { scoreUpdated(val) }} onClose={togglePopUp} />
      </ModalWrapper>
      {/* <ModalWrapper open={finalPopup} onClose={() => { showFinalPopup(false) }}>

      </ModalWrapper> */}
    </>
  );
};

export default FBAssessment;
