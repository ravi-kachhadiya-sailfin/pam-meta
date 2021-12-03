import React, { useState, useContext } from 'react';
import { CardContent, CardMedia, Box, Card } from '@material-ui/core';
import calendarCheckedImage from 'app/shared/assets/images/calendar_icon.svg';
import cardImage from 'app/shared/assets/images/card.jpeg';
import heartOutlinedImage from 'app/shared/assets/images/empty_heart.svg';
import playIcon from 'app/shared/assets/images/playIcon.png';
import shareOutlinedImage from 'app/shared/assets/images/share.svg';
import StarRating from 'app/tamComponents/StarRating';
// import { InlineShareButtons } from 'sharethis-reactjs';
import ShareTool from 'app/tamComponents/shareTool';

import {
  CardDescription,
  // CardIconButton,
  CardPlayIcon,
  // CardRating,
  CardReadMore,
  CardSubTitle,
  CardSubTitleSubScript,
  CardTag,
  CardTags,
  CardTagTitle,
  CardTitle,
  ToolCardTime,
  ToolsModifiedCard,
  TagsWrapper,
} from './styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import {
  CardIconButton,
} from 'app/tamComponents/ToolsCard/tool-detail/style';

import { setFavouriteTool } from 'app/shared/services/toolServices';
import { useAuth } from '../../features/registration/authService';
import { useHistory } from 'react-router';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { ROUTES } from 'app/Routes';
import Reminder from 'app/tamComponents/reminder';
import { imagePlaceholder } from 'app/shared/Utils/index';

