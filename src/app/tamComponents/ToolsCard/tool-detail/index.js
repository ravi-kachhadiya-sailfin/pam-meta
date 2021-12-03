import { useEffect, useState, useRef, useContext } from 'react';
import { Box, Card } from '@material-ui/core';
import { useLocation, useParams } from 'react-router';
import { defaultMetaData, handleClose as popupClose, handleOpen } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';
// import Modal from '@material-ui/core/Modal';

import ShareTool from 'app/tamComponents/shareTool';

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
} from './style';


import StarRating from 'app/tamComponents/StarRating';

import CustomButton from 'app/tamComponents/button';
import shareOutlinedImage from 'app/shared/assets/images/share.svg';
import calendarCheckedImage from 'app/shared/assets/images/calendar_icon.svg';
import heartOutlinedImage from 'app/shared/assets/images/empty_heart.svg';
import { getToolDetail, setFavouriteTool } from 'app/shared/services/toolServices';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { useAuth } from 'app/features/registration/authService';
import ToolRating from './tool-rating/index';
// import { InlineShareButtons } from 'sharethis-reactjs';
import Reminder from '../../reminder';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { getDeviceSize } from 'app/shared/Utils/index';
import { throttle } from 'lodash';
import { Popover } from "@material-ui/core";

import YouTube from 'react-youtube';


const ToolDetail = (props) => {
  const auth = useAuth();
  const location = useLocation();
  const { setMeta } = useContext(MetaContext);

  const [toolDetail, setToolDetail] = useState(null);
  const [isFavourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const [shareOpen, setShareOpen] = useState(false)
  const { id } = useParams()
  const [hasReminder, setHasReminder] = useState(false)
  const descriptionElementRef = useRef(null);
  const [scroll] = useState('paper');


  const youtubeOpts = {
    width: "100%",
    height: "800px",
  }

  let toolId
  if (!id) {
    if (!location.state || !location.state.id) {
      window.location.href = "/tools"
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      toolId = useRef(location.state.id)
    }
  } else {
    toolId = {
      current: id
    }
  }

  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);


  const tags = useRef('');
  const { setModal } = useContext(AppStoreContext);
  const [showPopup, setShowPopup] = useState(false);

  const fetchData = () => {
    getToolDetail(toolId.current).then((res) => {
      console.log(res);
      tags.current = res ? res.toolTag.map((ele) => ele.tag.name.split('').map((x, i) => i === 0 ? x.toUpperCase() : x).join('')).join(', ') : '';
      if (res.videoLink) {
        res.videoLink = res.videoLink.replace("?", "/")
        res.videoLink = res.videoLink.replace("watch", "embed")
        res.videoLink = res.videoLink.replace("v=", "")
      }
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


  useEffect(() => {
    fetchData();

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTop = () => {
    var topScroll = 70;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }


  // console.log(toolId.current);

  return (
    <>
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
                </div>
              </ToolDataWrapper>

              <MediaWrapper>
                <YouTube
                  videoId={toolDetail.videoLink ? toolDetail.videoLink.split('/').splice(-1)[0] : "-d_AA9H4z9U"}
                  opts={youtubeOpts}
                  onPlay={() => { console.log("Video start") }}
                  onEnd={() => { console.log("Video ended") }} />
                {/* <iframe width="100%" height="800px" src={!!toolDetail.videoLink ? toolDetail.videoLink : "https://www.youtube.com/embed/-d_AA9H4z9U"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                {/* <CardMedia component="video" src="blob:https://www.youtube.com/546fd552-9a83-4999-b18e-18f3198237d7" alt="tool details" height="100%" width="100%" image={"https://www.youtube.com/watch?v=-d_AA9H4z9U"}></CardMedia> */}
              </MediaWrapper>

              <ToolDetailWrapper>
                <Box className="tools_details_text" width="100%">
                  <ToolSpecialityTitle>This tool can help to:</ToolSpecialityTitle>
                  <ToolSpeciality>{toolDetail.benefit}</ToolSpeciality>
                </Box>
                <Box className="tools_details_text" width="100%">
                  <TagsWrapper>
                    <CardTagTitle>Tags</CardTagTitle>
                    <CardTags>{tags.current}</CardTags>
                  </TagsWrapper>
                </Box>
                <Box className="tags ">
                  <Box className="tags-details-first ">
                    {/* <CardRating className="tools_details_page mt-12"
                      // disabled={true}
                      name={toolId.current}
                      defaultValue={rating}
                      size="large"
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
                    <CardIconButton aria-label="share" id="share-btn" onClick={() => { openSharing(); }}>
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
                  <ExploreToolsWrappers className="tools_details_button">
                    <CustomButton onClick={() => { window.location.href = '/tools' }} color="#09425a">Explore other tools</CustomButton>
                  </ExploreToolsWrappers>
                  {/* {hasReminder &&
                    <Card style={{ padding: 10, position: 'absolute', marginTop: '50px', width: 400, zIndex: 500 }}>
                      <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/probsolve/" + toolId.current} title={'PAM - ' + toolDetail.title} discription={toolDetail.summary} />
                    </Card>

                  } */}
                  {/* {shareOpen && <Popover className="new-share-card"
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
                          url: window.location.origin + "/tool-detail/" + toolId.current, // (defaults to current url)
                          image: toolDetail.thumbnailImage,  // (defaults to og:image or twitter:image)
                          description: toolDetail.summary,       // (defaults to og:description or twitter:description)
                          title: 'PAM - ' + toolDetail.title,            // (defaults to og:title or twitter:title)
                          message: `${toolDetail.title}: \n\n${toolDetail.summary}\n\nURL : ${window.location.origin + "/tool-detail/" + toolId.current}`,     // (only for email sharing)
                          subject: 'Try this tool from PAM : ' + toolDetail.title,  // (only for email sharing)
                          // username: 'custom twitter handle' // (only for twitter sharing)
                        }}
                      />
                    </Card> 
                  </Popover>} */}

                  {shareOpen &&
                    <Popover className="new-share-card"
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
                          shareUrl={window.location.origin + "/tool-detail/" + toolId.current} // (defaults to current url)}
                          image={toolDetail.thumbnailImage}
                        />
                      </Card>
                    </Popover>
                  }
                </Box>
              </ToolDetailWrapper>
              {/* <ToolDetailWrapper>

            </ToolDetailWrapper> */}
              {/* <ExploreToolsWrappers>
              <CustomButton onClick={() => { window.location.href = '/tools' }} color="#09425a">Explore other tools</CustomButton>
            </ExploreToolsWrappers> */}
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
                  <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/tool-detail/" + toolId.current} title={'PAM - ' + toolDetail.title} discription={toolDetail.summary} />

                </DialogContentText>
              </DialogContent>
            </Dialog>
          }
          {!!showPopup && <ModalWrapper open={showPopup} onClose={togglePopUp}>
            <ToolRating toolDetail={toolDetail} userRating={rating} updateUserRating={setRating} updateRating={(val) => { updateRating(val) }} onClose={togglePopUp} />
          </ModalWrapper>}
        </div>
      </ToolsBody>
    </>
  );
};

export default ToolDetail;
