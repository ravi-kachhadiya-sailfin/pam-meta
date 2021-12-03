// import React from 'react';
// import { Box, Card, Step, StepConnector, Grid } from '@material-ui/core';
// import { useEffect, useState } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import TAMAlert from "app/tamComponents/alert/TAMAlert";
// import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from '@date-io/date-fns';

// import { HBInitialStep } from 'app/shared/assets/images/HindsightBias'
// // import moment from 'moment';

// import {
//   // BoardText,
//   // BoardSubTitle,
//   // StepperWrapper,
//   // StepperDetails,
//   MediaWrapper,
//   // FtTextField,
//   // ModalWrapper
// } from 'app/tamComponents/ToolsCard/tool-detail/style';

// import {
//   PreAssessmentContainer,
//   NormalSubTitle
// } from 'app/features/HindsightBias/HindsightBias.style';

// import {
//   BoardText,
//   BoardSubTitle,
//   StepperWrapper,
//   // StepperDetails,
//   // FtTextField,
//   // ToolTipEffect,
//   // ToolTipTitle,
//   FtTextArea,
//   StepShower,
//   StepContainer,
//   NextIconWrapper,
//   PrevIconWrapper,
// } from 'app/features/ProblemSolving/style';

// // import PriOption from './PriOption';
// import CustomButton from 'app/tamComponents/button';
// // import PopUp from './Popup';
// // import ToolRating from './tool-rating';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import Typography from '@material-ui/core/Typography';

// // import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import gray_collapse_arrow from 'app/shared/assets/images/gray-collapse-arrow.svg'


// import bucket_tree from 'app/shared/assets/images/bucket/ring1.svg';
// // import bucket from 'app/shared/assets/images/bucket/bucket.svg';
// // import bucket1 from 'app/shared/assets/images/bucket/bucket1.svg';
// // import bucket2 from 'app/shared/assets/images/bucket/bucket2.svg';
// // import bucket3 from 'app/shared/assets/images/bucket/bucket3.svg';
// // import bucket4 from 'app/shared/assets/images/bucket/bucket4.svg';
// import bucket_step2 from 'app/shared/assets/images/bucket/fill-step-2.svg';
// import bucket_step3 from 'app/shared/assets/images/bucket/bucket_step3.svg';
// // import * as FBService from "./toolDetailService";
// // import { TextField } from '@material-ui/core';
// import ICalendarLink from "react-icalendar-link";

// import { throttle } from 'lodash';
// import { getDeviceSize } from 'app/shared/Utils/index';
// import arrow from 'app/shared/assets/images/arrow.svg';

// // import Dialog from '@material-ui/core/Dialog';
// // import {
// //   ToolsBody,
// //   ToolPageTitle,
// //   ToolDescription,
// //   ModalWrapper
// // } from './style'
// // import cl from '../../shared/assets/images/closeAcc.svg'

// const Connector = withStyles({
//   alternativeLabel: {
//     top: 10,
//     left: '0px',
//     right: '0px',
//   },
//   active: {
//     '& $line': {
//       borderColor: '#0099ba',
//     },
//   },
//   completed: {
//     '& $line': {
//       borderColor: '#0099ba',
//     },
//   },
//   line: {
//     borderColor: '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//     width: '100%',
//   },
// })(StepConnector);
// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     width: '100%',
// //   },
// //   heading: {
// //     fontSize: theme.typography.pxToRem(15),
// //     flexBasis: '33.33%',
// //     flexShrink: 0,
// //   },
// //   secondaryHeading: {
// //     fontSize: theme.typography.pxToRem(15),
// //     color: theme.palette.text.secondary,
// //   },
// // }));
// const FBAssessment = (props) => {
//   const [step, setStep] = useState(1)
//   const [activity, setActivity] = useState("")
//   const [fbid, setFbid] = useState("")
//   const [errorOpen, setErrorOpen] = useState(false)
//   const [errorMsg, setErrorMsg] = useState("")

