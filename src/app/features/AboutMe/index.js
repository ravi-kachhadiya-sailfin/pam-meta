import React, { useEffect, useState, useRef, useContext } from "react";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import { withRouter } from "react-router";

import { ContainerBox, ContentHeader, ButtonWrapper } from "./style";
import Question from "./Question";
// import BoxWithBg from "app/tamComponents/box-with-bg";
import * as _ from "lodash";
import TAMAlert from "app/tamComponents/alert/TAMAlert";
import {
  getUserHealthCareData,
  updateUserHealthCareData,
} from "app/shared/services/profile";
import { defaultMetaData, convertToStringItems } from "../../shared/Utils/index";
import { MetaContext } from 'app/shared/context/MetaProvider';

export const CONTROLS = {
  radio: "radio",
  select: "select",
  multiSelect: "multiSelect",
  singleSelect: "singleSelect"
};

const formData = [
  {
    questionId: "healthcareFacility",
    questionNo: 1,
    questionText:
      "Are you currently employed in a role at a healthcare facility?",
    optionDetails: {
      type: CONTROLS.radio,
      options: [
        { text: "Yes", value: '1' },
        { text: "No", value: '2' },
      ],
    },
  },
  {
    questionId: "leftHealthcarePosition",
    questionNo: 2,
    questionText: "Have you left a position in healthcare since March 2020?",
    optionDetails: {
      type: CONTROLS.radio,
      options: [
        { text: "Yes - Voluntarily", value: '1' },
        { text: "No", value: '2' },
        { text: "Yes - Involutarily", value: '3' },
        { text: "Prefer not say", value: '4' },
      ],
    },
  },
  {
    questionId: "healthcareRole",
    questionNo: 3,
    questionText:
      "If yes, what is your current or most recent role(s) in the healthcare facility?",
    optionDetails: {
      type: CONTROLS.select,
      options: [
        { value: "1", text: "Doctor" },
        { value: "2", text: "Medical student" },
        { value: "3", text: "Medical scribe" },
        { value: "4", text: "Nursing student" },
        { value: "5", text: "Nurse" },
        { value: "6", text: "Nursing Assistant" },
        { value: "7", text: "Technician" },
        { value: "8", text: "Physician Assistant" },
        { value: "9", text: "Pharmacist" },
        { value: "10", text: "Pharmacy Technician" },
        { value: "11", text: "Dentist" },
        { value: "12", text: "Dental Technician" },
        { value: "14", text: "Mental Health Professional" },
        { value: "15", text: "Housekeeping services" },
        {
          value: "16",
          text: "Patient-facing administrative support (e.g., front desk)",
        },
        { value: "17", text: "Other administrative support" },
        { value: "18", text: "Researcher" },
        { value: "22", text: "Other" },
      ],
    },
  },
  {
    questionId: "experienceInHealthcare",
    questionNo: 4,
    questionText:
      "Do you have any experience working within healthcare facilities?",
    optionDetails: {
      type: CONTROLS.multiSelect,
      options: [
        { text: "Clinical/Medical Offices", value: '1' },
        { text: "COVID-19 Testing Site", value: '2' },
        { text: "Dialysis Services", value: '3' },
        { text: "Emergency Services", value: '4' },
        { text: "Long Term Care Facility/Assisted Living", value: '5' },
        { text: "Hospital", value: '6' },
        { text: "Home Care", value: '7' },
        { text: "Other Health Care", value: '8' },
      ],
    },
  },
  {
    questionId: "caregiver",
    questionNo: 5,
    questionText: "I am a caregiver to:",
    optionDetails: {
      type: CONTROLS.multiSelect,
      options: [
        { text: "Children who live at home", value: 1 },
        { text: "Aging Parent(s)", value: 2 },
        { text: "High Risk Family Member", value: 3 },
        { text: "I am not a caregiver", value: 4 },
      ],
    },
  },
];

// let messageData = {
//   isSuccess: false,
//   submitMessage: '',
// };

