import { useEffect, useState, useRef, useContext } from 'react';
import { Box, Card } from '@material-ui/core';
import { useLocation, useParams } from 'react-router';
import { defaultMetaData, handleClose as popupClose, handleOpen } from 'app/shared/Utils/index';
// import Modal from '@material-ui/core/Modal';
import { MetaContext } from 'app/shared/context/MetaProvider';
import ShareTool from 'app/tamComponents/shareTool';

import {
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
  // CardRating,
  //   CardIconButton,
  //   ExploreToolsWrappers,
  //   ModalWrapper,
} from './style';

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
// import { InlineShareButtons } from 'sharethis-reactjs';
import * as FTService from "./toolDetailService";

import lvl1 from 'app/shared/assets/images/bucket/tree-1.svg';
import lvl2 from 'app/shared/assets/images/bucket/tree-2.svg';
import lvl3 from 'app/shared/assets/images/bucket/tree-3.svg';
import lvl4 from 'app/shared/assets/images/bucket/tree-4.svg';
import lvl5 from 'app/shared/assets/images/bucket/tree-5.svg';

// import small_bucket from 'app/shared/assets/images/bucket/bucket-small.svg';
import Reminder from 'app/tamComponents/reminder';

// import LukeEx from './LukeEx';
import PREassessment from './PREassessment'
import FBAssessment from './FBAssessment'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { getDeviceSize } from 'app/shared/Utils/index';
import { throttle } from 'lodash';
import { Popover } from "@material-ui/core";
const ToolDetail = (props) => {
  const auth = useAuth();
  const location = useLocation();
  const { setMeta } = useContext(MetaContext);

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
  const [activity, setActivity] = useState({})
  const [completedTimes, setCompletedTimes] = useState(0);
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
    FTService.getPendingForm().then((data) => {
      let result = data.data.result
      console.log(result)
      if (!!result && result.step2 && result.step3 && result.completed_times < 5) {
        setActivity(result)
        setCompletedTimes(result.completed_times)
        setScreen(2)
      } else {
        setScreen(1)
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

  const scrollTop = () => {
    var topScroll = 70;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  // const startActivity = () => {
  //   if (auth.isAuthenticated) {
  //     setScreen(7)
  //   } else {
  //     setModal({ modalId: 1, data: { redirect: 'tools' } });
  //     window.scroll({ top: 0, behavior: 'smooth' });
  //   }
  // }
  console.log("outside fill bucket", toolDetail);
  return (
    <>
      <ToolsBody>
        <div className="container">
          {toolDetail && (
            <>
              <ToolDataWrapper>
                <div className="fill-your-bucket-header">
                  <div className="block-1">
                    <div className="probsolve_title_group">
                      <ToolPageTitle>{toolDetail.title}</ToolPageTitle>
                      <SubText>Time duration {toolDetail.duration + " minutes"}</SubText>
                    </div>

                    <div className="probsolve_text_btn_group ">
                      <ToolDescription>{toolDetail.summary}</ToolDescription>
                      {/* <ExploreToolsWrappers style={{ textAlign: "left", marginTop: "5vh", marginBottom: "5vh" }}>
                      {screen !== 7 ? <CustomButton style={{ maxWidth: "450px" }} onClick={() => { startActivity() }} color="#09425a">Let me apply the steps to my own problem</CustomButton>
                        : <CustomButton style={{ maxWidth: "450px" }} onClick={() => { setScreen(1) }} color="#09425a">Go Back To Examples</CustomButton>}
                    </ExploreToolsWrappers> */}
                    </div>
                  </div>
                  <div className="block-2">
                    <div className="fill-your-tree">
                      <div className="fill-tree-cricle">
                        <div className="small_bucket">
                          <img className="fill-tree" alt={"img"} src={completedTimes === 2 ? lvl2 : completedTimes === 3 ? lvl3 : completedTimes === 4 ? lvl4 : completedTimes === 5 ? lvl5 : lvl1} />
                          <label className="fill-tree-counter">{completedTimes ? completedTimes : 0}</label>
                        </div>

                        <SubText className="fill-time">{completedTimes === 5 ? "completed" : completedTimes ? `${5 - completedTimes} more to grow` : "5 more to grow"}</SubText>
                      </div>

                    </div>
                  </div>
                </div>

              </ToolDataWrapper>

              <MediaWrapper>
                <>
                  {screen === 1 && <PREassessment toolId={toolId.current} toolDetail={toolDetail} updateRating={(val) => { updateRating(val) }} setScreen={(id) => { setScreen(id) }} setCompletedTimes={setCompletedTimes} />}
                  {screen === 2 && <FBAssessment activity={activity} toolId={toolId.current} toolDetail={toolDetail} updateRating={(val) => { updateRating(val) }} setScreen={(id) => { setScreen(id) }} setCompletedTimes={setCompletedTimes} />}
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
                      <ShareTool
                        onClose={openSharing}
                        toolId={toolDetail.id}
                        title={toolDetail.title}
                        description={toolDetail.summary}
                        shareUrl={window.location.origin + "/fillbucket/" + toolId.current} // (defaults to current url)}
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
                      /> */}
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

export default ToolDetail;
