import { Box, Card, Grid, Step, StepConnector } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
  // BoardText,
  // BoardSubTitle,
  // StepperWrapper,
  // StepperDetails,
} from './style';

import {
  BoardText,
  BoardSubTitle,
  StepperWrapper,
  // FtTextField,
  // ToolTipEffect,
  // ToolTipTitle,
  StepShower,
  StepContainer,
  NextIconWrapper,
  PrevIconWrapper
} from 'app/features/ProblemSolving/style';

import { throttle } from 'lodash';
import { getDeviceSize } from 'app/shared/Utils/index';

import CustomButton from 'app/tamComponents/button';
import gloria2 from 'app/shared/assets/images/gloria/gloria2.svg';
import gloria3 from 'app/shared/assets/images/gloria/gloria3.svg';
import gloria4 from 'app/shared/assets/images/gloria/gloria4.svg';
import gloria5 from 'app/shared/assets/images/gloria/gloria5.svg';
import gloria6 from 'app/shared/assets/images/gloria/gloria6.png';
import gloria7 from 'app/shared/assets/images/gloria/gloria7.svg';
import gloria8 from 'app/shared/assets/images/gloria/gloria8.svg';
import arrow from 'app/shared/assets/images/arrow.svg';
// import ScrollToTop from 'app/shared/Utils/ScrollToTop';
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