//   const [whatTime, setWhatTime] = useState(new Date().toISOString())
//   const [howLong, setHowLong] = useState(new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString())
//   const [whoInvolved, setWhoInvolved] = useState("")
//   const [whatNeeded, setWhatNeeded] = useState("")

//   //
//   const [toolDetail, setToolDetail] = useState(props.toolDetail);
//   const [expanded, setExpanded] = useState(false);
//   // const [scroll] = useState('paper');
//   const [showPopup, setShowPopup] = useState(false)
//   const [showModel, setShowModel] = useState(false)

//   const [event, setEvent] = useState({
//     title: "ACTIVATE: FILL YOUR BUCKET",
//     description: props.discription,
//     startTime: new Date().toISOString(),
//     endTime: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
//     location: props.location
//   })

//   let deviceCode = getDeviceSize();
//   const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

//   const handleResize = throttle(() => {
//     deviceCode = getDeviceSize()
//     setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
//   }, 500);

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//   }, [handleResize]);


//   const togglePopUp = () => {
//     setShowModel(!showModel);
//   };
//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   // const useStyles = makeStyles(theme => ({
//   //   root: {},
//   //   outerColumn: {
//   //     borderWidth: 1,
//   //     borderRightWidth: 1,
//   //     borderColor: '#00000026',
//   //     borderStyle: 'solid',
//   //   },
//   // }));
//   // const classes = useStyles();

//   // const scrollTop = () => {
//   //   var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
//   //   // console.log(topScroll);
//   //   // hideButton();
//   //   document.body.scrollTop = topScroll;
//   //   document.documentElement.scrollTop = topScroll;
//   // }

//   function scrollTop(textArea = false) {
//     var topScroll;
//     const id = "text-area-activity";
//     if (textArea) {
//       //  // //document.getElementById(id).scrollIntoView();

//       const yOffset = -150;
//       const element = document.getElementById(id);
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({ top: y, behavior: 'smooth' });

//     }
//     else {
//       console.log(textArea, "arrow_sticky_wrapper");
//       topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
//       document.body.scrollTop = topScroll;
//       document.documentElement.scrollTop = topScroll;
//     }
//     // hideButton();

//   }


//   function reStart() {
//     setStep(1)
//     setShowPopup(false)
//   }
//   useEffect(() => {
//     if (props.toolDetail.videoLink) {
//       props.toolDetail.videoLink = props.toolDetail.videoLink.replace("?", "/")
//       props.toolDetail.videoLink = props.toolDetail.videoLink.replace("watch", "embed")
//       props.toolDetail.videoLink = props.toolDetail.videoLink.replace("v=", "")

//       setToolDetail(props.toolDetail)
//     }
//     // FBService.getPendingForm().then((data) => {
//     // if (!!data.data.result) {
//     //   let form = data.data.result
//     //   setFtid(form.id)
//     //   if (!form.step1) {
//     //     setStep(1)
//     //   } else if (!form.step2) {
//     //     setStep(2)
//     //   } else if (!form.step3) {
//     //     setStep(4)
//     //   } else if (!form.step4) {
//     //     setStep(5)
//     //   } else if (!form.step5) {
//     //     setStep(6)
//     //   } else if (!form.step6) {
//     //     setStep(7)
//     //   }
//     //   if (!!form.what_happened) {
//     //     setHappen(form.what_happened)
//     //   }
//     //   if (!!form.what_did_you_say_to_yourself) {
//     //     setUpsating(form.what_did_you_say_to_yourself)
//     //   }
//     //   if (!!form.what_facts_support_this_thought) {
//     //     setFstt(form.what_facts_support_this_thought)
//     //   }
//     //   if (!!form.do_any_facts_not_support_this_thought) {
//     //     setFsnt(form.do_any_facts_not_support_this_thought)
//     //   }
//     //   if (!!form.shift_perspective) {
//     //     setSper(form.shift_perspective)
//     //   }
//     //   if (!!form.is_it_a_helpful_thought) {
//     //     setImpact(form.is_it_a_helpful_thought)
//     //   }
//     //   if (!!form.diﬀerent_way_of_looking_more_helpful) {
//     //     setDiffWay(form.diﬀerent_way_of_looking_more_helpful)
//     //   }
//     // }
//     // })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
//   function showError(msg) {
//     setErrorOpen(true)
//     setErrorMsg(msg)
//     setTimeout(() => {
//       setErrorOpen(false)
//       setErrorMsg("")
//     }, 5000)
//   }
//   function submitOne() {
//     reStart()
//     let body = {
//       "toolId": props.toolId
//     }
//     // FBService.stepOne(body).then((res) => {
//     //   if (res.statusCode === 200 || res.statusCode === 201) {
//     //     setFbid(res.data.result.id);
//     //     console.log("step 2")
//     setStep(2);
//     //   }
//     // })
//   }


