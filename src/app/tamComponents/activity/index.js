import React, { useState, useContext } from 'react';
import { CardContent, CardMedia, Box } from '@material-ui/core';
import calendarCheckedImage from 'app/shared/assets/images/calendar-checked.png';
import cardImage from 'app/shared/assets/images/card.jpeg';
import heartOutlinedImage from 'app/shared/assets/images/heart-outlined.png';
import playIcon from 'app/shared/assets/images/playIcon.png';
import shareOutlinedImage from 'app/shared/assets/images/share-outlined.png';
import {
  CardDescription,
  CardIconButton,
  CardPlayIcon,
  CardRating,
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
import { setFavouriteTool, setToolRating } from 'app/shared/services/toolServices';
import { useAuth } from '../../features/registration/authService';
import { useHistory } from 'react-router';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { ROUTES } from 'app/Routes';

const ToolsCard = (props) => {
  const auth = useAuth();
  const history = useHistory();
  const { setModal } = useContext(AppStoreContext);
  const [toolID] = useState(props.cardData.id);
  const [rating, setRating] = useState(auth.isAuthenticated ? props.cardData.toolRating : 0);
  const [tags] = useState(props.cardData.tool.toolTag.map((ele) => ele.tag.name).join(' , '));
  const [isFavourite, setFavourite] = useState(auth.isAuthenticated ? props.cardData.tool.favoriteTool : false);
  const updateRating = (value) => {
    if (auth.isAuthenticated) {
      setToolRating({ toolID, rating: value });
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };
  const updateFav = () => {
    if (auth.isAuthenticated) {
      setFavouriteTool({ toolID });
      setFavourite(!isFavourite);
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };

  const summery = props.cardData.tool.summary;
  const helpSummery = props.cardData.tool.benefit;

  const navigateToDetail = () => {
    history.push({ pathname: ROUTES.tool_detail, state: { id: toolID } });
  };
  return (
    <>
      <ToolsModifiedCard id={props.id} className="cardContent">
        <div className="toolsTime">
          <CardTag>New</CardTag>
          <CardPlayIcon>
            <img src={playIcon} alt="play-icon" height="100%" width="100%" />
          </CardPlayIcon>
          <CardMedia component="img" alt="test title" image={!!props.cardData.tool.thumbnailImage ? props.cardData.tool.thumbnailImage : cardImage} title="test title" />
          <Box className="toolsCardTitle">
            <ToolCardTime className="T timeFont">15 mins</ToolCardTime>
          </Box>
        </div>
        <CardContent className="card-content">
          <Box className="tool-description">
            <CardTitle onClick={navigateToDetail} className="cursor-p">
              {props.cardData.tool.title.trim()}
            </CardTitle>
            <CardDescription>{summery}</CardDescription>
            <CardReadMore>more...</CardReadMore>
          </Box>

          <Box className="tool-speciality">
            <CardSubTitle>This tool may help to:</CardSubTitle>
            <CardSubTitleSubScript>{helpSummery}</CardSubTitleSubScript>
            <CardReadMore>more...</CardReadMore>
          </Box>

          <TagsWrapper>
            <CardTagTitle>Tags</CardTagTitle>
            <CardTags>{tags}</CardTags>

            <Box container className="tags">
              <Box item>
                <CardRating
                  // disabled={true}
                  name={props.id}
                  defaultValue={rating}
                  size="large"
                  className="mt-12"
                  onChange={(e, value) => {
                    setRating(value);
                    updateRating(value);
                  }}
                />
              </Box>
              <Box item className="share-tool">
                <CardIconButton aria-label="share">
                  <img src={shareOutlinedImage} alt="" height="28" />
                </CardIconButton>
                <CardIconButton aria-label="calendar">
                  <img src={calendarCheckedImage} alt="" height="28" />
                </CardIconButton>
                <CardIconButton aria-label="favorite" onClick={() => updateFav()}>
                  {isFavourite === false ? (
                    <img src={heartOutlinedImage} alt="" height="28" />
                  ) : (
                    <i className="fa fa-heart favorite-icon"></i>
                  )}
                </CardIconButton>
              </Box>
            </Box>
          </TagsWrapper>
        </CardContent>
      </ToolsModifiedCard>
    </>
  );
};

ToolsCard.propTypes = {};

export default ToolsCard;
