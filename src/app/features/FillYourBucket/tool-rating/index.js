import React from 'react';
import { Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {
  CancelButton,
  // ContentWrapper,
  // SliderWrapper,
  // RatingTagWraper,
  QuestionWrapper,
  CustomerButtonWrapper,
  ScrollWrapper,
} from './style';

import { SliderWrapper } from 'app/tamComponents//ToolsCard/tool-detail/tool-rating/style';
import TAMSlider from 'app/tamComponents/slider/Slider';
import CustomButton from 'app/tamComponents/button';
import propTypes from 'prop-types';
import { useState } from 'react';
import { submitFBRating } from '../toolDetailService'
import popup_close from 'app/shared/assets/images/popup_close.svg';

const ToolRating = (props) => {
  // let lvl = sessionStorage.getItem("distressLevel") == null ? 3 : parseInt(sessionStorage.getItem("distressLevel")
  const [scroll] = React.useState('paper');
  const [pridestress, updatePriDistressLevel] = useState(0)
  const [postdestress, updatePostDistressLevel] = useState(0)

  let submitHandler = async () => {
    let body = {
      "fillYourBucketId": props.fbid,
      "pre_score": pridestress,
      "post_score": postdestress
    }
    let res = await submitFBRating(body)
    // let rtres = await submitRating(rbody)
    if (res.statusCode === 200) {
      props.updateRating(postdestress - pridestress)
      props.onClose()
    }
  }

  const handleClose = () => {
    props.onClose()
  };

  const descriptionElementRef = React.useRef(null);

  return (

    <div>
      <Dialog className="donate-card tool-card-rating"
        open={true}
        style={{ maxWidth: "1018px !important" }}
        onClose={handleClose}
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
            <Box textAlign="right" className="donate-img">
              <img onClick={() => { handleClose() }} src={popup_close} alt="popup close" />
              <CancelButton onClick={() => { handleClose() }}>
              </CancelButton>
            </Box>
            <ScrollWrapper>
              <Box className="tool-rating-space">
                <QuestionWrapper className="tool-que">
                  <span className="card-number">1</span>
                  <span className="card-title">On a scale of 0-10, how distressed did you feel before the activity?</span>
                </QuestionWrapper>
                <SliderWrapper>
                  <TAMSlider from="popupFillBucket" updateDistressLevel={(val) => { updatePriDistressLevel(val) }} />
                  <div className="slider_level">
                    <div className="slider_level_text">None</div>
                    <div className="slider_level_text">Moderate</div>
                    <div className="slider_level_text">Extreme</div>
                  </div>
                </SliderWrapper>
              </Box>
              <Box>
                <QuestionWrapper className="tool-que">
                  <span className="card-number">2</span>
                  <span className="card-title">On a scale of 0-10, how distressed did you feel after the activity?</span>
                </QuestionWrapper>
                <SliderWrapper>
                  <TAMSlider from="popupFillBucket" updateDistressLevel={(val) => { updatePostDistressLevel(val) }} />
                  <div className="slider_level">
                    <div className="slider_level_text">None</div>
                    <div className="slider_level_text">Moderate</div>
                    <div className="slider_level_text">Extreme</div>
                  </div>
                </SliderWrapper>
              </Box>
              <CustomerButtonWrapper>
                <CustomButton onClick={() => { submitHandler() }} color="#F19840" className="fill-btn">
                  Submit
                </CustomButton>
              </CustomerButtonWrapper>
            </ScrollWrapper>

          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>





  );
};

ToolRating.propTypes = {
  onClose: propTypes.func,
};

export default ToolRating;
