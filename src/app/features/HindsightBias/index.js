import { useEffect, useState, useRef, useContext } from 'react';
import { Box, Grid, Card } from '@material-ui/core';
import { useLocation, useParams } from 'react-router';
import { handleClose as popupClose, handleOpen } from 'app/shared/Utils/index';

import {
  ToolsBody,
  ToolDataWrapper,
  ToolPageTitle,
  // SubText,
  // ToolDescription,
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
} from 'app/tamComponents/ToolsCard/tool-detail/style';


import StarRating from 'app/tamComponents/StarRating';
import CustomButton from 'app/tamComponents/button';
import shareOutlinedImage from 'app/shared/assets/images/share.svg';
import calendarCheckedImage from 'app/shared/assets/images/calendar_icon.svg';
import heartOutlinedImage from 'app/shared/assets/images/empty_heart.svg';
import { getToolDetail, setFavouriteTool } from 'app/shared/services/toolServices'; //setToolRating
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { useAuth } from 'app/features/registration/authService';
import ToolRating from 'app/tamComponents/ToolsCard/tool-detail/tool-rating/index';
import { InlineShareButtons } from 'sharethis-reactjs';
// import * as HSBService from "app/features/HindsightBias/HindsightBiasServices";


import Reminder from 'app/tamComponents/reminder';

// import PreAssesment from 'app/features/HindsightBias/PreAssesment'
import HSBAssessment from 'app/features/HindsightBias/HSBAssessment'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { getDeviceSize } from 'app/shared/Utils/index';
import { throttle } from 'lodash';
import { Popover } from "@material-ui/core";

