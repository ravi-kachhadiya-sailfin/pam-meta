import { Card } from '@material-ui/core';
import { useEffect, useState, useRef } from 'react';

import {
  BoardText,
  BoardSubTitle,
  FtTextArea,
  ModalWrapper
} from './style';
import ToolRating from './tool-rating';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MultiSelectButton from "app/tamComponents/multi-select-btn";
import CustomButton from 'app/tamComponents/button';
import bucket5 from 'app/shared/assets/images/bucket/bucket5.svg';
import lvl1 from 'app/shared/assets/images/bucket/ring1.svg';
import lvl2 from 'app/shared/assets/images/bucket/ring2.svg';
import lvl3 from 'app/shared/assets/images/bucket/ring3.svg';
import lvl4 from 'app/shared/assets/images/bucket/ring4.svg';
import lvl5 from 'app/shared/assets/images/bucket/ring5.svg';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ProblemSolvingPopup } from 'app/features/ProblemSolving/style';

import {
  NextIconWrapper,
  // PrevIconWrapper,
} from 'app/features/ProblemSolving/style';


import * as FBService from "./toolDetailService";
import Reminder from '../../tamComponents/reminder';
import arrow from 'app/shared/assets/images/arrow.svg';


const FBAssessment = (props) => {
  const [step, setStep] = useState(1)
  // const { setModal } = useContext(AppStoreContext);

  // const [showPopup, setShowPopup] = useState(false)
  const [selectedOpt, setSelectedOpt] = useState([]);
  const [activity] = useState(props.activity);
  const [showModel, setShowModel] = useState(false)
  const [lvl, setLevel] = useState(0);
  const [fbid, setFbid] = useState("");
  const arr = [1, 2, 3, 4, 5]
  const [open, setOpen] = useState(false);
  const [pp, setPp] = useState(0);
  const [scroll] = useState('paper');
  const [positiveAspects, setPositiveAspects] = useState("no")
  const [whatAspects, setWhatAspects] = useState("")
  const [userReason, setUserReason] = useState("")
  const handleClose = () => {
    setOpen(false);
  };

  const noactivity = [
    "I did something else to address the problem.",
    "Too busy",
    "Too tired",
    "I forgot",
    "I didn’t have something I needed to complete the activity",
    "Didn't feel like doing it",
    "Something happened that I needed to attend to"
  ]

  const togglePopUp = () => {
    setShowModel(!showModel);
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
    setLevel(props.activity.completed_times)
    setFbid(props.activity.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function didActivity() {
    let body = {
      "fillYourBucketId": fbid
    }
    FBService.didActivity(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        let newLvl = lvl + 1
        setStep(2)
        scrollTop()
        setLevel(newLvl)
        props.setCompletedTimes(newLvl)
        handleClose();
        scrollTop();
      }
    })
  }

  function submitAspects() {
    let body = {
      "fillYourBucketId": fbid,
      "positive_aspects": positiveAspects === "yes",
      "what_aspects": whatAspects
    }
    FBService.submitAspects(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setPp(3)
      }
    })
  }

  function notDoingReson() {
    let body = {
      "fillYourBucketId": fbid,
      "selected_reason": selectedOpt.length > 0 ? selectedOpt[0] : "",
    }
    FBService.notDoingReson(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setPp(5)
        setOpen(true)
      }
    })
  }

  function userNotDoingReson() {
    let body = {
      "fillYourBucketId": fbid,
      "user_reason": userReason
    }
    FBService.userNotDoingReson(body).then((res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        setPp(6)
        setOpen(true)
      }
    })
  }
  // function reStart() {
  //   setStep(1)
  //   setShowPopup(false)
  // }

  const scrollTop = () => {
    var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
    console.log(topScroll);
    // hideButton();
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  let scoreUpdated = async (diff) => {
    if (diff < 0) {
      setPp(4)
    } else {
      setPp(2)
    }
    setOpen(true)
  }

  console.log("arr", arr)
  return (
    <>
      <div className="luke_card_wrapper" id="arrow_sticky_wrapper">

        {step === 1 ?
          <NextIconWrapper id="next-btn" onClick={() => { setPp(1); setOpen(true) }} >
            <img className="next-arrrow" alt={"img"} src={arrow} />
          </NextIconWrapper>
          : step === 2 ?
            <NextIconWrapper id="next-btn" onClick={togglePopUp}>
              <img className="next-arrrow" alt={"img"} src={arrow} />
            </NextIconWrapper>

            : <NextIconWrapper id="next-btn" onClick={notDoingReson}>
              <img className="next-arrrow" alt={"img"} src={arrow} />
            </NextIconWrapper>
        }

        <Card className="luke_card fill-your-buckets home-luke-card ">
          {step === 1 &&
            <>
              <div className="row problem_solving_row fill-phase-2">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text fill-padding">
                  <BoardSubTitle className="fill-card-title fill-card-title-bottop-space">
                    Come back to this space and write down what you did.

                  </BoardSubTitle>
                  <BoardText className="fill-card-sub-text">
                    This will help you keep track of how you're doing with your goal to increase positive activities
                  </BoardText>
                  <div className=" problem_solving_img mobile-view">
                    <img alt={"img"} src={lvl === 1 ? lvl1 : lvl === 2 ? lvl2 : lvl === 3 ? lvl3 : lvl === 4 ? lvl4 : lvl5} className="luke_image" />
                  </div>
                  <div className="muilti-select-button fill-selection">
                    {arr.map((val) => {
                      return <MultiSelectButton
                        key={val}
                        text={activity.activity}
                        value={val}
                        selectedAnswer={arr.filter((a) => { return parseInt(lvl) >= a })}
                        check={true}
                      ></MultiSelectButton>
                    })}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5  problem_solving_img desktop-view">
                  <img alt={"img"} src={lvl === 1 ? lvl1 : lvl === 2 ? lvl2 : lvl === 3 ? lvl3 : lvl === 4 ? lvl4 : lvl5} className="luke_image" />
                </div>
              </div>
              <br />
            </>
          }
          {step === 2 &&
            <>
              <div className="row problem_solving_row fill-phase-2 example_step_one_row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text fill-padding">
                  <BoardSubTitle className="fill-card-title">
                    Great! You have filled your bucket today. Keep it up!
                  </BoardSubTitle>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5  problem_solving_img add-top-space">
                  <img className="luke_image" alt={"img"} src={lvl === 1 ? lvl1 : lvl === 2 ? lvl2 : lvl === 3 ? lvl3 : lvl === 4 ? lvl4 : lvl5} />
                </div>
              </div>

            </>
          }
          {step === 3 &&
            <>
              <div className="row problem_solving_row fill-phase-2">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 problem_solving_text fill-padding">
                  <BoardSubTitle className="fill-card-title">
                    Looks like you didn’t get to your activity. Let’s try to keep working on filling your bucket. What do you think got in the way of doing your activity?
                  </BoardSubTitle>
                  <div className="muilti-select-button fill-selection">
                    {noactivity.map((val) => {
                      return <MultiSelectButton
                        key={1}
                        onChange={() => {
                          let data = selectedOpt
                          let valIndex = data.indexOf(val)
                          if (valIndex === -1) {
                            // data.push(val)
                            setSelectedOpt([val])
                          } else {
                            data.splice(valIndex, 1)
                            setSelectedOpt([])
                          }
                        }}
                        textCenter={true}
                        text={val}
                        value={val}
                        selectedAnswer={selectedOpt}
                      ></MultiSelectButton>
                    })}
                  </div>


                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 problem_solving_img add-space-top">
                  <img className="luke_image" alt={"img"} src={bucket5} />
                </div>
              </div>
            </>
          }

        </Card>
      </div>
      <div className="row " style={{ marginTop: 20 }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {/* {step === 0 ?
            <CustomButton onClick={() => { props.setScreen(1) }} color="#0099BA">Back to Examples</CustomButton>
            : <CustomButton onClick={() => { setStep(step - 1) }} color="#0099BA">Previous Step</CustomButton>} */}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <CustomButton onClick={() => {
            if (step === 1) {
              setPp(1);
              setOpen(true);
            } else if (step === 2) {
              togglePopUp()
            } else if (step === 3) {
              notDoingReson()
            }
          }} color="#F19840">Next Step</CustomButton>
        </div>
      </div>

      <div id="border" className="luke_border"></div>

      <ModalWrapper open={showModel} onClose={togglePopUp}>
        <ToolRating toolDetail={props.toolDetail} fbid={fbid} updateRating={(val) => { scoreUpdated(val) }} onClose={togglePopUp} />
      </ModalWrapper>

      <Dialog className={`${(pp === 4 || pp === 3) && "plan-again-popup"} problem_solving_popup`}
        open={open}
        style={{ minWidth: 320 }}
        // onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {
              pp === 1 &&
              <ProblemSolvingPopup className="popup_card">
                <span className="popup_text">Last time you were here you committed to pause and make time for "{activity.activity}". How did it go?</span>
                <div className="popup_text_btn">
                  <div className="popup_btn" onClick={() => { setStep(3); handleClose(); scrollTop(); }}>Didn't do it</div>
                  <div className="popup_btn popup_btn_yes" onClick={() => { didActivity(); }}>Did it</div>
                </div>
              </ProblemSolvingPopup>
            }
            {pp === 2 &&
              <ProblemSolvingPopup className="popup_card">
                <span className="popup_text it-sound">It sounds like that activity was less helpful for your mood. Sometimes the activity wasn’t the right one for the moment or didn’t go as we expected. Were there any positive aspects to the activity?</span>
                <RadioGroup row aria-label="position" name="position" defaultValue="top" className="radio-space">
                  <FormControlLabel className="radio-btn radio-yes" value="no" control={<Radio color="primary" onChange={() => { setPositiveAspects("no") }} checked={positiveAspects === "no"} />} label="No" />
                  <FormControlLabel className="radio-btn" value="yes" control={<Radio color="primary" onChange={() => { setPositiveAspects("yes") }} checked={positiveAspects === "yes"} />} label="Yes" />
                </RadioGroup>
                {positiveAspects === "yes" && <>
                  <span className="popup_text_2">What was positive about the activity?</span>
                  <FtTextArea className="fill-input-3 resize-none-width" placeholder="Type here..." onChange={(e) => { setWhatAspects(e.target.value) }} value={whatAspects} />
                </>}
                <div className="popup_text_btn popup_btn_width">
                  <div className="popup_btn popup_btn_yes " onClick={() => {
                    submitAspects()
                  }}>Submit</div>
                </div>
              </ProblemSolvingPopup>}
            {
              pp === 3 &&
              <ProblemSolvingPopup className="popup_card">
                <span className="popup_text">Would you like to try this activity again or try something new?</span>
                <div className="popup_text_btn would_you_like_button fill-popup">
                  <div className="popup_btn" onClick={() => { setPp("reminder") }} >Try the activity again and set a reminder</div>
                  <div className="popup_btn popup_btn_yes" onClick={() => { props.setScreen(1) }} >Plan something else</div>
                </div>
              </ProblemSolvingPopup>
            }

            {
              pp === 4 &&
              <ProblemSolvingPopup className="popup_card ">
                <span className="popup_text">What did you notice? It looks like this might have been a bucket filling activity! Is this something you’d like to plan to do again?</span>
                <div className="popup_text_btn would_you_like_button fill-popup">
                  <div className="popup_btn" onClick={() => { setPp("reminder") }}>Try the activity again and set a reminder</div>
                  <div className="popup_btn popup_btn_yes" onClick={() => { props.setScreen(1) }} >Plan something else</div>
                </div>
              </ProblemSolvingPopup>
            }
            {
              pp === 5 &&
              <ProblemSolvingPopup className="popup_card">
                <span className="popup_text it-sound">What can you do to address what got in the way of your bucket activity so you can fill your bucket next time?</span>
                <FtTextArea className="fill-input-3 resize-none-width" onChange={(e) => { setUserReason(e.target.value) }} value={userReason} placeholder="Type here..." />
                <div className="popup_text_btn popup_width_btn_2">
                  <div className="popup_btn popup_btn_yes" onClick={() => { userNotDoingReson() }} >Submit</div>
                </div>
              </ProblemSolvingPopup>
            }

            {
              pp === 6 &&
              <ProblemSolvingPopup className="popup_card">
                <span className="popup_text">Let’s make a plan to try again</span>
                <div className="popup_text_btn popup_width_btn_2">
                  <div className="popup_btn popup_btn_yes" onClick={() => { setPp("reminder") }} >Set a reminder</div>
                </div>
              </ProblemSolvingPopup>
            }

            {
              pp === "reminder" &&
              <Reminder closePopup={() => { handleClose() }} callBack={() => { window.location.href = '/tools' }} location={window.location.origin + "/fillbucket/" + props.toolDetail.id} title={'PAM - ' + props.toolDetail.title} discription={"Activity : " + activity.activity} />
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>



    </>
  );
};

export default FBAssessment;
