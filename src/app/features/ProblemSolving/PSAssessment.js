import { Box, Card, Step, StepConnector, Grid, RadioGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import preopt from '../../shared/assets/images/add-input.svg'
import {
  BoardText,
  BoardSubTitle,
  StepperWrapper,
  // StepperDetails,
  FtTextField,
  FtTextArea,
  StepShower,
  StepContainer,
  NextIconWrapper,
  PrevIconWrapper,
  CardIconButton
} from './style';


import RadioWithColor from "app/tamComponents/radio-w";
import CustomButton from 'app/tamComponents/button';
import PopUp from './Popup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import luke8 from 'app/shared/assets/images/luke/luke8.svg';
import luke9 from 'app/shared/assets/images/luke/luke9.svg';
import luke10 from 'app/shared/assets/images/luke/luke10.svg';
import luke11 from 'app/shared/assets/images/luke/luke11.svg';
import luke12 from 'app/shared/assets/images/luke/luke12.svg';
import luke13 from 'app/shared/assets/images/luke/luke13.svg';
import luke14 from 'app/shared/assets/images/luke/luke14.svg';
import luke15 from 'app/shared/assets/images/luke/luke15.svg';
import luke16 from 'app/shared/assets/images/luke/luke16.svg';
import arrow from 'app/shared/assets/images/arrow.svg';

import * as PSService from "./toolDetailService";

// import op from '../../shared/assets/images/openAcc.svg'
// import cl from '../../shared/assets/images/closeAcc.svg'
import collapse_arrow from '../../shared/assets/images/collapse_arrow.svg'
import collapse_arrow_up from '../../shared/assets/images/collapse_arrow_up.svg'
import gray_collapse_arrow from '../../shared/assets/images/gray-collapse-arrow.svg'
// import gray_collapse_arrow_up from '../../shared/assets/images/gray-collapse-arrow-up.svg'
import TAMAlert from "app/tamComponents/alert/TAMAlert";

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

const FTAssessment = (props) => {
  const [step, setStep] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [syp, setSyp] = useState("")
  const [eyp, setEyp] = useState("")
  const [ideas, setIdeas] = useState(["", "", ""])
  const [prosCons, setProsCons] = useState([])
  const [psid, setPsid] = useState("")
  const [sug, setSug] = useState([""])
  const [solAct, setSolAct] = useState([])
  const [solveble, setSolvable] = useState(true)
  const [hintsOpen, setHintsOpen] = useState(false)
  const [tipsOpen, setTipsOpen] = useState(false)
  // const [exOpen, setExOpen] = useState(false)
  // const [exTwoOpen, setExTwoOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [exampleNumber, setExampleNumber] = useState(0);

  useEffect(() => {
    if (props.popUpStep === 3) {
      setShowPopup(true);
    }
  }, [props.popUpStep])


  const exampleCollapse = (value) => {
    if (value === exampleNumber) {
      setExampleNumber(0)
    }
    else {
      setExampleNumber(value)
    }
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

  function reStart() {
    console.log("dsfs")
    setStep(1)
    setShowPopup(false)
    setSyp("")
    setEyp("")
    setIdeas(["", "", ""])
    setProsCons([])
    setPsid("")
    setSug([""])
    setSolAct([])
  }
  function showError(msg) {
    setErrorOpen(true)
    setErrorMsg(msg)
    setTimeout(() => {
      setErrorOpen(false)
      setErrorMsg("")
    }, 5000)
  }
  useEffect(() => {
    PSService.getPendingForm().then((data) => {
      // console.log("result:", data.data.result)
      if (!!data.data.result) {
        let form = data.data.result
        setPsid(form.id)
        if (!form.step2) {
          setStep(2)
        } else if (!form.step3) {
          setStep(3)
        } else if (!form.step4) {
          let arr = []
          form.ideas.forEach((idea, i) => {
            let elem = {
              idea: idea,
              pro: "",
              con: ""
            }
            arr.push(elem)
          })
          setProsCons(arr)
          setStep(4)
        } else if (!form.step5) {
          let arr = []
          form.ideas.forEach((idea, i) => {
            let elem = {
              idea: idea,
              pro: form.pros[i] !== "-" ? form.pros[i] : "",
              con: form.cons[i] !== "-" ? form.cons[i] : ""
            }
            // console.log("elem", elem)
            arr.push(elem)
          })
          setProsCons(arr)
          setStep(5)
        } else if (!form.step6) {
          let arr = []
          form.solutions.forEach((sol, i) => {
            let data = {
              solution: sol,
              actions: [
                {
                  action: "",
                  who: "",
                  when: ""
                }
              ]
            }
            arr.push(data)
          })
          setSolAct(arr)
          let arr1 = []
          form.ideas.forEach((idea, i) => {
            let elem = {
              idea: idea,
              pro: form.pros[i] !== "-" ? form.pros[i] : "",
              con: form.cons[i] !== "-" ? form.cons[i] : ""
            }
            arr1.push(elem)
          })
          setProsCons(arr1)
          setStep(6)
        } else {
          // reStart()
        }

        if (!!form.specify_your_problem) {
          setSyp(form.specify_your_problem)
        }
        if (!!form.more_specific_your_problem) {
          setEyp(form.more_specific_your_problem)
        }
        if (!!form.ideas) {
          setIdeas(form.ideas)
        }
        if (!!form.solutions) {
          setSug(form.solutions)
        }
        if (!!props.step) {
          if (props.step === "zero") {
            reStart()
          } else {
            setStep(props.step)
          }
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function submitOne() {
    reStart()
    PSService.stepOne().then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setPsid(res.data.result.id);
        setStep(1);
      }
    })
  }


  function addAction(i) {
    let actions = solAct[i].actions
    let act = {
      action: "",
      who: "",
      when: ""
    }
    actions.push(act)
    let data = solAct
    data[i].actions = actions
    setSolAct([...data])
  }
  // function submitInitial() {
  //   let body = {
  //     "flexibleThinkingId": ftid,
  //     "feeling": moods_list[curMood],
  //     "distressScore": preDistress
  //   }
  //   PSService.stepInitialTwo(body).then((res) => {
  //     if (res.statusCode === 200 || res.statusCode === 201) {
  //       setStep(3)
  //     }
  //   })
  // }
  // function submitSecond() {
  //   let body = {
  //     "problemSolvingId": psid,
  //     "more_specific_your_problem": syp
  //   }
  //   PSService.stepTwo(body).then((res) => {
  //     if (res.statusCode === 200 || res.statusCode === 201) {
  //       setStep(3)
  //     }
  //   })
  // }

  function submitThird() {
    if (!eyp || eyp === "") {
      showError("Please specify your problem to move forward.")
      scrollBottom()
      return false
    }
    let body = {
      "problemSolvingId": psid,
      "more_specific_your_problem": eyp.trim()
    }
    PSService.stepTwo(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setEyp(eyp.trim())
        setStep(3)
      }
    })
  }

  function submitForth() {
    let ids = ideas.filter((id) => { return id.trim() !== "" })
    ids = ids.map(x => x.trim());
    if (ids.length === 0) {
      showError("Please come up with one idea to move forward.")
      scrollBottom()
      return false
    }
    let body = {
      "problemSolvingId": psid,
      "ideas": ids
    }
    PSService.stepThree(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        let arr = []
        setIdeas([...ids])
        ideas.forEach((idea, i) => {
          if (idea.trim() === "") {
            return false
          }
          let elem = {
            idea: idea.trim(),
            pro: "",
            con: ""
          }
          arr.push(elem)
        })
        setProsCons(arr)
        setStep(4)
      }
    })
  }

  function submitFifth() {
    let pros = prosCons.map((pc, i) => { return pc = pc.pro.trim() || "-" })
    let cons = prosCons.map((pc, i) => { return pc = pc.con.trim() || "-" })
    // console.log("procons", pros, cons)
    let body = {
      "problemSolvingId": psid,
      "pros": pros,
      "cons": cons
    }
    PSService.stepFour(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setStep(5)
        let prosConsTemp = prosCons.map((pc, i) => {
          pc.pro = pc.pro.trim();
          pc.con = pc.con.trim();

          return { ...pc, "pro": pc.pro, "con": pc.con };
        })
        setProsCons(prosConsTemp);
      }
    })
  }

  function submitSixth() {
    let sol = sug.filter((sg) => { return sg.trim() !== "" })
    sol.map(x => x.trim())
    if (sol.length === 0) {
      showError("Please add one or two solutions to proceed further.")
      scrollBottom()
      return false
    }
    let body = {
      "problemSolvingId": psid,
      "solutions": sol
    }
    PSService.stepFive(body).then(async (res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        let arr = []
        sug.forEach((sol, i) => {
          if (sol.trim() === "") {
            return false
          }
          let data = {
            solution: sol.trim(),
            actions: [
              {
                action: "",
                who: "",
                when: ""
              }
            ]
          }
          arr.push(data)
        });
        await setSug([...sol])
        setSolAct(arr)
        setStep(6)
      }
    })
  }
  function submitSeventh() {
    let sol_stp = []
    solAct.forEach((sol, i) => {
      // console.log(sol)
      let s = {
        solution: sol.solution,
        actions: sol.actions.map((ac) => { return ac = ac.action.trim() }),
        who: sol.actions.map((ac) => { return ac = ac.who.trim() }),
        when: sol.actions.map((ac) => { return ac = ac.when.trim() }),
      }
      sol_stp.push(s)
    })
    let body = {
      "problemSolvingId": psid,
      "problem": eyp,
      "solution_steps": sol_stp
    }
    PSService.stepSix(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        // props.setScreen(1)
        setShowPopup(true)
      }
    })
  }

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

  // const hideButtonAndScroll = () => {
  //   hideButton();
  //   scrollTop();
  // }

  const scrollTop = () => {
    var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  const scrollBottom = () => {
    var bottomScroll = document.getElementById("arrow_sticky_wrapper").offsetTop + document.getElementById("arrow_sticky_wrapper").offsetHeight - window.innerHeight + 80;
    // console.log(window.innerHeight, bottomScroll, document.getElementById("main-card").offsetTop, document.getElementById("main-card").offsetHeight, document.getElementById("main-card").offsetTop + document.getElementById("main-card").offsetHeight)
    document.body.scrollTop = bottomScroll;
    document.documentElement.scrollTop = bottomScroll;
  }

  useEffect(() => {
    scrollTop();
  }, [step]);

  // function isInViewport(element) {

  //   var elementTop = element?.offsetTop;
  //   var elementBottom = elementTop + element?.offsetHeight;

  //   // console.log("elementTop", elementTop, elementBottom)

  //   var viewportTop = window?.scrollY;
  //   var viewportBottom = viewportTop + window?.outerHeight;

  //   // console.log("viewportTop", viewportTop, viewportBottom)
  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };

  // console.log("solAct", solAct)


  return (
    <>
      {/* <Grid direction="row" id="btn1" className={`${(step === 0) && 'large_btn_luke'} luke_button luke_button_top`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1); }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1); }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 6 ?
            <CustomButton onClick={() => { submitSeventh(); }} color="#F19840">Next Step</CustomButton>
            // : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
            : <CustomButton onClick={() => { step === 0 ? submitOne() : step === 1 ? setStep(2) : step === 2 ? submitThird() : step === 3 ? submitForth() : step === 4 ? submitFifth() : step === 5 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </Grid>
      </Grid> */}
      <div className="luke_card_wrapper" id="arrow_sticky_wrapper">
        {step > 0 &&
          <>
            {/* <div className="arrow_main_wrapper_prev" id="prev-btn-wrapper" > */}
            <PrevIconWrapper onClick={() => { setStep(step - 1); }}>
              <img className="pre-arrrow" alt={"img"} src={arrow} />
            </PrevIconWrapper>
            {/* </div> */}
            <NextIconWrapper onClick={() => { step === 1 ? setStep(2) : step === 2 ? submitThird() : step === 3 ? submitForth() : step === 4 ? submitFifth() : step === 5 ? submitSixth() : step === 6 ? submitSeventh() : setStep(step + 1) }}>
            <img className="next-arrrow" alt={"img"} src={arrow} />
              </NextIconWrapper>
          </>
        }
        <Card className="luke_card" id="main-card" >
          {step > 0 && <Box className="problem_step">
            <StepContainer>
              <StepShower steps={6}>
                {Array.from({ length: 6 }, (_, i) => (<div className="step-number">{i + 1 === step && `Step ${step}`}</div>))}
              </StepShower>
              <StepperWrapper steps={6} activeStep={step} connector={<Connector />}>
                {Array.from({ length: 7 }, (_, i) => (<Step />))}

              </StepperWrapper>
            </StepContainer>
          </Box>}
          {step <= 0 && <>
            <div className="row example_step_one_row" >
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7" >
                <BoardSubTitle className="example_step_one_title">
                  Great! Is there a problem you would like to solve? {deviceSize === -1 && <br />} Click below to start your own problem-solving steps.
                </BoardSubTitle>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 example_img_col">
                <img className="example_step_one_img" alt={"img"} src={luke8} />
              </div>
            </div>
          </>}
          {step === 1 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text">
                  <BoardSubTitle className="step_two_title">
                    First, identify the problem in your mind.{deviceSize === -1 && <br />} Ask yourself "Is it a solvable problem?"

                  </BoardSubTitle>
                  {/* <RadioGroup aria-label="solvable" row name="solvable" style={{ fontSize: "px !important", color: "#0099BA" }} value={solveble} onChange={() => { setSolvable(!solveble) }}>
                  <FormControlLabel value={true} control={<Radio color="#0099BA" />} label="Yes" />
                  <FormControlLabel value={false} control={<Radio color="#0099BA" />} label="No" />
                </RadioGroup> */}



                  <RadioGroup className="example_radio"
                    aria-label="solvable"
                    name="solvable"
                    onChange={() => { setSolvable(!solveble) }}
                    value={solveble}
                    row>
                    <RadioWithColor
                      value={true}
                      color="#0099ba"
                      id="yes"
                      label={
                        <span className="c-db" >Yes</span>
                      }
                    />
                    <RadioWithColor
                      value={false}
                      color="#0099ba"
                      id="no"
                      label={
                        <span className="c-db" >No</span>
                      }
                    />
                  </RadioGroup>



                  {/* <BoardText style={{ marginTop: "10px", fontSize: "25px", fontFamily: "Source Sans Pro" }}>
                  Sometimes the issue is that we think we are trying to solve a problem but instead we are worrying about something where we have little control or something that only could or might happen.
                  This leads to anxiety and isn’t helpful.
                </BoardText> */}
                  <BoardSubTitle className={` ${hintsOpen && "step_one_collapse_open"} collapse_title`} onClick={() => { setHintsOpen(!hintsOpen) }} >
                    Here are some questions that can help.
                    <span className="arrow" style={{ float: "right" }}>{hintsOpen ?
                      <img className="down-arrow collapse_arrow_icon" src={collapse_arrow_up} alt={""} /> :
                      <img className="right-arrow collapse_arrow_icon" src={collapse_arrow} alt={""} />}</span>


                  </BoardSubTitle>
                  {hintsOpen && <>
                    <BoardText className="collapse_ul">
                      <ul className="step_ul">
                        <li>Is the problem happening now? </li>
                        <li>Is the problem something I have some control over?</li>
                      </ul>
                    </BoardText>
                    <BoardText className="step_one_text">
                      <p>
                        If the answer to those questions is yes, keep going. If the answer is no, other tools may be more helpful.
                        We recommend that considering the mindfulness, flexible thinking, or escaping the thinking loop skills.
                      </p>
                    </BoardText>
                    <BoardText className="step_gray_text exm_one_step_gray_text">
                      Examples of Solvable and Unsolvable problems:
                    </BoardText>
                  </>}



                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img">
                  <img className="luke_image" alt={"img"} src={luke9} />
                </div>
              </div>
              {hintsOpen &&
                <div className="">
                  <Grid className="solvable_unsolvable" container direction="row" item lg={9} md={12} sm={12} xs={12} >
                    <Grid className="solvable_unsolvable_col " item lg={7} md={6} sm={12} xs={12} justifyContent="flex-start">
                      <div className="solvable_unsolvable_title" >Solvable</div>

                      <ul className="step_ul">
                        <li>I have too much to do and can’t finish everything I need to get done</li>
                        <li>I had a fight with my partner</li>
                        <li>My child is acting out at school</li>
                        <li>Money is tight, and I have several bills to pay</li>
                      </ul>
                    </Grid>
                    <Grid className="solvable_unsolvable_col " item lg={5} md={6} sm={12} xs={12}>
                      <div className="solvable_unsolvable_title" >Unsolvable</div>


                      <ul className="step_ul">
                        <li>My relationship could fail </li>
                        <li>Interest rates might go up</li>
                        <li>I might get laid off</li>
                        <li>I might get sick</li>
                      </ul>
                    </Grid>
                  </Grid>
                </div>
              }
            </>
          }

          {step === 20 &&
            <>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9" >
                  <BoardSubTitle className="step_two_title">
                    What is the problem you are trying to solve?
                    Remember to be specific about your problem.
                  </BoardSubTitle>
                  <br />
                  <br />
                  <BoardText className="">
                    TIPS ON HOW BE SPECIFIC ABOUT THE PROBLEM YOU WANT TO SOLVE:
                  </BoardText>
                  <BoardText style={{ marginTop: "10px" }}>
                    <ul style={{ fontSize: "25px", color: "#0099BA", fontFamily: "Source Sans Pro" }}>
                      <li>A problem should be stated using concrete and specific terms. A problem well-stated is a problem half solved </li><br />
                      <li>It might feel like there is a large, overwhelming problem (e.g., “I hate my job”). The point of problem-solving is to break down that large, vague problem into smaller, specific problems to help tackle the larger problem</li><br />
                      <li>The description of the problem should be based on the facts, rather than your feelings about the issue  </li><br />
                      <li>Work on one problem at a time</li><br />
                    </ul>
                  </BoardText>
                  <br />
                  <BoardText style={{ fontSize: 18, color: "#A9BDC5", fontFamily: "Source Sans Pro", fontWeight: "bold" }}>
                    HERE ARE SOME EXAMPLES:
                  </BoardText>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <img alt={"img"} src={luke10} style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "100%" }} />
                </div>
              </div>
              <div className="row" style={{ marginTop: 20 }}>
                <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} style={{ paddingLeft: "10px" }}>
                  <Grid item lg={5} md={5} sm={6} xs={6} justifyContent="flex-start">
                    <span style={{ color: "#09425A", fontSize: "30px", fontWeight: "bold", paddingleft: "20px", fontFamily: "Source Sans Pro" }}>Non-specific</span>
                    <br />
                    <br />
                    <ul style={{ color: "#0099BA", fontSize: "25px", fontStyle: "italic", fontFamily: "Source Sans Pro" }}>
                      <li >“My partner never supports me”</li><br />
                      <li>“I hate my job”</li><br />
                      <li>“I feel bored”</li><br />
                      <li>“I am worried about my child”</li>
                    </ul>
                  </Grid>
                  <Grid item lg={7} md={7} sm={12} xs={12}>
                    <span style={{ color: "#09425A", fontSize: "25px", fontWeight: "bold", paddingLeft: "20px", fontFamily: "Source Sans Pro" }}>Specific</span>
                    <br />
                    <br />
                    <ul style={{ color: "#0099BA", fontSize: "25px", fontStyle: "italic", fontFamily: "Source Sans Pro" }}>
                      <li>“I need my partner to keep up their part of the household responsibilities”</li><br />
                      <li>“Working the third shift is really challenging”</li><br />
                      <li>“I want to have more interesting activities that I find enjoyable”</li><br />
                      <li>“My child is having a hard time studying for tests”</li>
                    </ul>
                  </Grid>
                </Grid>
              </div>
              <br />
              <BoardSubTitle style={{ fontSize: "35px", fontFamily: "Source Sans Pro", fontWeight: "bold" }}>
                Specify your problem
              </BoardSubTitle>
              <br />
              <br />
              <FtTextField
                // value=""
                value={syp}
                onChange={(e) => { setSyp(e.target.value) }}
                style={{ width: "100%" }} >
              </FtTextField>
            </>
          }
          {step === 2 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text exm_two_solving_text" >
                  <BoardSubTitle className="step_two_title" >
                    Is your problem specific?
                    If not specific enough, try to re-write the problem so it’s more specific.
                  </BoardSubTitle>
                  <BoardSubTitle className="example_text_area_title">
                    Specify your problem
                  </BoardSubTitle>
                  <FtTextArea className="example_text_area"
                    value={eyp}
                    rows={deviceSize > -1 ? 3 : 8}
                    onChange={(e) => { setEyp(e.target.value) }}
                    style={{ width: "100%" }} >
                  </FtTextArea>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img">
                  <img alt={"img"} className="luke_image" src={luke11} />
                </div>
              </div>

              <BoardSubTitle onClick={() => { setTipsOpen(!tipsOpen) }} className={`${tipsOpen && "collapse_border"} example_step_two_collapse collapse_title`}>
                Tips on how to be specific about the problem you want to solve:
                <span className="arrow" style={{ float: "right" }}>{tipsOpen ? <img className="down-arrow collapse_arrow_icon" src={collapse_arrow_up} alt={""} /> : <img className="right-arrow collapse_arrow_icon" src={collapse_arrow} alt={""} />}</span>

              </BoardSubTitle>
              {tipsOpen &&
                <>
                  <div className="row problem_solving_row example_two_image_row">
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 ">
                      <BoardText >
                        <ul className="step_ul">
                          <li>A problem should be stated using concrete and specific terms. A problem well-stated is a problem half solved </li>
                          <li>It might feel like there is a large, overwhelming problem (e.g., “I hate my job”). The point of problem-solving is to break down that large, vague problem into smaller, specific problems to help tackle the larger problem</li>
                          <li>The description of the problem should be based on the facts, rather than your feelings about the issue  </li>
                          <li>Work on one problem at a time</li>
                        </ul>
                      </BoardText>

                      <BoardText className="step_gray_text mb-0">
                        HERE ARE SOME EXAMPLES:
                      </BoardText>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 example_two_image_col ">
                      <img alt={"img"} className="example_two_image" src={luke10} />
                    </div>
                  </div>
                  <div className="" >
                    <Grid container direction="row" className="solvable_unsolvable  " item lg={10} md={12} sm={12} xs={12} >
                      <Grid item lg={5} md={5} sm={12} xs={12} className="solvable_unsolvable_col  " justifyContent="flex-start">
                        <div className="solvable_unsolvable_title">Non-specific</div>

                        <ul className="step_ul  cons_step_ul">
                          <li style={{ fontStyle: "italic" }}>“My partner never supports me”</li>
                          <li style={{ fontStyle: "italic" }}>“I hate my job”</li>
                          <li style={{ fontStyle: "italic" }}>“I feel bored”</li>
                          <li style={{ fontStyle: "italic" }}>“I am worried about my child”</li>
                        </ul>
                      </Grid>
                      <Grid item lg={7} md={7} sm={12} xs={12} className="solvable_unsolvable_col  ">
                        <div className="solvable_unsolvable_title">Specific</div>

                        <ul className="step_ul">
                          <li style={{ fontStyle: "italic" }}>“I need my partner to keep up their part of the household responsibilities”</li>
                          <li style={{ fontStyle: "italic" }}>“Working the third shift is really challenging”</li>
                          <li style={{ fontStyle: "italic" }}>“I want to have more interesting activities that I find enjoyable”</li>
                          <li style={{ fontStyle: "italic" }}>“My child is having a hard time studying for tests”</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </div>
                </>}
            </>
          }

          {step === 3 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6 problem_solving_text" >
                  <BoardSubTitle className="step_two_title">
                    Great. Now it's time to brainstorm for possible solutions.
                    This means coming up with as many ideas as possible, even if they may seem silly.
                    You can think of different ideas or use the space below to jot down ideas that come to mind.
                    Try to come up with at least three ideas.
                  </BoardSubTitle>


                  {/* <FtTextArea className="example_text_area"
                  value={eyp}
                  rows={deviceSize > -1 ? 3 : 8}
                  onChange={(e) => { setEyp(e.target.value) }}
                  style={{ width: "100%" }} >
                </FtTextArea> */}

                  {
                    ideas.map((th, i) => {
                      return <FtTextArea className="add_input_wrapper example_text_area example_text_area_step_three" placeholder="Idea " value={th} rows={1} style={{ width: "100%" }} onChange={(e) => { let data = [...ideas]; data[i] = e.target.value; setIdeas(data) }} />
                    })
                  }
                  <CardIconButton className="add_input_icon" onClick={() => { setIdeas(ideas => [...ideas, ""]) }}>
                    <img className="add_input_icon" alt={"img"} src={preopt} />
                  </CardIconButton>

                  {/* <img className="add_input_icon" onClick={() => { setIdeas(ideas => [...ideas, ""]) }} alt={"img"} src={preopt} /> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 problem_solving_img exm_step_three_img">
                  <img className="luke_image " alt={"img"} src={luke12} />
                </div>
              </div>

            </>
          }

          {step === 4 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text" >
                  <BoardSubTitle className="exm_four_step_two_title">
                    Now, let’s check out each of these ideas.
                    Think about the pros and cons associated with each one.
                    You can also jot them down in the fields below if you like.
                    See below for some questions to ask yourself as you evaluate each idea.
                    Write these down if it is helpful to remember.


                  </BoardSubTitle>
                  <BoardText className="exm_step_four_ul">
                    <ul className="step_ul">
                      <li>Does this solution address my immediate goal?    </li>
                      <li>Is this solution possible with the time and resources I have?</li>
                      <li>Does this solution create other problems?</li>
                      <li>What positive things come from using this solution?</li>
                      <li>What negative things come from using this solution?</li>
                    </ul>
                  </BoardText>
                  {/* <BoardText style={{ fontSize: 25 }}>
                  Does it help to say this to yourself? What impact does it have on me when I say this to myself?
                  
                </BoardText>
                {
                  impact.map((th, i) => {
                    return <FtTextField value={th} onChange={(e) => { let data = [...impact]; data[i] = e.target.value; setImpact(data) }} style={{ width: "100%" }} />
                  })
                }
                <img alt={"img"} src={preopt} onClick={() => { setImpact(impact => [...impact, ""]) }} style={{ width: 40, marginTop: 20, marginBottom: 20 }} /> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img">
                  <img className="luke_image " alt={"img"} src={luke13} />
                </div>
              </div>

              <div className="exm_step_four_pro_cons solvable_unsolvable " >
                <Grid container className="main_pro_con_res_row" direction="row" item lg={12} md={12} sm={12} xs={12} >
                  <Grid className="solvable_unsolvable_col idea_text_res" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                    <div className="solvable_unsolvable_title ">Ideas</div>
                  </Grid>
                  <Grid className="solvable_unsolvable_col pro_con_desk_title" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                    <div className="solvable_unsolvable_title">Pros</div>
                  </Grid>
                  <Grid className="solvable_unsolvable_col pro_con_desk_title" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                    <div className="solvable_unsolvable_title">Cons</div>
                  </Grid>
                </Grid>

                {prosCons.map((pc, i) => {
                  return <>
                    <Grid container className="pro_con_res_row main_pro_con_res_row" direction="row" item lg={12} md={12} sm={12} xs={12} >
                      <Grid className="solvable_unsolvable_col pro_con_res_col pros_con_li_text" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                        <ul className="step_ul">
                          <li className="">{pc.idea}</li>
                        </ul>
                      </Grid>
                      <Grid className="solvable_unsolvable_col pro_con_res_col" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                        <div className="solvable_unsolvable_title pro_con_res">Pros</div>
                        <FtTextArea className="example_text_area_four " onChange={(e) => { let data = [...prosCons]; data[i].pro = e.target.value; setProsCons(data) }} value={pc.pro} />
                      </Grid>
                      <Grid className="solvable_unsolvable_col pro_con_res_col" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                        <div className="solvable_unsolvable_title pro_con_res">Cons</div>
                        <FtTextArea className=" example_text_area_four " onChange={(e) => { let data = [...prosCons]; data[i].con = e.target.value; setProsCons(data) }} value={pc.con} />
                      </Grid>
                    </Grid>
                  </>
                })}
              </div>
            </>
          }

          {step === 5 &&
            <>
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-6 problem_solving_text" >
                  <BoardSubTitle className="exm_four_step_two_title">
                    Take some time to review the pros and cons of each solution.
                    Once you’ve done that, think of 1-2 solutions you want to try.
                    You can enter them in the field below if you like.

                  </BoardSubTitle>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 problem_solving_img exm_luke_step_five_main">
                  <img className="exm_luke_image_step_five " alt={"img"} src={luke14} />
                </div>
              </div>
              <div className=""  >
                <div className="idea_pros_cons_main"  >

                  <Grid container className="" direction="row" item lg={12} md={12} sm={12} xs={12} >
                    <Grid className="solvable_unsolvable_col idea_text_res" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                      <div className="solvable_unsolvable_title pro_con_desk_title">Ideas</div>
                    </Grid>
                    <Grid className="solvable_unsolvable_col pro_con_desk_title" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                      <div className="solvable_unsolvable_title ">Pros</div>
                    </Grid>
                    <Grid className="solvable_unsolvable_col pro_con_desk_title" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                      <div className="solvable_unsolvable_title">Cons</div>
                    </Grid>
                  </Grid>

                  {prosCons.map((pc, i) => {
                    return <>
                      <Grid container className="pro_con_res_row pro_con_res_row_step_five" direction="row" item lg={12} md={12} sm={12} xs={12} >
                        <Grid className="solvable_unsolvable_col pro_con_res_col idea_wrapper flexible_pro_con_res_col flexible_idea_pros_cons" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                          <div className="solvable_unsolvable_title pro_con_res idea_main">Idea</div>
                          <ul className="step_ul pros_cons_ul_five" >
                            <li className="" >{pc.idea}</li>
                          </ul>
                        </Grid>
                        <Grid className="solvable_unsolvable_col pro_con_res_col flexible_pro_con_res_col flexible_idea_pros_cons" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                          <div className="solvable_unsolvable_title pro_con_res pros_cons_main">Pros</div>
                          <ul className="step_ul pros_step_ul pros_cons_ul_five">
                            <li>{pc.pro || "-"}</li>
                          </ul>

                        </Grid>
                        <Grid className="solvable_unsolvable_col pro_con_res_col flexible_pro_con_res_col flexible_idea_pros_cons" item lg={4} md={4} sm={12} xs={12} justifyContent="flex-start">
                          <div className="solvable_unsolvable_title pro_con_res pros_cons_main">Cons</div>
                          <ul className="step_ul cons_step_ul pros_cons_ul_five">
                            <li>{pc.con || "-"}</li>
                          </ul>
                        </Grid>
                      </Grid>
                    </>
                  })}

                </div>


                {/* <Grid container direction="row" item lg={12} md={12} sm={12} xs={12} >
                <Grid item lg={4} md={4} sm={6} xs={6} justifyContent="flex-start">
                  <div>Ideas</div >
                  <ul >
                    {
                      prosCons.map((pc, i) => {
                        return <><li>{pc.idea}</li></>
                      })
                    }
                  </ul>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div>Pros</div >
                  <ul >
                    {
                      prosCons.map((pc, i) => {
                        return <><li>{pc.pro}</li></>
                      })
                    }
                  </ul>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div>Cons</div >
                  <ul style={{ color: "#753072", fontSize: "25px", fontFamily: "Source Sans Pro" }}>
                    {
                      prosCons.map((pc, i) => {
                        return <><li>{pc.con}</li></>
                      })
                    }
                  </ul>
                </Grid>
              </Grid> */}
                <Grid direction="row">
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <BoardSubTitle className="step_one_title">
                      Solutions to try
                    </BoardSubTitle>


                    {
                      sug.map((th, i) => {
                        return <FtTextArea placeholder="Solutions" className="add_input_wrapper example_text_area example_text_area_five example_text_area_step_three" value={th} onChange={(e) => { let data = [...sug]; data[i] = e.target.value; setSug(data) }} />
                      })
                    }

                    <CardIconButton className="add_input_icon" onClick={() => { setSug(sug => [...sug, ""]) }}>
                      <img className="add_input_icon" alt={"img"} src={preopt} />
                    </CardIconButton>
                    {/* <img className="add_input_icon" onClick={() => { setSug(sug => [...sug, ""]) }} alt={"img"} src={preopt} /> */}
                  </Grid>
                </Grid>
              </div>
            </>
          }

          {
            step === 6 &&
            <div className="exm_step_six">
              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 problem_solving_text">
                  <BoardSubTitle className="step_two_title">
                    List your action steps for the 1 or 2 solutions you picked,
                    who will be involved,
                    and when each step will happen.
                  </BoardSubTitle>


                  <BoardText >
                    <div className="exm_step_six_problem">Problem: </div>
                    <div className="luke_text"><p> {'"' + eyp + '"'}</p></div>
                  </BoardText>

                  {solAct.map((sol, i) => {
                    return <>
                      <div>
                        <BoardText >
                          <div className="exm_step_six_solution_text ">Solution {i + 1}:<br />  <span>{'"' + sol.solution + '"'}</span></div>
                        </BoardText>
                        {/* <div className="row" style={{ margin: 10 }}> */}
                        <Grid className="exm_step_six_main_wrapper" container direction="row" item lg={12} md={12} sm={12} xs={12} >

                          {deviceSize < 0 ?
                            <>

                              <Grid className="solution_types" item lg={12} md={12} sm={12} xs={12}>
                                <Grid container className="main_pro_con_res_row" direction="row" item lg={12} md={12} sm={12} xs={12} >
                                  <Grid className="solution_types" item lg={6} md={6} sm={12} xs={12}>
                                    <div className="exm_step_six_problem ">Action Step</div>
                                  </Grid>
                                  <Grid className="solution_types" item lg={3} md={3} sm={12} xs={12}>
                                    <div className="exm_step_six_problem">Who</div>
                                  </Grid>
                                  <Grid className="solution_types" item lg={3} md={3} sm={12} xs={12}>
                                    <div className="exm_step_six_problem">When</div>
                                  </Grid>
                                </Grid>

                                {sol.actions.map((ac, j) => {
                                  return <>
                                    <Grid container className="pro_con_res_row main_pro_con_res_row" direction="row" item lg={12} md={12} sm={12} xs={12} >
                                      <Grid className="solution_types" item lg={6} md={6} sm={12} xs={12}>
                                        <FtTextArea className="exm_step_six_add_input_wrapper" onChange={(e) => { let data = [...solAct]; data[i].actions[j].action = e.target.value; setSolAct(data) }} defaultValue={ac.action} />
                                      </Grid>
                                      <Grid className="solution_types" item lg={3} md={3} sm={12} xs={12}>
                                        <FtTextArea className="exm_step_six_add_input_wrapper" onChange={(e) => { let data = [...solAct]; data[i].actions[j].who = e.target.value; setSolAct(data) }} defaultValue={ac.who} />
                                      </Grid>
                                      <Grid className="solution_types" item lg={3} md={3} sm={12} xs={12}>
                                        <FtTextArea className="exm_step_six_add_input_wrapper" onChange={(e) => { let data = [...solAct]; data[i].actions[j].when = e.target.value; setSolAct(data) }} defaultValue={ac.when} />
                                      </Grid>
                                    </Grid>
                                  </>
                                })}
                              </Grid>


                            </>

                            : <>
                              {sol.actions.map((ac, j) =>
                                <div className="exm_step_six_main_form">
                                  <div className="exm_step_six_problem">Action Step</div>
                                  <FtTextArea className="exm_step_six_add_input_wrapper" onChange={(e) => { let data = [...solAct]; data[i].actions[j].action = e.target.value; setSolAct(data) }} defaultValue={ac.action} />
                                  <div className="exm_step_six_problem">Who</div>
                                  <FtTextArea className="exm_step_six_add_input_wrapper" onChange={(e) => { let data = [...solAct]; data[i].actions[j].who = e.target.value; setSolAct(data) }} defaultValue={ac.who} />
                                  <div className="exm_step_six_problem">When</div>
                                  <FtTextArea className="exm_step_six_add_input_wrapper" onChange={(e) => { let data = [...solAct]; data[i].actions[j].when = e.target.value; setSolAct(data) }} defaultValue={ac.when} />
                                  <div className="exm_step_six_main_form_border"></div>
                                </div>
                              )}


                            </>
                          }

                        </Grid>
                        <CardIconButton className="add_input_icon" onClick={() => { addAction(i) }} alt={"img"}>
                          <img className="add_input_icon" alt={"img"} src={preopt} />
                        </CardIconButton>
                        {/* <img className="add_input_icon" onClick={() => { addAction(i) }} alt={"img"} src={preopt} /> */}

                        {/* </div> */}
                      </div>
                    </>
                  })}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 problem_solving_img col-lg-4 luke_image_six">
                  <img alt={"img"} src={luke16} className="luke_image " />
                </div>
              </div>


              <div className="row problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 problem_solving_text six_step_title" >
                  <BoardSubTitle className="step_two_title">
                    {/* The next step is to list your action steps for the 1 or 2 solutions you picked,
                  who will be involved, and when each step will happen. If you get stuck,
                  try to break the solutions into smaller pieces. */}
                    Great job! It may help to add these action steps to your calendar to remind you to get started with the solution you found
                    <br />
                    <br />
                    {/* Apply these steps to a new problem */}
                    The examples below may help you come up with a specific plan
                  </BoardSubTitle>
                  <BoardText className="here_exm_text step_one_collapse_open" onClick={() => { exampleCollapse(1) }}>
                    HERE IS AN EXAMPLE:
                    <img src={gray_collapse_arrow} className={`${exampleNumber === 1 ? "open_collapse" : "collapse_arrow_main"}`} alt="gray_collapse_arrow" />
                  </BoardText>

                  {exampleNumber === 1 &&
                    <div className="exm_six_table">
                      <BoardText >
                        <div className="exm_step_collapse_sol_text">Problem: <br /> <span> “I want to have more regular connection with with friends and family” </span> </div>

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
                              <TableCell>I can reach out to my family and friends more often</TableCell>
                              <TableCell className="bottom-border">Call my best friend to catch up</TableCell>
                              <TableCell className="bottom-border">My friend and I</TableCell>
                              <TableCell className="bottom-border">This evening</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="bottom-border"></TableCell>
                              <TableCell className="bottom-border">I can text my sister to see about getting together</TableCell>
                              <TableCell className="bottom-border">My sister and I</TableCell>
                              <TableCell className="bottom-border">This weekend</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>I can set up some regular scheduled activities so I don’t have to put as much effort into social activities</TableCell>
                              <TableCell>I can respond to my neighbor who wanted a regular walking date</TableCell>
                              <TableCell className="bottom-border">My neighbor and I</TableCell>
                              <TableCell className="bottom-border">Tomorrow</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell ></TableCell>
                              <TableCell>I can reach out to some friends about setting up a regular weekly game night.</TableCell>
                              <TableCell >Raj, Anna, Steven</TableCell>
                              <TableCell >Tuesday</TableCell>
                            </TableRow>

                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  }
                  <BoardText className={` ${exampleNumber === 2 && "step_one_collapse_open"} here_exm_text`} onClick={() => { exampleCollapse(2) }}>
                    HERE IS ANOTHER EXAMPLE:
                    <img src={gray_collapse_arrow} className={`${exampleNumber === 2 ? "open_collapse" : "collapse_arrow_main"}`} alt="gray_collapse_arrow" />
                  </BoardText>

                  {exampleNumber === 2 &&
                    <>
                      <BoardText >
                        <div className="exm_step_collapse_sol_text">Problem: <br /> <span> “Working the third shift is really challenging.” </span> </div>
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
                              <TableCell >I can restructure things to improve my sleep.</TableCell>
                              <TableCell className="bottom-border">Ask my partner to finish the remaining chores after 9pm so I can go to bed earlier</TableCell>
                              <TableCell className="bottom-border">Me and partner</TableCell>
                              <TableCell className="bottom-border">This evening</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell ></TableCell>
                              <TableCell className="bottom-border">I can use a regular bedtime routine to help with falling asleep</TableCell>
                              <TableCell className="bottom-border">Me</TableCell>
                              <TableCell className="bottom-border">This weekend</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell ></TableCell>
                              <TableCell >Buy an eye mask</TableCell>
                              <TableCell >Me</TableCell>
                              <TableCell >Tomorrow</TableCell>
                            </TableRow>

                          </TableBody>
                        </Table>
                      </TableContainer>
                    </>
                  }


                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 luke_image_six">
                  <img className="luke_image " alt={"img"} src={luke15} />
                </div>
              </div>



            </div>
          }

          {
            errorOpen && <TAMAlert
              kind={"error"}
              message={errorMsg}
            />
          }
        </Card >
      </div>
      {/* <div className="row" style={{ marginTop: 20 }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {step === 6 ?
            <CustomButton onClick={() => { submitSeventh() }} color="#F19840">Next Step</CustomButton>
            // : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
            : <CustomButton onClick={() => { step === 0 ? submitOne() : step === 1 ? setStep(2) : step === 2 ? submitThird() : step === 3 ? submitForth() : step === 4 ? submitFifth() : step === 5 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div>
      </div> */}




      <Grid direction="row" id="btn2" className={`${(step === 0) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 6 ?
            <CustomButton onClick={() => { submitSeventh() }} color="#F19840">Next Step</CustomButton>
            // : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
            : <CustomButton onClick={() => { step === 0 ? submitOne() : step === 1 ? setStep(2) : step === 2 ? submitThird() : step === 3 ? submitForth() : step === 4 ? submitFifth() : step === 5 ? submitSixth() : setStep(step + 1) }} color="#F19840">{step === 0 ? "Work on my problem" : "Next Step"}</CustomButton>}
        </Grid>
      </Grid >


      <div id="border" className="luke_border"></div>


      {
        showPopup &&
        <PopUp
          setPopUpStep={props.setPopUpStep}
          popUpStep={props.popUpStep}
          reStart={() => { submitOne() }}
          closePopup={() => { setShowPopup(false) }}
          setScreen={(id) => { props.setScreen(id) }}
          feedbackOpen={() => { props.feedbackOpen() }}
          toolDetail={props.toolDetail}
          updateRating={(val) => { props.updateRating(val) }} />
      }
    </>
  );
};

export default FTAssessment;