function HandsightBias() {


  const auth = useAuth();
  const location = useLocation();

  const [toolDetail, setToolDetail] = useState(null);
  const [isFavourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const [hasReminder, setHasReminder] = useState(false)


  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);


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

  const [screen, setScreen] = useState(0)
  const [activity] = useState({})
  const [, setCompletedTimes] = useState(0);
  const [scroll] = useState('paper');
  const descriptionElementRef = useRef(null);


  const fetchData = () => {
    getToolDetail(toolId.current).then((res) => {
      console.log(res);
      if (res.videoLink) {
        res.videoLink = res.videoLink.replace("?", "/")
        res.videoLink = res.videoLink.replace("watch", "embed")
        res.videoLink = res.videoLink.replace("v=", "")
      }
      tags.current = res ? res.toolTag.map((ele) => ele.tag.name.split('').map((x, i) => i === 0 ? x.toUpperCase() : x).join('')).join(', ') : '';
      setToolDetail(res);
      setFavourite(res.favoriteTool);
      setRating(res.toolRating);
    });
    // HSBService.getPendingForm().then((data) => {
    //   let result = data.data.result
    //   console.log(result)
    //   if (!!result && result.step2 && result.step3 && result.completed_times < 5) {
    //     setActivity(result)
    //     setCompletedTimes(result.completed_times)
    //     setScreen(2)
    //   } else {
    //     setScreen(1)
    //   }
    // })
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
      console.log('success');
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

  const scrollTop = () => {
    var topScroll = 70;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  console.log("screen", screen);
  return (
    <>
      <ToolsBody>
        <div className="container">
          {toolDetail && (
            <>
              <ToolDataWrapper>
                <div className="fill-your-bucket-header handsight-bias">
                  <div className="block-1">
                    <div className="probsolve_title_group">
                      <ToolPageTitle>{toolDetail.title}</ToolPageTitle>
                      {/* <SubText>Time duration {toolDetail.duration + " minutes"}</SubText> */}
                    </div>

                    {/* <div className="probsolve_text_btn_group ">
                      <ToolDescription>{toolDetail.summary}</ToolDescription>
                    </div> */}
                  </div>
                </div>

              </ToolDataWrapper>

              {screen === 0 &&
                <>
                  <MediaWrapper id="arrow_sticky_wrapper">
                    <iframe width="100%" height="800px" src={!!toolDetail.videoLink ? toolDetail.videoLink : "https://www.youtube.com/embed/-d_AA9H4z9U"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </MediaWrapper>


                  <Grid direction="row" id="btn2" className={`large_btn_luke start_button_step flex-end luke_button`}>
                    <Grid className="luke_inner_col" item xl={4} lg={4} md={5} sm={deviceSize > -1 ? 12 : 5} xs={deviceSize > 0 ? 12 : 6} justifyContent="flex-start">
                      <CustomButton onClick={() => { setScreen(1) }} color="#F19840">Next Step</CustomButton>
                    </Grid>
                  </Grid >
                </>
              }

              <MediaWrapper>
                <>
                  {screen === 1 && <HSBAssessment activity={activity} toolId={toolId.current} toolDetail={toolDetail} updateRating={(val) => { updateRating(val) }} setScreen={(id) => { setScreen(id) }} setCompletedTimes={setCompletedTimes} />}
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
                  <Box className="tags-details-first">
                    {/* <CardRating className="tools_details_page mt-12 star-rating"
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
                      key={rating}
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
                    {/* <CardIconButton aria-label="calendar">
                    <img src={calendarCheckedImage} alt="doc-icon" height="28" />
                  </CardIconButton> */}

                  </Box>
                  {/* {hasReminder &&
                    <Card style={{ padding: 10, position: 'absolute', marginTop: '50px', width: 400, zIndex: 500 }}>
                      <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/fillbucket/" + toolId.current} title={'PAM - ' + toolDetail.title} discription={toolDetail.summary} />
                    </Card>

                  } */}
                  {shareOpen && <Popover className="new-share-card"
                    open={shareOpen}
                    anchorEl={shareOpen}
                    onClose={openSharing}

                    PaperProps={{ style: { minWidth: 275 } }}
                    style={{ top: heightFromTop(document.getElementById('share-btn')), left: deviceSize === 0 ? 0 : widthFromLeft(document.getElementById('share-btn')) }}
                  >

                    <Card Card className="share-card-wrapper">
                      <InlineShareButtons
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
                          url: window.location.origin + "/fillbucket/" + toolId.current, // (defaults to current url)
                          image: toolDetail.thumbnailImage,  // (defaults to og:image or twitter:image)
                          description: toolDetail.summary,       // (defaults to og:description or twitter:description)
                          title: 'PAM - ' + toolDetail.title,            // (defaults to og:title or twitter:title)
                          message: `${toolDetail.title}: \n\n${toolDetail.summary}\n\nURL:  ${window.location.origin + "/fillbucket/" + toolId.current}`,  // (only for email sharing)
                          subject: 'Try this tool from PAM : ' + toolDetail.title,  // (only for email sharing)
                          // onLoad: () => {
                          //   console.log("in Load");
                          //   document.querySelector(".st-btn[data-network=email]").addEventListener('click', (e) => {
                          //     let subject = "I'd like to share a link with you";
                          //     let body = document.getElementById("share-buttons").data('url');

                          //     console.table("dsf", subject, body);
                          //     // document.location = "mailto:?subject=" + subject + "&body=" + body;

                          //     e.stopPropagation();
                          //   });
                          // }
                          // username: 'custom twitter handle' // (only for twitter sharing)
                        }}
                      />
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
                  <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/fillbucket/" + toolId.current} title={'PAM - ' + toolDetail.title} discription={toolDetail.summary} />

                </DialogContentText>
              </DialogContent>
            </Dialog>
          }
          <ModalWrapper open={showPopup} onClose={togglePopUp}>
            <ToolRating toolDetail={toolDetail} userRating={rating} updateUserRating={setRating} updateRating={(val) => { updateRating(val) }} onClose={togglePopUp} />
          </ModalWrapper>

        </div>
      </ToolsBody>
    </>
  );
};



export default HandsightBias