const ToolsCard = (props) => {
  const auth = useAuth();
  const history = useHistory();
  const { setModal } = useContext(AppStoreContext);
  const [scroll] = useState('paper');
  let cardData = props.cardData
  if (!!cardData.tool) {
    cardData = { ...cardData, ...cardData.tool }
    delete cardData.tool
  }
  const [toolID] = useState(cardData.id);
  const [rating] = useState(auth.isAuthenticated ? cardData.toolRating : 0);
  const [tags] = useState(cardData.toolTag.length < 4 ? cardData.toolTag.map((ele) => ele.tag.name.split('').map((x, i) => i === 0 ? x.toUpperCase() : x).join('')).join(', ') : cardData.toolTag.slice(0, 4).map((ele) => ele.tag.name.split('').map((x, i) => i === 0 ? x.toUpperCase() : x).join('')).join(', '));
  const [isFavourite, setFavourite] = useState(auth.isAuthenticated ? cardData.favoriteTool : false);
  const [hasReminder, setHasReminder] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  // let link = window.location.origin + (cardData.slug === "flexible-thinking" ? ROUTES.flexi + "/" : cardData.slug === "find-a-solution" ? ROUTES.probsolve + "/" : cardData.slug === "fill-your-bucket" ? ROUTES.fillbucket + "/" : "/tool-detail/") + toolID
  // const updateRating = (value) => {
  //   if (auth.isAuthenticated) {
  //     setToolRating({ toolID, rating: value });
  //   } else {
  //     setModal({ modalId: 1, data: { redirect: 'tools' } });
  //     window.scroll({ top: 0, behavior: 'smooth' });
  //   }
  // };
  const updateFav = () => {
    if (auth.isAuthenticated) {
      setFavouriteTool({ toolID });
      setFavourite(!isFavourite);
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };

  const summery = cardData.summary;
  const helpSummery = cardData.benefit;

  const navigateToDetail = () => {
    if (cardData.slug === "flexible-thinking") {
      history.push({ pathname: ROUTES.flexi + "/" + cardData.id, state: { id: toolID } });
    } else if (cardData.slug === "find-a-solution") {
      history.push({ pathname: ROUTES.probsolve + "/" + cardData.id, state: { id: toolID } });
    } else if (cardData.slug === "fill-your-bucket") {
      history.push({ pathname: ROUTES.fillbucket + "/" + cardData.id, state: { id: toolID } });
    } else if (cardData.slug === "stop-second-guessing-yourself") {
      history.push({ pathname: ROUTES.hindsightBias + "/" + cardData.id, state: { id: toolID } });
    } else {
      history.push({ pathname: ROUTES.tool_detail, state: { id: toolID } });
    }

  };

  const openSharing = () => {
    if (auth.isAuthenticated) {
      setShareOpen(!shareOpen)
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }
  const makeURl = () => {
    if (cardData.slug === "flexible-thinking") {
      return window.location.origin + ROUTES.flexi + "/" + cardData.id;
    } else if (cardData.slug === "find-a-solution") {
      return window.location.origin + ROUTES.probsolve + "/" + cardData.id;
    } else if (cardData.slug === "fill-your-bucket") {
      return window.location.origin + ROUTES.fillbucket + "/" + cardData.id;
    } else {
      return window.location.origin + ROUTES.tool_detail + "/" + cardData.id;;
    }
  };

  return (
    <>
      <ToolsModifiedCard id={props.id} className={`${shareOpen ? "share-overflow" : ""} cardContent`}>
        <div className="toolsTime">
          <CardTag>New</CardTag>
          <CardPlayIcon>
            <img src={playIcon} onClick={navigateToDetail} alt="play-icon" height="100%" width="100%" />
          </CardPlayIcon>
          <CardMedia className="tool-img " component="img" alt="test title" onError={imagePlaceholder} image={cardData.thumbnailImage ? cardData.thumbnailImage : cardImage} onClick={navigateToDetail} />
          <Box className="toolsCardTitle">
            <ToolCardTime className="T timeFont">{cardData.duration.replace(" ", "").replace(" ", "") + " mins"}</ToolCardTime>
          </Box>
        </div>
        <CardContent className="card-content">
          <Box className="tool-description">
            <CardTitle onClick={navigateToDetail} className="cursor-p">
              {cardData.title.trim()}
            </CardTitle>
            <CardDescription>{summery}</CardDescription>
            <CardReadMore onClick={navigateToDetail}>more...</CardReadMore>
          </Box>

          <Box className="tool-speciality">
            <CardSubTitle>This tool may help to</CardSubTitle>
            <CardSubTitleSubScript>{helpSummery}</CardSubTitleSubScript>
            {/* <CardReadMore>more...</CardReadMore> */}
          </Box>

          <TagsWrapper>
            <CardTagTitle>Tags</CardTagTitle>
            <CardTags>{tags}</CardTags>

            <Box container className="tags">
              <Box item>
                {/* <CardRating
                  // disabled={true}
                  name={props.id}
                  defaultValue={rating}
                  size="large"
                  className="mt-12"
                  onChange={(e, value) => {
                    // setRating(value);
                    // updateRating(value);
                  }}
                /> */}
                <StarRating
                  size="large"
                  defaultValue={rating}
                  name={props.id}
                  disabled={true}
                  disabledFrom="toolsCard"
                  className={`mt-12 card-star-rating ${props.className}`}
                  onChange={(e, value) => {
                    // setRating(value);
                    // updateRating(value);
                  }} />
              </Box>
              <Box item className="share-tool">
                <CardIconButton aria-label="share" onClick={() => { openSharing() }} className={`tool-card ${props.className}`}>
                  <img src={shareOutlinedImage} className="share-icon" alt="" height="28" />
                </CardIconButton>
                <CardIconButton className={`tool-card ${props.className}`} aria-label="calendar" onClick={() => { setHasReminder(!hasReminder) }}>
                  <img src={calendarCheckedImage} className="calendar-icon" alt="" height="28" />
                </CardIconButton>
                <CardIconButton className={`tool-card ${props.className}`} aria-label="favorite" onClick={() => updateFav()}>
                  {isFavourite === false ? (
                    <img src={heartOutlinedImage} alt="" className="heart-icon" height="28" />
                  ) : (
                    <i className="fa fa-heart favorite-icon"></i>
                  )}
                </CardIconButton>

              </Box>
              {/* {hasReminder &&
                <Card className="reminder_main tool-card-reminder" style={{ padding: 10, position: 'absolute', marginTop: '50px', zIndex: 500 }}>
                  <Reminder className="" closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/probsolve/" + cardData.id} title={'PAM - ' + cardData.title} discription={cardData.summary} />
                </Card>
              }*/}
              {shareOpen && <Card className="share-main-wrapper" onClick={openSharing}>
                <Card onClick={openSharing}>
                  <ShareTool
                    onClose={openSharing}
                    toolId={cardData.id}
                    title={cardData.title}
                    description={cardData.summary}
                    shareUrl={makeURl()} // (defaults to current url)}
                    image={cardData.thumbnailImage}
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
                      url: makeURl(), // (defaults to current url)
                      image: cardData.thumbnailImage,  // (defaults to og:image or twitter:image)
                      description: cardData.summary,       // (defaults to og:description or twitter:description)
                      title: 'PAM - ' + cardData.title,            // (defaults to og:title or twitter:title)
                      message: `${cardData.title}: \n\n${cardData.summary}\n\nURL: ${makeURl()}`,     // (only for email sharing)
                      subject: 'Try this tool from PAM : ' + cardData.title,  // (only for email sharing)
                      // username: 'custom twitter handle' // (only for twitter sharing)
                    }}
                  /> */}
                </Card>
              </Card>}
            </Box>
          </TagsWrapper>
        </CardContent>

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
                // ref={descriptionElementRef}
                tabIndex={-1}
              >
                <Reminder className="" closePopup={() => { setHasReminder(false) }} location={makeURl()} title={'PAM - ' + cardData.title} discription={cardData.summary} />


              </DialogContentText>
            </DialogContent>
          </Dialog>
        }
      </ToolsModifiedCard>

    </>
  );
};

ToolsCard.propTypes = {};

export default ToolsCard;
