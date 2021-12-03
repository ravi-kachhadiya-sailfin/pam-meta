import React from 'react';
// import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import { CancelButton } from '../tools/ToolsPageComponent.styles';
import op from 'app/shared/assets/images/open_popup_arrow.svg'
import cl from 'app/shared/assets/images/closed_popup_arrow.svg'

import {
  HistoryPopUp,
  HistoryContentWrapper,
  Details,
  UL
} from './HistoryPopup.style';
// import { SliderWrapper } from "../../tamComponents/slider/Slider.styled";
// import {
//   ToolsBody,
//   ToolPageTitle,
//   ToolDescription
// } from './style'

import moment from 'moment';

import {
  CancelButton,
  ContentWrapper,
  TitleWrapper,
  SliderWrapper,
} from 'app/tamComponents/ToolsCard/tool-detail/tool-rating/style';

import TAMSlider from 'app/tamComponents/slider/Slider';

import {
  HistoryPanelPopUp,
} from 'app/tamComponents/ToolsCard/tool-detail/style';

import popup_close from 'app/shared/assets/images/popup_close.svg';

import { Para, SubParaTitle } from "app/features/Editorial/Editorial";
// import { FAQSectionWrapper } from "app/features/faqs/FAQPage.styles";


const moods_list = {
  6: "happy",
  5: "content",
  1: "sad",
  2: "afraid",
  3: "guilty",
  7: "angry",
  4: "stressed",
  8: "grieving",
  9: "not_sure"
}
// const marks = [
//   {
//     value: 0,
//     label: "0",
//   },
//   {
//     value: 1,
//     label: "1",
//   },
//   {
//     value: 2,
//     label: "2",
//   },
//   {
//     value: 3,
//     label: "3",
//   },
//   {
//     value: 4,
//     label: "4",
//   },
//   {
//     value: 5,
//     label: "5",
//   },
//   {
//     value: 6,
//     label: "6",
//   },
//   {
//     value: 7,
//     label: "7",
//   },
//   {
//     value: 8,
//     label: "8",
//   },
//   {
//     value: 9,
//     label: "9",
//   },
//   {
//     value: 10,
//     label: "10",
//   },
// ];
export default function PopUp(props) {
  // const [scroll] = React.useState('paper');
  const [openAcc, setOpenAcc] = React.useState(0);

  // const handleClickOpen = (scrollType) => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };

  const handleClose = () => {
    props.setShowPopup(false);
  };

  const scrollTop = (value) => {
    if (value >= 0) {
      // console.log("value:", value);
      var id = "document" + value;
      var topScroll = document.getElementById(id).offsetTop + 10;
      document.body.scrollTop = topScroll;
      document.documentElement.scrollTop = topScroll;
    }
  }

  // const descriptionElementRef = React.useRef(null);

  return (
    <HistoryPopUp
      className="pop-up-modal"
      open={true}
      onClose={handleClose}
      disableScrollLock={false}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >

      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
    //   <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}

      <ContentWrapper className="tool_rating_popup">

        {/* <Box textAlign="right">
          <CancelButton onClick={() => { handleClose() }}>
            <i style={{ color: '#0099BA' }} className="fa fa-times" aria-hidden="true"></i>
          </CancelButton>
        </Box> */}
        <Box textAlign="right">
          <CancelButton className="tool_rating_close" onClick={() => { handleClose() }}>
            <img src={popup_close} alt="popup close" />
          </CancelButton>
        </Box>

        <TitleWrapper className="tools_rating_text_main text-uppercase">{props.toolDetail.title}</TitleWrapper>

        <div className="date-and-name">
          <Para className="normal-primary-text font-weight-semi-bold mb-0">{moment(props.history.date).format("DD MMM HH:MM")}</Para>
          <Para className="normal-primary-text mb-0">What happened name goes in here</Para>
        </div>

        <div className="doc-wrapper">
          {/* <div class="panel-group" id="accordion"> */}
          {props.history.details &&
            props.history.details.length > 0 &&
            props.history.details.map((dt, i) => {
              return <div className="faq-panel mb-0">
                <HistoryPanelPopUp style={{ border: props.history.details.length - 1 === i && "none" }} id={`document${i}`}>
                  <div className="history-content" onClick={() => { setOpenAcc(openAcc === i + 1 ? 0 : i + 1); scrollTop(i - 1) }}>
                    <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">Document {i + 1}</SubParaTitle>
                    {/* <Para className="normal-primary-text font-weight-bold mb-0">Document {i + 1}</Para> */}
                    <div className="doc-detail-arrows">
                      {openAcc !== i + 1 ? < img className="right-arrow" src={op} alt={""} /> : <img className="down-arrow" src={cl} alt={""} />}
                    </div>
                  </div>
                </HistoryPanelPopUp>
                {openAcc === i + 1 &&
                  <HistoryContentWrapper className="content-wrapper" style={{ border: props.history.details.length - 1 === i && "none" }}>
                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {1}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">What happened?</SubParaTitle>
                        <Para className="normal-primary-text">{dt.what_happened}</Para>
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {2}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">How did you feel when you said this to yourself?</SubParaTitle>
                        <Para className="normal-primary-text">{moods_list[dt.initialFeeling]}</Para>
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {3}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">On a scale of 0-10, How distressed did you feel?</SubParaTitle>

                        <div className="slider-container">
                          <SliderWrapper>
                            <TAMSlider from="popup" disable={true} value={dt.initialScore} />
                            <div className="slider_level">
                              <div className="slider_level_text">None</div>
                              <div className="slider_level_text">Moderate</div>
                              <div className="slider_level_text">Extreme</div>
                            </div>
                          </SliderWrapper>
                        </div>
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {4}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">What facts support this thought?</SubParaTitle>
                        <Para className="normal-primary-text">
                          <UL>
                            {dt.what_facts_support_this_thought.map((item, index, arr) => {
                              return (
                                <li key={index} className={arr.length - 1 === index && "last-child"}>
                                  <Para className="normal-primary-text mt-0">{item} </Para>
                                </li>
                              )
                            })}
                          </UL>
                        </Para>

                        {/* <Para className="normal-primary-text">
                          {dt.what_facts_support_this_thought.map((th, i) => {
                            return <div>
                              ({i + 1}) {th}
                            </div>
                          })}
                        </Para> */}
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {5}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">What facts do not support this thought?</SubParaTitle>

                        <Para className="normal-primary-text">
                          <UL>
                            {dt.do_any_facts_not_support_this_thought.map((item, index, arr) => {
                              return (
                                <li key={index} className={arr.length - 1 === index && "last-child"}>
                                  <Para className="normal-primary-text mt-0">{item} </Para>
                                </li>
                              )
                            })}
                          </UL>
                        </Para>
                        {/* <Para className="normal-primary-text">
                          {dt.do_any_facts_not_support_this_thought.map((th, i) => {
                            return <div>
                              ({i + 1}) {th}
                            </div>
                          })}
                        </Para> */}
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {6}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">Is there other information that I should consider, or are there other ways of looking at it?What would you say to a friend who was in this situation?</SubParaTitle>

                        <Para className="normal-primary-text">
                          <UL>
                            {dt.shift_perspective.filter((th) => { return th !== "" }).map((item, index, arr) => {
                              return (
                                <li key={index} className={arr.length - 1 === index && "last-child"}>
                                  <Para className="normal-primary-text mt-0">{item} </Para>
                                </li>
                              )
                            })}
                          </UL>
                        </Para>
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {7}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">Does it help to say your original thought to yourself?What impact does it have on me when I say this to myself?</SubParaTitle>
                        <Para className="normal-primary-text">
                          <UL>
                            {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((item, index, arr) => {
                              return (
                                <li key={index} className={arr.length - 1 === index && "last-child"}>
                                  <Para className="normal-primary-text mt-0">{item} </Para>
                                </li>
                              )
                            })}
                          </UL>
                        </Para>

                        {/* <Para className="normal-primary-text">
                          {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((th, i) => {
                            return <div>
                              ({i + 1}) {th}
                            </div>
                          })}
                        </Para> */}
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {8}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">What’s a different way of looking at it or a more helpful thing to say to yourself?</SubParaTitle>
                        <Para className="normal-primary-text">{dt.diﬀerent_way_of_looking_more_helpful}</Para>
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {9}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">Does it help to say your original thought to yourself?What impact does it have on me when I say this to myself?</SubParaTitle>

                        <Para className="normal-primary-text">
                          <UL>
                            {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((item, index, arr) => {
                              return (
                                <li key={index} className={arr.length - 1 === index && "last-child"}>
                                  <Para className="normal-primary-text mt-0">{item} </Para>
                                </li>
                              )
                            })}
                          </UL>
                        </Para>

                        {/* <Para className="normal-primary-text">
                          {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((th, i) => {
                            return <div>
                              ({i + 1}) {th}
                            </div>
                          })}
                        </Para> */}
                      </div>
                    </Details>

                    <Details>
                      <span className="number-card">
                        <span className="card-number-text"> {10}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">How did you feel after filling-up this activity?</SubParaTitle>
                        <Para className="normal-primary-text">
                          {moods_list[dt.feeling]}
                        </Para>
                      </div>
                    </Details>

                    <Details className="mb-0">
                      <span className="number-card">
                        <span className="card-number-text"> {11}</span>
                      </span>
                      <div className="main-detail">
                        <SubParaTitle className="bold-primary-sub-title-pop-up mb-0 mt-0">On a scale of 0-10, How distressed did you feel after filling-up this activity?</SubParaTitle>
                        <div className="slider-container">
                          <SliderWrapper>
                            <TAMSlider from="popup" disable={true} value={dt.score} />
                            <div className="slider_level">
                              <div className="slider_level_text">None</div>
                              <div className="slider_level_text">Moderate</div>
                              <div className="slider_level_text">Extreme</div>
                            </div>
                          </SliderWrapper>
                        </div>
                      </div>
                    </Details>

                    {/* <div className="row">
                      <ToolDescription><span className="card-number" style={{}}>1</span>What happened?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {dt.what_happened}
                    </div>
                    <br /> */}
                    {/* <div className="row">
                      <ToolDescription><span className="card-number" style={{}}>2</span>How did you feel when you said this to yourself?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {moods_list[dt.initialFeeling]}
                    </div>
                    <br /> */}
                    {/* <div className="row">
                      <ToolDescription><span className="card-number" >3</span>On a scale of 0-10, How distressed did you feel?</ToolDescription>
                      <br />
                      <SliderWrapper
                        style={{ marginTop: "20px" }}
                        //getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="on"
                        step={1}
                        marks={marks}
                        min={0}
                        max={10}
                        value={dt.initialScore}
                        onChange={(e, value) => { }}
                      />
                    </div>
                    <br /> */}
                    {/* <div className="row">
                      <ToolDescription><span className="card-number" >4</span>What facts support this thought?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {dt.what_facts_support_this_thought.map((th, i) => {
                        return <div>
                          ({i + 1}) {th}
                        </div>
                      })}
                    </div>
                    <br /> */}
                    {/* <div className="row">
                      <ToolDescription><span className="card-number" >5</span>What facts do not support this thought?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {dt.do_any_facts_not_support_this_thought.map((th, i) => {
                        return <div>
                          ({i + 1}) {th}
                        </div>
                      })}
                    </div> */}
                    {/* <br />
                    <div className="row">
                      <ToolDescription><span className="card-number" >6</span>Is there other information that I should consider, or are there other ways of looking at it?What would you say to a friend who was in this situation?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {dt.shift_perspective.filter((th) => { return th !== "" }).map((th, i) => {
                        return <div>
                          ({i + 1}) {th}
                        </div>
                      })}
                    </div>
                    <br /> */}
                    {/* <div className="row">
                      <ToolDescription><span className="card-number" >7</span>Does it help to say your original thought to yourself?What impact does it have on me when I say this to myself?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((th, i) => {
                        return <div>
                          ({i + 1}) {th}
                        </div>
                      })}
                    </div>
                    <br /> */}
                    {/* <div className="row">
                      <ToolDescription><span className="card-number" >8</span>What’s a different way of looking at it or a more helpful thing to say to yourself?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {dt.diﬀerent_way_of_looking_more_helpful}
                    </div>
                    <br /> */}
                    {/* <div className="row">
                      <ToolDescription><span className="card-number" >9</span>Does it help to say your original thought to yourself?What impact does it have on me when I say this to myself?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((th, i) => {
                        return <div>
                          ({i + 1}) {th}
                        </div>
                      })}
                    </div> */}
                    {/* <br />
                    <div className="row">
                      <ToolDescription><span className="card-number" style={{}}>10</span>How did you feel after filling-up this activity?</ToolDescription>
                    </div>
                    <br />
                    <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
                      {moods_list[dt.feeling]}
                    </div>
                    <br />
                    <div className="row">
                      <ToolDescription><span className="card-number" >11</span>On a scale of 0-10, How distressed did you feel after filling-up this activity?</ToolDescription>
                      <br />
                      <SliderWrapper
                        style={{ marginTop: "20px" }}
                        //getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="on"
                        step={1}
                        marks={marks}
                        min={0}
                        max={10}
                        value={dt.score}
                        onChange={(e, value) => { }}
                      />
                    </div> */}
                  </HistoryContentWrapper>}
              </div>
            })}
          {/* </div> */}
        </div>

      </ContentWrapper>
    </HistoryPopUp>

    /* // <div style={{ marginBottom: 50, padding: 25 }}>
    //   {!!props.history.details && !!props.history.details.length > 0 && props.history.details.map((dt, i) => {
    //     return <>
    //       <div className="row">
    //         <ToolDescription onClick={() => { setOpenAcc(openAcc === i + 1 ? 0 : i + 1) }}>
    //           <b>Document {i + 1}</b>
    //           <span style={{ float: "right" }}><img style={{ height: 13 }} src={cl} alt={""} /></span>
    //         </ToolDescription>
    //       </div>
    //       {openAcc === i + 1 && <div style={{ marginTop: 15 }}>
    //         <div className="row">
    //           <ToolDescription><span className="card-number" style={{}}>1</span>What happened?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {dt.what_happened}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" style={{}}>2</span>How did you feel when you said this to yourself?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {moods_list[dt.initialFeeling]}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >3</span>On a scale of 0-10, How distressed did you feel?</ToolDescription>
    //           <br />
    //           <SliderWrapper
    //             style={{ marginTop: "20px" }}
    //             //getAriaValueText={valuetext}
    //             aria-labelledby="discrete-slider"
    //             valueLabelDisplay="on"
    //             step={1}
    //             marks={marks}
    //             min={0}
    //             max={10}
    //             value={dt.initialScore}
    //             onChange={(e, value) => { }}
    //           />
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >4</span>What facts support this thought?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {dt.what_facts_support_this_thought.map((th, i) => {
    //             return <div>
    //               ({i + 1}) {th}
    //             </div>
    //           })}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >5</span>What facts do not support this thought?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {dt.do_any_facts_not_support_this_thought.map((th, i) => {
    //             return <div>
    //               ({i + 1}) {th}
    //             </div>
    //           })}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >6</span>Is there other information that I should consider, or are there other ways of looking at it?What would you say to a friend who was in this situation?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {dt.shift_perspective.filter((th) => { return th !== "" }).map((th, i) => {
    //             return <div>
    //               ({i + 1}) {th}
    //             </div>
    //           })}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >7</span>Does it help to say your original thought to yourself?What impact does it have on me when I say this to myself?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((th, i) => {
    //             return <div>
    //               ({i + 1}) {th}
    //             </div>
    //           })}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >8</span>What’s a different way of looking at it or a more helpful thing to say to yourself?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {dt.diﬀerent_way_of_looking_more_helpful}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >9</span>Does it help to say your original thought to yourself?What impact does it have on me when I say this to myself?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {dt.is_it_a_helpful_thought.filter((th) => { return th !== "" }).map((th, i) => {
    //             return <div>
    //               ({i + 1}) {th}
    //             </div>
    //           })}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" style={{}}>10</span>How did you feel after filling-up this activity?</ToolDescription>
    //         </div>
    //         <br />
    //         <div className="row" style={{ fontSize: 20, color: "#09425A", marginLeft: 28 }}>
    //           {moods_list[dt.feeling]}
    //         </div>
    //         <br />
    //         <div className="row">
    //           <ToolDescription><span className="card-number" >11</span>On a scale of 0-10, How distressed did you feel after filling-up this activity?</ToolDescription>
    //           <br />
    //           <SliderWrapper
    //             style={{ marginTop: "20px" }}
    //             //getAriaValueText={valuetext}
    //             aria-labelledby="discrete-slider"
    //             valueLabelDisplay="on"
    //             step={1}
    //             marks={marks}
    //             min={0}
    //             max={10}
    //             value={dt.score}
    //             onChange={(e, value) => { }}
    //           />
    //         </div>
    //       </div>}
    //     </>
    //   })}
    // </div>
      // <DialogActions>
      //   <Button onClick={handleClose} color="primary">
      //     Cancel
      //   </Button>
      //   <Button onClick={handleClose} color="primary">
      //     Subscribe
      //   </Button>
      // </DialogActions> */

  );
}
