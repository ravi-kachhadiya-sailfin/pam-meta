import { Box, Card, Grid, Step, StepConnector } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

// import {
//   BoardText,
//   BoardSubTitle,
//   StepperWrapper,
//   StepperDetails,
// } from './style';

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
import jose1 from 'app/shared/assets/images/jose/jose1.svg';
import jose2 from 'app/shared/assets/images/jose/jose2.svg';
import jose3 from 'app/shared/assets/images/jose/jose3.svg';
import jose4 from 'app/shared/assets/images/jose/jose4.svg';
import jose5 from 'app/shared/assets/images/jose/jose5.svg';
import jose6 from 'app/shared/assets/images/jose/jose6.svg';
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
      {/* <div className="row" style={{ marginTop: 20, marginBottom: 20 }}> */}
      {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 1 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </div> */}
      {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div> */}
      {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 6 ?
            <CustomButton onClick={() => { props.startActivity() }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div> */}
      {/* </div> */}

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
          
          {step === 6 ?
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
              <StepShower steps={6}>
                {Array.from({ length: 6 }, (_, i) => (<div className="step-number">{i + 1 === step && `Step ${step}`}</div>))}
              </StepShower>
              <StepperWrapper activeStep={step} connector={<Connector />}>
                {Array.from({ length: 7 }, (_, i) => (<Step />))}
              </StepperWrapper>
            </StepContainer>
          </Box>}
          {step === 1 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Jose, a tech, <i className="font-weight-extra-bold">catches</i> his thoughts after he was snapped at by a nurse for a mistake he made.</div>
                    <div className="gloria-sub-text">“I screwed up again. I never do anything right. I’m going to lose this job. ”</div>
                  </BoardSubTitle>

                  <BoardText>
                    <p className="gloria-sub-title-text">He feels hopeless and angry with himself. He thinks about quitting his job.</p>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={jose2} />
                </div>
              </div>

            </>
          }

          {step === 2 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">He <i className="font-weight-extra-bold">checks</i> his thought</div>
                  </BoardSubTitle>

                  <BoardText>
                    <p className="gloria-sub-title-text gloria-sub-title-text-two">He checks the facts. What facts support this thought?</p>
                  </BoardText>


                  <ul className="gloria-step-ul">
                    <li>
                      I did make a mistake.
                    </li>

                  </ul>


                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I did make a mistake.</div> */}


                  <BoardSubTitle>
                    <div className="gloria-text-title  jose-text-title-step-three"> Do any facts not support this thought?</div>
                  </BoardSubTitle>


                  <ul className="gloria-step-ul">
                    <li>
                      I haven’t made a mistake like this in a long time. I did this a couple of times when I was training, but it has been a while since I’ve messed up.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I haven’t made a mistake like this in a long time. I did this a couple of times when I was training, but it has been a while since I’ve messed up.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      People tell me they think I do a good job.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>People tell me they think I do a good job.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={jose3} />
                </div>
              </div>

            </>
          }
          {step === 3 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text" >
                  <BoardSubTitle>
                    <div className="gloria-text-title"> Jose looks at the situation in other ways:</div>
                    <div className="gloria-sub-text">“Is there other information that I should consider, or are there other ways of looking at it? What would you say to a friend who was in this situation?”</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I haven’t made any really big mistakes. Nobody has been hurt by any of the small mistakes I’ve made
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I haven’t made any really big mistakes. Nobody has been hurt by any of the small mistakes I’ve made</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      This was an easy mistake to make because the supply area isn’t organized well. Other people can easily make this mistake as well.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>This was an easy mistake to make because the supply area isn’t organized well. Other people can easily make this mistake as well.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      This is the first time I’ve made this mistake and I tend to learn from my mistakes
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>This is the first time I’ve made this mistake and I tend to learn from my mistakes</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={jose4} />
                </div>
              </div>

            </>
          }

          {step === 4 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title"> Jose looks to see if it is a helpful thought.</div>
                    <div className="gloria-sub-text jose-sub-text-step-four">“Does it help to look at it the way I was before? What impact does it have on me? ”</div>

                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      It makes me feel terrible. It makes me think about giving up.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It makes me feel terrible. It makes me think about giving up.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      It doesn’t help.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It doesn’t help.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={jose1} />
                </div>
              </div>

            </>
          }



          {step === 5 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title"> He <i className="font-weight-extra-bold">changes</i>  his thought to:</div>
                    <div className="gloria-sub-text">“Everybody makes mistakes. I learned something important from this and I won’t make this mistake twice. Luckily nobody got hurt. I still do a good job, my coworkers treat me like value and need me here.”</div>
                  </BoardSubTitle>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={jose5} />
                </div>
              </div>

            </>
          }

          {step === 6 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Jose considers what action he can take.</div>

                  </BoardSubTitle>
                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-four">Sometimes the thought is accurate but it isn’t very helpful for us in the moment. In that situation, it can help to ask yourself - Is there something I can do about it to improve the situation?</p>
                  </BoardText>

                  <BoardSubTitle>
                    <div className="gloria-sub-text gloria-sub-text-step-seven">
                      “I can suggest a change in how the supplies are organized to avoid this mistake from happening again. I can alert other coworkers about this and be extra careful.”
                    </div>
                  </BoardSubTitle>

                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-seven">He notices he feels hopeful and he is no longer angry with himself.</div>

                  </BoardSubTitle>
                  <BoardText style={{ fontSize: 25 }}>
                    <p className="gloria-sub-title-text gloria-sub-title-text-three">Here are other examples of how to use this tool to flex your thinking.</p>
                    <div className="gloria-link"><span onClick={() => { props.setScreen(1); scrollTop() }} className="gloria-link-click text-underline">Click here</span> to see how another person might react differently to the same situation.</div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(4); scrollTop() }} className="gloria-link-click text-underline">Click here</span> to see an example of using the tool for <span className="font-weight-semi-bold">depression.</span> </div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(5); scrollTop() }} className="gloria-link-click text-underline">Click here</span> to see an example of using the tool for <span className="font-weight-semi-bold">trauma.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(6); scrollTop() }} className="gloria-link-click text-underline">Click here</span> to see an example of using the tool for <span className="font-weight-semi-bold">anxiety.</span></div>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img className="gloria-img-step-seven" alt={"img"} src={jose6} />
                </div>
              </div>

            </>
          }
        </Card>
      </div>


      <Grid direction="row" id="btn2" className={`${(step === 0 || step === 6) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 6) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 6) ? 12 : 6} justifyContent="flex-start">
          {step === 1 ?
            <CustomButton onClick={() => { props.setScreen(1); scrollTop(); }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1); scrollTop(); }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0 || step === 6) ? 12 : 5} xs={deviceSize > 0 && (step === 0 || step === 6) ? 12 : 6} justifyContent="flex-start">
          {step === 6 ?
            <CustomButton onClick={() => { props.startActivity(); scrollTop(); }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1); scrollTop(); }} color="#F19840">Next Step</CustomButton>}
        </Grid>
      </Grid >
      <div id="border" className="luke_border"></div>
      {/* <div className="row" style={{ marginTop: 20 }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 1 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 6 ?
            <CustomButton onClick={() => { props.startActivity() }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div>
      </div> */}
    </>
  );
};

export default MainBoard;
