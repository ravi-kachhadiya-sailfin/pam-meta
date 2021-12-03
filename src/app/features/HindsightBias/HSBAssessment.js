import { Box, Card, Grid, Step, StepConnector } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TAMAlert from "app/tamComponents/alert/TAMAlert";
// import preopt from 'app/shared/assets/images/add-input.svg'

import { NormalSubTitle, HindsightBiasAssesmentContainer } from 'app/features/HindsightBias/HindsightBias.style';
import collapse_arrow from '../../shared/assets/images/collapse_arrow.svg'
import collapse_arrow_up from '../../shared/assets/images/collapse_arrow_up.svg'

import { RadioGroup } from "@material-ui/core";
import RadioWithColor from "app/tamComponents/radio-w";

import {
  BoardText,
  BoardSubTitle,
  StepperWrapper,
  // FtTextField,
  // SliderWrapper,
  // ScrollWrapper,

  // ToolTipEffect,
  // ToolTipTitle,
  StepShower,
  StepContainer,
  NextIconWrapper,
  FtTextArea,
  PrevIconWrapper,
  // CardIconButton,
} from 'app/features/ProblemSolving/style';
import {
  CardContentWrapper,
  CardsWrapper,
} from "app/tamComponents/cards/Cards.styles";
import CustomButton from 'app/tamComponents/button';
import PriOption from 'app/features/FlexibleThinking/PriOption';
// import PopUp from './Popup';
// import ft1 from 'app/shared/assets/images/tools/ft1.svg';
import HBStep1 from 'app/shared/assets/images/HindsightBias/HB_step_1.svg';
import HBStep2 from 'app/shared/assets/images/HindsightBias/HB_step_2.svg';
import HBStep3 from 'app/shared/assets/images/HindsightBias/HB_step_3.svg';
import HBStepBottom from 'app/shared/assets/images/HindsightBias/HB_step_4_bottom.svg';
import HBStep4Top from 'app/shared/assets/images/HindsightBias/HB_step_4_top.svg';
import HBStep5 from 'app/shared/assets/images/HindsightBias/HB_step_5.svg';
import HBStep6 from 'app/shared/assets/images/HindsightBias/HB_step_6.svg';
import HBStep7 from 'app/shared/assets/images/HindsightBias/HB_step_7.svg';
import HBStep7Accordion from 'app/shared/assets/images/HindsightBias/HB_step_7_accordion.svg';


// import ft3 from 'app/shared/assets/images/gloria/gloria1.svg';
// import ft4 from 'app/shared/assets/images/tools/ft2.svg';
// import ft5 from 'app/shared/assets/images/james/james6.svg';
// import ft6 from 'app/shared/assets/images/alyssa/alyssa6.svg';
// import ft7 from 'app/shared/assets/images/gloria/gloria3.svg';
// import MultiReactionCard from "app/tamComponents/cards/MultiReactionCard";
import TAMSlider from "app/tamComponents/slider/Slider";
import arrow from 'app/shared/assets/images/arrow.svg';
import CheckBox from 'app/tamComponents/CustomCheckBox';
// import * as FTService from "./HindsightBiasServices";

import { throttle } from 'lodash';
import { getDeviceSize } from 'app/shared/Utils/index';
import { HBInitialStep } from 'app/shared/assets/images/HindsightBias';

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
// const ctArray = [
//   "I mess everything up",
//   "Everything will go wrong",
//   "They never listen to me",
//   "This isn’t fair",
//   "They don’t care about how I feel or what happens to me",
//   "There’s no point in doing this",
//   "I’m not being a good[parent, coworker, friend]",
//   "I’ll never be able to do this",
//   "I suck",
//   "It’s all my fault",
//   "I can’t manage this work",
//   "It’s all [someone else’s] fault",
//   "I can’t trust my judgment",
// ]