const MainBoard = (props) => {
  const [step, setStep] = useState(1)

  const scrollTop = () => {
    var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
    // console.log(topScroll);
    // hideButton();
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }


  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize]);



  return (
    <>
      <div className="luke_card_wrapper" id="arrow_sticky_wrapper">
        {step > 0 && <>
          
          {step === 1 ?
            <PrevIconWrapper onClick={() => { props.setScreen(1); scrollTop(); }} id="prev-btn">
                <img className="pre-arrrow" alt={"img"} src={arrow} />
              </PrevIconWrapper>
            : <PrevIconWrapper onClick={() => { setStep(step - 1); scrollTop(); }} id="prev-btn" >
              <img className="pre-arrrow" alt={"img"} src={arrow} />

              </PrevIconWrapper>
          }
           
            {step === 7 ?
            <NextIconWrapper onClick={() => { props.startActivity(); scrollTop(); }}>
                  <img className="next-arrrow" alt={"img"} src={arrow} />
              </NextIconWrapper>
            : <NextIconWrapper onClick={() => { setStep(step + 1); scrollTop(); }} >
                <img className="next-arrrow" alt={"img"} src={arrow} />
              </NextIconWrapper>
              }

        </>}

        <Card className={`gloria-card ${step === 0 ? "home-card" : ""}`} id="main-card">


          {step > 0 && <Box className="problem_step">
            <StepContainer>
              <StepShower steps={7}>
                {Array.from({ length: 7 }, (_, i) => (<div className="step-number">{i + 1 === step && `Step ${step}`}</div>))}
              </StepShower>
              <StepperWrapper activeStep={step} connector={<Connector />}>
                {Array.from({ length: 8 }, (_, i) => (<Step />))}
              </StepperWrapper>
            </StepContainer>
          </Box>}
          {step === 1 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-step-one">A coworker has snapped at Gloria, a nurse. She might <i>catch</i> a thought like this:</div>
                    <div className="gloria-sub-text">“She’s blowing this way out of proportion. She’s always ruining my day with this crap. I’m going to quit if I have to keep dealing with her”</div>
                    {/* <p className="gloria-sub-title-text">She notices she feels angry and frustrated, and she’s slamming some things around on the desk.</p> */}
                  </BoardSubTitle>

                  <BoardText>
                    <p className="gloria-sub-title-text"> She notices she feels angry and frustrated, and she’s slamming some things around on the desk.</p>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={gloria2} />
                </div>
              </div>

            </>
          }

          {step === 2 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-step-second"> She takes a step back and <i>checks</i> her thought:</div>
                  </BoardSubTitle>

                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-two">Gloria checks the facts. What facts support this thought?</p>
                  </BoardText>

                  <ul className="gloria-step-ul gloria-step-ul-two">
                    <li>
                      She snapped at me once before. She does sometimes get upset over little things.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1">
                    <b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>
                  </div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>She snapped at me once before. She does sometimes get upset over little things.</div> */}


                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-three"> Do any facts not support this thought?</div>
                  </BoardSubTitle>


                  <ul className="gloria-step-ul">

                    <li>We have worked together for 3 years and she has only snapped at me twice. She has also helped me and other people out.</li>

                  </ul>



                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img className="gloria-user" alt={"img"} src={gloria3} />
                </div>
              </div>

            </>
          }
          {step === 3 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title ">Gloria shifts her perspective:</div>
                    <div className="gloria-sub-text ">“Is there other information that I should consider? Are there other ways of looking at it? ”</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      We’re all being asked to work extra shifts and we’re all tired.
                    </li>
                  </ul>
                  <ul className="gloria-step-ul">
                    <li>
                      My mistake created some extra work for her, it happened at the end of her 5th shift in a row. I’d be upset too if I were her.
                    </li>
                  </ul>

                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>We’re all being asked to work extra shifts and we’re all tired.</div> */}


                  {/* <div className="row">
                  <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div>
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>My mistake created some extra work for her, it happened at the end of her 5th shift in a row. I’d be upset too if I were her.</div>
                </div>
                <br /> */}


                  <ul className="gloria-step-ul">
                    <li>
                      My mistake created extra work for her. I'd be upset too if I were her.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>My mistake created extra work for her. I'd be upset too if I were her.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={gloria4} />
                </div>
              </div>

            </>
          }

          {step === 4 &&
            <>
              <div className="row gloria-row" >
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-step-four">What would you say to a friend who was in this situation?</div>

                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I'd tell my friend not to take it personally--the co-worker is probably upset about the mistake, but not necessarily upset with you.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I'd tell my friend not to take it personally--the co-worker is probably upset about the mistake, but not necessarily upset with you.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      Don’t take it personally--she’s probably upset about the mistake, but not necessarily upset with you.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Don’t take it personally--she’s probably upset about the mistake, but not necessarily upset with you.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      You can talk with her and tell her how you feel about her snapping at you.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>You can talk with her and tell her how you feel about her snapping at you.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img className="gloria-user" alt={"img"} src={gloria5} />
                </div>
              </div>

            </>
          }

          {step === 5 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7  gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title ">Gloria looks to see if it is a helpful thought.</div>
                    <div className="gloria-sub-text">“Does it help to talk to myself this way? What impact does it have on me? ”</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      It just makes me angrier. In the heat of the moment, I might hurt other people’s feelings, too. That might impact patient care.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It just makes me angrier. In the heat of the moment, I might hurt other people’s feelings, too. That might impact patient care.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      Thinking this way and staying angry might make me less compassionate towards the patients I’m working with.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Thinking this way and staying angry might make me less compassionate towards the patients I’m working with.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img ">
                  <img className="gloria-img-two" alt={"img"} src={gloria6} />
                </div>
              </div>

            </>
          }

          {step === 6 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-step">Gloria considers what action she can take.</div>
                    <div className="gloria-sub-text">“We’re all really tired and I’d be annoyed too if I were in her shoes. I still don’t like the way she reacted. If it happens again I can talk with her about it when she’s calmer. ”</div>
                  </BoardSubTitle>
                  <br />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img className="gloria-img-two" alt={"img"} src={gloria7} />
                </div>
              </div>

            </>
          }

          {step === 7 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Gloria <i>changes</i> what she says to herself:</div>

                  </BoardSubTitle>
                  <BoardText>
                    <p className="gloria-sub-title-text gloria-sub-title-text-four">Sometimes the thought is accurate but it isn’t very helpful for us in the moment. In that situation it can help to ask yourself - Is there something I can do about it to improve the situation?</p>
                  </BoardText>

                  <BoardSubTitle>
                    <div className="gloria-sub-text gloria-sub-text-step-seven">“For now, I can do my part to fix the mistake and apologize. I’ll talk with her about it when we’re feeling calmer. Maybe I can get her a coffee and we can just talk and blow off some steam. We could both use it.”</div>
                  </BoardSubTitle>

                  <BoardSubTitle>
                    <div className="gloria-text-title  gloria-text-title-seven">She notices she now feels calmer and less angry</div>

                  </BoardSubTitle>
                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-three"> Here are other examples of how to use this tool to flex your thinking.</p>

                    <div className="gloria-link"><span onClick={() => { props.setScreen(1); scrollTop() }} className="gloria-link-click text-underline">Click here</span> to see how another person might react differently to the same situation. </div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(4); scrollTop() }} className="gloria-link-click text-underline">Click here  </span> to see an example of using the tool for <span className="font-weight-semi-bold">depression.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(5); scrollTop() }} className="gloria-link-click text-underline">Click here </span> to see an example of using the tool for <span className="font-weight-semi-bold">trauma.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(6); scrollTop() }} className="gloria-link-click text-underline">Click here  </span>to see an example of using the tool for <span className="font-weight-semi-bold">anxiety.</span></div>



                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img className="gloria-img-step-seven" alt={"img"} src={gloria8} />
                </div>
              </div>

            </>
          }
        </Card>
      </div>


      <Grid direction="row" id="btn2" className={`${(step === 0 || step === 7) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 7) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 7) ? 12 : 6} justifyContent="flex-start">
          {step === 1 ?
            <CustomButton onClick={() => { props.setScreen(1); scrollTop() }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1); scrollTop() }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 7) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 7) ? 12 : 6} justifyContent="flex-start">
          {step === 7 ?
            <CustomButton onClick={() => { props.startActivity(); scrollTop() }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1); scrollTop() }} color="#F19840">Next Step</CustomButton>}
        </Grid>
      </Grid >
      <div id="border" className="luke_border"></div>
    </>
  );
};

export default MainBoard;
