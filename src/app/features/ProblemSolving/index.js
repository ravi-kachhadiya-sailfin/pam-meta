import { useEffect, useState, useRef, useContext } from 'react';
import { Box, Card } from '@material-ui/core';
import { useLocation, useParams } from 'react-router';
import { defaultMetaData, handleClose as popupClose, handleOpen } from 'app/shared/Utils/index';
// import Modal from '@material-ui/core/Modal';
import { MetaContext } from 'app/shared/context/MetaProvider';
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
} from 'app/tamComponents/ToolsCard/tool-detail/style';

import { ProblemSolvingPopup } from './style';

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
import Reminder from '../../tamComponents/reminder';
import BackPopup from './BackPopup';

import { Popover } from "@material-ui/core";
import LukeEx from './LukeEx';
import PAAssessment from './PSAssessment'

import StarRating from 'app/tamComponents/StarRating';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import {BoxContainerWrapper} from 'app/tamComponents/navbar/NavBar.styles';
import { getDeviceSize } from 'app/shared/Utils/index';
import { throttle } from 'lodash';
// import zIndex from '@material-ui/core/styles/zIndex';

const ToolDetail = (props) => {
  const auth = useAuth();
  const location = useLocation();
  const { setMeta } = useContext(MetaContext);

  const [toolDetail, setToolDetail] = useState(null);
  const [isFavourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const [shareOpen, setShareOpen] = useState(false)
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
  const [showBackPopup, setShowBackPopup] = useState(false);
  const [popUpStep, setPopUpStep] = useState(1);

  const [screen, setScreen] = useState(1)
  const [step, setStep] = useState(null)

  const [open, setOpen] = useState(true);
  const [scroll] = useState('paper');
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
      if (!!result && result.step2 && result.step3 && result.step4 && result.step5 && result.step6) {
        setShowBackPopup(true)
      }
    })
  };

  const toStep = (stp) => {
    setShowBackPopup(false);
    setStep(stp);
    setScreen(2);
  }

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

  // const startActivity = () => {
  //   if (auth.isAuthenticated) {
  //     setScreen(7)
  //   } else {
  //     setModal({ modalId: 1, data: { redirect: 'tools' } });
  //     window.scroll({ top: 0, behavior: 'smooth' });
  //   }
  // }

  const scrollTop = () => {
    var topScroll = 70;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  function heightFromTop(element) {

    var elementHightFromTop = element.offsetTop - window.scrollY;

    return elementHightFromTop + 25;
  };

  function widthFromLeft(element) {

    var elementWidtghFromLeft = element.offsetLeft;

    return elementWidtghFromLeft - 255;
  };

  // window.addEventListener('scroll', function () {
  //   let navbar, sticky;
  //   if (document.getElementById("prev-btn-wrapper")) {
  //     navbar = document.getElementById("prev-btn-wrapper");
  //     sticky = navbar.offsetTop;
  //     // console.log("navbar", navbar, sticky)
  //   }
  //   // console.log("main-card:", isTouchTop(document.getElementById("arrow_sticky_wrapper")), isInViewport(document.getElementById("border")), isTouchTop(document.getElementById("arrow_sticky_wrapper")) && !isInViewport(document.getElementById("border")))
  //   if (isTouchTop(document.getElementById("arrow_sticky_wrapper")) && !isInViewport(document.getElementById("border"))) {
  //     document.getElementById("prev-btn").classList.add("arrow_sticky")
  //     document.getElementById("next-btn").classList.add("arrow_sticky_next")
  //     // document.getElementById("arrow-btn").classList.add("arrow_sticky_container");

  //   } else if (document.getElementById("prev-btn")) {
  //     document.getElementById("prev-btn").classList.remove("arrow_sticky");
  //     document.getElementById("next-btn").classList.remove("arrow_sticky_next")
  //     // document.getElementById("arrow-btn").classList.remove("arrow_sticky_container");

  //   }

  //   // console.log("btn", isInViewport(document.getElementById("border")))
  //   if (isInViewport(document.getElementById("border")) && document.getElementById("prev-btn") && document.getElementById("next-btn")) {
  //     // && document.getElementById("next-btn")
  //     document.getElementById("prev-btn").classList.remove("arrow_sticky");
  //     document.getElementById("next-btn").classList.remove("arrow_sticky_next");
  //     // document.getElementById("arrow-btn").classList.remove("arrow_sticky_container");
  //   }

  // });

  console.log("deviceSize", deviceSize)


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
                  {screen !== 2 ? <CustomButton onClick={() => { setScreen(2) }} color="#09425a">Let me apply the steps to my own problem</CustomButton>
                    : <CustomButton style={{ maxWidth: "450px" }} onClick={() => { setScreen(1) }} color="#09425a">Go Back To Examples</CustomButton>}
                </ExploreToolsWrappers>
              </div>
            </ToolDataWrapper>

            <MediaWrapper>
              <>
                {screen === 1 && <LukeEx setScreen={(id) => { setScreen(id) }} />}
                {screen === 2 && <PAAssessment step={step}
                  feedbackOpen={() => { updateRating() }}
                  toolId={toolId.current} toolDetail={toolDetail}
                  updateRating={(val) => { updateRating(val) }}
                  setScreen={(id) => { setStep(null); setScreen(id) }}
                  setPopUpStep={setPopUpStep}
                  popUpStep={popUpStep} />}
              </>
            </MediaWrapper>

            <ToolDetailWrapper className="luke_tags">
              <Box width="100%" id="tools_box" className="tools_details_text">
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
                    }}
                    key={rating}
                  />
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
                      shareUrl={window.location.origin + "/probsolve/" + toolId.current} // (defaults to current url)}
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
                        url: window.location.origin + "/prob/" + toolId.current, // (defaults to current url)
                        image: toolDetail.thumbnailImage, // (defaults to og:image or twitter:image)
                        description: toolDetail.summary,       // (defaults to og:description or twitter:description)
                        title: 'PAM - ' + toolDetail.title,            // (defaults to og:title or twitter:title)
                        message: `${toolDetail.title}: \n\n${toolDetail.summary}\n\nURL : ${window.location.origin + "/flexiblethinking/" + toolId.current}`,     // (only for email sharing)
                        subject: 'Try this tool from PAM : ' + toolDetail.title,  // (only for email sharing)
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
            {/* <ToolDetailWrapper>

            </ToolDetailWrapper> */}

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
                <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/probsolve/" + toolId.current} title={'PAM - ' + toolDetail.title} discription={toolDetail.summary} />

              </DialogContentText>
            </DialogContent>
          </Dialog>
        }
        {showPopup &&
          <ModalWrapper
            open={showPopup}
            onClose={() => { togglePopUp(); setPopUpStep(3) }}
            disableScrollLock={false}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description">
            <ToolRating toolDetail={toolDetail} userRating={rating} updateUserRating={setRating} updateRating={(val) => { updateRating(val) }} onClose={() => { togglePopUp(); setPopUpStep(3) }} from="popup" />
          </ModalWrapper>
        }
        {/* //showBackPopup  */}
        {showBackPopup &&
          <BackPopup close={() => { setShowBackPopup(false) }} toStep={(stp) => { toStep(stp) }} setScreen={(id) => { setScreen(id) }} toolDetail={toolDetail} />
        }
        {/* <Dialog
          open={open}
          style={{ minWidth: 350 }}
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
            > */}
        <Dialog className="problem_solving_popup"
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
          <DialogContent className="problem_solving_popup_card" dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <ProblemSolvingPopup className="popup_card">
                <span className="popup_text">You can use tool without being registered, but if you would like to be able to save the work that you do, please register or log in.</span>
                <div className="popup_text_btn">
                  <div onClick={() => { handleClose() }} className="popup_btn">Continue</div>
                  <div onClick={() => {
                    handleClose()
                    setModal({ modalId: 1, data: { redirect: 'tools' } });
                    window.scroll({ top: 0, behavior: 'smooth' });
                  }} className="popup_btn popup_btn_yes">Login</div>
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