const acArray = [
  "I did the best I could in a difficult situation",
  "I may have avoided a worse outcome through my actions or decisions",
  "What happened wasn't my fault",
  "Other people or factors contributed to the outcome, maybe even more than I did",
  "I couldn't have predicted what would happen",
  "It was an accident, I didn't intend the outcome",
  "What I did was reasonable and made sense with the information and resources I had at the time",
]
// const moods_list = {
//   "happy": 6,
//   "content": 5,
//   "sad": 1,
//   "afraid": 2,
//   "guilty": 3,
//   "angry": 7,
//   "worried": 2,
//   "stressed": 4,
//   "grieving": 8,
//   "not_sure": 9
// }
const HSBAssesment = ({ startAgainBtn, setStartAgainBtn, ...props }) => {
  const [step, setStep] = useState(1)
  // const [fstt, setFstt] = useState([""])
  // const [fsnt, setFsnt] = useState([""])
  // const [sper, setSper] = useState(["", "", ""])
  // const [impact, setImpact] = useState(["", ""])
  // const [upseting, setUpsating] = useState("")
  const [happen, setHappen] = useState("")
  // const [ftid, setFtid] = useState("")
  const [diffWay, setDiffWay] = useState("")
  // const [curMood, setCurMood] = useState("happy")
  const [preDistress, setPreDistress] = useState(0)
  // const [postMood, setPostMood] = useState("happy")
  const [postDistress, setPostDistress] = useState(0)
  // const [showPopup, setShowPopup] = useState(false)
  const [errorOpen,] = useState(false)
  const [errorMsg,] = useState("")
  const [hintsOpen, setHintsOpen] = useState(false)

  const believeOptions = [
    { text: "Not at all", value: '1' },
    { text: "A little", value: '2' },
    { text: "Somewhat/a medium amount", value: '3' },
    { text: "Completely", value: '4' },
  ];

  const nomralOptions = [
    { text: "Yes", value: '1' },
    { text: "No", value: '2' },
    { text: "Maybe", value: '3' },
  ];

  const booleanOptions = [
    { text: "Yes", value: '1' },
    { text: "No", value: '2' },
  ];

  const step6Options = [
    { text: "Knowledge", value: '1' },
    { text: "Ability", value: '2' },
    { text: "Tools", value: '3' },
    { text: "Time", value: '4' },
    { text: "Authority/Pemission", value: '5' },
    { text: "Other", value: '6' },
  ];

  const roleOptions = [
    { text: "A supervisor", value: '1' },
    { text: "Another team member", value: '2' },
    { text: "It was an established protocol or something I was trained to do in a situation like this.", value: '3' },
    { text: "An agency", value: '4' },
    { text: "A perpetrator of a crime", value: '5' },
    { text: "Someone else", value: '6' },
  ];


  // function reStart() {
  //   setStep(1)
  //   setFstt([""])
  //   setFsnt([""])
  //   setSper(["", "", ""])
  //   setImpact(["", "", ""])
  //   setUpsating("")
  //   setHappen("")
  //   setFtid("")
  //   setDiffWay("")
  //   setCurMood("happy")
  //   setPreDistress(0)
  //   setPostMood("happy")
  //   setPostDistress(0)
  //   setShowPopup(false)
  // }
  useEffect(() => {
    console.log("----")
    // FTService.getPendingForm().then((data) => {
    //   if (!!data.data.result) {
    //     let form = data.data.result
    //     console.log("form", form)
    //     setStartAgainBtn(true);
    //     setFtid(form.id)
    //     if (!form.step1) {
    //       setStep(1)
    //     } else if (!form.step2) {
    //       setStep(2)
    //     } else if (!form.step3) {
    //       setStep(4)
    //     } else if (!form.step4) {
    //       setStep(5)
    //     } else if (!form.step5) {
    //       setStep(6)
    //     } else if (!form.step6) {
    //       setStep(7)
    //     }
    //     if (!!form.what_happened) {
    //       setHappen(form.what_happened.trim())
    //     }
    //     if (!!form.what_did_you_say_to_yourself) {
    //       setUpsating(form.what_did_you_say_to_yourself)
    //     }
    //     if (!!form.what_facts_support_this_thought) {
    //       setFstt(form.what_facts_support_this_thought)
    //     }
    //     if (!!form.do_any_facts_not_support_this_thought) {
    //       setFsnt(form.do_any_facts_not_support_this_thought)
    //     }
    //     if (!!form.shift_perspective) {
    //       setSper(form.shift_perspective)
    //     }
    //     if (!!form.is_it_a_helpful_thought) {
    //       setImpact(form.is_it_a_helpful_thought)
    //     }
    //     if (!!form.diﬀerent_way_of_looking_more_helpful) {
    //       setDiffWay(form.diﬀerent_way_of_looking_more_helpful)
    //     }
    //   }
    // })
  }, [setStartAgainBtn])

  // useEffect(() => {
  //   if (!startAgainBtn) {
  //     setHappen("")
  //     setUpsating("")
  //     setFstt([""])
  //     setFsnt([""])
  //     setSper(["", "", ""])
  //     setImpact(["", ""])
  //     setDiffWay("")
  //     setStep(0);
  //   }
  // }, [startAgainBtn])

  // function showError(msg) {
  //   setErrorOpen(true)
  //   setErrorMsg(msg)
  //   setTimeout(() => {
  //     setErrorOpen(false)
  //     setErrorMsg("")
  //   }, 5000)
  // }
  function submitOne() {
    // if (!happen || happen === "") {
    //   showError("Tell us “What happened” in the form above?")
    //   scrollBottom()
    //   return false
    // }
    // if (!upseting || upseting === "") {
    //   showError("Please enter your changed thought or select from the above examples.")
    //   scrollBottom()
    //   return false
    // }
    // let body = {
    //   "toolId": props.toolId,
    //   "what_happened": happen.trim(),
    //   "what_did_you_say_to_yourself": upseting.trim()
    // }
    // FTService.stepOne(body).then((res) => {
    //   if (res.statusCode === 200 || res.statusCode === 201) {
    //     setFtid(res.data.result.id);
    setStep(2)
    //   }
    // })
  }
  function submitInitial() {
    // let body = {
    //   "flexibleThinkingId": ftid,
    //   "feeling": moods_list[curMood],
    //   "distressScore": preDistress
    // }
    // FTService.stepInitialTwo(body).then((res) => {
    //   if (res.statusCode === 200 || res.statusCode === 201) {
    setStep(3)
    //   }
    // })
  }
  function submitSecond() {
    // let body = {
    //   "flexibleThinkingId": ftid,
    //   "what_facts_support_this_thought": fstt.map(x => x.trim()),
    //   "do_any_facts_not_support_this_thought": fsnt.map(x => x.trim()),
    // }
    // FTService.stepTwo(body).then((res) => {
    //   if (res.statusCode === 200 || res.statusCode === 201) {
    setStep(4)
    //   }
    // })
  }

  function submitThird() {
    // let body = {
    //   "flexibleThinkingId": ftid,
    //   "shift_perspective": sper.map(x => x.trim()),
    // }
    // FTService.stepThree(body).then((res) => {
    //   if (res.statusCode === 200 || res.statusCode === 201) {
    setStep(5)
    //   }
    // })
  }

  function submitForth() {
    // let body = {
    //   "flexibleThinkingId": ftid,
    //   "is_it_a_helpful_thought": impact.map(x => x.trim()),
    // }
    // FTService.stepFour(body).then((res) => {
    //   if (res.statusCode === 200 || res.statusCode === 201) {
    setStep(6)
    //   }
    // })
  }

  function submitFifth() {
    // if (!diffWay || diffWay === "") {
    //   showError("What’s your different prospective of looking at this situation?")
    //   scrollBottom()
    //   return false
    // }
    // let body = {
    //   "flexibleThinkingId": ftid,
    //   "looking_more_helpful": diffWay.trim()
    // }
    // FTService.stepFive(body).then((res) => {
    //   if (res.statusCode === 200 || res.statusCode === 201) {
    setStep(7)
    //   }
    // })
  }

  function submitSixth() {
    // let body = {
    //   "flexibleThinkingId": ftid,
    //   "feeling": moods_list[postMood],
    //   "distressScore": postDistress
    // }
    // FTService.stepSix(body).then((res) => {
    //   if (res.statusCode === 200 || res.statusCode === 201) {
    //     // props.setScreen(1)
    //     // alert("completed")
    //     setShowPopup(true)
    //   }
    // })
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

  useEffect(() => {
    scrollTop();
  }, [step]);

  function scrollTop(textArea = false, id) {
    var topScroll;
    console.log(textArea, id);
    if (textArea) {
      //  // //document.getElementById(id).scrollIntoView();

      const yOffset = -20;
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

  // const scrollBottom = () => {
  //   var bottomScroll = document.getElementById("arrow_sticky_wrapper").offsetTop + document.getElementById("arrow_sticky_wrapper").offsetHeight - window.innerHeight + 80;
  //   // console.log(window.innerHeight, bottomScroll, document.getElementById("main-card").offsetTop, document.getElementById("main-card").offsetHeight, document.getElementById("main-card").offsetTop + document.getElementById("main-card").offsetHeight)
  //   document.body.scrollTop = bottomScroll;
  //   document.documentElement.scrollTop = bottomScroll;
  // }


  // function isInViewport(element) {

  //   var elementTop = element?.offsetTop;
  //   var elementBottom = elementTop + element?.offsetHeight;

  //   // console.log("elementTop", elementTop, elementBottom)

  //   var viewportTop = window?.scrollY;
  //   var viewportBottom = viewportTop + window?.innerHeight;

  //   // console.log("viewportTop", element.id, elementBottom > viewportTop && elementTop < viewportBottom)
  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };

  // function isTouchTop(element) {

  //   var elementTop = element?.offsetTop;
  //   var elementBottom = elementTop + element?.offsetHeight;

  //   // console.log("elementTop", elementTop, elementBottom)

  //   var viewportTop = window?.scrollY;
  //   var viewportBottom = viewportTop + window?.innerHeight;

  //   // console.log("viewportTop", element.id, elementBottom > viewportTop && elementTop < viewportBottom)
  //   return viewportTop > elementTop + 250;
  // };

  // window.addEventListener('scroll', function () {
  //   let navbar, sticky;
  //   if (document.getElementById("prev-btn-wrapper")) {
  //     navbar = document.getElementById("prev-btn-wrapper");
  //     sticky = navbar.offsetTop;
  //     // console.log("navbar", navbar, sticky)
  //   }
  //   // console.log("main-card:", isTouchTop(document.getElementById("arrow_sticky_wrapper")), isInViewport(document.getElementById("border")), isTouchTop(document.getElementById("arrow_sticky_wrapper")) && !isInViewport(document.getElementById("border")))
  //   if (isTouchTop(document.getElementById("arrow_sticky_wrapper")) && !isInViewport(document.getElementById("border"))) {
  //     document.getElementById("prev-btn").classList.add("arrow_sticky")
  //     document.getElementById("next-btn").classList.add("arrow_sticky_next")
  //     // document.getElementById("arrow-btn").classList.add("arrow_sticky_container");

  //   } else if (document.getElementById("prev-btn")) {
  //     document.getElementById("prev-btn").classList.remove("arrow_sticky");
  //     document.getElementById("next-btn").classList.remove("arrow_sticky_next")
  //     // document.getElementById("arrow-btn").classList.remove("arrow_sticky_container");

  //   }

  //   // console.log("btn", isInViewport(document.getElementById("border")))
  //   if (isInViewport(document.getElementById("border")) && document.getElementById("prev-btn") && document.getElementById("next-btn")) {
  //     // && document.getElementById("next-btn")
  //     document.getElementById("prev-btn").classList.remove("arrow_sticky");
  //     document.getElementById("next-btn").classList.remove("arrow_sticky_next");
  //     // document.getElementById("arrow-btn").classList.remove("arrow_sticky_container");
  //   }

  // });

  // const updateUpsetting = (txt) => {
  //   if (upseting) {
  //     console.log(upseting)
  //     if (upseting.split("")[diffWay.length - 1] === ".")
  //       setUpsating(upseting + " " + txt);
  //     else if (upseting.split("").slice(-2).join("") === ". ")
  //       setUpsating(upseting + txt);
  //     else
  //       setUpsating(upseting + ". " + txt);
  //   } else {
  //     setUpsating(txt)
  //   }
  // }

  const updateDiffWay = (txt) => {
    if (diffWay) {
      if (diffWay.split("")[diffWay.length - 1] === ".") {
        setDiffWay(diffWay + " " + txt.split("").slice(0, -1).join(""))
      }
      else if (diffWay.split("").slice(-2).join("") === ". ")
        setDiffWay(diffWay + txt.split("").slice(0, -1).join(""))
      else
        setDiffWay(diffWay + ". " + txt.split("").slice(0, -1).join(""))
    } else {
      setDiffWay(txt.split("").slice(0, -1).join(""))
    }
  }

  console.log(step, happen)

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
            <CustomButton onClick={() => { props.setScreen(1) }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div> */}
      {/* </div> */}

      <HindsightBiasAssesmentContainer className="luke_card_wrapper" id="arrow_sticky_wrapper">
        {step > 0 && <>
          {/* <div className="arrow_main_wrapper_prev" id="prev-btn-wrapper" > */}
          <PrevIconWrapper onClick={() => { setStep(step - 1); scrollTop(); }} id="prev-btn">
            <img className="pre-arrrow" alt={"img"} src={arrow} />
          </PrevIconWrapper>
          {/* </div> */}

          {step === 8 ?
            <NextIconWrapper id="next-btn" onClick={() => { props.setScreen(1) }} >
              <img className="next-arrrow" alt={"img"} src={arrow} />
            </NextIconWrapper>
            : <NextIconWrapper id="next-btn" onClick={() => { step === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }}>
              <img className="next-arrrow" alt={"img"} src={arrow} />
            </NextIconWrapper>

          }
        </>}

        <Card className={`luke_card ${step <= 0 && "home-luke-card"}`} id="main-card" >

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

          {step === 0 && <>
            <div className="row gloria-row gloria-center-row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 gloria-text gloria-text-two order-2">
                <NormalSubTitle className="mb-4">
                  Sometimes we find ourselves thinking back about a difficult event and wishing we had done something different. In the exercise below, you’ll walk through a series of questions to help you take a closer look at what happened, what you knew at the time, and what role you played. Try answering enough questions to look at the situation from a new angle to develop a new perspective. Some questions may not fit the situation you’re working on. In that case just skip them and move to the next one. If you find that you’ve gained a new, more balanced or helpful perspective after the first questions, that’s great! If you find that your belief hasn’t changed, keep going until you get to the end. Sometimes you may need to go through the questions more than once to be able to address strong feelings of guilt or self-blame.
                </NormalSubTitle>

                <NormalSubTitle>
                  If you find that you’ve gained a new, more balanced or helpful perspective after the first questions, that’s great! If you find that your belief hasn’t changed, keep going until you get to the end. Sometimes you may need to go through the questions more than once to be able to address strong feelings of guilt or self-blame.
                </NormalSubTitle>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 gloria-img gloria-img-two order-1">
                <img alt={"img"} src={HBInitialStep} className="step-main-image" />
              </div>
            </div>
          </>}
          {step === 1 &&
            <>
              <div className="row step_block_order problem_solving_row gloria-row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 problem_solving_text">
                  <BoardText className="luke_text step1-space">
                    <p>
                      Use this tool to help you think through this issue.
                    </p>
                  </BoardText>
                  <div className="exm_input_sub_text_title if_you_text">This data is saved for you to read again later <br className="br-visible" />but it is not shared. Your data is private.</div>

                  <BoardSubTitle className="step_two_title exm_flex_one lets-focus-space">
                    Let's focus on a situation
                  </BoardSubTitle>

                  <BoardText className="luke_text think-space">
                    <p>
                      Think of a situation where you second guessed something you did. It could be a situation where you felt guilty, where you blamed yourself, or where you thought you or someone else could or should have prevented a bad outcome.
                    </p>
                  </BoardText>

                  <BoardText >
                    <div className="exm_input_text_group">
                      <div className="exm_input_text_title">What happened?</div>
                    </div>
                  </BoardText>

                  <div className="exm_input_sub_text_title if_you_text">Try to stick with just the facts of what happened, not what <br className="br-visible" />you think you or someone else should have done differently.</div>

                  <FtTextArea className="textarea_bottom_space input-height " placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                  {/* <BoardText className="exm_input_text_title" >
                    Catch: What did you say to yourself? What thoughts were you having?
                  </BoardText>
                  <FtTextArea className="catch_textarea" placeholder="Type here..." id="step-one-text-area" onChange={(e) => { setUpsating(e.target.value) }} value={upseting} style={{ width: "100%" }} /> */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 problem_solving_img gloria-img">
                  <img className="step-first-image" alt={"img"} src={HBStep1} />
                </div>
              </div>
              {/* <div className="step_gray_text example_text">
                EXAMPLES OF COMMON THOUGHTS
              </div>
              <div className="if_you_text">
                If you are not sure, see if one or more of these thoughts might fit. You can select a thought and add them in automatically by clicking.
              </div> */}
              {/* <div className="row plus_ul_row" >
                {ctArray.map((dt) => {
                  return <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 example_listing_block_wrapper">
                    <PriOption text={dt} selectText={(txt) => { updateUpsetting(txt); scrollTop(true, "step-one-text-area") }} />
                  </div>
                })}
              </div> */}

            </>
          }

          {step === 2 &&
            <>
              <div className="row step_block_order problem_solving_row ">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 flexible_step_2_padding problem_solving_text">
                  <BoardSubTitle className="flex_home_card_title exm_two_title  exm_flex_one lets-focus-space">
                    Let's examine why it happened
                  </BoardSubTitle>

                  <BoardText className="luke_text step-2-bottom-space">
                    <p>
                      Next, type here why you think it happened. How do you explain what happened to yourself, or to others? What’s the story you tell yourself about why it happened?
                    </p>
                  </BoardText>

                  <FtTextArea className="textarea_bottom_space input-height" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  <div className="card-header">
                    <BoardText className="exm_two_sub_text add-bottom-space-radio">
                      How much do you believe this?
                    </BoardText>
                  </div>
                  <div className="radio-style">

                    <RadioGroup
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {believeOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>

                  <BoardText color="#0099BA" className="luke_text">
                    <p className="add-top-space-radio">
                      We tend to remember information that fits with what we believe now.
                    </p>
                  </BoardText>

                  <NormalSubTitle className="normal-text add-ratio-space">
                    Please rate your level of distress now that you've gone through this exercise.
                  </NormalSubTitle>

                  {/* <MultiReactionCard className="flexible_step_two_card"
                    number={""}
                    question={<BoardText className="exm_two_sub_text">
                      How did you feel when you said this to yourself?
                    </BoardText>}
                    description={""}
                    curMood={curMood}
                    updateMood={(mood) => { setCurMood(mood) }}
                    choices={[
                      "HAPPY",
                      "CONTENT",
                      "SAD",
                      "AFRAID",
                      "GUILTY",
                      "ANGERY",
                      "WORRIED",
                      "STRESSED",
                      "GRIEVING",
                      "NOT_SURE",
                    ]}
                  /> */}

                  <CardsWrapper
                    bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12 flexible_step_two_card"}
                  >
                    <CardContentWrapper className="slider_main_wrapper"
                      bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}
                    >
                      <TAMSlider distressScore={preDistress} sliderUpdate={(val) => { setPreDistress(val) }} />
                      <div className="slider_level">
                        <div className="slider_level_text">None</div>
                        <div className="slider_level_text">Moderate</div>
                        <div className="slider_level_text">Extreme</div>
                      </div>
                    </CardContentWrapper>
                  </CardsWrapper>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 exm_two_luke_image_wrapper problem_solving_img gloria-img">
                  <img className="luke_image  step-second-img" alt={"img"} src={HBStep2} />
                </div>
              </div>

            </>
          }
          {
            step === 3 &&
            <>
              <div className="row  step_block_order problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 problem_solving_text  flexible_padding">
                  <BoardSubTitle className="step_two_title exm_two_title  exm_flex_one lets-focus-space">
                    Let's look at what other options you may have had
                  </BoardSubTitle>

                  <BoardText className="luke_text step-2-bottom-space">
                    <p>
                      Based only on what you knew at the time, what do you think you could or should have done differently?
                    </p>
                  </BoardText>

                  <FtTextArea className="textarea_bottom_space input-height" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  <div className="card-header">
                    <BoardText className="exm_two_sub_text add-bottom-space-radio">
                      Was that really an option at the time?
                    </BoardText>

                  </div>
                  <div className="radio-style">
                    <RadioGroup
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>
                  <div className="card-header">
                    <BoardText className="exm_two_sub_text add-top-space-radio step3-space">
                      What made you decide to do what you did?
                    </BoardText>

                  </div>

                  <div className="card-header">
                    <BoardText className="exm_two_sub_text step-2-bottom-space whats-fact-space">
                      What factors did you consider?
                    </BoardText>

                  </div>

                  <FtTextArea className="textarea_bottom_space input-height " placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  {/*  {
                    fstt.map((th, i) => {
                      return <FtTextArea className="input_radius add_input_wrapper example_text_area example_text_area_five example_text_area_step_three" value={th} onChange={(e) => { let data = [...fstt]; data[i] = e.target.value; setFstt(data) }} style={{ width: "100%" }} />
                    })
                  }


                  <CardIconButton className="add_input_icon" onClick={() => { setFstt(fstt => [...fstt, ""]) }}>
                    <img className="add_input_icon" alt={"img"} src={preopt} />
                  </CardIconButton>
                  <div className="exm_three_input_group">
                    <BoardText className="exm_two_sub_text exm_three_input_group_text">
                      What facts do not support this thought?
                    </BoardText>
                    {
                      fsnt.map((th, i) => {
                        return <FtTextArea className="input_radius add_input_wrapper example_text_area example_text_area_five example_text_area_step_three" value={th} onChange={(e) => { let data = [...fsnt]; data[i] = e.target.value; setFsnt(data) }} style={{ width: "100%" }} />
                      })
                    }
                    <CardIconButton className="add_input_icon" onClick={() => { setFsnt(fsnt => [...fsnt, ""]) }}>
                      <img className="add_input_icon" alt={"img"} src={preopt} />
                    </CardIconButton>
                  </div> */}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 problem_solving_img  gloria-img">
                  <img className="luke_image step-three-img" alt={"img"} src={HBStep3} />
                </div>
              </div>
            </>
          }

          {
            step === 4 &&
            <>
              <div className="row step_block_order  problem_solving_row exm_five_wrapper">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 order_2 flexible_padding problem_solving_text">
                  <BoardSubTitle className="step_two_title exm_three_title lets-focus-space">
                    Let's explore why you took that option
                  </BoardSubTitle>

                  <BoardText className="luke_text step-2-bottom-space exm_two_sub_text ">
                    <p>
                      What information did you have at the time?
                    </p>
                  </BoardText>

                  <FtTextArea className="textarea_bottom_space input-height " placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  <BoardText className="luke_text">
                    <p>Did you have all of the information you have now?</p>
                  </BoardText>

                  <div className="radio-style">
                    <RadioGroup
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>

                  <BoardText className="luke_text">
                    <p> Are you basing your judgment on information you didn’t have at the time? </p>
                  </BoardText>

                  <div className="radio-style">
                    <RadioGroup className="add-bottom-space-radio"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>

                  <div className="card-header">
                    <BoardText fontWeight={600} className="exm_two_sub_text font-weight-semi-bold">
                      Think about how long you had to make a decision.
                    </BoardText>
                  </div>

                  <BoardText color="#0099BA" className="luke_text">
                    <p>Was that enough time to think through all the options?</p>
                  </BoardText>

                  <div className="radio-style">
                    <RadioGroup className="add-bottom-space-radio"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>

                  <BoardText className="luke_text">
                    <p>Did you have enough time to pick a different option? </p>
                  </BoardText>

                  <div className="radio-style">

                    <RadioGroup className="add-bottom-space-radio"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>

                  </div>
                  <div className="card-header">
                    <BoardText className="exm_two_sub_text font-weight-semi-bold mb-4">
                      What did you think would happen at the time?
                    </BoardText>
                  </div>

                  <FtTextArea className="textarea_bottom_space input-height" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  <div className="card-header">
                    <BoardText className="exm_two_sub_text font-weight-semi-bold">
                      What was your intent in doing what you did?
                    </BoardText>
                  </div>

                  <BoardText color="#0099BA" className="luke_text">
                    <p>(For intent think about what your goal or <br className="br-visible" />purpose was in the situation.)</p>
                  </BoardText>

                  <FtTextArea className="textarea_bottom_space input-height " placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                  <div className="card-header">
                    <BoardText className="exm_two_sub_text font-weight-semi-bold add-top-space-radio">
                      Had you ever done something or made a decision like that before and things turned out fine?
                    </BoardText>
                  </div>

                  <div className="radio-style">
                    <RadioGroup className="add-bottom-space-radio radio-space"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>

                  </div>
                  <div className="card-header">
                    <BoardText className="exm_two_sub_text font-weight-semi-bold add-top-space-radio">
                      Could something worse have happened if you had done something different?
                    </BoardText>
                  </div>


                  <div className="radio-style">
                    <RadioGroup className="add-bottom-space-radio radio-space"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>
                  <div className="card-header">
                    <BoardText color="#F19840" className="exm_two_sub_text font-weight-semi-bold">
                      Could the same outcome have happened, even if you had done something different?
                    </BoardText>
                  </div>

                  <div className="radio-style">
                    <RadioGroup className="add-bottom-space-radio radio-space"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {nomralOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>

                  <div className="card-header">
                    <BoardText color="#0099BA" className="exm_two_sub_text font-weight-semi-bold">
                      What was really in your control at that moment? Consider the facts.
                    </BoardText>
                  </div>



                  <FtTextArea className="textarea_bottom_space input-height textarea-top-space" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  {/* 
                  <div className="exm_three_input_group">
                    {
                      sper.map((th, i) => {
                        return <FtTextArea placeholder="Perspective" className="input_radius add_input_wrapper example_text_area example_text_area_five example_text_area_step_three" value={th} onChange={(e) => { let data = [...sper]; data[i] = e.target.value; setSper(data) }} style={{ width: "100%" }} />
                      })
                    }
                    <CardIconButton className="add_input_icon" onClick={() => { setSper(sper => [...sper, ""]) }}>
                      <img className="add_input_icon" alt={"img"} src={preopt} />
                    </CardIconButton>

                  </div> */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 order_1 problem_solving_img gloria-img">
                  <img className="luke_image step-forth-img" alt={"img"} src={HBStep4Top} />
                </div>
              </div>

              <div className="row step_block_order exm_four_main_wrapper problem_solving_row exm_five_wrapper">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 order_2 flexible_padding problem_solving_text">



                  <div className="card-header">
                    <BoardText color="#0099BA" className="exm_two_sub_text font-weight-semi-bold ">
                      Could the same outcome have happened, even if you had done something different?
                    </BoardText>
                  </div>

                  <FtTextArea className="textarea_bottom_space input-height  textarea-top-space" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 order_1 problem_solving_img gloria-img">
                  <img className="luke_image step-forth-img-2" alt={"img"} src={HBStepBottom} />
                </div>
              </div>

            </>
          }

          {
            step === 5 &&
            <>
              <div className="row  step_block_order exm_four_main_wrapper  problem_solving_row exm_five_wrapper">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7  order_2 flexible_padding problem_solving_text">
                  <BoardSubTitle className="step_two_title exm_three_title exm_flex_one lets-focus-space lets-focus-space">
                    Reflect
                  </BoardSubTitle>

                  <BoardText className="luke_text step-2-bottom-space">
                    <p>
                      Based on the information and abilities you had at the time, and taking into account everything that was going on, what are your thoughts now about the decision you made or about what happened?
                    </p>
                  </BoardText>

                  <FtTextArea className="textarea_bottom_space input-height" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  <div className="exm_input_sub_text_title if_you_text dark-blue font-weight-semi-bold">Add things you believe from this list:</div>

                  <div className="row plus_ul_row step-2-bottom-space">

                    {acArray.map((dt) => {
                      return <div className="col-md-12 example_listing_block_wrapper">
                        <PriOption text={dt} selectText={(txt) => { updateDiffWay(txt); scrollTop(true, "step-6-text-area") }} />
                      </div>
                    })}
                  </div>



                  <div className="card-header step-2-bottom-space">
                    <BoardText className="exm_two_sub_text font-weight-semi-bold try-saying-space">
                      Try saying these things to yourself. Notice how it feels when you say these things instead of your original thought about what you should have done differently.
                    </BoardText>
                  </div>

                  <div className="card-header">
                    <BoardText className="exm_two_sub_text font-weight-semi-bold add-top-space-radio">
                      How much do you believe your original thought about the decision you made or about what happened?
                    </BoardText>
                  </div>
                  <div className="radio-style">
                    <RadioGroup className="radio-space try-saying-space"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {believeOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 order_1 problem_solving_img gloria-img">
                  <img className="luke_image step-fifth-img" alt={"img"} src={HBStep5} />
                </div>
              </div>

            </>
          }

          {
            step === 6 &&
            <>
              <div className="row step_block_order step_6 problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7  order_2 flexible_padding problem_solving_text">
                  <div className="">
                    <BoardSubTitle className="step_two_title  flex_home_card_title">
                      Let's explore why you did what you did at the time.
                    </BoardSubTitle>

                    <BoardText color="#0099BA" className="luke_text mb-4">
                      <p>What information did you have at the time?</p>
                    </BoardText>

                    <BoardText className="exm_input_text_group">
                      <div className=" exm_input_text_title">
                        Did you have what you needed (the knowledge, ability, tools, time) to take a different course of action?
                      </div>
                    </BoardText>

                    <div className="radio-style">
                      <RadioGroup className="add-bottom-space-radio"
                        name={""}
                        row
                        onChange={(e) => {
                          // props.onChange({
                          //   id: props.id,
                          //   answer: e.target.value,
                          //   type: props.type,
                          // });
                        }}
                      // value={props.selectedAnswer}
                      >
                        {nomralOptions.map((item) => {
                          return (
                            <RadioWithColor
                              value={item.value}
                              color="#0099ba"
                              label={<span className="c-db">{item.text}</span>}
                              key={item.value}
                            />
                          );
                        })}
                      </RadioGroup>
                    </div>
                    <BoardText className="exm_input_text_group">
                      <div className=" exm_input_text_title">
                        Which didn't you have?
                      </div>
                    </BoardText>



                    <div className="add-bottom-space-radio checkbox-style">
                      {step6Options.map((option, i) => {
                        return (
                          <CheckBox
                            id={i}
                            // checked={false}
                            label={<span className="sortingLabel">{option.text}</span>}
                            onChange={(e) => {
                              if (e.target.checked) {
                                // console.log("sort if", e.target.name)
                                // setShownTools(3)
                                // setfilterSelection(() => [...filterSelection, e.target.id]);
                              } else {
                                // console.log("sort else", e.target.name)
                                // setShownTools(3)
                                // setfilterSelection(filterSelection.filter((data) => data !== e.target.id));
                              }
                            }}
                          />
                        );
                      })
                      }
                    </div>

                    <BoardText className="luke_text">
                      <p>Why didn't you have what you needed to do something different?</p>
                    </BoardText>

                    <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                    <div className="card-header">
                      <BoardText className="exm_two_sub_text add-bottom-space-radio">
                        Think about how long you had to make a decision?
                      </BoardText>
                    </div>

                    <BoardText className="luke_text">
                      <p>Did you know for sure that this event could have happened at the time?</p>
                    </BoardText>

                    <div className="radio-style">
                      <RadioGroup className="add-bottom-space-radio"
                        name={""}
                        row
                        onChange={(e) => {
                          // props.onChange({
                          //   id: props.id,
                          //   answer: e.target.value,
                          //   type: props.type,
                          // });
                        }}
                      // value={props.selectedAnswer}
                      >
                        {nomralOptions.map((item) => {
                          return (
                            <RadioWithColor
                              value={item.value}
                              color="#0099ba"
                              label={<span className="c-db">{item.text}</span>}
                              key={item.value}
                            />
                          );
                        })}
                      </RadioGroup>
                    </div>
                    <BoardText className="luke_text">
                      <p>If the event hadn’t happened, would you be second guessing the decision that you made?</p>
                    </BoardText>

                    <div className="radio-style">
                      <RadioGroup className="add-bottom-space-radio"
                        name={""}
                        row
                        onChange={(e) => {
                          // props.onChange({
                          //   id: props.id,
                          //   answer: e.target.value,
                          //   type: props.type,
                          // });
                        }}
                      // value={props.selectedAnswer}
                      >
                        {nomralOptions.map((item) => {
                          return (
                            <RadioWithColor
                              value={item.value}
                              color="#0099ba"
                              label={<span className="c-db">{item.text}</span>}
                              key={item.value}
                            />
                          );
                        })}
                      </RadioGroup>
                    </div>
                    <div className="card-header">
                      <BoardText className="exm_two_sub_text">
                        Who was making the decisions?
                      </BoardText>
                    </div>



                    <BoardText color="#0099BA" className="luke_text add-top-space-radio">
                      <p>Were you in a situation where others were responsible for the decision?</p>
                    </BoardText>


                    <div className="radio-style">
                      <RadioGroup className="add-bottom-space-radio"
                        name={""}
                        row
                        onChange={(e) => {
                          // props.onChange({
                          //   id: props.id,
                          //   answer: e.target.value,
                          //   type: props.type,
                          // });
                        }}
                      // value={props.selectedAnswer}
                      >
                        {booleanOptions.map((item) => {
                          return (
                            <RadioWithColor
                              value={item.value}
                              color="#0099ba"
                              label={<span className="c-db">{item.text}</span>}
                              key={item.value}
                            />
                          );
                        })}
                      </RadioGroup>
                    </div>

                    <div className="checkbox-style checkbox-1">
                      {roleOptions.map((option, i) => {
                        return (
                          <CheckBox
                            id={i}
                            // checked={false}
                            label={<span className="sortingLabel">{option.text}</span>}
                            onChange={(e) => {
                              if (e.target.checked) {
                                // console.log("sort if", e.target.name)
                                // setShownTools(3)
                                // setfilterSelection(() => [...filterSelection, e.target.id]);
                              } else {
                                // console.log("sort else", e.target.name)
                                // setShownTools(3)
                                // setfilterSelection(filterSelection.filter((data) => data !== e.target.id));
                              }
                            }}
                          />
                        );
                      })
                      }
                    </div>

                    <BoardText className="luke_text">
                      <p>Were there any good reasons for those decisions?</p>
                    </BoardText>

                    <div className="radio-style">
                      <RadioGroup className="add-bottom-space-radio"
                        name={""}
                        row
                        onChange={(e) => {
                          // props.onChange({
                          //   id: props.id,
                          //   answer: e.target.value,
                          //   type: props.type,
                          // });
                        }}
                      // value={props.selectedAnswer}
                      >
                        {nomralOptions.map((item) => {
                          return (
                            <RadioWithColor
                              value={item.value}
                              color="#0099ba"
                              label={<span className="c-db">{item.text}</span>}
                              key={item.value}
                            />
                          );
                        })}
                      </RadioGroup>
                    </div>
                    <BoardText className="luke_text">
                      <p>What would you tell a friend or loved one who had this experience?</p>
                    </BoardText>

                    <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-5 order_1 problem_solving_img gloria-img">
                  <img className="luke_image step-sixth-img" alt={"img"} src={HBStep6} />
                </div>
              </div>

            </>
          }

          {
            step === 7 &&
            <>
              <div className="row step_block_order problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 flexible_step_2_padding problem_solving_text">

                  <BoardText className="step_two_title exm_three_title exm_flex_one lets-focus-space lets-focus-space">
                    <div className=" exm_input_text_title">
                      Based on the information and abilities you had at the time, and taking into account everything that was going on, what are your thoughts now about the decision you made?
                    </div>
                  </BoardText>


                  <BoardText className="luke_text">
                    <p>Now how much do you believe your original thought about what you should have done differently?</p>
                  </BoardText>
                  <div className="radio-style">
                    <RadioGroup className="add-bottom-space-radio"
                      name={""}
                      row
                      onChange={(e) => {
                        // props.onChange({
                        //   id: props.id,
                        //   answer: e.target.value,
                        //   type: props.type,
                        // });
                      }}
                    // value={props.selectedAnswer}
                    >
                      {believeOptions.map((item) => {
                        return (
                          <RadioWithColor
                            value={item.value}
                            color="#0099ba"
                            label={<span className="c-db">{item.text}</span>}
                            key={item.value}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>

                  <div className="card-header">
                    <BoardText color="#0099BA" className="exm_two_sub_text font-weight-normal">
                      How distressed are you feeling now?
                    </BoardText>
                  </div>





                  <CardsWrapper
                    bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12 flexible_step_two_card"}
                  >

                    <CardContentWrapper
                      bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}
                    >
                      <TAMSlider distressScore={postDistress} sliderUpdate={(val) => { setPostDistress(val) }} />
                      <div className="slider_level">
                        <div className="slider_level_text">None</div>
                        <div className="slider_level_text">Moderate</div>
                        <div className="slider_level_text">Extreme</div>
                      </div>
                    </CardContentWrapper>

                  </CardsWrapper>




                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 exm_two_luke_image_wrapper problem_solving_img gloria-img">
                  <img className="luke_image  step-seventh-img" alt={"img"} src={HBStep7Accordion} />
                </div>
              </div>

              <div className="row step_block_order problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 flexible_step_2_padding problem_solving_text">

                  <div className="card-header">
                    <BoardText className="exm_two_sub_text mb-4">
                      If you are still convinced you made a bad decision or were somehow to blame, try to think through the questions below. You can answer all of them, or just the ones that fit your situation best.
                    </BoardText>
                  </div>

                  <BoardText color="#0099BA" className="luke_text">
                    <p>Click the arrow to try a few more questions.</p>
                  </BoardText>
                </div>
              </div>

              <div className="collapse-block">
                <BoardSubTitle className={` ${hintsOpen && "step_one_collapse_open"} collapse_title`} onClick={() => { setHintsOpen(!hintsOpen) }} >
                  <div className="">
                  </div>
                  <span className="arrow">{hintsOpen ?
                    <img className="down-arrow collapse_arrow_icon" src={collapse_arrow_up} alt={""} /> :
                    <img className="right-arrow collapse_arrow_icon" src={collapse_arrow} alt={""} />}
                  </span>
                </BoardSubTitle>

              </div>

              {hintsOpen &&
                <div className="add-top-space ">
                  <div className="row step_block_order step_6 problem_solving_row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7  order_2 flexible_padding problem_solving_text">

                      <BoardText className="luke_text">
                        <p>Now how much do you believe your original thought about what you should have done differently?</p>
                      </BoardText>

                      <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />

                      <BoardText className="luke_text">
                        <p>Now how much do you believe your original thought about what you should have done differently?</p>
                      </BoardText>

                      <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                      <BoardText className="luke_text">
                        <p>Now how much do you believe your original thought about what you should have done differently?</p>
                      </BoardText>

                      <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                      <BoardText className="luke_text">
                        <p>Now how much do you believe your original thought about what you should have done differently?</p>
                      </BoardText>

                      <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                      <BoardText className="luke_text">
                        <p>Now how much do you believe your original thought about what you should have done differently?</p>
                      </BoardText>

                      <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                      <BoardText className="luke_text">
                        <p>Now how much do you believe your original thought about what you should have done differently?</p>
                      </BoardText>

                      <FtTextArea className="textarea_bottom_space input-height textarea-top-space1" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-5 order_1 problem_solving_img gloria-img">
                      <div className="col-xs-12 col-sm-12  exm_two_luke_image_wrapper problem_solving_img gloria-img">
                        <img className="luke_image  step-seventh-img-2" alt={"img"} src={HBStep7} />
                      </div>
                    </div>
                  </div>
                </div>
              }
            </>

          }

          {
            errorOpen && <TAMAlert
              kind={"error"}
              message={errorMsg}
            />
          }

        </Card >
      </HindsightBiasAssesmentContainer >


      <Grid direction="row" id="btn2" className={`${(step === 0) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Video</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { setStep(1) }} color="#F19840">Continue</CustomButton>
            : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
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
            <CustomButton onClick={() => { props.setScreen(1) }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
            : <CustomButton onClick={() => { step === 1 ? submitOne() : step === 2 ? submitInitial() : step === 3 ? submitSecond() : step === 4 ? submitThird() : step === 5 ? submitForth() : step === 6 ? submitFifth() : step === 7 ? submitSixth() : setStep(step + 1) }} color="#F19840">Next Step</CustomButton>}
        </div>
      </div> */}
      {/* {
        showPopup &&
        <PopUp auth={props.auth} reStart={() => { reStart() }} setScreen={(id) => { props.setScreen(id) }} toolDetail={props.toolDetail} updateRating={(val) => { props.updateRating(val) }} />
      } */}
    </>
  );
};

export default HSBAssesment;
