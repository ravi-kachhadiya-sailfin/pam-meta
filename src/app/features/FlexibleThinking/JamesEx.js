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
import james1 from 'app/shared/assets/images/james/james1.svg';
import james2 from 'app/shared/assets/images/james/james2.svg';
import james3 from 'app/shared/assets/images/james/james3.svg';
import james4 from 'app/shared/assets/images/james/james4.svg';
import james5 from 'app/shared/assets/images/james/james5.svg';
import james6 from 'app/shared/assets/images/james/james6.svg';
import james7 from 'app/shared/assets/images/james/james7.svg';
import james8 from 'app/shared/assets/images/james/james8.svg';
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
                  <div className="gloria-text-title  mt-0 mb-0 mb-4">Trauma</div>
                </BoardSubTitle>
                <BoardText >
                  <p className="gloria-sub-title-text gloria-middle-text-two">For people who have been through a traumatic event, the way they make sense of the event can influence how they feel and how they make sense of other events. Let’s look at another example.</p>
                </BoardText>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img gloria-img-two">
                <img alt={"img"} src={james1} />
                <BoardText >
                  <p className="gloria-sub-title-text gloria-middle-text">For people who have been through a traumatic event, the way they make sense of the event can influence how they feel and how they make sense of other events. Let’s look at another example.</p>
                </BoardText>
              </div>
            </div>

          </>}
          {step === 1 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">James arrives at work. He walks back into the room where he lost a patient to COVID19. Although he has had other patients die, this one has really haunted him. As he steps into the room he is flooded by memories of what happened. He feels his heart start racing. He thinks back to that moment. He catches the thought </div>

                    <div className="gloria-sub-text">“I should have done more. I should have been able to save him. If I were better at my job, he would have made it.”</div>

                    <div className="gloria-text-title gloria-text-title-two mt-0 mb-0">He feels guilty</div>
                  </BoardSubTitle>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5  gloria-img">
                  <img alt={"img"} src={james2} style={{ marginLeft: "auto", marginRight: "auto", width: "75%", display: "block" }} />
                </div>
              </div>

            </>
          }

          {step === 2 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">He takes a step back and <i>checks</i> his thought:</div>
                  </BoardSubTitle>

                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-two">James checks the facts. What facts support this thought?</p>
                  </BoardText>

                  <ul className="gloria-step-ul">
                    <li>
                      My patient did die.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>My patient did die.</div> */}




                  <ul className="gloria-step-ul">
                    <li>

                      I had a lot of patients that day. I can't know for sure, but It is possible I missed something or didn’t respond fast enough.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ marginLeft: 5, fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I had a lot of patients that day. I can't know for sure, but It is possible I missed something or didn’t respond fast enough.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={james3} />
                </div>
              </div>

            </>
          }
          {step === 3 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title">Do any facts not support this thought?</div>

                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I’ve gone over the case again and again and can’t see what I missed.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I’ve gone over the case again and again and can’t see what I missed.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      Some patients do die, despite our best efforts.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Some patients do die, despite our best efforts.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      Many of my patients got better and were discharged.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Many of my patients got better and were discharged.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5  gloria-img">
                  <img alt={"img"} src={james4} />
                </div>
              </div>

            </>
          }

          {step === 4 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text" >
                  <BoardSubTitle>
                    <div className="gloria-text-title">James shifts his perspective:</div>

                    <div className="gloria-sub-text">“Is there other information that I should consider? Are there other ways of looking at it?”</div>
                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      It is sad to lose a young patient. It doesn’t always mean that it was the provider’s error.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It is sad to lose a young patient. It doesn’t always mean that it was the provider’s error.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      This is a deadly disease. Sometimes, the disease beats our best efforts to save people.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>This is a deadly disease. Sometimes, the disease beats our best efforts to save people.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={james1} />
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
                      I’d tell my friend that I don’t see a clinical error based on their description. I’d tell them that they did their very best to save this patient.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I’d tell my friend that I don’t see a clinical error based on their description. I’d tell them that they did their very best to save this patient.</div> */}


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={james5} />
                </div>
              </div>

            </>
          }

          {step === 6 &&
            <>
              <div className="row  gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text">
                  <BoardSubTitle>
                    <div className="gloria-text-title"> James looks to see if it is a helpful thought. </div>

                    <div className="gloria-sub-text">“Does it help to talk to myself this way? What impact does it have on me?”</div>
                  </BoardSubTitle>


                  <ul className="gloria-step-ul">

                    <li>
                      It is not helpful to beat myself up about this case. It makes it harder to focus on my current cases.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>It is not helpful to beat myself up about this case. It makes it harder to focus on my current cases.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      In some ways, it is easier to beat myself up than feel sad. Grief is normal. I will feel better in the long term if I let myself feel instead of avoiding the reality.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>In some ways, it is easier to beat myself up than feel sad. Grief is normal. I will feel better in the long term if I let myself feel instead of avoiding the reality.</div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={james6} />
                </div>
              </div>

            </>
          }

          {step === 7 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text" >
                  <BoardSubTitle>
                    <div className="gloria-text-title">James <i className="font-weight-extra-bold">changes</i> what he says to himself:</div>

                  </BoardSubTitle>

                  <ul className="gloria-step-ul">
                    <li>
                      I wish I could have saved him, but I didn’t let him and his family down.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I wish I could have saved him, but I didn’t let him and his family down.</div> */}


                  <ul className="gloria-step-ul">
                    <li>
                      Sometimes we do the best we can, and still lose patients. It doesn’t mean I made a mistake or am bad at my job.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>Sometimes we do the best we can, and still lose patients. It doesn’t mean I made a mistake or am bad at my job.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      There were a lot of other eyes on this patient. They didn’t catch anything either.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>There were a lot of other eyes on this patient. They didn’t catch anything either.</div> */}



                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img alt={"img"} src={james7} />
                </div>
              </div>

            </>
          }

          {step === 8 &&
            <>
              <div className="row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text" >
                  <BoardSubTitle>
                    <div className="gloria-text-title">He considers what action he can take.</div>

                  </BoardSubTitle>
                  <BoardText >
                    <p className="gloria-sub-title-text gloria-sub-title-text-four">Sometimes the thought is accurate but it isn’t very helpful for us in the moment. In that situation, it can help to ask yourself - "Is there something I can do to improve the situation?" </p>
                  </BoardText>


                  <ul className="gloria-step-ul">
                    <li>
                      I could do something to honor him and the other people that we lost.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I could do something to honor him and the other people that we lost.</div> */}



                  <ul className="gloria-step-ul">
                    <li>
                      I can talk with my co-workers about how I feel. We can support each other because I know they sometimes feel this way too.
                    </li>
                  </ul>
                  {/* <div className="col-xs-1 col-sm-2 col-md-1 col-lg-1"><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b></div> */}
                  {/* <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ fontSize: 25, fontWeight: 'bold', color: "#0099BA", paddingTop: "22px" }}>I can talk with my co-workers about how I feel. We can support each other because I know they sometimes feel this way too.</div> */}


                  <BoardSubTitle>
                    <div className="gloria-text-title gloria-text-title-seven">He notices he feels calmer and less guilty.</div>

                  </BoardSubTitle>
                  <BoardText >

                    <p className="gloria-sub-title-text gloria-sub-title-text-three">Here are other examples of how to use this tool to flex your thinking.</p>

                    <div className="gloria-link"><span onClick={() => { props.setScreen(1); scrollTop() }} className="gloria-link-click text-underline">Click here</span>  to see how another person might react differently to the same situation.</div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(4); scrollTop() }} className="gloria-link-click text-underline">Click here  </span> to see an example of using the tool for <span className="font-weight-semi-bold">depression.</span> </div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(5); scrollTop() }} className="gloria-link-click text-underline">Click here </span> to see an example of using the tool for <span className="font-weight-semi-bold">trauma.</span></div>
                    <div className="gloria-link"> <span onClick={() => { props.setScreen(6); scrollTop() }} className="gloria-link-click text-underline">Click here </span> to see an example of using the tool for <span className="font-weight-semi-bold">anxiety.</span></div>
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img">
                  <img className="gloria-img-step-seven" alt={"img"} src={james8} />
                </div>
              </div>

            </>
          }
        </Card>
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
    </>
  );
};

export default MainBoard;