//   // function submitInitial() {
//   //   let body = {
//   //     "flexibleThinkingId": ftid,
//   //     "feeling": moods_list[curMood],
//   //     "distressScore": preDistress
//   //   }
//   //   FTService.stepInitialTwo(body).then((res) => {
//   //     if (res.statusCode === 200 || res.statusCode === 201) {
//   //       setStep(3)
//   //     }
//   //   })
//   // }
//   function submitSecond() {
//     // if (!activity || activity === "") {
//     //   showError("Please specify your activity to move forward.")
//     //   return false
//     // }
//     let body = {
//       "fillYourBucketId": fbid,
//       "activity": activity,
//     }
//     // FBService.stepTwo(body).then((res) => {
//     //   if (res.statusCode === 200 || res.statusCode === 201) {
//     //     let evt = event;
//     //     evt.description = `Activity - ${activity}\\n\\n` +
//     //       `Who else is involved (if anyone)?\\n- ${whoInvolved}\\n\\n` +
//     //       `What do I need to do the activity?\\n- ${whatNeeded}`
//     //     setEvent(event)
//     props.setScreen(2)
//     //   }
//     // })
//   }

//   function submitThird() {
//     let body = {
//       "fillYourBucketId": fbid,
//       "what_time": whatTime,
//       "how_long": howLong,
//       "who_involved": whoInvolved,
//       "what_need": whatNeeded
//     }
//     // FBService.stepThree(body).then((res) => {
//     //   if (res.statusCode === 200 || res.statusCode === 201) {
//     //     setStep(4)
//     //   }
//     // })
//   }

//   // function submitForth() {
//   //   let body = {
//   //     "flexibleThinkingId": ftid,
//   //     "is_it_a_helpful_thought": impact
//   //   }
//   //   FTService.stepFour(body).then((res) => {
//   //     if (res.statusCode === 200 || res.statusCode === 201) {
//   //       setStep(6)
//   //     }
//   //   })
//   // }

//   // function submitFifth() {
//   //   let body = {
//   //     "flexibleThinkingId": ftid,
//   //     "diﬀerent_way_of_looking_more_helpful": diffWay
//   //   }
//   //   FTService.stepFive(body).then((res) => {
//   //     if (res.statusCode === 200 || res.statusCode === 201) {
//   //       setStep(7)
//   //     }
//   //   })
//   // }

//   // function submitSixth() {
//   //   let body = {
//   //     "flexibleThinkingId": ftid,
//   //     "feeling": moods_list[postMood],
//   //     "distressScore": postDistress
//   //   }
//   //   FTService.stepSix(body).then((res) => {
//   //     if (res.statusCode === 200 || res.statusCode === 201) {
//   //       // props.setScreen(1)
//   //       // alert("completed")
//   //       setShowPopup(true)
//   //     }
//   //   })
//   // }

//   let scoreUpdated = async (diff) => {
//     if (diff > 0) {
//       // showFinalPopup()
//     }
//   }

//   useEffect(() => {
//     scrollTop()
//   }, [step]);

//   useEffect(() => {

//   }, [activity])

//   console.log("toolsDetail:", toolDetail);