const AboutMe = (props) => {
  // const [userData, setuserData] = useState(null);
  const [answerData, setAnswerData] = useState({
    healthcareFacility: null,
    leftHealthcarePosition: null,
    healthcareRole: 1,
    experienceInHealthcare: [],
    caregiver: 1,
  });
  const [isLoading, setisLoading] = useState(false);
  const messageData = useRef({
    isSuccess: false,
    submitMessage: "",
  });

  const { meta, setMeta } = useContext(MetaContext);

  useEffect(() => {
    getUserHealthCareData().then((data) => {
      // setuserData(data);

      if (data && data.hasOwnProperty("healthcareFacility")) {
        try {
          data = convertToStringItems(data);

          const ansData = {
            healthcareFacility: _.get(data, "healthcareFacility", null),
            leftHealthcarePosition: _.get(data, "leftHealthcarePosition", null),
            healthcareRole: _.get(data, "healthcareRole", null),
            experienceInHealthcare: convertToStringItems(_.get(data, "experienceInHealthcare", [])),
            caregiver: _.get(data, "caregiver", null),
          };

          setAnswerData(ansData);
        } catch (e) { }
      }
    });

    const metaData = {
      title: "PAM | Professional Profile",
      url: window.location.href,
    }
    setMeta({ ...meta, ...metaData });

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataChangesHandler = (data) => {
    let tempData = _.cloneDeep({ ...answerData });
    let id = data.id;

    console.log(tempData, data)

    switch (data.type) {
      case CONTROLS.radio:
      case CONTROLS.select:
        tempData[id] = data.answer;
        break;

      case CONTROLS.multiSelect:
        if (tempData[id].length > 0) {
          let answ = new Set(tempData[id]);

          if (answ.has(data.answer)) answ.delete(data.answer);
          else answ.add(data.answer);

          tempData[id] = [...answ];
        } else {
          tempData[id] = [data.answer];
        }
        break;
      case CONTROLS.singleSelect:
        tempData[id] = data.answer;
        break;
      default: ;
    }

    setAnswerData(tempData);
  };

  const getAnswer = (questionId, type) => {
    if (answerData.hasOwnProperty(questionId)) {

      return answerData[questionId] != null ? answerData[questionId] : null;
    }

    return type === CONTROLS.multiSelect ? [] : "";
  };

  const onSubmithandler = async () => {
    setisLoading(true);
    messageData.current = {
      isSuccess: false,
      submitMessage: "",
    };
    updateUserHealthCareData({
      healthcareFacility: getAnswer("healthcareFacility"),
      leftHealthcarePosition: getAnswer("leftHealthcarePosition"),
      healthcareRole: getAnswer("healthcareRole"),
      experienceInHealthcare: getAnswer("experienceInHealthcare"),
      caregiver: getAnswer("caregiver"),
    })
      .then((data) => {
        messageData.current = {
          isSuccess: true,
          submitMessage: "Data saved successfully",
        };
        setisLoading(false);
      })
      .catch((e) => {
        messageData.current = {
          isSuccess: false,
          submitMessage: e,
        };
        setisLoading(false);
      });
  };

  return (
    <>
      <ContainerBox className="container">
        <Grid container direction="row" >
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <ContentHeader>
              <Box className="titleContainer c-b">
                <span className="title">About Me</span>
              </Box>
            </ContentHeader>
            <Box className="aboutMeDesc">
              We take your privacy seriously and will never share your information.
              This information helps us to <br /> understand the envionment & daily
              stressors in your life. This helps us to provide the right tools for
              you.
            </Box>
            <Box className="">
              <Box className="mb-20">
                <Box className="titleContainer c-b">
                  <span className="hempMeTitle">Help Me Find The Right Tools</span>
                </Box>
                {formData.map((i) => (
                  <Box className={`${i.questionNo === 1 && "que_one"} que_card`} key={i.questionId}>
                    <Question
                      questionId={i.questionId}
                      questionNo={i.questionNo}
                      questionText={i.questionText}
                      optionDetails={i.optionDetails}
                      selectedAnswer={getAnswer(i.questionId, i.optionDetails.type)}
                      onChange={dataChangesHandler}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {messageData.current.submitMessage !== "" ? (
              <TAMAlert
                kind={messageData.current.isSuccess ? "success" : "error"}
                message={messageData.current.submitMessage}
              />
            ) : null}
            <div className="about_button">
              <ButtonWrapper
                variant="contained"
                color="primary"
                type="button"
                onClick={onSubmithandler}

              >
                {isLoading ? <CircularProgress size="2.5rem" /> : "Submit"}
              </ButtonWrapper>
            </div>
          </Grid>
        </Grid>
      </ContainerBox>
    </>
  );
};

export default withRouter(AboutMe);
