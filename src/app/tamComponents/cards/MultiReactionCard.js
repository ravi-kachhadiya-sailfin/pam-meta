import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CardContentWrapper, CardsWrapper } from "./Cards.styles";
import Happy from "app/shared/assets/images/mood/Happy.png";
import Content from "app/shared/assets/images/mood/Content.png";
import Sad from "app/shared/assets/images/mood/Sad.png";
import Afraid from "app/shared/assets/images/mood/Afraid.png";
import Guilty from "app/shared/assets/images/mood/Guilty.png";
import Angry from "app/shared/assets/images/mood/Angry.png";
import Worried from "app/shared/assets/images/mood/Worried.png";
import Stressed from "app/shared/assets/images/mood/Stressed.png";
import Grieving from "app/shared/assets/images/mood/Grieving.png";
import Not_Sure from "app/shared/assets/images/mood/Not_Sure.png";
import HappySelect from "app/shared/assets/images/mood/onSelect/HappySelect.png";
import ContentSelect from "app/shared/assets/images/mood/onSelect/ContentSelect.png";
import SadSelect from "app/shared/assets/images/mood/onSelect/SadSelect.png";
import AfraidSelect from "app/shared/assets/images/mood/onSelect/AfraidSelect.png";
import GuiltySelect from "app/shared/assets/images/mood/onSelect/GuiltySelect.png";
import AngrySelect from "app/shared/assets/images/mood/onSelect/AngrySelect.png";
import WorriedSelect from "app/shared/assets/images/mood/onSelect/WorriedSelect.png";
import StressedSelect from "app/shared/assets/images/mood/onSelect/StressedSelect.png";
import GrievingSelect from "app/shared/assets/images/mood/onSelect/GrievingSelect.png";
import NotSureSelect from "app/shared/assets/images/mood/onSelect/GrievingSelect.png";

/*Multi reaction card. In which user can answer with clicking on the specific reaction image.
 *
 */
