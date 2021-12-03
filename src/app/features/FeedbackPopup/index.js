import React, { useState, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { Box, Grid, CircularProgress, RadioGroup } from '@material-ui/core';
import * as yup from "yup";

import RadioWithColor from "app/tamComponents/radio-w";

import {
  PopUp,
  ContentWrapper,
  MessageText,
  FtTextArea
} from 'app/features/FeedbackPopup/FeedbackPopup.style';
// import CustomSelect from "app/tamComponents/select";


import {
  CancelButton,
} from 'app/tamComponents/ToolsCard/tool-detail/tool-rating/style';

import {
  LoginLabel,
  LoginButton,
  LoginTextFieldWrapper,
} from 'app/features/login/LoginPage.styles';

import { AnswerNormalText } from "app/features/faqs/FAQPage.styles";
import TAMAlert from 'app/tamComponents/alert/TAMAlert';

import popup_close from 'app/shared/assets/images/popup_close.svg';

import { submitFeedback, submitLoggedInFeedback } from './FeedbackService';
import { useAuth } from 'app/features/registration/authService';

export const feedbackType = [
  { value: "1", text: "Report Issue" },
  { value: "2", text: "Feedback" },
  { value: "3", text: "Suggestion" },
  { value: "4", text: "Question" },
];

export default function FeedbackPopUp(props) {
  const [scroll] = useState('paper');
  const [userData, setUserData] = useState(null);
  const authUser = useAuth();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      setUserData(data);
    }
  }, [])


  const handleClose = () => {
    props.setFeedback(false);
  };

  // console.log("userData::::", userData);

  const feedbackValidationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    name: yup
      .string("Enter your name")
      .required("Name is required"),
    type: yup
      .string("Enter your feedback type")
      .required("Feedback type is required"),
    suggestion: yup
      .string("Enter your suggestion")
      .required("Suggestion is required"),
  });

  const intialValues = useMemo(() => {
    // console.log(userData);
    if (userData)
      return {
        name: userData.name,
        email: userData.email,
        type: "",
        suggestion: "",
      };
    else
      return {
        name: "",
        email: "",
        type: "",
        suggestion: "",
      };
  }, [userData]);

  console.log("intialValues", intialValues, authUser)

  const feedback = useFormik({
    initialValues: intialValues,
    validationSchema: feedbackValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log({
        name: values.name,
        email: values.email,
        type: values.type,
        suggestion_type: values.suggestion,
      })
      setLoadingStatus(true);
      const payload = {
        name: values.name,
        email: values.email,
        suggestion_type: Number(values.type),
        description: values.suggestion,
      };

      authUser.isAuthenticated ?
        submitLoggedInFeedback(payload)
          .then(() => {
            setLoadingStatus(false);

            setStatus('success');
            setTimeout(() => {
              setStatus('');
              handleClose();
            }, [3000]);
          })
          .catch((msg) => {

          })
        : submitFeedback(payload)
          .then(() => {
            setLoadingStatus(false);

            setStatus('success');

            setTimeout(() => {
              setStatus('');
              handleClose();
            }, [3000])
          })
          .catch((msg) => {

          })
    }
  });

  // const scrollTop = (id) => {

  //   var topScroll = document.getElementById(id).offsetTop - 50;

  //   console.log("topScroll", topScroll);
  //   document.body.scrollTop = topScroll;
  //   document.documentElement.scrollTop = topScroll;
  // }

  useEffect(() => {
    const errorKeys = Object.keys(feedback.errors);
    console.log("error:", feedback.errors, errorKeys)

    if (errorKeys.length && feedback.submitCount) {
      setStatus('error');

      setTimeout(() => {
        setStatus('')
      }, 5000);
      // scrollTop(errorKeys[0]);
    }
  }, [feedback.errors, feedback.submitCount]);

  // const customValidationCheck = (values) => {
  //   console.log('value', values)
  //   if (!feedback.type && !feedback.suggestion) {
  //     setStatus('error');

  //     setTimeout(() => {
  //       setStatus('')
  //     }, 5000);
  //   }
  // }

  return (
    <PopUp
      className="pop-up-modal"
      open={true}
      scroll={scroll}
      onClose={handleClose}
      disableScrollLock={false}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >

      <ContentWrapper className="popup_content_wrapper">


        {/* <Box textAlign="right" className="donate-img">
          <img onClick={() => { handleClose() }} src={popup_close} alt="popup close" />
          <CancelButton onClick={() => { handleClose() }}>
          </CancelButton>
        </Box> */}

        <div className="feed-back-popup">
          <Box textAlign="right" className="">
            <img src={popup_close} alt="popup close" className="feed-img" onClick={() => { handleClose() }} />
            <CancelButton className="" >
            </CancelButton>
          </Box>
        </div>
        <MessageText className="left-sided">
          Your feedback will help us improve PAM for you and others like you. We appreciate you taking the time to let us know what’s working well, what’s not working, and what you’d like to see in the future from PAM!
        </MessageText>

        <form onSubmit={feedback.handleSubmit}>
          <Grid className="feedback-input-group" item lg={12} md={12} sm={12} xs={12} >
            <LoginLabel htmlFor="name">
              <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>Name</Grid>
                <Grid className="star_input" item>&nbsp;*</Grid>
              </Grid>
            </LoginLabel>
            <LoginTextFieldWrapper
              required
              fullWidth
              id="name"
              name="name"
              disabled={userData?.name}
              className="feedback-input"
              //label="Email(this is your username)"
              value={feedback.values.name}
              onChange={feedback.handleChange}
              error={feedback.errors.name}
              helperText={feedback.touched.name && feedback.errors.name}
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>

          <Grid className="feedback-input-group" item lg={12} md={12} sm={12} xs={12} >
            <LoginLabel htmlFor="registrationEmail">
              <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>Email address</Grid>
                <Grid className="star_input" item>&nbsp;*</Grid>
              </Grid>
            </LoginLabel>
            <LoginTextFieldWrapper
              fullWidth
              id="email"
              name="email"
              disabled={userData?.email}
              className="feedback-input"
              //label="Email(this is your username)"
              value={feedback.values.email}
              onChange={feedback.handleChange}
              error={feedback.touched.email && Boolean(feedback.errors.email)}
              helperText={feedback.touched.email && feedback.errors.email}
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>

          <Grid className="feedback-input-group" item lg={12} md={12} sm={12} xs={12}>
            <LoginLabel htmlFor="type">
              <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>Type</Grid>
                <Grid className="star_input" item>&nbsp;*</Grid>
              </Grid>
            </LoginLabel>

            <div className="type-options">
              <RadioGroup
                id="type"
                name="type"
                row
                onChange={feedback.handleChange}
                value={feedback.values.type}
              >
                {feedbackType.map((item) => {
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

            {/* <CustomSelect
              id="type"
              name="type"
              placeholder="Select appropriate option"
              disableUnderline
              fullWidth
              options={feedbackType}
              value={feedback.values.type}
              onBlur={() => feedback.setFieldTouched('type', true)}
              error={feedback.touched.type && Boolean(feedback.errors.type)}
              helperText={feedback.touched.type && feedback.errors.type}
              onChange={feedback.handleChange}
            /> */}
          </Grid>

          <div className="feedback-input-group">
            <LoginLabel htmlFor="suggestion">
              <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>Message</Grid>
                <Grid className="star_input" item>&nbsp;*</Grid>
              </Grid>
            </LoginLabel>
            <FtTextArea
              id="suggestion"
              name="suggestion"
              className="input_radius add_input_wrapper example_text_area example_text_area_five example_text_area_step_three"
              placeholder="Type your message"
              value={feedback.values.suggestion}
              error={feedback.touched.suggestion && Boolean(feedback.errors.suggestion)}
              helperText={feedback.touched.suggestion && feedback.errors.suggestion}
              onChange={feedback.handleChange}
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
            />
          </div>

          <AnswerNormalText className="feedback-text">
            Feel free to reach out on <a href="mailto:pauseamoment@stanford.edu" className="text-underline font-weight-bold feedback-text-bold">pauseamoment@stanford.edu</a> with any additional feedback or questions you have.
          </AnswerNormalText>

          {status === "error" ? (
            <TAMAlert key={'reg_error'} kind="error" message={"All fields are required."} />
          ) : status === "success" ? (
            <TAMAlert
              key={'reg_success'}
              kind="success"
              message={`Thank you for sharing your response.`}
            />
          ) : null}

          <Grid className="feedback-input-group send-feedback-btn" item lg={12} md={12} sm={12} xs={12}>
            <LoginButton variant="contained" disabled={false} type={'submit'}>
              {loadingStatus ? <CircularProgress size="2.5rem" /> : 'Send'}
            </LoginButton>
          </Grid>
        </form>

      </ContentWrapper>
    </PopUp>
  );
}
