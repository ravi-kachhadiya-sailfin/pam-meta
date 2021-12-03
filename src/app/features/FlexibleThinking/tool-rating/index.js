import { Box } from '@material-ui/core';
import {
  CancelButton,
  ContentWrapper,
  TitleWrapper,
  SubTitleWrapper,
  SliderWrapper,
  RatingTagWraper,
  QuestionWrapper,
  ToolRatingWrapper,
  CardRating,
  CustomerButtonWrapper,
  ScrollWrapper,
} from './style';
import TAMSlider from 'app/tamComponents/slider/Slider';
import CustomButton from 'app/tamComponents/button';
import propTypes from 'prop-types';
import { useState } from 'react';
import { submitDestress, submitRating } from '../toolDetailService'

const ToolRating = (props) => {
  // let lvl = sessionStorage.getItem("distressLevel") == null ? 3 : parseInt(sessionStorage.getItem("distressLevel")
  const [destress, updateDistressLevel] = useState(3)
  const [userRating, updateUserRating] = useState(null)

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
    <>
      <ContentWrapper className="tools_rating_popup">
        <Box textAlign="right">
          <CancelButton onClick={props.onClose}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </CancelButton>
        </Box>

        <ScrollWrapper>
          <TitleWrapper>How was this tool for you today?</TitleWrapper>
          <SubTitleWrapper>
            These scales help to track your progress & evaluate whether this has been a useful tool specifically for
            you. It helps us understand which tools work best for you so we can recommend better ones each time.
          </SubTitleWrapper>

          <Box>
            <QuestionWrapper>
              <span className="card-number">1</span>
              <span className="card-title">Please rate your level of distress</span>
            </QuestionWrapper>
            <SliderWrapper>
              <TAMSlider updateDistressLevel={(val) => { updateDistressLevel(val) }} />
              <RatingTagWraper>
                <Box>None</Box>
                <Box>Moderate</Box>
                <Box>Extreme</Box>
              </RatingTagWraper>
            </SliderWrapper>
          </Box>

          <Box>
            <QuestionWrapper>
              <span className="card-number">2</span>
              <span className="card-title">How helpful was this tool?</span>
            </QuestionWrapper>
            <ToolRatingWrapper>
              <CardRating
                // disabled={true}
                name={1}
                val={userRating}
                size="large"
                className="mt-12"
                onChange={(e, value) => {
                  updateUserRating(value);
                }}
                key={3}
              />
            </ToolRatingWrapper>
          </Box>

          <CustomerButtonWrapper>
            <CustomButton onClick={() => { submitHandler() }} color="#e87e1f">
              Submit
            </CustomButton>
          </CustomerButtonWrapper>
        </ScrollWrapper>
      </ContentWrapper>
    </>
  );
};

ToolRating.propTypes = {
  onClose: propTypes.func,
};

export default ToolRating;
