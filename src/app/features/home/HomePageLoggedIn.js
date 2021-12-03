import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { ToolsSectionWrapper } from "./HomePage.styles";
import {
  CardContentWrapper,
  CardsTitle,
  CardsWrapper,
  ClearALLButton,
  ContinueButton,
} from "app/tamComponents/cards/Cards.styles";
import MultiReactionCard from "app/tamComponents/cards/MultiReactionCard";
import SingleChoiceCard from "app/tamComponents/cards/SingleChoiceCard";
import TAMSlider from "app/tamComponents/slider/Slider";
// import { CardIconButton } from "app/tamComponents/ToolsCard/tool-detail/style";
import { Box, Divider, Grid } from '@material-ui/core';
import { useHistory } from "react-router";
import Activity from '../../tamComponents/activity/activity'
import card_arrow from '../../shared/assets/images/check-arrow.svg';
import Caraousel from 'app/tamComponents/carouselToolsCard';
import CarouselItem from 'app/tamComponents/carouselToolsCard/CarouselItem';
import StarRating from 'app/tamComponents/StarRating';

import { throttle } from 'lodash';

// import ScrollToTop from "app/shared/Utils/ScrollToTop";
import {
  saveInitialScreener,
  saveInitialScreenerLoggedIn,
} from "app/shared/services/initialScreener";
import { useAuth } from "../registration/authService";
import { ROUTES } from "app/Routes";
// import { ToolContainer} from '../tools/ToolsPageComponent.styles';
import ToolsCard from '../../tamComponents/ToolsCard';

import { getRecommendedTools, getFavouriteTools } from '../tools/ToolsServices'
import { getRecentActivity, getByDateData, getRecentActivityText } from '../MyProgress/MyProgressService'
import { convertTestimonialArray, getDeviceSize } from 'app/shared/Utils/index';
import TAMAlert from 'app/tamComponents/alert/TAMAlert';

import "bootstrap/dist/css/bootstrap.min.css";