const MultiReactionCard = (props) => {
  const [choiceArray, setChoiceArray] = useState(props.choices);
  useEffect(() => {
    setSelectedMood(sessionStorage.getItem("feelingEmotion"))
    if (sessionStorage.getItem("feelingEmotion") === "") {
      clearAllStates()
    }
    setChoiceArray(props.choices.map((item) => item.toLowerCase()));
  }, [props.choices]);
  const [selectedMood, setSelectedMood] = useState(
    sessionStorage.getItem("feelingEmotion") == null
      ? null
      : sessionStorage.getItem("feelingEmotion")
  );
  const [happyState, setHappyState] = useState(false);
  const [happyMouseOut, setHappyMouseOut] = useState(false);
  const [contentState, setContentState] = useState(false);
  const [contentMouseOut, setContentMouseOut] = useState(false);
  const [afraidState, setAfraidState] = useState(false);
  const [afraidMouseOut, setAfraidMouseOut] = useState(false);
  const [sadState, setSadState] = useState(false);
  const [sadMouseOut, setSadMouseOut] = useState(false);
  const [guiltyState, setGuiltyState] = useState(false);
  const [guiltyMouseOut, setGuiltyMouseOut] = useState(false);
  const [angryState, setAngryState] = useState(false);
  const [angryMouseOut, setAngryMouseOut] = useState(false);
  const [worriedState, setWorriedState] = useState(false);
  const [worriedMouseOut, setWorriedMouseOut] = useState(false);
  const [stressedState, setStressedState] = useState(false);
  const [stressedMouseOut, setStressedMouseOut] = useState(false);
  const [greivingState, setGreivingState] = useState(false);
  const [greivingMouseOut, setGreivingMouseOut] = useState(false);
  const [notSureState, setNotSureState] = useState(false);
  const [notSureMouseOut, setNotSureMouseOut] = useState(false);
  const clearAllStates = () => {
    setHappyState(false);
    setContentState(false);
    setAfraidState(false);
    setSadState(false);
    setGuiltyState(false);
    setAngryState(false);
    setWorriedState(false);
    setStressedState(false);
    setGreivingState(false);
    setNotSureState(false);
    setHappyMouseOut(false);
    setContentMouseOut(false);
    setAfraidMouseOut(false);
    setSadMouseOut(false);
    setGuiltyMouseOut(false);
    setAngryMouseOut(false);
    setWorriedMouseOut(false);
    setStressedMouseOut(false);
    setGreivingMouseOut(false);
    setNotSureMouseOut(false);
  };

  //For updating session data mode
  useEffect(() => {
    if (selectedMood) sessionStorage.setItem("feelingEmotion", selectedMood);
  }, [selectedMood]);

  return (
    <CardsWrapper className={`feelings_card  ${props.className}`} bootstrapClass="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card-header">
        {!!props.number && props.number !== "" && <span className="card-number">{props.number}</span>}
        <span className="card-title">{props.question}</span>
      </div>
      <CardContentWrapper className="exm_step_mood_card" bootstrapClass="col-xs-12 col-sm-12 col-md-12 col-lg-12  padding_0">
        <div className="card-action">{props.description}</div>
        <div className="card-selection">
          <ul className="selection">
            {choiceArray.includes("happy") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={happyState ? HappySelect : Happy}
                    alt="happy"
                    width="60px"
                    onMouseOver={() => setHappyState(true)}
                    onMouseOut={() =>
                      happyMouseOut ? setHappyState(true) : setHappyState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setHappyMouseOut(true);
                      setHappyState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Happy</p>
              </li>
            ) : null}
            {choiceArray.includes("content") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={contentState ? ContentSelect : Content}
                    alt="content"
                    width="60px"
                    onMouseOver={() => setContentState(true)}
                    onMouseOut={() =>
                      contentMouseOut
                        ? setContentState(true)
                        : setContentState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setContentMouseOut(true);
                      setContentState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Content</p>
              </li>
            ) : null}
            {choiceArray.includes("sad") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={sadState ? SadSelect : Sad}
                    alt="sad"
                    width="60px"
                    onMouseOver={() => setSadState(true)}
                    onMouseOut={() =>
                      sadMouseOut ? setSadState(true) : setSadState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setSadMouseOut(true);
                      setSadState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Sad</p>
              </li>
            ) : null}
            {choiceArray.includes("afraid") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={afraidState ? AfraidSelect : Afraid}
                    alt="afraid"
                    width="60px"
                    onMouseOver={() => setAfraidState(true)}
                    onMouseOut={() =>
                      afraidMouseOut
                        ? setAfraidState(true)
                        : setAfraidState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setAfraidMouseOut(true);
                      setAfraidState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Anxious</p>
              </li>
            ) : null}
            {choiceArray.includes("guilty") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={guiltyState ? GuiltySelect : Guilty}
                    alt="guilty"
                    width="60px"
                    onMouseOver={() => setGuiltyState(true)}
                    onMouseOut={() =>
                      guiltyMouseOut
                        ? setGuiltyState(true)
                        : setGuiltyState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setGuiltyMouseOut(true);
                      setGuiltyState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Guilty</p>
              </li>
            ) : null}
            {choiceArray.includes("angery") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={angryState ? AngrySelect : Angry}
                    alt="angry"
                    width="60px"
                    onMouseOver={() => setAngryState(true)}
                    onMouseOut={() =>
                      angryMouseOut ? setAngryState(true) : setAngryState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setAngryMouseOut(true);
                      setAngryState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Angry</p>
              </li>
            ) : null}
            {choiceArray.includes("worried") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={worriedState ? WorriedSelect : Worried}
                    alt="worried"
                    width="60px"
                    onMouseOver={() => setWorriedState(true)}
                    onMouseOut={() =>
                      worriedMouseOut
                        ? setWorriedState(true)
                        : setWorriedState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setWorriedMouseOut(true);
                      setWorriedState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Worried</p>
              </li>
            ) : null}
            {choiceArray.includes("stressed") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={stressedState ? StressedSelect : Stressed}
                    alt="stressed"
                    width="60px"
                    onMouseOver={() => setStressedState(true)}
                    onMouseOut={() =>
                      stressedMouseOut
                        ? setStressedState(true)
                        : setStressedState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setStressedMouseOut(true);
                      setStressedState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Stressed</p>
              </li>
            ) : null}
            {choiceArray.includes("grieving") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={greivingState ? GrievingSelect : Grieving}
                    alt="grieving"
                    width="60px"
                    onMouseOver={() => setGreivingState(true)}
                    onMouseOut={() =>
                      greivingMouseOut
                        ? setGreivingState(true)
                        : setGreivingState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setGreivingMouseOut(true);
                      setGreivingState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Grieving</p>
              </li>
            ) : null}
            {choiceArray.includes("notSure") ? (
              <li>
                <div className="selection-image">
                  <img
                    src={notSureState ? NotSureSelect : Not_Sure}
                    alt="notsure"
                    width="60px"
                    onMouseOver={() => setNotSureState(true)}
                    onMouseOut={() =>
                      notSureMouseOut
                        ? setNotSureState(true)
                        : setNotSureState(false)
                    }
                    onClick={(e) => {
                      setSelectedMood(e.target.alt);
                      if (!!props.updateMood) {
                        props.updateMood(e.target.alt)
                      }
                      clearAllStates();
                      setNotSureMouseOut(true);
                      setNotSureState(true);
                    }}
                  />
                </div>
                <p className="selection-text">Not Sure</p>
              </li>
            ) : null}
          </ul>
        </div>
      </CardContentWrapper>
    </CardsWrapper>
  );
};

MultiReactionCard.propTypes = {
  /** Question Number */
  number: PropTypes.number.isRequired,
  /** Question for the Card */
  question: PropTypes.string.isRequired,
  /** Question description */
  description: PropTypes.string,
  /**Allowed choices from HAPPY, CONTENT, SAD, AFRAID, GUILTY, ANGERY, WORRIED, STRESSED, GRIEVING, NOT_SURE,*/
  choices: PropTypes.array,
};

export default MultiReactionCard;
