/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, useRef, useContext } from 'react';
import { Box, Card } from '@material-ui/core';
import { useLocation, useParams } from 'react-router';
import moment from 'moment';
import { defaultMetaData, handleClose as popupClose, handleOpen } from 'app/shared/Utils/index';
// import right_arrow from '../../shared/assets/images/closeAcc.svg'
// import Modal from '@material-ui/core/Modal';
import ShareTool from 'app/tamComponents/shareTool';

// import {
//   ToolsBody,
//   ToolDataWrapper,
//   ToolPageTitle,
//   SubText,
//   ToolDescription,
//   MediaWrapper,
//   ToolDetailWrapper,
//   ToolSpecialityTitle,
//   ToolSpeciality,
//   TagsWrapper,
//   CardTagTitle,
//   CardTags,
//   CardRating,
//   CardIconButton,
//   ExploreToolsWrappers,
//   ModalWrapper,
// } from './style';

import {
  ToolsBody,
  ToolDataWrapper,
  ToolPageTitle,
  SubText,
  ToolDescription,
  MediaWrapper,
  ToolDetailWrapper,
  ToolSpecialityTitle,
  ToolSpeciality,
  TagsWrapper,
  CardTagTitle,
  CardTags,
  CardIconButton,
  ExploreToolsWrappers,
  ModalWrapper,
  HistoryPanel,
} from 'app/tamComponents/ToolsCard/tool-detail/style';
import { Para } from "app/features/Editorial/Editorial";
import { ProblemSolvingPopup } from 'app/features/ProblemSolving/style';


import CustomButton from 'app/tamComponents/button';
import shareOutlinedImage from 'app/shared/assets/images/share.svg';
import calendarCheckedImage from 'app/shared/assets/images/calendar_icon.svg';
import heartOutlinedImage from 'app/shared/assets/images/empty_heart.svg';
import historyImage from 'app/shared/assets/images/Note.svg';
import { getToolDetail, setFavouriteTool } from 'app/shared/services/toolServices';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { MetaContext } from 'app/shared/context/MetaProvider';

import { useAuth } from 'app/features/registration/authService';
import ToolRating from 'app/tamComponents/ToolsCard/tool-detail/tool-rating/index';
// import { InlineShareButtons } from 'sharethis-reactjs';
import * as FTService from "./toolDetailService";
import Reminder from '../../tamComponents/reminder';

import MainBoard from './MainBoard';
import GloriaEx from './GloriaEx';
import JoseEx from './JoseEx';
import MariaEx from './MariaEx';
import JamesEx from './JamesEx';
import AlyssaEx from './AlyssaEx';
import FTAssessment from './FTAssessment'
import HistoryPopup from './HistoryPopup'
import cl from '../../shared/assets/images/closeAcc.svg'
import { FAQSectionWrapper } from "../faqs/FAQPage.styles";
import StarRating from 'app/tamComponents/StarRating';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Popover } from "@material-ui/core";
import { getDeviceSize } from 'app/shared/Utils/index';
import { throttle } from 'lodash';

