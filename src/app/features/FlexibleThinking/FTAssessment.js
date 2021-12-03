import { Box, Card, Grid, Step, StepConnector } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TAMAlert from "app/tamComponents/alert/TAMAlert";
import preopt from 'app/shared/assets/images/add-input.svg'


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
  CardIconButton,
} from 'app/features/ProblemSolving/style';
import {
  CardContentWrapper,
  CardsWrapper,
} from "app/tamComponents/cards/Cards.styles";
import CustomButton from 'app/tamComponents/button';
import PriOption from './PriOption';
import PopUp from './Popup';
import ft1 from 'app/shared/assets/images/tools/ft1.svg';
import ft2 from 'app/shared/assets/images/alyssa/alyssa7.svg';
import ft3 from 'app/shared/assets/images/gloria/gloria1.svg';
import ft4 from 'app/shared/assets/images/tools/ft2.svg';
import ft5 from 'app/shared/assets/images/james/james6.svg';
import ft6 from 'app/shared/assets/images/alyssa/alyssa6.svg';
import ft7 from 'app/shared/assets/images/gloria/gloria3.svg';
import MultiReactionCard from "app/tamComponents/cards/MultiReactionCard";
import TAMSlider from "app/tamComponents/slider/Slider";
import arrow from 'app/shared/assets/images/arrow.svg';
import * as FTService from "./toolDetailService";

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
const ctArray = [
  "I mess everything up",
  "Everything will go wrong",
  "They never listen to me",
  "This isn’t fair",
  "They don’t care about how I feel or what happens to me",
  "There’s no point in doing this",
  "I’m not being a good[parent, coworker, friend]",
  "I’ll never be able to do this",
  "I suck",
  "It’s all my fault",
  "I can’t manage this work",
  "It’s all [someone else’s] fault",
  "I can’t trust my judgment",
]

