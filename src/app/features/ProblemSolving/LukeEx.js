import { Box, Card, Step, StepConnector, Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import {
  withStyles,
  // makeStyles,
  // createMuiTheme,
  // MuiThemeProvider,
} from '@material-ui/core/styles';
import {
  BoardText,
  BoardSubTitle,
  StepperWrapper,
  // StepperDetails,
  FtTextField,
  ToolTipEffect,
  ToolTipTitle,
  StepShower,
  StepContainer,
  NextIconWrapper,
  PrevIconWrapper
} from './style';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import CustomButton from 'app/tamComponents/button';
import luke1 from 'app/shared/assets/images/luke/luke1.svg';
import luke2 from 'app/shared/assets/images/luke/luke2.svg';
import luke3 from 'app/shared/assets/images/luke/luke3.svg';
import luke4 from 'app/shared/assets/images/luke/luke4.svg';
import luke5 from 'app/shared/assets/images/luke/luke5.svg';
import luke6 from 'app/shared/assets/images/luke/luke6.svg';
import luke7 from 'app/shared/assets/images/luke/luke7.svg';
import arrow from 'app/shared/assets/images/arrow.svg';

import { throttle } from 'lodash';
import { getDeviceSize } from 'app/shared/Utils/index';
// import { ContactlessOutlined } from '@material-ui/icons';

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
// ToolTip
// const defaultTheme = createMuiTheme();
// const theme = withStyles({
//   overrides: {
//     MuiTooltip: {
//       tooltip: {
//         fontSize: "18px",
//         color: "#FFFFFF",
//         backgroundColor: "#A9BDC5",
//         fontFamily: "Source Sans Pro",
//         fontWeight: "SemiBold",
//         opacity: 1,
//         maxWidth: "350px",
//         padding: "15px",
//         top: "80px",
//         borderRadius: "20px",
//       }
//     }
//   }
// });
const BlueOnGreenTooltip = withStyles({
  tooltip: {
    fontSize: "18px",
    color: "#FFFFFF",
    backgroundColor: "#0099BA",
    fontFamily: "Source Sans Pro",
    fontWeight: "SemiBold",
    opacity: 1,
    maxWidth: "350px",
    padding: "15px",
    borderRadius: "20px;"
  }
})(Tooltip);
const NormalTooltip = withStyles({
  tooltip: {
    fontSize: "18px",
    color: "#FFFFFF",
    backgroundColor: "#A9BDC5",
    fontFamily: "Source Sans Pro",
    fontWeight: "SemiBold",
    opacity: 1,
    maxWidth: "350px",
    padding: "15px",
    top: "80px",
    borderRadius: "20px",
  }
})(Tooltip);




// const TextOnlyTooltip = withStyles({
//   tooltip: {
//     color: "black",
//     backgroundColor: "transparent"
//   }
// })(Tooltip);
const MainBoard = (props) => {
  const [step, setStep] = useState(0)
  const [dummyIdeas, setDummyIdeas] = useState(["", "", ""])
  const [lukeProblem, setLukeProblem] = useState();
  // const [topScroll, setTopScroll] = useState(530);

  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  // window.addEventListener('scroll', function () {
  //   if (step === 0) {
  //     if (document.getElementById('btn1')) {
  //       document.getElementById('btn1').style.display = "none";
  //     }
  //   }
  //   else if (isInViewport(document.getElementById('btn1')) && isInViewport(document.getElementById('btn2'))) {
  //     if (document.getElementById('btn1')) {
  //       document.getElementById('btn1').style.display = "none";
  //     }

  //   } else {
  //     if (!isInViewport(document.getElementById('btn2')) && document.getElementById('btn1')) {
  //       document.getElementById('btn1').style.display = "flex";
  //     }
  //   }
  // });

  // useEffect(() => {
  //   var tx = document.getElementsByTagName('FtTextField');
  //   for (var i = 0; i < tx.length; i++) {
  //     tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  //     tx[i].addEventListener("input", OnInput, false);
  //   }

  //   function OnInput(e) {
  //     this.style.height = 'auto';
  //     this.style.height = (this.scrollHeight) + 'px';
  //   }
  // });

  // const hideButton = () => {
  //   setTimeout(() => {

  //     if (step === 0) {
  //       if (document.getElementById('btn1')) {
  //         document.getElementById('btn1').style.display = "none";
  //       }
  //     }
  //     else if (isInViewport(document.getElementById('btn1')) && isInViewport(document.getElementById('btn2'))) {
  //       if (document.getElementById('btn1')) {
  //         document.getElementById('btn1').style.display = "none";
  //       }
  //     } else {
  //       if (!isInViewport(document.getElementById('btn2')) && document.getElementById('btn1')) {
  //         document.getElementById('btn1').style.display = "flex";
  //       }

  //     }
  //   }, 100);
  // }

  // useEffect(() => {
  //   setTimeout(() => {

  //     if (step === 0) {
  //       if (document.getElementById('btn1')) {
  //         document.getElementById('btn1').style.display = "none";
  //       }
  //     }
  //     else if (isInViewport(document.getElementById('btn1')) && isInViewport(document.getElementById('btn2'))) {
  //       if (document.getElementById('btn1')) {
  //         document.getElementById('btn1').style.display = "none";
  //       }
  //     } else {
  //       if (!isInViewport(document.getElementById('btn2')) && document.getElementById('btn1')) {
  //         document.getElementById('btn1').style.display = "flex";
  //       }

  //     }
  //   }, 100);
  // }, [step]);


  // function isInViewport(element) {

  //   var elementTop = element?.offsetTop;
  //   var elementBottom = elementTop + element?.offsetHeight;

  //   // console.log("elementTop", elementTop, elementBottom)

  //   var viewportTop = window?.scrollY;
  //   var viewportBottom = viewportTop + window?.outerHeight;

  //   // console.log("viewportTop", viewportTop, viewportBottom)
  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };

  // console.log("step:", step, step !== 0)
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize]);

  const lukeProblemChange = (value) => {
    if (value === lukeProblem) {
      setLukeProblem(0)
    }
    else {
      setLukeProblem(value)
    }
  }

  const scrollTop = () => {
    var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
    // console.log(topScroll);
    // hideButton();
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }



  return (
    <div>
      {/* <div>
        <Grid direction="row" id="btn1" className={`${(step === 0 || step === 6) && 'large_btn_luke'} luke_button luke_button_top`}>
          <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 6) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 6) ? 12 : 6} justifyContent="flex-start">
            {step === 0 ?
              <CustomButton onClick={() => { setStep(step + 1); scrollTop(); }} color="#0099BA">Start Example</CustomButton>
              : <CustomButton onClick={() => { setStep(step - 1); scrollTop(); }} color="#0099BA">Previous Step</CustomButton>}
          </Grid>
          <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
          <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 6) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 6) ? 12 : 6} justifyContent="flex-start">
            {step === 0 || step === 6 ?
              <CustomButton onClick={() => { props.setScreen(2); scrollTop(); }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
              : <CustomButton onClick={() => { setStep(step + 1); scrollTop(); }} color="#F19840">Next Step</CustomButton>}
          </Grid>
        </Grid>
      </div> */}
      <div className="luke_card_wrapper" id="arrow_sticky_wrapper">
        {step > 0 && <>
          {/* <div className="arrow_main_wrapper_prev" id="prev-btn-wrapper" > */}
          <PrevIconWrapper onClick={() => { setStep(step - 1); scrollTop(); }}>
              <img className="pre-arrrow" alt={"img"} src={arrow} />
          </PrevIconWrapper>
          {/* </div> */}
          {step === 6 ?
            // <div className="next_icon">
            <NextIconWrapper onClick={() => { props.setScreen(2); scrollTop(); }}>
                 <img className="next-arrrow" alt={"img"} src={arrow} />
            </NextIconWrapper>
            // </div>
            :
            // <div className="next_icon">
            <NextIconWrapper onClick={() => { setStep(step + 1); scrollTop(); }}>
               <img className="next-arrrow" alt={"img"} src={arrow} />
            </NextIconWrapper>
            // </div>
          }
        </>}
        <Card className={`luke_card ${step <= 0 && "home-luke-card"}`} id="main-card">
          {step > 0 && <Box className="problem_step">
            <StepContainer>
              <StepShower steps={6}>
                {Array.from({ length: 6 }, (_, i) => (<div className="step-number">{i + 1 === step && `Step ${step}`}</div>))}
              </StepShower>
              <StepperWrapper activeStep={step} connector={<Connector />}>
                {Array.from({ length: 7 }, (_, i) => (<Step />))}
              </StepperWrapper>
            </StepContainer>
            {/* <StepperDetails>
            <Box></Box>
            <Box>{`Step ${step} of ${6}`}</Box>
          </StepperDetails> */}
          </Box>}
          {step <= 0 && <>
            <div className="row problem_solving_row" style={{ minHeight: "400px" }}>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text" >
                <BoardSubTitle className="luke_title luke_title_desk">
                  Lonely Luke
                </BoardSubTitle>
                <BoardText className="luke_text">
                  <p>Luke lives alone. He has recently been feeling lonely and isolated after switching to a later shift at his job.</p>
                  <p>Most of Luke's friends work standard shifts, so he typically goes to the gym alone or watches Netflix when he has free time.</p>
                  <p>Luke wishes he could spend more time with people outside of work. Follow the steps ahead to help Luke solve his problems.</p>
                </BoardText>

                <BoardText className="luke_schedule_title">
                  Luke's Daily Schedule:
                </BoardText>
                <BoardText className="luke_schedule_text">
                  Luke spends his mornings and afternoons running errands and taking care of household chores.
                  <div>
                    His nighttime routine currently consists of,
                  </div>
                  <div>
                    <span className="luke_time">9:00 PM - 10:00 PM: </span>
                    <span >Arrive home </span>
                  </div>
                  <div>
                    <span className="luke_time">10:00 PM - 1:00 AM: </span>
                    <span >Eat a snack, wash up, surf phone</span>
                  </div>
                  <div>
                    <span className="luke_time">1:00 AM - 2:00 AM: </span>
                    <span >Go to bed</span>
                  </div>
                </BoardText>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img">
                <BoardSubTitle className="luke_title luke_title_mobile">
                  Lonely Luke
                </BoardSubTitle>
                <img className="luke_image luke_image_step_six" alt={"img"} src={luke1} />
              </div>
            </div>

          </>}
          {step === 1 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 problem_solving_text" >
                  <BoardSubTitle className="step_one_title">
                    Is Luke’s difficulty with seeing friends a solvable problem?
                  </BoardSubTitle>
                  <BoardText className="step_one_text">
                    <p>
                      Sometimes the issue is that we think we are trying to solve a problem but instead we are worrying about something where we have little control or something that only could or might happen. This leads to anxiety and isn’t helpful.
                    </p>
                  </BoardText>
                  <BoardText className="step_gray_text">
                    Examples of Solvable and Unsolvable problems:
                  </BoardText>


                  <Grid container className="solvable_unsolvable" direction="row" item lg={12} md={12} sm={12} xs={12} >
                    <Grid className="solvable_unsolvable_col" item lg={7} md={6} sm={7} xs={12} justifyContent="flex-start">
                      <div className="solvable_unsolvable_title">Solvable</div>
                      <ul className="step_ul" >
                        <li>I have too much to do and can’t finish everything I need to get done</li>
                        <li>I had a fight with my partner</li>
                        <li>My child is acting out at school</li>
                        <li>Money is tight, and I have several bills to pay</li>
                      </ul>
                    </Grid>
                    <Grid className="solvable_unsolvable_col" item lg={5} md={6} sm={5} xs={12}>
                      <div className="solvable_unsolvable_title">Unsolvable</div>
                      <ul className="step_ul" >
                        <li> My relationship could fail </li>
                        <li>Interest rates might go up</li>
                        <li>I might get laid off</li>
                        <li>I might get sick</li>
                      </ul>
                    </Grid>
                  </Grid>

                  <div className="step_bottom_text" >
                    <BoardText >
                      Let's go through some questions to help us determine whether Luke's loneliness is a solvable problem.
                    </BoardText>
                    <BoardText >
                      Problem solving works to address things that are happening now and that we have some control over. Since Luke's problem is both current and somewhat under his control, problem-solving makes sense.
                    </BoardText>
                    <BoardText >
                      Let’s keep going to the next step
                    </BoardText>

                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 problem_solving_img">
                  <img className="luke_image " alt={"img"} src={luke2} />
                </div>
              </div>
              {/* <div className="row" style={{ margin: 10 }}>
              <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} style={{ paddingLeft: "10px" }}>
                <Grid item lg={7} md={6} sm={6} xs={6} justifyContent="flex-start">
                  <span style={{ color: "#09425A", fontSize: "30px", fontWeight: "bold", fontFamily: "Source Sans Pro" }}>Solvable</span>
                  <br />
                  <br />
                  <ul style={{ color: "#0099BA", fontSize: "25px", fontFamily: "Source Sans Pro" }}>
                    <li>I have too much to do and can’t finish everything I need to get done</li><br />
                    <li>I had a fight with my partner</li><br />
                    <li>My child is acting out at school</li><br />
                    <li>Money is tight, and I have several bills to pay</li>
                  </ul>
                </Grid>
                <Grid item lg={5} md={6} sm={6} xs={6}>
                  <span style={{ color: "#09425A", fontSize: "30px", fontWeight: "bold", paddingLeft: "25px", fontFamily: "Source Sans Pro" }}>Unsolvable</span>
                  <br />
                  <br />
                  <ul style={{ color: "#0099BA", fontSize: "25px", fontFamily: "Source Sans Pro" }}>
                    <li>My relationship could fail </li><br />
                    <li>Interest rates might go up</li><br />
                    <li>I might get laid off</li><br />
                    <li>I might get sick</li>
                  </ul>
                </Grid>
              </Grid>
            </div> */}


            </>
          }

          {step === 2 &&
            <>
              <div className="row problem_solving_row" >
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text" >
                  <BoardSubTitle className=" step_two_title">
                    The more specific the problem is, the easier it is to try to solve. Let's break Luke's loneliness down into specific action items
                  </BoardSubTitle>

                  <BoardText className="step_two_gray_text">
                    TIPS ON HOW BE SPECIFIC ABOUT THE PROBLEM YOU WANT TO SOLVE:
                  </BoardText>

                  <BoardText className="problem_should_ul">
                    <ul className="step_ul ">
                      <li>A problem should be stated using concrete and specific terms. A problem well-stated is a problem half solved</li>
                      <li>It might feel like there is a large, overwhelming problem (e.g., “I hate my job”). The point of problem-solving is to break down that large, vague problem into smaller, specific problems to help tackle the larger problem </li>
                      <li>The description of the problem should be based on the facts, rather than your feelings about the issue </li>
                      <li>Work on one problem at a time</li>
                    </ul>
                  </BoardText>

                  <BoardText className="step_two_gray_text">
                    HERE ARE SOME EXAMPLES:
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img" >
                  <img className="luke_image" alt={"img"} src={luke3} />
                </div>
              </div>
              <Grid className="solvable_unsolvable specific_row" container direction="row" item lg={12} md={12} sm={12} xs={12} >
                <Grid className="solvable_unsolvable_col " item lg={4} md={6} sm={5} xs={12} justifyContent="flex-start">
                  <div className="solvable_unsolvable_title" >Non-specific</div>

                  <ul className="step_ul">
                    <li >“My partner never supports me”</li>
                    <li>“I hate my job”</li>
                    <li>“I feel bored”</li>
                    <li>“I am worried about my child”</li>
                  </ul>
                </Grid>
                <Grid className="solvable_unsolvable_col" item lg={4} md={6} sm={7} xs={12}>
                  <div className="solvable_unsolvable_title">Specific</div>

                  <ul className="step_ul">
                    <li>“I need my partner to keep up their part of the household responsibilities”</li>
                    <li>“Working the third shift is really challenging”</li>
                    <li>“I want to have more interesting activities that I find enjoyable”</li>
                    <li>“My child is having a hard time studying for tests”</li>
                  </ul>
                </Grid>
              </Grid>
              <div className="" style={{ marginTop: 10 }}>
                <BoardSubTitle className=" step_two_title">
                  Which of these is the most specific way to describe the problem?
                </BoardSubTitle>
              </div>
              <div className="" style={{ marginTop: 10 }}>
                {deviceSize > -1 ?
                  <>
                    <ToolTipTitle onClick={() => lukeProblemChange(1)}>Luke feels Lonely</ToolTipTitle>
                    {lukeProblem === 1 &&
                      <ToolTipEffect>Not quite. Although Luke feels lonely, let's see if we can get his loneliness more specific.</ToolTipEffect>
                    }
                    <ToolTipTitle className="mt" onClick={() => lukeProblemChange(2)}>Luke hates working the night shift</ToolTipTitle>
                    {lukeProblem === 2 &&
                      <ToolTipEffect> Remember that part of problem-solving is trying to state the facts rather than feelings about the issue. Try again.</ToolTipEffect>
                    }

                    <ToolTipTitle className="gray-color mt" onClick={() => lukeProblemChange(3)}>Luke has limited social support</ToolTipTitle>
                    {lukeProblem === 3 &&
                      <ToolTipEffect>Not quite. Having limited social support is not very specific. Let’s try again.</ToolTipEffect>
                    }

                    <ToolTipTitle className="blue-color mt" onClick={() => lukeProblemChange(4)}>Luke would like to have more regular interactions with his friends and meet new people</ToolTipTitle>
                    {lukeProblem === 4 &&
                      <ToolTipEffect className="blue-bg">Great! Yes, this problem is more clear and specific than the other ones listed. Now let’s go to the next step.</ToolTipEffect>
                    }
                  </>
                  :
                  <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} >
                    <Grid item lg={3} md={3} sm={12} xs={12} >
                      <NormalTooltip title="Not quite. Although Luke feels lonely, let's see if we can get his loneliness more specific." placement="bottom-start">
                        <div className="tooltip_title">
                          Luke feels Lonely
                        </div>
                      </NormalTooltip>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12} >
                      <NormalTooltip title="Remember that part of problem-solving is trying to state the facts rather than feelings about the issue. Try again." placement="bottom-start">
                        <div className="tooltip_title">
                          Luke hates working the night shift
                        </div>
                      </NormalTooltip>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12} >
                      <NormalTooltip title="Not quite. Having limited social support is not very specific. Let’s try again." placement="bottom-start">
                        <div className="tooltip_title tooltip_gray">
                          Luke would like to have more regular interactions with his friends and meet new people
                        </div>
                      </NormalTooltip>
                    </Grid>
                    <Grid className="tooltip_col" item lg={3} md={3} sm={12} xs={12} >
                      <BlueOnGreenTooltip title="Great! Yes, this problem is more clear and specific than the other ones listed. Now let’s go to the next step" placement="bottom-start">
                        <div className="tooltip_title tooltip_blue" >
                          Luke would like to have more regular interactions with his friends and meet new people
                        </div>
                      </BlueOnGreenTooltip>
                    </Grid>
                  </Grid>
                }
              </div>
            </>
          }
          {step === 3 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 problem_solving_text" >
                  <BoardSubTitle className="step_two_title">
                    Now it’s time to brainstorm for possible solutions that Luke can choose from. This means coming up with as many ideas as possible, even if they may seem silly. We have included two solutions below. Can you think of three other ways that Luke could solve his problem?
                  </BoardSubTitle>

                  <BoardText>
                    <ul className="step_ul step_three_ul" >
                      <li style={{ fontWeight: "700" }}><b>He can reach out to a friend to have a meal together on the weekend</b></li>
                      <li style={{ fontWeight: "700" }}><b>He can attend a group exercise class at the gym before his shift</b></li>
                      {/* <li> <FtTextField type="text" placeholder="Type here" className="step_ul_input" /></li> */}
                      {
                        dummyIdeas.map((th, i) => {
                          return <li className="ste_li_input">
                            <FtTextField type="text" placeholder="Type here" className="step_ul_input step_ul_textarea_cs" value={th} onChange={(e) => { let data = [...dummyIdeas]; data[i] = e.target.value; setDummyIdeas(data) }} />
                            {/* <textarea type="text" placeholder="Type here" className="step_ul_input step_ul_textarea" value={th} onChange={(e) => { let data = [...dummyIdeas]; data[i] = e.target.value; setDummyIdeas(data) }} /> */}
                          </li>
                        })
                      }
                      {/* <li><FtTextField style={{ width: "100%" }} /></li><br />
                    <li><FtTextField style={{ width: "100%" }} /></li><br />
                    <li><FtTextField style={{ width: "100%" }} /></li><br /> */}
                    </ul>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 problem_solving_img">
                  <img className="luke_image" alt={"img"} src={luke4} />
                </div>
              </div>


            </>
          }

          {step === 4 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 problem_solving_text" >
                  <BoardSubTitle className="step_two_title">
                    Let’s check out each of these ideas. Think about the pros and cons associated with each one. We have provided an example below
                  </BoardSubTitle>

                  <div className="blue_quote_text">"Luke can reach out to a friend to have a meal together over the weekend"</div>




                  <BoardText className="step_gray_text">
                    Here are some pros and cons of Luke’s solutions
                  </BoardText>

                  <Grid container className="solvable_unsolvable " direction="row" item lg={12} md={12} sm={12} xs={12} >
                    <Grid className="solvable_unsolvable_col " item lg={6} md={6} sm={12} xs={12} justifyContent="flex-start">
                      <div className="solvable_unsolvable_title">Pros</div>

                      <ul className="step_ul pros_step_ul">
                        <li >It is possible with the time and resources Luke has because he does not work weekends </li>
                        <li>Luke and his friend would be able to connect and enjoy a meal together</li>
                      </ul>
                    </Grid>
                    <Grid className="solvable_unsolvable_col " item lg={6} md={6} sm={12} xs={12}>
                      <div className="solvable_unsolvable_title">Cons</div>

                      <ul className="step_ul cons_step_ul">
                        <li>Luke’s friends may not be available </li>
                        <li>If Luke’s friend is only available for breakfast, Luke might be tired since he goes to bed late</li>
                      </ul>
                    </Grid>
                  </Grid>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 problem_solving_img">
                  <img className="luke_image" alt={"img"} src={luke5} />
                </div>
              </div>
            </>
          }

          {step === 5 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 problem_solving_text" >
                  <BoardSubTitle className="step_two_title">
                    Take some time to review the different solutions and consider the pros and cons of each. Which is your favorite?
                  </BoardSubTitle>

                  <ul className="step_ul">
                    <li style={{ fontWeight: "700" }}>Luke can reach out to a friend to have a meal together on the weekend</li>
                    <li style={{ fontWeight: "700" }}>Luke can attend a group exercise class at the gym before his shift</li>
                    {
                      dummyIdeas.map((th, i) => {
                        return <>
                          {th !== "" && <><li style={{ fontWeight: "700" }}>{th}</li></>}
                        </>
                      })
                    }
                    {/* <li><b>Example of user entered solution goes here Example of user entered solution goes here</b></li><br />
                  <li><b>Example of user entered solution goes here</b></li><br />
                  <li><b>Example of user entered solution goes here</b></li><br /> */}
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 problem_solving_img">
                  <img className="luke_image" alt={"img"} src={luke6} />
                </div>
              </div>

            </>
          }

          {step === 6 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 problem_solving_text" >
                  <BoardSubTitle className="step_six_title">
                    What are the action steps for your favorite solution? Some examples are below
                  </BoardSubTitle>
                  <BoardText >
                    <div className="blue_quote_text" >

                      <span style={{ color: "#09425A" }}>Problem:</span> <br />
                      “Luke would like to have more interactions with friends and meet new people.”</div>
                  </BoardText>

                  <TableContainer className="step_six_table">
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow >
                          <TableCell  >Solution</TableCell>
                          <TableCell >Action Step</TableCell>
                          <TableCell  >Who</TableCell>
                          <TableCell >When </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell  >Luke can invite a friend for a weekend meal</TableCell>
                          <TableCell  >Luke can call a friend to invite him to have a meal together</TableCell>
                          <TableCell  >Luke and his friend</TableCell>
                          <TableCell >This weekend</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell >Luke can attend a morning group exercise class in the morning</TableCell>
                          <TableCell >Luke can check online for morning exercise classes</TableCell>
                          <TableCell  >Luke</TableCell>
                          <TableCell >This afternoon</TableCell>
                        </TableRow>

                      </TableBody>
                    </Table>
                  </TableContainer>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 problem_solving_img">
                  <img className="luke_image luke_image_step_six" alt={"img"} src={luke7} />
                </div>
              </div>

            </>
          }

          {/* {step === 7 &&
          <>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7" style={{ paddingRight: "8%" }}>
                <BoardSubTitle>
                  James <i>changes</i> what he says to himself:
                  <br />
                  <br />
                </BoardSubTitle>
                <div className="row">
                  <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div>
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I wish I could have saved him but I didn’t let him and his family down.</div>
                </div>
                <br />
                <div className="row">
                  <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div>
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Sometimes we do the best we can, and we still lose patients. It doesn’t mean I made a mistake or I am bad at my job.</div>
                </div>
                <br />
                <div className="row">
                  <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div>
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>There were also a lot of other eyes on this patient. They didn’t catch anything either.</div>
                </div>
                <br />

              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <img alt={"img"}src={luke7} style={{ marginLeft: "auto", marginRight: "auto", display: 'block', width: "75%" }} />
              </div>
            </div>

          </>
        } */}

          {/* {/* {step === 8 &&
          <>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7" style={{ paddingRight: "0%" }}>
                <BoardSubTitle>
                  He considers what action he can take.
                  <br />
                  <br />
                </BoardSubTitle>
                <BoardText style={{ fontSize: 25 }}>
                  Sometimes the thought is accurate but it isn’t very helpful for us in the moment. In that situation it can help to ask yourself - Is Sometimes the thought is accurate but it isn’t very helpful for us in the moment. In that situation it can help to ask yourself - Is there something I can do about it to improve the situation? something I can do about it to improve the situation?
                </BoardText>
                <br />
                <div className="row">
                  <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div>
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I could do something to honor him and the other people that we lost.</div>
                </div>
                <br />
                <div className="row">
                  <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div>
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can talk with my co-workers about how I feel. I know sometimes they feel this way too, and we can support each other.</div>
                </div>
                <br />
                <br />
                <BoardSubTitle>
                  He notices he feels less guilty. He feels calmer, although sad
                  <br />
                  <br />
                </BoardSubTitle>
                <BoardText style={{ fontSize: 25 }}>
                  Here are other examples of how to use this tool to flex your thinking.<br /><br />
                  <span style={{ color: "#0099BA" }}>Click here</span> to see how another person might react differently to the same situation.<br /><br />
                  <span style={{ color: "#0099BA" }}>Click here</span> to see an example of using the tool for <b>depression.</b><br /><br />
                  <span style={{ color: "#0099BA" }}>Click here</span> to see an example of using the tool for <b>trauma.</b><br /><br />
                  <span style={{ color: "#0099BA" }}>Click here</span> to see an example of using the tool for <b>anxiety.</b><br /><br />
                </BoardText>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <img alt={"img"}src={luke7} style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "75%" }} />
              </div>
            </div>

          </>
        } */}
        </Card>
      </div>




      <Grid direction="row" id="btn2" className={`${(step === 0 || step === 6) && 'large_btn_luke'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 6) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 6) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { setStep(step + 1); scrollTop(); }} color="#0099BA">Start Example</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1); scrollTop(); }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 6) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 6) ? 12 : 6} justifyContent="flex-start">
          {step === 0 || step === 6 ?
            <CustomButton onClick={() => { props.setScreen(2); scrollTop(); }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1); scrollTop(); }} color="#F19840">Next Step</CustomButton>}
        </Grid>
      </Grid>

      <div id="border" className="luke_border"></div>




      {/* 

      <div className="row luke_button" >
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
          {step === 0 ?
            <CustomButton onClick={() => { setStep(step + 1) }} color="#0099BA">Start Example</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 0 || step === 6 ?
            <CustomButton onClick={() => { props.setScreen(2) }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div>
      </div> */}


    </div>
  );
};

export default MainBoard;