//   return (
//     <PreAssessmentContainer>
//       {step === 1 &&
//         <>
//           <MediaWrapper id="arrow_sticky_wrapper">
//             <iframe width="100%" height="800px" src={!!toolDetail.videoLink ? toolDetail.videoLink : "https://www.youtube.com/embed/-d_AA9H4z9U"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//           </MediaWrapper>
//         </>
//       }

//       {step === 2 &&

//         <Card className={`gloria-card home-card intital_step`} id="arrow_sticky_wrapper" >
//           <div className="row gloria-row gloria-center-row">
//             <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text gloria-text-two" >
//               <NormalSubTitle>
//                 Sometimes we find ourselves thinking back about a difficult event and wishing we had done something different. In the exercise below, you’ll walk through a series of questions to help you take a closer look at what happened, what you knew at the time, and what role you played. Try answering enough questions to look at the situation from a new angle to develop a new perspective. Some questions may not fit the situation you’re working on. In that case just skip them and move to the next one. If you find that you’ve gained a new, more balanced or helpful perspective after the first questions, that’s great! If you find that your belief hasn’t changed, keep going until you get to the end. Sometimes you may need to go through the questions more than once to be able to address strong feelings of guilt or self-blame.
//               </NormalSubTitle>

//               <NormalSubTitle>
//                 If you find that you’ve gained a new, more balanced or helpful perspective after the first questions, that’s great! If you find that your belief hasn’t changed, keep going until you get to the end. Sometimes you may need to go through the questions more than once to be able to address strong feelings of guilt or self-blame.
//               </NormalSubTitle>
//             </div>
//             <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img gloria-img-two">
//               <img alt={"img"} src={HBInitialStep} />
//             </div>
//           </div>
//         </Card>
//       }

//       <Grid direction="row" id="btn2" className={`${(step === 2) && 'large_btn_luke start_button_step'} ${(step === 1) && 'flex-end'} luke_button`}>
//         {step === 2 &&
//           <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step !== 1 && step !== 4) ? 12 : 5} xs={deviceSize > 0 && (step !== 1 && step !== 4) ? 12 : 6} justifyContent="flex-start">
//             <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>
//           </Grid>
//         }
//         {(step === 2) &&
//           <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start" />
//         }
//         <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 ? 12 : 5} xs={deviceSize > 0 ? 12 : 6} justifyContent="flex-start">
//           <CustomButton onClick={() => { step === 1 ? submitOne() : submitSecond() }} color="#F19840">Next Step</CustomButton>

//         </Grid>
//       </Grid >



//       {/* <div className="row luke_button">
//         <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
//           {step === 1 || step === 4 ?
//             null
//             : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
//         </div>
//         <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
//         <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
//           {step === 3 ?
//             <ICalendarLink event={event} >
//               <CustomButton onClick={() => { setTimeout(() => { submitThird() }, 1000) }} color="#F19840">Next Step</CustomButton>
//             </ICalendarLink>
//             : step === 4 ?
//               <CustomButton onClick={() => { window.location.href = '/tools' }} color="#F19840">Explore Other Tools</CustomButton>
//               // : <CustomButton onClick={() => {  === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
//               : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitSecond() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
//         </div>
//       </div> */}


//       <div id="border" className="luke_border"></div>

//       {/* {showPopup &&
//         <PopUp reStart={() => { reStart() }} setScreen={(id) => { props.setScreen(id) }} toolDetail={toolDetail} updateRating={(val) => { props.updateRating(val) }} />
//       }
//       <ModalWrapper open={showModel} onClose={togglePopUp}>
//         <ToolRating toolDetail={toolDetail} fbid={fbid} updateRating={(val) => { scoreUpdated(val) }} onClose={togglePopUp} />
//       </ModalWrapper> */}
//       {/* <ModalWrapper open={finalPopup} onClose={() => { showFinalPopup(false) }}>

//       </ModalWrapper> */}
//     </PreAssessmentContainer>
//   );
// };

// export default FBAssessment;
