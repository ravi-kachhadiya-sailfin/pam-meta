import { Box } from '@material-ui/core';


import {
  CancelButton,
  ContentWrapper,
  TitleWrapper,
  SubTitleWrapper,
  SliderWrapper,
  QuestionWrapper,
  ToolRatingWrapper,
  // CardRating,
  CustomerButtonWrapper,
  ScrollWrapper,
} from './style';
import TAMSlider from 'app/tamComponents/slider/Slider';
import CustomButton from 'app/tamComponents/button';
import propTypes from 'prop-types';
import { useState } from 'react';
import { submitDestress, submitRating } from '../toolDetailService'
import popup_close from 'app/shared/assets/images/popup_close.svg';

import StarRating from 'app/tamComponents/StarRating';


const ToolRating = ({ userRating, updateUserRating, ...props }) => {
  // let lvl = sessionStorage.getItem("distressLevel") == null ? 3 : parseInt(sessionStorage.getItem("distressLevel")
  const [destress, updateDistressLevel] = useState(3)

  let submitHandler = async () => {
    let tool = props.toolDetail
    let dbody = {
      "toolId": tool.id,
      "score": destress
    }
    let rbody = {
      "toolId": tool.id,
      "rating": userRating
    }
    let dtres = await submitDestress(dbody)
    let rtres = await submitRating(rbody)
    if (dtres.statusCode === 200 && rtres.statusCode === 200) {
      props.onClose()
      props.updateRating(userRating)
    }
  }

  return (
    <ContentWrapper className="tool_rating_popup">
      <Box textAlign="right">
        <CancelButton className="tool_rating_close" onClick={props.onClose}>
          <img src={popup_close} alt="popup close" />
        </CancelButton>
      </Box>

      <ScrollWrapper>
        <TitleWrapper className="tools_rating_text_main">How was this tool for you today?</TitleWrapper>
        <SubTitleWrapper className="tools_rating_sub_text_main">
          These scales help to track your progress & evaluate whether this has been a useful tool specifically for
          you. It helps us understand which tools work best for you so we can recommend better ones each time.
        </SubTitleWrapper>

        <Box>

          <div className="tools_rating_main_wrapper">
            <QuestionWrapper>
              <span className="card-number">1</span>
              <span className="card-title">Please rate your level of distress</span>
            </QuestionWrapper>
            <SliderWrapper >
              <TAMSlider from="popup" updateDistressLevel={(val) => { updateDistressLevel(val) }} />
              <div className="slider_level">
                <div className="slider_level_text">None</div>
                <div className="slider_level_text">Moderate</div>
                <div className="slider_level_text">Extreme</div>
              </div>
            </SliderWrapper>
          </div>

        </Box>

        <Box className="tools_rating_wrapper">
          <QuestionWrapper>
            <span className="card-number">2</span>
            <span className="card-title">How helpful was this tool?</span>
          </QuestionWrapper>
          <ToolRatingWrapper>
            {/* <CardRating
                // disabled={true}
                name={1}
                val={userRating}
                size="large"
                className="mt-12"
                onChange={(e, value) => {
                  updateUserRating(value);
                }}
                key={3}
              /> */}
            <StarRating
              size="large"
              defaultValue={userRating}
              name={"star-rating"}
              className="mt-12 star-rating"
              from={props.from}
              onChange={(e, value) => {
                updateUserRating(value);
              }} />
          </ToolRatingWrapper>
        </Box>

        <CustomerButtonWrapper>
          <CustomButton onClick={() => { submitHandler() }} color="#e87e1f" style={{ height: '54px' }}>
            Submit
          </CustomButton>
        </CustomerButtonWrapper>
      </ScrollWrapper>
    </ContentWrapper>
  );
};

ToolRating.propTypes = {
  onClose: propTypes.func,
};

export default ToolRating;