const ToolDetail = (props) => {
  const auth = useAuth();
  const location = useLocation();

  const [toolDetail, setToolDetail] = useState(null);
  const [isFavourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const [shareOpen, setShareOpen] = useState(false)
  const [hasReminder, setHasReminder] = useState(false)

  const { id } = useParams()
  let toolId
  if (!id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    toolId = useRef(location.state.id)
  } else {
    toolId = {
      current: id
    }
  }
  const tags = useRef('');
  const { setModal } = useContext(AppStoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [toolHistory, setToolHistory] = useState([])
  const [selectedHistory, setSelectedHistory] = useState({})
  const [screen, setScreen] = useState(1)
  const [startAgainBtn, setStartAgainBtn] = useState(false);
  const { setMeta } = useContext(MetaContext);

  // const [startAgain, setStartAgain] = useState(false);

  const [open, setOpen] = useState(true);
  const [scroll] = useState('paper');

  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const fetchData = () => {
    getToolDetail(toolId.current).then((res) => {
      // console.log(res);
      tags.current = res ? res.toolTag.map((ele) => ele.tag.name.split('').map((x, i) => i === 0 ? x.toUpperCase() : x).join('')).join(', ') : '';
      const metaData = {
        title: res.title,
        url: window.location.href,
        image: res.thumbnailImage,
        description: res.summary
      }
      setMeta(metaData);
      setToolDetail(res);
      setFavourite(res.favoriteTool);
      setRating(res.toolRating);
    });
    FTService.getHistory().then((data) => {
      if (data.statusCode === 200) {
        setToolHistory(data.data.history)
      }
    })
  };

  const updateFav = () => {
    if (auth.isAuthenticated) {
      setFavouriteTool({ toolID: toolId.current });
      setFavourite(!isFavourite);
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };

  const updateRating = (value) => {
    if (auth.isAuthenticated) {
      // console.log('success');
      // setToolRating({ toolID: toolId.current, rating: value });
      setRating(value);
      togglePopUp();
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };

  const togglePopUp = () => {
    setShowPopup(!showPopup);
  };



  useEffect(() => {
    fetchData();
    if (auth.isAuthenticated) {
      setOpen(false)
    } else {
      setOpen(true)
    }

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSharing = () => {
    if (auth.isAuthenticated) {
      console.log("shareOpen", shareOpen)
      if (shareOpen) {
        popupClose()
      }
      else {
        handleOpen()
      }
      setShareOpen(!shareOpen)
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }


  function heightFromTop(element) {

    var elementHightFromTop = element.offsetTop - window.scrollY;

    return elementHightFromTop + 25;
  };

  function widthFromLeft(element) {

    var elementWidtghFromLeft = element.offsetLeft;

    return elementWidtghFromLeft - 255;
  };
  // function scrollTop() {
  //   var topScroll = document.getElementById("main-card").offsetTop - 10;
  //   // console.log(topScroll);
  //   // hideButton();
  //   document.body.scrollTop = topScroll;
  //   document.documentElement.scrollTop = topScroll;
  // }

  const startActivity = () => {
    setScreen(7)
    // if (auth.isAuthenticated) {
    // } else {
    //   setModal({ modalId: 1, data: { redirect: 'tools' } });
    //   window.scroll({ top: 0, behavior: 'smooth' });
    // }
  }

  const scrollTop = () => {
    var topScroll = 70;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  return (
    <ToolsBody>
      <div className="container">
        {toolDetail && (
          <>
            <ToolDataWrapper>

              <div className="probsolve_title_group">
                <ToolPageTitle>{toolDetail.title}</ToolPageTitle>
                <SubText>Time duration {toolDetail.duration + " minutes"}</SubText>
              </div>
              <div className="probsolve_text_btn_group">
                <ToolDescription>{toolDetail.summary}</ToolDescription>

                <ExploreToolsWrappers style={{ textAlign: "left" }}>

                  {screen !== 7 ? <CustomButton onClick={() => { startActivity() }} color="#09425a">Let me apply the steps to my own problem</CustomButton>
                    : <CustomButton onClick={() => { setScreen(1) }} color="#09425a">Go Back To Examples</CustomButton>}
                  {startAgainBtn && screen === 7 && <CustomButton className="start-again-btn" onClick={() => { setStartAgainBtn(false) }} color="#f19840">Start again</CustomButton>}
                </ExploreToolsWrappers>
              </div>

            </ToolDataWrapper>


            <MediaWrapper>
              <>
                {screen === 1 && <MainBoard setScreen={(id) => { setScreen(id); }} />}
                {screen === 2 && <GloriaEx startActivity={() => { startActivity() }} setScreen={(id) => { setScreen(id) }} />}
                {screen === 3 && <JoseEx startActivity={() => { startActivity() }} setScreen={(id) => { setScreen(id) }} />}
                {screen === 4 && <MariaEx startActivity={() => { startActivity() }} setScreen={(id) => { setScreen(id) }} />}
                {screen === 5 && <JamesEx startActivity={() => { startActivity() }} setScreen={(id) => { setScreen(id) }} />}
                {screen === 6 && <AlyssaEx startActivity={() => { startActivity() }} setScreen={(id) => { setScreen(id) }} />}
                {screen === 7 && <FTAssessment auth={auth}
                  toolId={toolId.current} toolDetail={toolDetail}
                  updateRating={(val) => { updateRating(val) }} setScreen={(id) => { setScreen(id) }}
                  startAgainBtn={startAgainBtn} setStartAgainBtn={setStartAgainBtn} />}
              </>
            </MediaWrapper>

            <ToolDetailWrapper className="luke_tags">
              <Box width="100%" className="tools_details_text">
                <ToolSpecialityTitle>This tool can help to:</ToolSpecialityTitle>
                <ToolSpeciality>{toolDetail.benefit}</ToolSpeciality>
              </Box>
              <Box width="100%" className="tools_details_text">
                <TagsWrapper>
                  <CardTagTitle>Tags</CardTagTitle>
                  <CardTags>{tags.current}</CardTags>
                </TagsWrapper>
              </Box>
              <Box className="tags">
                <Box className="tags-details-first ">
                  {/* <CardRating
                    // disabled={true}
                    name={toolId.current}
                    defaultValue={rating}
                    size="large"
                    className="mt-12"
                    onChange={(e, value) => {
                      updateRating(value);
                    }}
                    key={rating}
                  /> */}
                  <StarRating
                    className="tools_details_page mt-12 star-rating"
                    name={toolId.current}
                    defaultValue={rating}
                    size="large"
                    onChange={(e, value) => {
                      updateRating(value);
                      scrollTop();
                    }} />
                </Box>
                <Box className="tags-details-icon">
                  <CardIconButton aria-label="share" id="share-btn" onClick={() => { openSharing() }}>
                    <img src={shareOutlinedImage} alt="" height="28" />
                  </CardIconButton>
                  <CardIconButton aria-label="calendar" onClick={() => { setHasReminder(!hasReminder) }}>
                    <img src={calendarCheckedImage} alt="" height="28" />
                  </CardIconButton>

                  <CardIconButton aria-label="favorite" onClick={updateFav}>
                    {isFavourite === false || isFavourite === undefined || isFavourite === null ? (
                      <img src={heartOutlinedImage} alt="" height="28" />
                    ) : (
                      <i className="fa fa-heart favorite-icon"></i>
                    )}
                  </CardIconButton>
                  <CardIconButton aria-label="history" onClick={() => { setShowHistory(!showHistory) }}>
                    <img src={historyImage} alt="" height="28" />
                  </CardIconButton>
                  {/* <CardIconButton aria-label="calendar">
                    <img src={calendarCheckedImage} alt="doc-icon" height="28" />
                  </CardIconButton> */}
                </Box>
                {/* {hasReminder &&
                  <Card style={{ padding: 10, position: 'absolute', marginTop: '50px', width: 400, zIndex: 500 }}>
                    <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/probsolve/" + toolId.current} title={'PAM - ' + toolDetail.title} discription={toolDetail.summary} />
                  </Card>
                } */}
                {shareOpen && <Popover className="new-share-card"
                  open={shareOpen}
                  anchorEl={shareOpen}
                  onClose={openSharing}

                  PaperProps={{ style: { minWidth: 275 } }}
                  style={{ top: heightFromTop(document.getElementById('share-btn')), left: deviceSize === 0 ? 0 : widthFromLeft(document.getElementById('share-btn')) }}
                >

                  <Card className="share-card-wrapper">
                    <ShareTool
                      onClose={openSharing}
                      toolId={toolDetail.id}
                      title={toolDetail.title}
                      description={toolDetail.summary}
                      shareUrl={window.location.origin + "/flexiblethinking/" + toolId.current} // (defaults to current url)}
                      image={toolDetail.thumbnailImage}
                    />
                    {/* <InlineShareButtons
                      config={{
                        alignment: 'right',  // alignment of buttons (left, center, right)
                        color: 'social',      // set the color of buttons (social, white)
                        enabled: true,        // show/hide buttons (true, false)
                        font_size: 16,        // font size for the buttons
                        labels: null,      // button labels (cta, counts, null)
                        language: 'en',       // which language to use (see LANGUAGES)
                        networks: [           // which networks to include (see SHARING NETWORKS)
                          'whatsapp',
                          'linkedin',
                          'facebook',
                          'twitter',
                          'email',
                          'twitter',
                        ],
                        padding: 12,          // padding within buttons (INTEGER)
                        radius: 4,            // the corner radius on each button (INTEGER)
                        show_total: false,
                        size: 40,             // the size of each button (INTEGER)
                        // OPTIONAL PARAMETERS
                        url: window.location.origin + "/flexiblethinking/" + toolId.current, // (defaults to current url)
                        image: toolDetail.thumbnailImage,  // (defaults to og:image or twitter:image)
                        description: toolDetail.summary,       // (defaults to og:description or twitter:description)
                        title: 'PAM - ' + toolDetail.title,            // (defaults to og:title or twitter:title)
                        message: `${toolDetail.title}: \n\n${toolDetail.summary}\n\nURL : ${window.location.origin + "/flexiblethinking/" + toolId.current}`,     // (only for email sharing)
                        subject: 'Try this tool from PAM : ' + toolDetail.title,  // (only for email sharing)
                        // username: 'custom twitter handle' // (only for twitter sharing)
                      }} */}
                    {/* /> */}
                  </Card>
                </Popover>}
                <ExploreToolsWrappers className="tools_details_button">
                  <CustomButton onClick={() => { window.location.href = '/tools' }} color="#09425a">Explore other tools</CustomButton>
                </ExploreToolsWrappers>
              </Box>
            </ToolDetailWrapper>
            <ToolDetailWrapper>

            </ToolDetailWrapper>
          </>
        )}
        {hasReminder &&

          <Dialog className="donate-card"
            open={hasReminder}
            style={{ maxWidth: "1018px !important" }}
            onClose={() => { setHasReminder(false) }}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogContent dividers={scroll === 'paper'} className="donate-text">
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/flexiblethinking/" + toolId.current} title={'PAM - ' + toolDetail.title} discription={toolDetail.summary} />

              </DialogContentText>
            </DialogContent>
          </Dialog>
        }
        {showHistory &&
          <FAQSectionWrapper>
            <ToolPageTitle className="title-margin">My previous activity</ToolPageTitle>
            {toolHistory.map((history, i) => {
              console.log(toolHistory)
              // let date = new Date(history.date).toDateString()
              //   return <div class="panel faq-panel">
              //     <div class="panel-heading" style={{ cursor: "pointer" }} onClick={() => { setSelectedHistory(history) }}>
              //       <h4 class="panel-title">
              //         <a
              //           data-toggle="collapse"
              //           class="collapsed"
              //           data-parent="#accordion"
              //         >
              //           <Para className="normal-primary-text font-weight-bold mb-0">{date}</Para>
              //           <span style={{ float: "right" }}><img style={{ height: 13 }} src={cl} alt={""} /></span>
              //           <span className="card-number" style={{ float: "right", marginRight: 30 }}>{history.count}</span>
              //         </a>
              //       </h4>
              //     </div>
              //   </div>
              // })
              return <HistoryPanel style={{ border: (toolHistory.length === i + 1) && "none" }}>
                <div className="history-content" onClick={() => { setSelectedHistory(history) }} >
                  <div>
                    <Para className="normal-primary-text font-weight-semi-bold mb-0">{moment(history.date).format("DD MMM HH:MM")}</Para>
                    <Para className="normal-primary-text mb-0">What happened name goes in here</Para>
                  </div>
                  <div className="sub-detail">
                    {history.count > 1 &&
                      <div className="count">
                        <Para className="normal-primary-text mb-0 count-text">{history.count}</Para>
                      </div>
                    }
                    <img className="right-arrow" src={cl} alt={""} />
                  </div>
                </div>
              </HistoryPanel>

            })
            }
          </FAQSectionWrapper>
        }
        {
          Object.keys(selectedHistory).length > 0 &&
          <HistoryPopup history={selectedHistory} toolDetail={toolDetail} setShowPopup={() => { setSelectedHistory({}) }} />
        }
        < ModalWrapper open={showPopup} onClose={togglePopUp} >
          <ToolRating toolDetail={toolDetail} userRating={rating} updateUserRating={setRating} updateRating={(val) => { updateRating(val) }} onClose={togglePopUp} />
        </ModalWrapper>

        <Dialog className="problem_solving_popup"
          open={open}

          onClose={handleClose}
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
              <ProblemSolvingPopup className="popup_card">
                <span className="popup_text">You can use this tool without being registered, but if you would like to be able to save the work that you do, please register or log in.</span><br />
                <div className="popup_text_btn">
                  <div className="popup_btn" onClick={() => { handleClose() }}>Continue</div>
                  <div className="popup_btn popup_btn_yes" onClick={() => {
                    handleClose()
                    setModal({ modalId: 1, data: { redirect: 'tools' } });
                    window.scroll({ top: 0, behavior: 'smooth' });
                  }} >Login</div>
                </div>
              </ProblemSolvingPopup>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </ToolsBody>
  );
};

export default ToolDetail;