const acArray = [
  "There are a lot of things I do right--I shouldn't beat myself up when I make mistakes.",
  "Everyone makes mistakes sometimes, but that doesn’t mean they aren’t generally good or capable.",
  "People are tired and under a lot of stress right now. Nobody is at their best. It probably wasn’t personal.",
  "There were a lot of other factors at play in this situation, it wasn’t all my fault.",
  "I did the best I could in a difficult situation that I didn’t have full control over.",
  "I can keep trying and it will get easier.",
  "I am coping the best I can in a difficult situation.",
  "Most of the time I do have good judgement, even if it is not perfect.",
  "This says more about them than it does about me. I feel ok about how I acted.",
  "I have other options and can decide what’s best for me, even if it takes time to make a change.",
  "I regret how I talked to them, but I can apologize and try to stay calmer in the future. It doesn’t make me a bad person.",
  "This is how people react sometimes when they’re under a lot of stress. It’s understandable.",
  "Sometimes even when we do our best the outcome isn’t what we hope for."
]
const moods_list = {
  "happy": 6,
  "content": 5,
  "sad": 1,
  "afraid": 2,
  "guilty": 3,
  "angry": 7,
  "worried": 2,
  "stressed": 4,
  "grieving": 8,
  "not_sure": 9
}
const FTAssessment = ({ startAgainBtn, setStartAgainBtn, ...props }) => {
  const [step, setStep] = useState(0)
  const [fstt, setFstt] = useState([""])
  const [fsnt, setFsnt] = useState([""])
  const [sper, setSper] = useState(["", "", ""])
  const [impact, setImpact] = useState(["", ""])
  const [upseting, setUpsating] = useState("")
  const [happen, setHappen] = useState("")
  const [ftid, setFtid] = useState("")
  const [diffWay, setDiffWay] = useState("")
  const [curMood, setCurMood] = useState("happy")
  const [preDistress, setPreDistress] = useState(0)
  const [postMood, setPostMood] = useState("happy")
  const [postDistress, setPostDistress] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  function reStart() {
    setStep(1)
    setFstt([""])
    setFsnt([""])
    setSper(["", "", ""])
    setImpact(["", "", ""])
    setUpsating("")
    setHappen("")
    setFtid("")
    setDiffWay("")
    setCurMood("happy")
    setPreDistress(0)
    setPostMood("happy")
    setPostDistress(0)
    setShowPopup(false)
  }
  useEffect(() => {
    console.log("----")
    FTService.getPendingForm().then((data) => {
      if (!!data.data.result) {
        let form = data.data.result
        console.log("form", form)
        setStartAgainBtn(true);
        setFtid(form.id)
        if (!form.step1) {
          setStep(1)
        } else if (!form.step2) {
          setStep(2)
        } else if (!form.step3) {
          setStep(4)
        } else if (!form.step4) {
          setStep(5)
        } else if (!form.step5) {
          setStep(6)
        } else if (!form.step6) {
          setStep(7)
        }
        if (!!form.what_happened) {
          setHappen(form.what_happened.trim())
        }
        if (!!form.what_did_you_say_to_yourself) {
          setUpsating(form.what_did_you_say_to_yourself)
        }
        if (!!form.what_facts_support_this_thought) {
          setFstt(form.what_facts_support_this_thought)
        }
        if (!!form.do_any_facts_not_support_this_thought) {
          setFsnt(form.do_any_facts_not_support_this_thought)
        }
        if (!!form.shift_perspective) {
          setSper(form.shift_perspective)
        }
        if (!!form.is_it_a_helpful_thought) {
          setImpact(form.is_it_a_helpful_thought)
        }
        if (!!form.diﬀerent_way_of_looking_more_helpful) {
          setDiffWay(form.diﬀerent_way_of_looking_more_helpful)
        }
      }
    })
  }, [setStartAgainBtn])

  useEffect(() => {
    if (!startAgainBtn) {
      setHappen("")
      setUpsating("")
      setFstt([""])
      setFsnt([""])
      setSper(["", "", ""])
      setImpact(["", ""])
      setDiffWay("")
      setStep(1);
    }
  }, [startAgainBtn])

  function showError(msg) {
    setErrorOpen(true)
    setErrorMsg(msg)
    setTimeout(() => {
      setErrorOpen(false)
      setErrorMsg("")
    }, 5000)
  }
  function submitOne() {
    if (!happen || happen === "") {
      showError("Tell us “What happened” in the form above?")
      scrollBottom()
      return false
    }
    if (!upseting || upseting === "") {
      showError("Please enter your changed thought or select from the above examples.")
      scrollBottom()
      return false
    }
    let body = {
      "toolId": props.toolId,
      "what_happened": happen.trim(),
      "what_did_you_say_to_yourself": upseting.trim()
    }
    FTService.stepOne(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setFtid(res.data.result.id);
        setStep(2)
      }
    })
  }
  function submitInitial() {
    let body = {
      "flexibleThinkingId": ftid,
      "feeling": moods_list[curMood],
      "distressScore": preDistress
    }
    FTService.stepInitialTwo(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setStep(3)
      }
    })
  }
  function submitSecond() {
    let body = {
      "flexibleThinkingId": ftid,
      "what_facts_support_this_thought": fstt.map(x => x.trim()),
      "do_any_facts_not_support_this_thought": fsnt.map(x => x.trim()),
    }
    FTService.stepTwo(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setStep(4)
      }
    })
  }

  function submitThird() {
    let body = {
      "flexibleThinkingId": ftid,
      "shift_perspective": sper.map(x => x.trim()),
    }
    FTService.stepThree(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setStep(5)
      }
    })
  }

  function submitForth() {
    let body = {
      "flexibleThinkingId": ftid,
      "is_it_a_helpful_thought": impact.map(x => x.trim()),
    }
    FTService.stepFour(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setStep(6)
      }
    })
  }

  function submitFifth() {
    if (!diffWay || diffWay === "") {
      showError("What’s your different prospective of looking at this situation?")
      scrollBottom()
      return false
    }
    let body = {
      "flexibleThinkingId": ftid,
      "looking_more_helpful": diffWay.trim()
    }
    FTService.stepFive(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setStep(7)
      }
    })
  }

  function submitSixth() {
    let body = {
      "flexibleThinkingId": ftid,
      "feeling": moods_list[postMood],
      "distressScore": postDistress
    }
    FTService.stepSix(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        // props.setScreen(1)
        // alert("completed")
        setShowPopup(true)
      }
    })
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

  const scrollBottom = () => {
    var bottomScroll = document.getElementById("arrow_sticky_wrapper").offsetTop + document.getElementById("arrow_sticky_wrapper").offsetHeight - window.innerHeight + 80;
    // console.log(window.innerHeight, bottomScroll, document.getElementById("main-card").offsetTop, document.getElementById("main-card").offsetHeight, document.getElementById("main-card").offsetTop + document.getElementById("main-card").offsetHeight)
    document.body.scrollTop = bottomScroll;
    document.documentElement.scrollTop = bottomScroll;
  }


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

  const updateUpsetting = (txt) => {
    if (upseting) {
      console.log(upseting)
      if (upseting.split("")[diffWay.length - 1] === ".")
        setUpsating(upseting + " " + txt);
      else if (upseting.split("").slice(-2).join("") === ". ")
        setUpsating(upseting + txt);
      else
        setUpsating(upseting + ". " + txt);
    } else {
      setUpsating(txt)
    }
  }

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

      <div className="luke_card_wrapper" id="arrow_sticky_wrapper">
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
            <div className="row example_step_one_row" >
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 " >
                <BoardSubTitle className="example_step_one_title">
                  Now you’ll have a chance to try flexible thinking
                </BoardSubTitle>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 example_img_col">
                <img className="example_step_one_img" alt={"img"} src={ft1} />
              </div>
            </div>
          </>}
          {step === 1 &&
            <>
              <div className="row step_block_order problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text">
                  <BoardSubTitle className="step_two_title exm_flex_one">
                    Think about something upsetting that happened today.
                  </BoardSubTitle>
                  <BoardText >
                    <div className="exm_input_text_group">
                      <div className="exm_input_text_title">What happened?</div>
                    </div>
                  </BoardText>
                  <FtTextArea className="textarea_bottom_space" placeholder="Type here..." value={happen} onChange={(e) => { setHappen(e.target.value) }} style={{ width: "100%" }} />


                  <BoardText className="exm_input_text_title" >
                    Catch: What did you say to yourself? What thoughts were you having?
                  </BoardText>
                  <div className="exm_input_sub_text_title if_you_text">If you had a lot of different thoughts, pick one or two that were the most upsetting to get started</div>
                  <FtTextArea className="catch_textarea" placeholder="Type here..." id="step-one-text-area" onChange={(e) => { setUpsating(e.target.value) }} value={upseting} style={{ width: "100%" }} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img exm_one_luke_image_wrapper">
                  <img className="luke_image exm_one_luke_image " alt={"img"} src={ft2} />
                </div>
              </div>
              <div className="step_gray_text example_text">
                EXAMPLES OF COMMON THOUGHTS
              </div>
              <div className="if_you_text">
                If you are not sure, see if one or more of these thoughts might fit. You can select a thought and add them in automatically by clicking.
              </div>
              <div className="row plus_ul_row" >
                {ctArray.map((dt) => {
                  return <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 example_listing_block_wrapper">
                    <PriOption text={dt} selectText={(txt) => { updateUpsetting(txt); scrollTop(true, "step-one-text-area") }} />
                  </div>
                })}
              </div>

            </>
          }

          {step === 2 &&
            <>
              <div className="row step_block_order problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 flexible_step_2_padding problem_solving_text">
                  <BoardSubTitle className="step_two_title exm_two_title">
                    Now that you’ve had a chance to catch your thought
                  </BoardSubTitle>

                  <MultiReactionCard className="flexible_step_two_card"
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
                  />

                  <CardsWrapper
                    bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12 flexible_step_two_card"}
                  >
                    <div className="card-header">
                      {/* <span className="card-number">2</span> */}
                      <BoardText className="exm_two_sub_text">
                        On a scale of 0-10, How distressed did you feel?
                      </BoardText>

                    </div>
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
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 exm_two_luke_image_wrapper problem_solving_img">
                  <img className="luke_image  exm_two_luke_image" alt={"img"} src={ft3} />
                </div>
              </div>

            </>
          }
          {step === 3 &&
            <>
              <div className="row  step_block_order problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text  flexible_padding">
                  <BoardSubTitle className="step_two_title exm_two_title">
                    Let’s check the thought now
                  </BoardSubTitle>

                  <div className="exm_three_input_group">
                    <BoardText className="exm_two_sub_text exm_three_input_group_text">
                      What facts support this thought?
                    </BoardText>
                    {
                      fstt.map((th, i) => {
                        return <FtTextArea className="input_radius add_input_wrapper example_text_area example_text_area_five example_text_area_step_three" value={th} onChange={(e) => { let data = [...fstt]; data[i] = e.target.value; setFstt(data) }} style={{ width: "100%" }} />
                      })
                    }


                    <CardIconButton className="add_input_icon" onClick={() => { setFstt(fstt => [...fstt, ""]) }}>
                      <img className="add_input_icon" alt={"img"} src={preopt} />
                    </CardIconButton>
                  </div>
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
                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img exm_three_luke_image_wrapper">
                  <img className="luke_image exm_three_luke_image" alt={"img"} src={ft4} />
                </div>
              </div>
            </>
          }

          {step === 4 &&
            <>
              <div className="row step_block_order exm_four_main_wrapper problem_solving_row exm_five_wrapper">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 order_2 flexible_padding problem_solving_text">
                  <BoardSubTitle className="step_two_title exm_three_title">
                    Shift perspective:
                  </BoardSubTitle>
                  <BoardText className="luke_text">
                    <p>
                      Is there other information that I should consider, or are there other ways of looking at it? What would you say to a friend who was in this situation?
                    </p>

                  </BoardText>

                  <div className="exm_three_input_group">
                    {
                      sper.map((th, i) => {
                        return <FtTextArea placeholder="Perspective" className="input_radius add_input_wrapper example_text_area example_text_area_five example_text_area_step_three" value={th} onChange={(e) => { let data = [...sper]; data[i] = e.target.value; setSper(data) }} style={{ width: "100%" }} />
                      })
                    }
                    <CardIconButton className="add_input_icon" onClick={() => { setSper(sper => [...sper, ""]) }}>
                      <img className="add_input_icon" alt={"img"} src={preopt} />
                    </CardIconButton>

                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 order_1 problem_solving_img exm_three_luke_image_wrapper">
                  <img className="luke_image exm_three_luke_image" alt={"img"} src={ft5} />
                </div>
              </div>

            </>
          }

          {step === 5 &&
            <>
              <div className="row  step_block_order exm_four_main_wrapper  problem_solving_row exm_five_wrapper">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7  order_2 flexible_padding problem_solving_text">
                  <BoardSubTitle className="step_two_title exm_three_title">
                    Is it a helpful thought?

                  </BoardSubTitle>
                  <BoardText className="luke_text">
                    <p>
                      Does it help to say your original thought to yourself? What impact does it have on you when you say this to yourself?
                    </p>
                  </BoardText>
                  {
                    impact.map((th, i) => {
                      return <FtTextArea placeholder="Impact" className="input_radius add_input_wrapper example_text_area example_text_area_five example_text_area_step_three" value={th} onChange={(e) => { let data = [...impact]; data[i] = e.target.value; setImpact(data) }} style={{ width: "100%" }} />
                    })
                  }

                  <CardIconButton className="add_input_icon" onClick={() => { setImpact(impact => [...impact, ""]) }}>
                    <img className="add_input_icon" alt={"img"} src={preopt} />
                  </CardIconButton>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 order_1 problem_solving_img exm_three_luke_image_wrapper">
                  <img className="luke_image exm_three_luke_image" alt={"img"} src={ft6} />
                </div>
              </div>

            </>
          }

          {step === 6 &&
            <>
              <div className="row step_block_order step_6 problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9   order_2 flexible_padding problem_solving_text">
                  <div className="step_six_main_wrapper">
                    <BoardSubTitle className="step_two_title exm_flex_one">
                      Now that you’ve had a chance to check your thought, try changing it.
                    </BoardSubTitle>
                    <BoardText className="exm_input_text_group">
                      <div className=" exm_input_text_title">
                        What’s a different way of l ooking at it, or a more helpful thing to say to yourself?
                      </div>
                    </BoardText>
                    <BoardText className="luke_text">
                      <p>
                        If the thought was accurate but not very helpful ask yourself - "Is there something I can do about it to improve the situation?"
                      </p>
                    </BoardText>


                    <FtTextArea className="textarea_bottom_space" placeholder="Type here..." value={diffWay} id="step-6-text-area" onChange={(e) => { setDiffWay(e.target.value) }} style={{ width: "100%" }} />
                    <div className="step_gray_text example_text">
                      EXAMPLES OF COMMON THOUGHTS
                    </div>
                    <div className="if_you_text">
                      If you are not sure, see if one or more of these thoughts might fit. You can select a thought and add them in automatically by clicking.
                    </div>
                  </div>




                  <div className="row plus_ul_row">

                    {acArray.map((dt) => {
                      return <div className="col-md-12 example_listing_block_wrapper">
                        <PriOption text={dt} selectText={(txt) => { updateDiffWay(txt); scrollTop(true, "step-6-text-area") }} />
                      </div>
                    })}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 order_1 problem_solving_img exm_six_luke_image_wrapper">
                  <img className="exm_six_luke_image" alt={"img"} src={ft7} />
                </div>
              </div>
              {/* <div style={{ padding: 15, width: "100%", textAlign: "center", backgroundColor: "#A9BDC5", marginTop: 30, color: "#fff", fontSize: 20, borderRadius: "10px" }}>
              If the thought was accurate but not very helpful ask yourself - Is there something I can do about it to improve the situation?
            </div> */}

            </>
          }

          {step === 7 &&
            <>
              <div className="row step_block_order problem_solving_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 flexible_step_2_padding problem_solving_text">

                  <MultiReactionCard className="flexible_step_two_card"
                    number={""}
                    question={<BoardText className="exm_two_sub_text">
                      How do you feel now?
                    </BoardText>}
                    description={""}
                    updateMood={(mood) => { setPostMood(mood) }}
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
                  />

                  <CardsWrapper
                    bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12 flexible_step_two_card"}
                  >
                    <div className="card-header">
                      {/* <span className="card-number">2</span> */}
                      <BoardText className="exm_two_sub_text">
                        On a scale of 0-10, How distressed did you feel?
                      </BoardText>

                    </div>
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
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 exm_two_luke_image_wrapper problem_solving_img">
                  <img className="luke_image  exm_two_luke_image" alt={"img"} src={ft3} />
                </div>
              </div>

            </>

          }

          {errorOpen && <TAMAlert
            kind={"error"}
            message={errorMsg}
          />}

        </Card>
      </div>


      <Grid direction="row" id="btn2" className={`${(step === 0) && 'large_btn_luke start_button_step'} luke_button`}>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>}
        </Grid>
        <Grid item xl={4} lg={4} md={2} sm={2} xs={0} justifyContent="flex-start"></Grid>
        <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 && (step === 0) ? 12 : 5} xs={deviceSize > 0 && (step === 0) ? 12 : 6} justifyContent="flex-start">
          {step === 8 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#F19840">Let me apply the steps to my own problem</CustomButton>
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
      {
        showPopup &&
        <PopUp auth={props.auth} reStart={() => { reStart() }} setScreen={(id) => { props.setScreen(id) }} toolDetail={props.toolDetail} updateRating={(val) => { props.updateRating(val) }} />
      }
    </>
  );
};

export default FTAssessment;
