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
import CustomButton from 'app/tamComponents/button';
import alyssa1 from 'app/shared/assets/images/alyssa/alyssa1.svg';
import alyssa2 from 'app/shared/assets/images/alyssa/alyssa2.svg';
import alyssa3 from 'app/shared/assets/images/alyssa/alyssa3.svg';
import alyssa4 from 'app/shared/assets/images/alyssa/alyssa4.svg';
import alyssa5 from 'app/shared/assets/images/alyssa/alyssa5.svg';
import alyssa6 from 'app/shared/assets/images/alyssa/alyssa6.svg';
import alyssa7 from 'app/shared/assets/images/alyssa/alyssa7.svg';
import alyssa8 from 'app/shared/assets/images/alyssa/alyssa8.svg';
import arrow from 'app/shared/assets/images/arrow.svg';

import { throttle } from 'lodash';
import { getDeviceSize } from 'app/shared/Utils/index';

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
  const [step, setStep] = useState(0)

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
        <Card className={`gloria-card ${step === 0 ? "home-card" : ""}`} id="main-card" >


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
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text gloria-text-two" >
                <BoardSubTitle>
                  <div className="gloria-text-title  mt-0 mb-0 mb-4">Anxiety</div>

                </BoardSubTitle>
                <BoardText>
                  <p className="gloria-sub-title-text gloria-middle-text-two">For people who are more anxious or who worry, they may be thinking more about possible future negative events that might happen that are threatening or scary. This also influences how they feel. Let’s look at another example.</p>
                </BoardText>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img gloria-img-two">
                <img alt={"img"} src={alyssa1} />
                <BoardText>
                  <p className="gloria-sub-title-text gloria-middle-text">For people who are more anxious or who worry, they may be thinking more about possible future negative events that might happen that are threatening or scary. This also influences how they feel. Let’s look at another example.</p>
                </BoardText>
              </div>
            </div>

          </>}
          {step === 1 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Alyssa gets home from work and sees the stack of bills waiting for her. She catches the thought:</div>

                    <div className="gloria-sub-text">“I can't deal with this. I don't even know where to start! Everything is going to fall apart.”</div>
                  </BoardSubTitle>

                  <BoardText style={{ fontSize: 25 }}>
                    <p className="gloria-sub-title-text">She feels anxious, her hands start to sweat, and her breathing increases. She feels dizzy.</p>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa2} />
                </div>
              </div>

            </>
          }

          {step === 2 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7  gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">She takes a step back and <i>checks</i> her thought: </div>
                  </BoardSubTitle>

                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-two">Alyssa checks the facts. What facts support this thought? </p>
                  </BoardText>

                  <ul className="gloria-step-ul">
                    <li>
                      I’m behind on my bills. Finances are really tight right now.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I’m behind on my bills. Finances are really tight right now.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa3} />
                </div>
              </div>

            </>
          }
          {step === 3 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7  gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Do any facts not support this thought? </div>

                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I’ve been through hard times before.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I’ve been through hard times before.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      It is hard but it isn’t totally true that everything is going to fall apart.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It is hard but it isn’t totally true that everything is going to fall apart.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      I do still have some savings I can draw on.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I do still have some savings I can draw on.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa1} />
                </div>
              </div>

            </>
          }

          {step === 4 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Alyssa shifts her perspective: </div>

                    <div className="gloria-sub-text">“Is there other information that I should consider? Are there other ways of looking at it?”</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I have some options for cutting expenses. I could also try to find a cheaper place, if necessary.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I have some options for cutting expenses. I could also try to find a cheaper place, if necessary.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      Not looking at my bills isn’t making them go away. If anything, my anxiety gets worse by not dealing with them.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Not looking at my bills isn’t making them go away. If anything, my anxiety gets worse by not dealing with them.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      A lot of people are in this situation right now. There may be programs that offer assistance.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>A lot of people are in this situation right now. There may be programs that offer assistance.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa4} />
                </div>
              </div>

            </>
          }

          {step === 5 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">What would you say to a friend who was in this situation?</div>

                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I’d tell my friend that we can deal with her anxiety in smaller, more manageable ways. I’d also tell her that it was going to be okay.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I’d tell my friend that we can deal with her anxiety in smaller, more manageable ways. I’d also tell her that it was going to be okay.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa5} />
                </div>
              </div>

            </>
          }

          {step === 6 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text" >
                  <BoardSubTitle>
                    <div className="gloria-text-title">Alyssa looks to see if it is a helpful thought.</div>

                    <div className="gloria-sub-text">“Does it help to talk to myself this way? What impact does it have on me?”</div>
                  </BoardSubTitle>


                  <ul className="gloria-step-ul">
                    <li>
                      It’s not helpful to tell myself that everything is going to fall apart. It makes me more scared and stops me from being able to think.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It’s not helpful to tell myself that everything is going to fall apart. It makes me more scared and stops me from being able to think.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      It’s also not helpful to tell myself that I can’t deal with this. It makes me feel scared and overwhelmed. I also know that I can deal with this.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It’s also not helpful to tell myself that I can’t deal with this. It makes me feel scared and overwhelmed. I also know that I can deal with this.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa6} />
                </div>
              </div>

            </>
          }

          {step === 7 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text" >
                  <BoardSubTitle>
                    <div className="gloria-text-title">Alyssa <i>changes</i> what she says to herself:</div>

                    <div className="gloria-sub-text">It’s awful that we are understaffed today and it is likely to be a long day, but I can handle this.</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I have the skills to manage this. I just have to sit down and figure out what to prioritize.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I have the skills to manage this. I just have to sit down and figure out what to prioritize.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      I don’t have to solve it all today. I can take it one step at a time.
                    </li>
                  </ul>

                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I don’t have to solve it all today. I can take it one step at a time.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      Things are going to be tight for a bit, but I can create a plan to get through this.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Things are going to be tight for a bit, but I can create a plan to get through this.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa7} />
                </div>
              </div>

            </>
          }

          {step === 8 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title"> She considers what action she can take. </div>

                  </BoardSubTitle>
                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-four">Sometimes the thought is accurate but it isn’t very helpful for us in the moment. In that situation, it can help to ask yourself - "Is there something I can do about it to improve the situation?"" </p>
                  </BoardText>



                  <ul className="gloria-step-ul">
                    <li>
                      I can make an appointment with a financial counselor to figure out some options.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can make an appointment with a financial counselor to figure out some options.</div> */}





                  <ul className="gloria-step-ul">
                    <li>
                      I can offer to pick up some extra shifts at work.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can offer to pick up some extra shifts at work.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      Worst case scenario, I can start looking for a cheaper place.Although moving is hard, it might reduce my stress and make things easier right now.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Worst case scenario, I can start looking for a cheaper place.Although moving is hard, it might reduce my stress and make things easier right now.</div> */}


                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-seven">She notices that she now feels less panicked. </div>

                  </BoardSubTitle>
                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-three">Here are other examples of how to use this tool to flex your thinking. </p>

                    <div className="gloria-link"><span onClick={() => { props.setScreen(1); scrollTop() }} className="gloria-link-click text-underline">Click here</span>  to see how another person might react differently to the same situation.</div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(4); scrollTop() }} className="gloria-link-click text-underline">Click here  </span>to see an example of using the tool for <span className="font-weight-semi-bold">depression.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(5); scrollTop() }} className="gloria-link-click text-underline">Click here </span>to see an example of using the tool for <span className="font-weight-semi-bold">trauma.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(6); scrollTop() }} className="gloria-link-click text-underline">Click here  </span>to see an example of using the tool for <span className="font-weight-semi-bold"> anxiety.</span></div>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={alyssa8} />
                </div>
              </div>

            </>
          }
        </Card>
      </div>

      <Grid direction="row" id="btn2" className={`${(step === -1 || step === 8) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === -1 || step === 8) ? 12 : 5} xs={deviceSize > 0 && (step === -1 || step === 8) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1); scrollTop() }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1); scrollTop() }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === -1 || step === 8) ? 12 : 5} xs={deviceSize > 0 && (step === -1 || step === 8) ? 12 : 6} justifyContent="flex-start">
          {step === 8 ?
            <CustomButton onClick={() => { props.startActivity(); scrollTop() }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1); scrollTop() }} color="#F19840">Next Step</CustomButton>}
        </Grid>
      </Grid >

      <div id="border" className="luke_border"></div>

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
