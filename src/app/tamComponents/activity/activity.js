import React, { useState, useContext } from 'react';
import { CardContent, CardMedia, Box } from '@material-ui/core';
import calendarCheckedImage from 'app/shared/assets/images/calendar_icon.svg';
import cardImage from '../../shared/assets/images/card.jpeg';
import heartOutlinedImage from 'app/shared/assets/images/empty_heart.svg';
// import playIcon from 'app/shared/assets/images/playIcon.png';
// import shareOutlinedImage from 'app/shared/assets/images/share-outlined.png';
import {
  CardIconButton,
  // CardPlayIcon,
  CardReadMore,
  CardTag,
  CardTitle,
  ToolCardTime,
  ToolsModifiedCard,
  TagsWrapper,
} from './styles';
import { setFavouriteTool } from 'app/shared/services/toolServices';
import { useAuth } from '../../features/registration/authService';
import { useHistory } from 'react-router';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { ROUTES } from 'app/Routes';
import Reminder from 'app/tamComponents/reminder';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const Activity = (props) => {
  const auth = useAuth();
  const history = useHistory();
  const { setModal } = useContext(AppStoreContext);
  const [toolID] = useState(props.activity.toolId);
  const [hasReminder, setHasReminder] = useState(false)
  const [scroll] = useState('paper');
  const [url] = useState(makeURl);


  // const [rating, setRating] = useState(auth.isAuthenticated ? 3 : 0);
  // const [tags] = useState([]);
  const [isFavourite, setFavourite] = useState(false);
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

  const navigateToDetail = () => {
    let cardData = props.activity
    if (cardData.slug === "flexible-thinking") {
      history.push({ pathname: ROUTES.flexi + "/" + cardData.toolId, state: { id: cardData.toolId } });
    } else if (cardData.slug === "find-a-solution") {
      history.push({ pathname: ROUTES.probsolve + "/" + cardData.toolId, state: { id: cardData.toolId } });
    } else if (cardData.slug === "fill-your-bucket") {
      history.push({ pathname: ROUTES.fillbucket + "/" + cardData.toolId, state: { id: cardData.toolId } });
    } else {
      history.push({ pathname: ROUTES.tool_detail, state: { id: cardData.toolId } });
    }
  };

  function makeURl() {
    let cardData = props.activity
    if (cardData.slug === "flexible-thinking") {
      return window.location.origin + ROUTES.flexi + "/" + cardData.id;
    } else if (cardData.slug === "find-a-solution") {
      return window.location.origin + ROUTES.probsolve + "/" + cardData.id;
    } else if (cardData.slug === "fill-your-bucket") {
      return window.location.origin + ROUTES.fillbucket + "/" + cardData.id;
    } else {
      return window.location.origin + ROUTES.tool_detail;
    }

  };
  return (
    <>
      <ToolsModifiedCard className="last_tool_activity" id={props.id} >
        <div className="toolsTime">
          <CardTag>New</CardTag>
          {/* <CardPlayIcon>
            <img src={playIcon} onClick={navigateToDetail} alt="play-icon" height="100%" width="100%" />
          </CardPlayIcon> */}
          <CardMedia component="img" alt="test title" image={!!props.activity.thumbnailImage ? props.activity.thumbnailImage : cardImage} title="test title" />
          <Box className="toolsCardTitle">
            <ToolCardTime className="T timeFont">{props.activity.duration} mins</ToolCardTime>
          </Box>
        </div>
        <CardContent className="card-content">
          <Box className="tool-description">
            <CardTitle onClick={navigateToDetail} className="cursor-p">
              {props.activity.title}
            </CardTitle>
            <CardReadMore>{props.activity.duration} mins</CardReadMore>
          </Box>

          {/* {hasReminder &&
            <Card className="reminder_main" style={{ padding: 10, position: 'absolute', marginTop: '50px', zIndex: 500 }}>
              <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/flexiblethinking/" + props.activity.id} title={'PAM - ' + props.activity.title} discription={props.activity.summary} />
            </Card>
          } */}
          <TagsWrapper>
            <Box container className="tags">
              <Box item className="share-tool">
                <CardIconButton aria-label="calendar" onClick={() => { setHasReminder(!hasReminder) }}>
                  <img src={calendarCheckedImage} alt="" height="28" />
                </CardIconButton>
                <CardIconButton aria-label="favorite" onClick={() => updateFav()}>
                  {isFavourite === false ? (
                    <img src={heartOutlinedImage} alt="" height="28" />
                  ) : (
                    <i className="fa fa-heart favorite-icon"></i>
                  )}
                </CardIconButton>
                {/* <span>Hi</span> */}
              </Box>
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
                <Reminder className="" closePopup={() => { setHasReminder(false) }} location={url} title={'PAM - ' + props.activity.title} discription={props.activity.summary} />
              </DialogContentText>
            </DialogContent>
          </Dialog>
        }
      </ToolsModifiedCard>
    </>
  );
};

Activity.propTypes = {};

export default Activity;
