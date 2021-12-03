import { Box, Grid, Card, Step, StepConnector } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

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
import maria1 from 'app/shared/assets/images/maria/maria1.svg';
import maria2 from 'app/shared/assets/images/maria/maria2.svg';
import maria3 from 'app/shared/assets/images/maria/maria3.svg';
import maria4 from 'app/shared/assets/images/maria/maria4.svg';
import maria5 from 'app/shared/assets/images/maria/maria5.svg';
import maria6 from 'app/shared/assets/images/maria/maria6.svg';
import maria7 from 'app/shared/assets/images/maria/maria7.svg';
import maria8 from 'app/shared/assets/images/maria/maria8.svg';
import arrow from 'app/shared/assets/images/arrow.svg';
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



const scrollTop = () => {
  var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
  // console.log(topScroll);
  // hideButton();
  document.body.scrollTop = topScroll;
  document.documentElement.scrollTop = topScroll;
}


const MainBoard = (props) => {
  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize]);
  const [step, setStep] = useState(0)
  return (
    <>
      {/* <div className="row" style={{ marginTop: 20, marginBottom: 20 }}> */}
      {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </div> */}
      {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div> */}
      {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 8 ?
            <CustomButton onClick={() => { props.startActivity() }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div> */}
      {/* </div> */}
      <div className="luke_card_wrapper" id="arrow_sticky_wrapper">
        {step > -1 && <>
          {step === 0 ?
           <PrevIconWrapper onClick={() => { props.setScreen(1); scrollTop(); }} id="prev-btn">
           <img className="pre-arrrow" alt={"img"} src={arrow} />
         </PrevIconWrapper>
          : <PrevIconWrapper onClick={() => { setStep(step - 1); scrollTop(); }} id="prev-btn" >
            <img className="pre-arrrow" alt={"img"} src={arrow} />

            </PrevIconWrapper>
          }
          {step === 8 ?
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
              <StepShower steps={8}>
                {Array.from({ length: 8 }, (_, i) => (<div className="step-number">{i + 1 === step && `Step ${step}`}</div>))}
              </StepShower>
              <StepperWrapper activeStep={step} connector={<Connector />}>
                {Array.from({ length: 9 }, (_, i) => (<Step />))}
              </StepperWrapper>
            </StepContainer>
          </Box>}
          {step === 0 && <>
            <div className="row gloria-row gloria-center-row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text gloria-text-two">
                <BoardSubTitle>
                  <div className="gloria-text-title  mt-0 mb-0 mb-4"> Depression</div>


                </BoardSubTitle>
                <BoardText>
                  <p className="gloria-sub-title-text gloria-middle-text-two">For individuals who are feeling down, they may be more likely to make sense of things in a negative way - kind of like seeing the world through dark colored sunglasses. This also influences how they feel. Let’s look at another example.</p>

                </BoardText>

                {/* <img alt={"img"} src={maria1} /> */}
                {/* <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                <img alt={"img"} src={maria1} />
              </div> */}

              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img gloria-img-two">
                <img alt={"img"} src={maria1} />
                <BoardText>
                  <p className="gloria-sub-title-text gloria-middle-text">For individuals who are feeling down, they may be more likely to make sense of things in a negative way - kind of like seeing the world through dark colored sunglasses. This also influences how they feel. Let’s look at another example.</p>

                </BoardText>
              </div>

            </div>

          </>}
          {
            step === 1 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Maria’s alarm goes off to get ready for work. She knows that staffing is low. She <i>catches</i> the thought:</div>

                    <div className="gloria-sub-text">“I can’t handle my workload. I just can’t manage today.”</div>
                  </BoardSubTitle>

                  <BoardText >
                    <p className="gloria-sub-title-text">She feels depressed and down and pulls the covers over her head.</p>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={maria2} />
                </div>
              </div>

            </>
          }

          {
            step === 2 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">She takes a step back and <i>checks</i> her thought: </div>
                  </BoardSubTitle>

                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-two">Maria checks the facts. What facts support this thought?</p>
                  </BoardText>
                  <ul className="gloria-step-ul">
                    <li>
                      We are understaffed.
                    </li>
                  </ul>
                  <ul className="gloria-step-ul">
                    <li>
                      The workload is really heavy.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>We are understaffed.</div> */}


                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>The workload is really heavy.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={maria3} />
                </div>
              </div>

            </>
          }
          {
            step === 3 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title"> Do any facts not support this thought?</div>

                  </BoardSubTitle>
                  <ul className="gloria-step-ul">
                    <li>
                      We have had other days where we’ve been understaffed and we have been able to manage. Me calling in sick or coming in late isn’t going to help the situation.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>We have had other days where we’ve been understaffed and we have been able to manage. Me calling in sick or coming in late isn’t going to help the situation.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={maria4} />
                </div>
              </div>

            </>
          }

          {
            step === 4 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text" >
                  <BoardSubTitle>
                    <div className="gloria-text-title">Maria shifts her perspective: </div>

                    <div className="gloria-sub-text">“Is there other information that I should consider? Are there other ways of looking at it? ”</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      Some things might not get done but I can still get the essential tasks completed.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Some things might not get done but I can still get the essential tasks completed.</div> */}

                  <ul className="gloria-step-ul">
                    <li>
                      It may not be perfect, or up to my usual standards, but is better than nothing.
                    </li>
                  </ul>

                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It may not be perfect, or up to my usual standards, but is better than nothing.</div> */}

                  <ul className="gloria-step-ul">
                    <li>
                      We have good days and bad days--and some shifts turn out better than I think they will.
                    </li>
                  </ul>

                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>We have good days and bad days--and some shifts turn out better than I think they will.</div> */}

                  <ul className="gloria-step-ul">
                    <li>
                      If I call in sick it will make the department more understaffed and my coworkers will have an even harder day.
                    </li>
                  </ul>

                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>If I call in sick it will make the department more understaffed and my coworkers will have an even harder day.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={maria5} />
                </div>
              </div>

            </>
          }

          {
            step === 5 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">What would you say to a friend who was in this situation?</div>

                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I’d tell my friend “just do your best in a hard situation” and “you’ve got this!” I’d remind her “Once you get into work, you always get into a rhythm.”
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I’d tell my friend “just do your best in a hard situation” and “you’ve got this!” I’d remind her “Once you get into work, you always get into a rhythm.”</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={maria6} />
                </div>
              </div>

            </>
          }

          {
            step === 6 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Maria looks to see if it is a helpful thought.</div>

                    <div className="gloria-sub-text">“Does it help to talk to myself this way? What impact does it have on me?”</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      It’s not helpful to tell myself I can’t manage or I can’t handle this. It makes me feel worse. And it is not really true.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It’s not helpful to tell myself I can’t manage or I can’t handle this. It makes me feel worse. And it is not really true.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={maria1} />
                </div>
              </div>

            </>
          }

          {
            step === 7 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title"> Maria <i>changes</i> what she says to herself:</div>

                    <div className="gloria-sub-text">It’s awful that we are understaffed today and it is likely to be a long day, but I can handle this.</div>
                  </BoardSubTitle>
                  <br />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={maria7} />
                </div>
              </div>

            </>
          }

          {
            step === 8 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">She considers what action she can take.</div>

                  </BoardSubTitle>
                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-four">Sometimes the thought is accurate but it isn’t very helpful for us in the moment. In that situation, it can help to ask yourself - "Is there something I can do about it to improve the situation?" </p>
                  </BoardText>


                  <ul className="gloria-step-ul">
                    <li>
                      I can take tasks in smaller pieces. This will make the work day less overwhelming.
                    </li>

                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can take tasks in smaller pieces. This will make the work day less overwhelming.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      I can push off some lower priority tasks for a day when staffing is a bit better.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can push off some lower priority tasks for a day when staffing is a bit better.</div> */}




                  <ul className="gloria-step-ul">
                    <li>
                      I can prioritize my tasks, and my coworkers and I can divide and conquer the tasks just like we always do.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can prioritize my tasks, and my coworkers and I can divide and conquer the tasks just like we always do.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      I can plan to take some vacation time soon to recharge, and I can talk to my boss about staffing levels.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can plan to take some vacation time soon to recharge, and I can talk to my boss about staffing levels.</div> */}



                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-seven">She notices that she now feels less sad and overwhelmed.</div>

                  </BoardSubTitle>
                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-three">Here are other examples of how to use this tool to flex your thinking.</p>
                    <div className="gloria-link"><span onClick={() => { props.setScreen(1); scrollTop() }} className="gloria-link-click text-underline">Click here </span> to see how another person might react differently to the same situation.</div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(4); scrollTop() }} className="gloria-link-click text-underline">Click here  </span> to see an example of using the tool for <span className="font-weight-semi-bold">depression.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(5); scrollTop() }} className="gloria-link-click text-underline">Click here </span> to see an example of using the tool for <span className="font-weight-semi-bold">trauma.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(6); scrollTop() }} className="gloria-link-click text-underline">Click here  </span> to see an example of using the tool for <span className="font-weight-semi-bold">anxiety.</span></div>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img className="gloria-img-step-seven" alt={"img"} src={maria8} />
                </div>
              </div>

            </>
          }
        </Card >
      </div>

      <Grid direction="row" id="btn2" className={`${(step === -1 || step === 8) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === -1 || step === 8) ? 12 : 5} xs={deviceSize > 0 && (step === -1 || step === 8) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1); scrollTop(); }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1); scrollTop(); }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === -1 || step === 8) ? 12 : 5} xs={deviceSize > 0 && (step === -1 || step === 8) ? 12 : 6} justifyContent="flex-start">
          {step === 8 ?
            <CustomButton onClick={() => { props.startActivity(); scrollTop(); }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1); scrollTop(); }} color="#F19840">Next Step</CustomButton>}
        </Grid>
      </Grid >
      <div id="border" className="luke_border"></div>
      {/* <Grid direction="row" id="btn2" className={`${(step === 0 || step === 8) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 8) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 8) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 8) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 8) ? 12 : 6} justifyContent="flex-start">
          {step === 8 ?
            <CustomButton onClick={() => { props.startActivity() }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </Grid>
      </Grid > */}


      {/* <div className="row" style={{ marginTop: 20 }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 8 ?
            <CustomButton onClick={() => { props.startActivity() }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div>
      </div> */}
    </>
  );
};

export default MainBoard;
