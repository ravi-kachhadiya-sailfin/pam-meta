import { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { throttle } from 'lodash';

import { Box, Grid, Step, StepConnector, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TAMAlert from "app/tamComponents/alert/TAMAlert";
import back_arrow from "../../shared/assets/images/understand_arrow.svg";
import button_arrow_right from "../../shared/assets/images/button_arrow_right.svg";
import button_arrow_left from "../../shared/assets/images/button_arrow_left.svg";

import {
  Layout,
  BackLink,
  MainTitle,
  DescLine,
  StepperWrapper,
  StepperDetails,
  PageTitle,
  SeparatorLine,
  GreetingMsg,
  PageContentWrapper,
  BottomControlWrapper,
} from './style';
import BoxWithBg from 'app/tamComponents/box-with-bg';
import CustomButton from 'app/tamComponents/button';
import Question from './Question';
import TraumaOne from './TraumaStep1';
import TraumaTwo from './TraumaStep2';
import { getAssesmentQuestions, submitAssesment, submitFullAssesment, getReAssesmentQuestions } from './understandingYouService';
import { MetaContext } from 'app/shared/context/MetaProvider';

import { defaultMetaData, getDeviceSize } from 'app/shared/Utils/index';


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

const UnderstandingYou = () => {
  const history = useHistory();
  //  0 = INITIAL ASSESSMENT , 1 = FULL ASSESSMENT
  const [assesmenttype, setAssesmentType] = useState(0);


  const [step, setStep] = useState(1);
  const [substep, setSubStep] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [curquestions, setCurQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [traumaOne, updateTraumaOne] = useState([])
  const [traumaTwo, updateTraumaTwo] = useState("")
  const [traumaOther, updateTraumaOther] = useState("")
  const [numberOfQuestions, setNumberOfQuestions] = useState(0)

  const [fullquestions, setFullQuestions] = useState([]);
  const [totalSteps, setTotalStep] = useState(0);
  const [fullSteps, setFullStep] = useState(1);
  const [fullCurquestions, setFullCurQuestions] = useState([]);
  const [fullAnswers, setFullAnswer] = useState([]);
  const [numberOfFullQuestions, setNumberOfFullQuestions] = useState(0)
  const [errorOpen, setErrorOpen] = useState(false)
  const [topScroll, setTopScroll] = useState(400);
  const { meta, setMeta } = useContext(MetaContext);

  let deviceCode = getDeviceSize();

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    if (['md', 'sm', 'xs'].indexOf(deviceCode) === 0) {
      setTopScroll(280);
    } else if (['md', 'sm', 'xs'].indexOf(deviceCode) === 1) {
      setTopScroll(250);
    } else if (['md', 'sm', 'xs'].indexOf(deviceCode) === 2) {
      setTopScroll(250);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  // console.log("top :", topScroll)

  const nextStepHandler = () => {
    console.log("data: ", questions, answers, curquestions)

    const queValidation = curquestions.filter(x => answers.find(ans => ans.id === x.id)).length === curquestions.length;

    console.log("queVal", queValidation);
    if (queValidation) {
      if (step < 5) {
        console.log(step, traumaOne, traumaOne.length);
        if (step !== 3 || traumaOne.length !== 0) {
          if (step === 3 && traumaOne.length < 2) {
            setStep(step + 2);
          } else {
            setStep(step + 1);
          }
        } else {
          let trQut = questions[2].question
          trQut.forEach((q, i) => {
            trQut[i].questionOptions[0].selected = true
          })
          questions[2].question = trQut
          setQuestions(questions)
          submitHandler("nt")
        }
        if (step === 0) {
          setCurQuestions(questions[0].question);
        } else if (step === 1) {
          setCurQuestions(questions[1].question);
        } else if (step === 3 && traumaOne.length === 1) {
          setStep(5);
          setCurQuestions(questions[2].question);
        } else if (step === 4) {
          setCurQuestions(questions[2].question);
        }
      } else {
        if (substep === 1) {
          setSubStep(substep + 2)
        } else {
          setSubStep(substep + 1)
        }
      }
      scrollTop();
    } else {
      setErrorOpen(true)
      setTimeout(() => {
        setErrorOpen(false)
      }, 5000)
    }
  };

  const backStepHandler = () => {
    if (step > 1) {
      setStep(step - 1);
      if (step === 2) {
        setCurQuestions(questions[0].question);
      } else if (step === 3) {
        setCurQuestions(questions[1].question);
      } else if (step === 5 && (traumaOne.length === 0 || traumaOne.length === 1)) {
        setStep(3)
        setCurQuestions(questions[1].question);
      } else if (step === 5) {
        setCurQuestions(questions[1].question);
      }
    }

    scrollTop();
  };

  const submitHandler = (type) => {
    if (!!type && type === "nt") {
      if (answers.length !== 4) {
        setErrorOpen(true)
        setTimeout(() => {
          setErrorOpen(false)
        }, 5000)
        return false
      }
    } else if (numberOfQuestions !== answers.length) {
      setErrorOpen(true)
      setTimeout(() => {
        setErrorOpen(false)
      }, 5000)
      return false
    }
    const body = {
      "userTraumas": traumaOne,
      "maxTrauma": traumaTwo === "Other trauma (Please describe briefly):" ? traumaOther : traumaTwo,
      "assessment": questions
    }
    submitAssesment(body).then((res) => {
      if (res.length > 0) {
        setFullQuestions(res)
        setAssesmentType(1)
        setFullCurQuestions(res[0].question);
        setTotalStep(res.length)
        let totalCount = 0
        res.forEach((typ, i) => {
          totalCount += typ.question.length
        })
        setNumberOfFullQuestions(totalCount)
      } else {
        localStorage.setItem("prevPage", "recommendation")
        history.push('/recommendation')
      }
    });

    scrollTop();
  }

  const submitFullHandler = () => {
    if (numberOfFullQuestions !== fullAnswers.length) {
      setErrorOpen(true)
      setTimeout(() => {
        setErrorOpen(false)
      }, 5000)
      return false
    }

    const body = {
      "reassess": assesmenttype === 2,
      "assessment": fullquestions
    }
    submitFullAssesment(body).then((res) => {
      localStorage.setItem("prevPage", "recommendation")
      history.push('/recommendation')
    })
  }

  const getAnswer = (id) => {
    return answers.find((answer) => answer.id === id)?.answer;
  };

  const getFullAnswer = (id) => {
    return fullAnswers.find((answer) => answer.id === id)?.answer;
  };

  const saveAnswer = (id, answer) => {
    let curStepIndex = step - 1
    curStepIndex = curStepIndex === 4 ? 2 : curStepIndex
    let qt = questions
    let qtIndex = qt[curStepIndex].question.findIndex((elem) => { return elem.id === id })
    qt[curStepIndex].question[qtIndex].questionOptions.forEach((element, i) => {
      if (element.id === answer) {
        element.selected = true
      } else {
        delete element.selected
      }
    });
    const tmpAnswers = [...answers];
    const iCurrentAnswer = tmpAnswers.findIndex((answer) => answer.id === id);

    if (iCurrentAnswer > -1) {
      tmpAnswers[iCurrentAnswer].answer = answer;
    } else {
      tmpAnswers.push({ id: id, answer: answer });
    }

    setAnswers([...tmpAnswers]);
  };

  const saveFullAnswer = (id, answer) => {
    let curStepIndex = fullSteps - 1
    let qt = fullquestions
    let qtIndex = qt[curStepIndex].question.findIndex((elem) => { return elem.id === id })
    qt[curStepIndex].question[qtIndex].questionOptions.forEach((element, i) => {
      if (element.id === answer) {
        element.selected = true
      } else {
        delete element.selected
      }
    });
    const tmpAnswers = [...fullAnswers];
    const iCurrentAnswer = tmpAnswers.findIndex((answer) => answer.id === id);

    if (iCurrentAnswer > -1) {
      tmpAnswers[iCurrentAnswer].answer = answer;
    } else {
      tmpAnswers.push({ id: id, answer: answer });
    }

    setFullAnswer([...tmpAnswers]);
  };

  const clearAllAnswers = () => {
    setAnswers([]);
  };
  const clearAllFullAnswers = () => {
    setFullAnswer([]);
  };

  const fetchData = () => {
    getAssesmentQuestions().then((res) => {
      setQuestions(res);
      let totalCount = 0
      if (res.length > 0) {
        setCurQuestions(res[0].question);
        res.forEach((typ, i) => {
          totalCount += typ.question.length
        })
        setNumberOfQuestions(totalCount)
      }
    });
  };

  useEffect(() => {
    if (window.location.pathname === "/reassesment") {
      getReAssesmentQuestions().then((res) => {
        if (res.length > 0) {
          setFullQuestions(res)
          setAssesmentType(2)
          setFullCurQuestions(res[0].question);
          setTotalStep(res.length)
          let totalCount = 0
          res.forEach((typ, i) => {
            totalCount += typ.question.length
          })
          setNumberOfFullQuestions(totalCount)
        } else {
          localStorage.setItem("prevPage", "recommendation")
          history.push('/recommendation')
        }
      })

      const metaData = {
        title: "PAM | Reassesment",
        url: window.location.href,
      }
      setMeta({ ...meta, ...metaData });

    } else {
      fetchData();

      const metaData = {
        title: "PAM | Understanding You",
        url: window.location.href,
      }
      setMeta({ ...meta, ...metaData });

    }

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setErrorOpen(false);
  }, [step])


  const scrollTop = () => {
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  const assessmentOneNextHandler = (back = false) => {
    // back button clicked
    if (back) {
      console.log("back", back)
      setFullCurQuestions(fullquestions[fullSteps - 2].question);
      setFullStep(fullSteps - 1);
      scrollTop();
    } else {
      // next button clicked
      console.log("queVal else ...", assesmenttype);

      // check all questions answered by user
      const queValidation = fullCurquestions.filter(x => fullAnswers.find(ans => ans.id === x.id)).length === fullCurquestions.length;

      console.log("queVal", queValidation);

      // if answered then update step to next one, otherwise show an error
      if (queValidation) {
        setFullCurQuestions(fullquestions[fullSteps].question);
        setFullStep(fullSteps + 1);
        scrollTop();
      } else {
        setErrorOpen(true)
        setTimeout(() => {
          setErrorOpen(false)
        }, 5000);
      }
    }
  }

  console.log("fullCurquestions", step, assesmenttype, fullCurquestions, questions, curquestions, answers);
  return (
    <Layout className="understanding_you">
      <Grid className="container" direction="row"  >
        <Grid item lg={9} className="understanding_you_wrapper">
          <BackLink className="c-b cursor-p" onClick={() => { window.location.href = "/recommendation" }}>
            {/* <i className="fa fa-chevron-left"></i> */}
            <img src={back_arrow} alt="back_arrow" />
            <span>Back to the recommendations</span>
          </BackLink>

          <MainTitle>Understanding you</MainTitle>
          <DescLine>
            Answering some more in-depth questions will help us tailor recommendations even more. We can also use this
            information to help you track your progress.
          </DescLine>

          {assesmenttype === 0 &&
            <PageContentWrapper>
              <BoxWithBg >
                <Box>
                  <StepperWrapper activeStep={step} connector={<Connector />}>
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    {/* {questions.map(() => (
                <Step />
              ))} */}
                  </StepperWrapper>
                  <StepperDetails>
                    {/* <Box className="step_text step_text_details">PHQ 2 screening questions</Box> */}
                    <Box className="step_text">{`Step ${step} of ${5}`}</Box>
                  </StepperDetails>
                </Box>

                <Box>
                  {(step === 1 || step === 2) &&
                    <PageTitle>
                      Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem and then select one of the options to indicate how much you have been bothered by that problem in the past week.
                    </PageTitle>}
                  {(step === 3 || step === 4) &&
                    <PageTitle>
                      <b>Instructions:</b> This questionnaire asks about problems you may have had after a very stressful experience involving actual or threatened death, serious injury, or sexual violence. It could be something that happened to you directly, something you witnessed, or something you learned happened to a close family member or close friend.
                    </PageTitle>}
                  {step === 5 &&
                    <PageTitle>
                      Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem and then select one of the options to indicate how much you have been bothered by that problem in the past month.
                    </PageTitle>
                  }

                  {/* <PageTitle>Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem and then select one of the options to indicate how much you have been bothered by that problem in the past month. The options include not at all, a little bit, moderately, quite a bit, and extremely.</PageTitle> */}
                </Box>
                {step === 3 && <Box>
                  <TraumaOne traumaOneData={traumaOne} traumaOther={traumaOther} updateTraumaOne={(data, other) => { updateTraumaOne(data); updateTraumaOther(other); }} />
                </Box>}
                {step === 4 && <Box>
                  <TraumaTwo selectedTrauma={traumaTwo} updateTraumaTwo={(msg) => { updateTraumaTwo(msg); }} otherTrauma={traumaOther} traumaOptions={traumaOne} traumaOneData={traumaOne} updateTraumaOne={(data, other) => { updateTraumaOne(data); updateTraumaOther(other); }} />
                </Box>}
                <Box className="step_data_wrapper">
                  {(step !== 3 && step !== 4 && curquestions.map((item, index) => (
                    <>
                      <Question
                        type={step === 1 ? questions[0].slug : (step === 2 ? questions[1].slug : questions[2].slug)}
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        options={item.questionOptions}
                        answer={getAnswer(item.id)}
                        onChange={saveAnswer}
                      />
                      {index !== curquestions.length - 1 && <SeparatorLine className="divider_custom" />}
                    </>
                  )))}

                  <GreetingMsg>Thank you. Please continue to the next page.</GreetingMsg>
                  {errorOpen && <TAMAlert
                    kind={"error"}
                    message={"Please answer all of the questions to proceed further."}
                  />}
                </Box>
              </BoxWithBg>

              <BottomControlWrapper style={{ display: "flex" }}>
                {step !== 1 && (
                  <Box className="step_button">
                    <CustomButton
                      color="#0099ba"
                      onClick={backStepHandler}
                      // startIcon={<i class="fa fa-arrow-left" aria-hidden="true"></i>}
                      startIcon={<img src={button_arrow_right} alt="button_arrow_right" />}
                    >
                      Back
                    </CustomButton>
                  </Box>
                )}
                {step !== 5 && (
                  <Box className="step_button">
                    <CustomButton
                      color="#f19840"
                      onClick={nextStepHandler}
                      // endIcon={<i class="fa fa-arrow-left" aria-hidden="true"></i>}

                      endIcon={<img src={button_arrow_left} alt="button_arrow" />}
                    >
                      Continue
                    </CustomButton>
                  </Box>
                )}
                {step === 5 && (
                  <Box className="step_button">
                    <CustomButton
                      // disabled={numberOfQuestions !== answers.length ? true : false}
                      color="#f19840"
                      onClick={submitHandler}
                      endIcon={<img src={button_arrow_left} alt="button_arrow" />}
                    >
                      Continue
                    </CustomButton>
                  </Box>
                )}
              </BottomControlWrapper>
              <BottomControlWrapper className="clear-my-choices-wrapper ">
                <Box className="clear-my-choices text-underline" onClick={clearAllAnswers}>
                  Clear all my choices
                </Box>
              </BottomControlWrapper>
            </PageContentWrapper>
          }

          {assesmenttype === 1 &&
            <PageContentWrapper>
              <BoxWithBg>
                <Box>
                  <StepperWrapper activeStep={fullSteps} connector={<Connector />}>
                    <Step />
                    {fullquestions.map(() => (
                      <Step />
                    ))}
                  </StepperWrapper>
                  <StepperDetails>
                    <Box className="step_text">{`Step ${fullSteps} of ${totalSteps}`}</Box>
                  </StepperDetails>
                </Box>

                {/* <Box > */}
                {/* <PageTitle>{getPageTitle()}</PageTitle> */}
                {/* </Box> */}

                <Box className="step_data_wrapper">
                  {fullCurquestions.map((item, index) => (
                    <>
                      <Question
                        type={fullquestions[fullSteps - 1].slug}
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        options={item.questionOptions}
                        answer={getFullAnswer(item.id)}
                        onChange={saveFullAnswer}
                      />
                      {index !== fullCurquestions.length - 1 && <SeparatorLine className="divider_custom" />}
                    </>
                  ))}

                  <GreetingMsg>Thank you. Please continue to the next page.</GreetingMsg>
                  {errorOpen && <TAMAlert
                    kind={"error"}
                    message={"Please answer all of the questions to proceed further."}
                  />}
                </Box>
              </BoxWithBg>

              <BottomControlWrapper style={{ display: "flex" }}>
                {fullSteps !== 1 && (
                  <Box className="step_button">
                    <CustomButton
                      color="#0099ba"
                      onClick={() => { assessmentOneNextHandler(true) }}
                      // startIcon={<i class="fa fa-arrow-left" aria-hidden="true"></i>}
                      startIcon={<img src={button_arrow_right} alt="button_arrow" />}
                    >
                      Back
                    </CustomButton>
                  </Box>
                )}

                {fullSteps !== totalSteps && (
                  <Box className="step_button" >
                    <CustomButton
                      color="#f19840"
                      onClick={() => assessmentOneNextHandler(false)}
                      endIcon={<img src={button_arrow_left} alt="button_arrow" />}
                    >
                      Continue
                    </CustomButton>
                  </Box>
                )}
                {fullSteps === totalSteps && (
                  <Box className="step_button">
                    <CustomButton
                      // disabled={numberOfFullQuestions !== fullAnswers.length ? true : false}
                      color="#f19840"
                      onClick={() => { submitFullHandler(); }}
                      endIcon={<img src={button_arrow_left} alt="button_arrow" />}
                    >
                      Continue
                    </CustomButton>
                  </Box>
                )}
              </BottomControlWrapper>
              <BottomControlWrapper className="clear-my-choices-wrapper">
                <Box className="clear-my-choices text-underline" onClick={clearAllFullAnswers}>
                  Clear all my choices
                </Box>
              </BottomControlWrapper>

            </PageContentWrapper>

          }
          {assesmenttype === 2 &&
            <PageContentWrapper>
              <BoxWithBg>
                <Box>
                  <StepperWrapper activeStep={fullSteps} connector={<Connector />}>
                    <Step />
                    {fullquestions.map(() => (
                      <Step />
                    ))}
                  </StepperWrapper>
                  <StepperDetails>
                    <Box className="step_text">{`Step ${fullSteps} of ${totalSteps}`}</Box>
                  </StepperDetails>
                </Box>

                {/* <Box> */}
                {/* <PageTitle>{getPageTitle()}</PageTitle> */}
                {/* </Box> */}

                <Box className="step_data_wrapper">
                  {fullCurquestions.map((item, index) => (
                    <>
                      <Question
                        type={fullquestions[fullSteps - 1].slug}
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        options={item.questionOptions}
                        answer={getFullAnswer(item.id)}
                        onChange={saveFullAnswer}
                      />
                      {index !== fullCurquestions.length - 1 && <SeparatorLine className="divider_custom" />}
                    </>
                  ))}

                  <GreetingMsg>Thank you. Please continue to the next page.</GreetingMsg>
                  {errorOpen && <TAMAlert
                    kind={"error"}
                    message={"Please answer all of the questions to proceed further."}
                  />}
                </Box>
              </BoxWithBg>

              <BottomControlWrapper style={{ display: "flex" }}>
                {fullSteps !== 1 && (
                  <Box className="step_button">
                    <CustomButton
                      color="#0099ba"
                      onClick={() => { assessmentOneNextHandler(true) }}
                      // setFullCurQuestions(fullquestions[fullSteps - 2].question); setFullStep(fullSteps - 1); scrollTop();
                      startIcon={<img src={button_arrow_right} alt="button_arrow_right" />}
                    >
                      Back
                    </CustomButton>
                  </Box>
                )}

                {fullSteps !== totalSteps && (
                  <Box className="step_button">
                    <CustomButton
                      color="#f19840"
                      onClick={() => { assessmentOneNextHandler(false) }}
                      // setFullCurQuestions(fullquestions[fullSteps].question); setFullStep(fullSteps + 1); scrollTop(); }}
                      endIcon={<img src={button_arrow_left} alt="button_arrow" />}
                    >
                      Continue
                    </CustomButton>
                  </Box>
                )}
                {fullSteps === totalSteps && (
                  <Box className="step_button">
                    <CustomButton
                      // disabled={numberOfFullQuestions !== fullAnswers.length ? true : false}
                      color="#f19840"
                      onClick={() => { submitFullHandler(); }}
                      endIcon={<img src={button_arrow_left} alt="button_arrow" />}
                    >
                      Continue
                    </CustomButton>
                  </Box>
                )}
              </BottomControlWrapper>
              <BottomControlWrapper className="clear-my-choices-wrapper">
                <Box className="clear-my-choices text-underline" onClick={clearAllFullAnswers}>
                  Clear all my choices
                </Box>
              </BottomControlWrapper>

            </PageContentWrapper>
          }
        </Grid>
      </Grid>
    </Layout >
  );
};

export default UnderstandingYou;