const HomePageLoggedOut = (props) => {
  const history = useHistory();
  const auth = useAuth();
  const [recentActivity, setRecentActivity] = useState([])
  const [btmType, setBtmType] = useState(1)
  const [recTools, setRecTools] = useState(null)
  const [fvtTools, setFvtTools] = useState(null)
  const [byDate, setByDate] = useState([])
  const [changeBool, setChangeBool] = useState(false)
  const [distressScore, setDistressScore] = useState(0)
  const [actText, setActText] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const [assessment, setAssesment] = useState(false);

  // const [loading, setLoading] = useState(true)

  let deviceCode = getDeviceSize();
  const [, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  const fvtToolsDataArray = convertTestimonialArray(fvtTools, true, 3);
  const recToolsDataArray = convertTestimonialArray(recTools, true, 3);

  useEffect(() => {
    getRecentActivity().then((data) => {
      let list = data.data.list
      list = list.slice(0, 4)
      setRecentActivity(list)
    })
    getRecentActivityText().then((res) => {
      if (res.statusCode === 200) {
        setActText(res.data.text)
        setAssesment(res.data.assessment)
      }
    })
    getByDateData().then((data) => {
      setByDate(data.data.list)
    })
    getRecommendedTools().then((data) => {
      let qtools = data.data.quickTools.list
      let stools = data.data.specializedTools.list
      let allTools = qtools.concat(stools)
      setRecTools(allTools)
    })
    getFavouriteTools().then((data) => {
      setFvtTools(data.data.list)
    })
  }, []);

  const ititalScreenSubmit = async () => {
    if (sessionStorage.getItem('feelingEmotion')) {
      if (auth.isAuthenticated) {
        saveInitialScreenerLoggedIn().then((toolsData) => {
          localStorage.setItem("toolData", JSON.stringify(toolsData))
          localStorage.setItem("prevPage", "home")
          history.push(ROUTES.recommendation, { toolsData });
          window.scrollTo(0, 0);
        });
      } else {
        saveInitialScreener().then((toolsData) => {
          localStorage.setItem("toolData", JSON.stringify(toolsData))
          localStorage.setItem("prevPage", "home")
          history.push(ROUTES.recommendation, { toolsData });
          window.scrollTo(0, 0);
        });
      }
    } else {
      setErrorMessage('Please select your current mood!');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  }

  console.log("btmType", btmType, byDate);

  return (
    <>
      <ToolsSectionWrapper id="find-right-tools">
        <div className="container">
          <div className="row login_after_row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 login_after_left">
              <CardsTitle>LET’S CHECK BACK IN</CardsTitle>
              <MultiReactionCard
                number={1}
                changeBool={changeBool}
                question={" How are you feeling?"}
                description={"Pick your current mood"}
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

              <CardsWrapper className="rate_card"
                bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}
              >
                <div className="card-header">
                  <span className="card-number">2</span>
                  <span className="card-title">
                    Please rate your level of distress (at this time)?
                  </span>
                </div>
                <CardContentWrapper className="rate_level"
                  bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}
                >
                  <TAMSlider distressScore={distressScore} setDistressScore={(val) => { setDistressScore(val) }} changeBool={changeBool} />
                  <div className="slider_level">
                    <div className="slider_level_text">None</div>
                    <div className="slider_level_text">Moderate</div>
                    <div className="slider_level_text">Extreme</div>
                  </div>
                </CardContentWrapper>
              </CardsWrapper>
              <SingleChoiceCard
                changeBool={changeBool}
                number={3}
                question={"Have you experienced a traumatic event?"}
                description={
                  "This may include: life-threatening experiences, witnessing deaths or death of a loved " +
                  "one or colleague, significant exposure to COVID-related deaths or complications, " +
                  "physical or sexual assault."
                }
                choices={[
                  {
                    id: "hasTraunmaticEvent",
                    title: "Yes",
                    value: "hasTraunmaticEvent",
                    name: "hasTraunmaticEvent",
                  },
                  {
                    id: "hasNotTraunmaticEvent",
                    title: "No",
                    value: "hasNotTraunmaticEvent",
                    name: "hasNotTraunmaticEvent",
                  },
                ]}
              />

              {errorMessage && (
                <div className="row">
                  <div className="col-xs-12">
                    <TAMAlert key={'error_message'} kind="error" message={errorMessage} />
                  </div>
                </div>
              )
              }

              <div className="row">
                <div className="col-xs-12">
                  {/*<input type="button" className="continue-button" value="Continue"/>*/}
                  <ContinueButton
                    onClick={async () => {
                      ititalScreenSubmit()
                    }}
                  />
                </div>
                <div className="col-xs-12 text-center text-underline">
                  <ClearALLButton
                    onClick={() => {
                      window.scroll({
                        top: 500,
                        behavior: "smooth",
                      });
                      sessionStorage.setItem("hasTraumaticEvent", "No");
                      sessionStorage.setItem("distressLevel", 0);
                      sessionStorage.setItem("feelingEmotion", "");
                      setChangeBool(!changeBool)
                      setDistressScore(0)
                    }}
                  >
                    Clear all my choices
                  </ClearALLButton>
                </div>
              </div>
              {/* <Cards /> */}
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <CardsTitle className="last_activity">
                    <div className="" style={{ display: "flex", alignItems: "center" }}>
                      <Box className="tools-right-for-me-title last_activity_main">MY LAST ACTIVITY</Box>
                      <Box className="cursor-p">
                        <i className="fa fa-chevron-right card_arrow_icon"></i>
                        <img className="mobile_arrow_two" src={card_arrow} alt="card_arrow" />
                      </Box>
                    </div>
                    <div className="last_activity_text" style={{ color: "#09425A", display: "flex", }}>
                      <Box className="tools-right-for-me-title">{actText}</Box>
                    </div>
                  </CardsTitle>
                </div>
              </div>
              <div className="row my_last_activity_row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 my_last_activity_col">

                  {byDate.map((elm, i) => {
                    let date = new Date(elm.date).toDateString()
                    if (i !== 0) {
                      return false
                    }
                    return <CardsWrapper className="activate_bucket" >
                      <div className="activate_bucket_scroll">
                        <CardContentWrapper className="bucket_wrapper">
                          <div className="activate_bucket_title" style={{ color: "#09425A", fontWeight: "600" }}>{date}
                          </div>
                          {elm.tools.map((tool) => {
                            return <>
                              <Divider style={{ backgroundColor: "#F19840", }} />
                              <div className="row activate_bucket_row" >
                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                  <div className="bucket_tools_title" onClick={() => {
                                    console.log("tools", tool)
                                    if (tool.slug === "flexible-thinking") {
                                      history.push({ pathname: ROUTES.flexi + "/" + tool.toolId, state: { id: tool.toolID } });
                                    } else if (tool.slug === "find-a-solution") {
                                      history.push({ pathname: ROUTES.probsolve + "/" + tool.toolId, state: { id: tool.toolID } });
                                    } else if (tool.slug === "fill-your-bucket") {
                                      history.push({ pathname: ROUTES.fillbucket + "/" + tool.toolId, state: { id: tool.toolID } });
                                    } else {
                                      history.push({ pathname: ROUTES.tool_detail + "/" + tool.toolId, state: { id: tool.toolID } });
                                    }
                                  }} style={{ cursor: "pointer" }}>{tool.title}</div>
                                  {/* <div style={{ fontSize: "12px", color: "#A9BDC5" }}>Session 20</div> */}
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 by_date_rate_heart_col" style={{ textAlign: "right" }}>
                                  {/* <CardRating className="home_after_login_rate mt-12"
                                    disabled={true}
                                    name={"demo1"}
                                    defaultValue={3}
                                    size="large"
                                    onChange={(e, value) => {
                                    }}
                                  /> */}
                                  <StarRating
                                    disabled={true}
                                    className="mt-12 home_after_login_rate date-by-star-rating"
                                    name={"demo1"}
                                    defaultValue={tool.rating || 0}
                                    size="large"
                                    onChange={(e, value) => {
                                    }} />
                                  {/* <div className="bucket_heart" style={{ textAlign: "right" }}>
                                    <CardIconButton aria-label="favorite">
                                      <i className="fa fa-heart favorite-icon"></i>
                                    </CardIconButton>
                                  </div> */}
                                </div>
                              </div>
                            </>
                          })
                          }
                        </CardContentWrapper>
                      </div>
                    </CardsWrapper>

                  })}

                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 my_last_activity_col">
                  {!!recentActivity && recentActivity.length > 0 && <Activity activity={recentActivity[0]} />}
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 login_after_right">
              {/* <ToolsTabs title={TITLE} tabsList={TABLIST} /> */}
              {assessment &&
                <CardsWrapper className="after_login_card">
                  <CardContentWrapper className="login_after_card_body">
                    <CardsTitle className="login_after_card_wrapper">
                      <div className="login_after_card_row card-text">
                        <Box className="tools-right-for-me-title"> Pause A Moment to re-assess so you can track your progress and get even more personalized recommendations.</Box>
                        <Box className="cursor-p login_after_card_arrow" style={{ "width": "10%", fontSize: "25px", paddingRight: "0px", paddingTop: "2rem" }}>
                          <i className="fa fa-chevron-right card_arrow_icon" onClick={() => { window.location.href = "/reassesment" }}></i>
                          <img className="mobile_arrow" src={card_arrow} alt="card_arrow" onClick={() => { window.location.href = "/reassesment" }} />
                        </Box>

                      </div>
                      <div className=" card-text-blue ">
                        <Box className="text-underline" onClick={() => { window.location.href = "/reassesment" }}>
                          Re-assess yourself.
                        </Box>
                      </div>
                    </CardsTitle>
                  </CardContentWrapper>
                </CardsWrapper>
              }
              <CardsWrapper className="after_login_card" >
                <CardContentWrapper className="login_after_card_body">
                  <CardsTitle className="login_after_card_wrapper">
                    <div className="login_after_card_row card-text">
                      <Box className="tools-right-for-me-title">Check your progress to keep track of what's helping</Box>
                      <Box className="cursor-p login_after_card_arrow" >
                        <i className="fa fa-chevron-right card_arrow_icon" onClick={() => { window.location.href = "/my-progress" }}></i>
                        <img className="mobile_arrow" src={card_arrow} alt="card_arrow" onClick={() => { window.location.href = "/my-progress" }} />
                      </Box>

                    </div>
                    <div className="card-text-blue" >
                      <Box className="text-underline" onClick={() => { window.location.href = "/my-progress" }}>
                        Go to My Progress
                      </Box>
                    </div>
                  </CardsTitle>
                </CardContentWrapper>
              </CardsWrapper>
              <CardsWrapper className="after_login_card" >
                <CardContentWrapper className="login_after_card_body">
                  <CardsTitle className="login_after_card_wrapper">
                    <div className="login_after_card_row card-text">
                      <Box className="tools-right-for-me-title">It's good to do this every 1-2 months to make sure you're finding the tools that are the best fit.</Box>
                      <Box className="cursor-p login_after_card_arrow" >
                        <i className="fa fa-chevron-right card_arrow_icon" onClick={() => { window.location.href = "/understanding-you" }}></i>
                        <img className="mobile_arrow" src={card_arrow} alt="card_arrow" onClick={() => { window.location.href = "/understanding-you" }} />
                      </Box>

                    </div>
                    <div className=" card-text-blue">
                      <Box className="text-underline" onClick={() => { window.location.href = " /understanding-you" }}>
                        Start fresh with a full assessment.
                      </Box>
                    </div>
                  </CardsTitle>
                </CardContentWrapper>
              </CardsWrapper>
            </div>
          </div>
          <Grid container className="tab_home" direction="row" item lg={12} md={12} sm={12} xs={12} style={{ marginTop: 30 }}>
            <CardsTitle className={`${btmType === 1 ? "activetab" : "tab_text"}`} onClick={() => { setBtmType(1) }} style={btmType === 1 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 1 ? <u>MY FAVORITE TOOLS </u> : "MY FAVORITE TOOLS"} </CardsTitle>
            <CardsTitle className={`${btmType === 2 ? "activetab " : "tab_text"}`} onClick={() => { setBtmType(2) }} style={btmType === 2 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 2 ? <u>BY DATE </u> : "BY DATE"}  </CardsTitle>
            <CardsTitle className={`${btmType === 3 ? "activetab" : "tab_text"}`} onClick={() => { setBtmType(3) }} style={btmType === 3 ? { marginRight: 40 } : { marginRight: 40, color: "#A9BDC5" }}>{btmType === 3 ? <u>RECOMMENDED TOOLS </u> : "RECOMMENDED TOOLS"} </CardsTitle>
          </Grid>


          <div className="tab_data">
            {btmType === 1 && <>

              {fvtToolsDataArray === null &&
                <Box className="no-Tool-found">
                  <span>Loading...</span>
                </Box>
              }

              {fvtToolsDataArray && fvtToolsDataArray.length > 0 && (
                // <ToolContainer>
                <div className="row main_tools_slider_row">
                  <div className="col-md-12 sliderContainer main_tools_slider">
                    <Caraousel
                      indicatorIconButtonProps={{
                        style: {
                          border: '1px solid #a9bdc5',
                        },
                      }}
                      navButtonsAlwaysInvisible={!(fvtToolsDataArray?.length > 1)}
                      navButtonsAlwaysVisible={fvtToolsDataArray?.length > 1}
                      withCustomButton={true}
                    >
                      {fvtToolsDataArray
                        && fvtToolsDataArray.map((item, index) => {
                          return (
                            <CarouselItem allItems={fvtToolsDataArray} data={item.Items[0]} desktopMode={true} length={2} itemLength={3} index={index} key={index} component={ToolsCard} />
                          );
                        })}
                    </Caraousel>
                  </div>
                </div>
                // </ToolContainer>
              )}
              {fvtToolsDataArray && fvtToolsDataArray?.length === 0 && (
                <Box className="no-Tool-found">
                  <span>No tools found</span>
                </Box>
              )}
            </>}
            {btmType === 2 &&
              <Grid className="by_date_row" container direction="row" item lg={12} md={12} sm={12} xs={12}>
                {byDate.map((elm, i) => {
                  let date = new Date(elm.date).toDateString()
                  return <div className="bt_date_col col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <CardsWrapper className="activate_bucket" >
                      <div className="activate_bucket_scroll">
                        <CardContentWrapper className="bucket_wrapper" >
                          <div className="activate_bucket_title" style={{ color: "#09425A", fontWeight: "bold" }}>{date}<br /></div>
                          {elm.tools.map((tool) => {
                            return <>
                              <Divider style={{ backgroundColor: "#F19840", }} />
                              <div className="row activate_bucket_row"  >
                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                  <div className="bucket_tools_title" onClick={() => {
                                    if (tool.slug === "flexible-thinking") {
                                      history.push({ pathname: ROUTES.flexi + "/" + tool.toolId, state: { id: tool.toolID } });
                                    } else if (tool.slug === "find-a-solution") {
                                      history.push({ pathname: ROUTES.probsolve + "/" + tool.toolId, state: { id: tool.toolID } });
                                    } else if (tool.slug === "fill-your-bucket") {
                                      history.push({ pathname: ROUTES.fillbucket + "/" + tool.toolId, state: { id: tool.toolID } });
                                    } else {
                                      history.push({ pathname: ROUTES.tool_detail + "/" + tool.toolId, state: { id: tool.toolID } });
                                    }
                                  }} style={{ cursor: "pointer" }}>{tool.title}</div>
                                  {/* <div style={{ fontSize: "12px", color: "#A9BDC5" }}>Session 20</div> */}
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 by_date_rate_heart_col" style={{ textAlign: "right" }}>

                                  <StarRating
                                    disabled={true}
                                    className="mt-12 date-by-star-rating"
                                    name={i}
                                    defaultValue={tool.rating || 0}
                                    size="large"
                                    onChange={(e, value) => {
                                    }} />
                                  {/* <div className="bucket_heart">
                                    <CardIconButton aria-label="favorite">
                                      <i className="fa fa-heart favorite-icon"></i>
                                    </CardIconButton>
                                  </div> */}
                                </div>
                              </div>
                            </>
                          })
                          }
                        </CardContentWrapper>
                      </div>
                    </CardsWrapper>
                  </div>

                })}
              </Grid>
            }
            {btmType === 3 && <>

              {recToolsDataArray === null &&
                <Box className="no-Tool-found">
                  <span>Loading...</span>
                </Box>
              }

              {recToolsDataArray && recToolsDataArray.length > 0 && (
                // <ToolContainer>
                <div className="row main_tools_slider_row">
                  <div className="col-md-12 sliderContainer main_tools_slider">
                    <Caraousel
                      indicatorIconButtonProps={{
                        style: {
                          border: '1px solid #a9bdc5',
                        },
                      }}
                      navButtonsAlwaysInvisible={!(recToolsDataArray?.length > 1)}
                      navButtonsAlwaysVisible={recToolsDataArray?.length > 1}
                      withCustomButton={true}
                    >
                      {recToolsDataArray
                        && recToolsDataArray.map((item, index) => {
                          return (
                            <CarouselItem allItems={recToolsDataArray} data={item.Items[0]} desktopMode={true} length={2} itemLength={3} index={index} key={index} component={ToolsCard} />
                          );
                        })}
                    </Caraousel>
                  </div>
                </div>
                // </ToolContainer>
              )}
              {recToolsDataArray && recToolsDataArray?.length === 0 && (
                <Box className="no-Tool-found">
                  <span>No tools found</span>
                </Box>
              )}
            </>}
          </div>


        </div>
      </ToolsSectionWrapper>
    </>
  );
};

HomePageLoggedOut.propTypes = {};

export default HomePageLoggedOut;
