import React from 'react';
// import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { AnswerNormalText, AnswerTitleText, UL, SubTextContainer } from "../../features/faqs/FAQPage.styles"
// import { CancelButton } from './ToolsPageComponent.styles';
import popup_close from 'app/shared/assets/images/popup_close.svg';

import { CancelButton } from "app/tamComponents/ToolsCard/tool-detail/tool-rating/style"
const PopUp = (props) => {
  const [scroll] = React.useState('paper');

  console.log("props", props)
  // const handleClickOpen = (scrollType) => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };

  const handleClose = () => {
    props.setShowPopup(false);
    props.donatePopupClose();
  };

  const descriptionElementRef = React.useRef(null);


  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog className="donate-card"
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
              {/* <i onClick={() => { handleClose() }} style={{ color: 'orange' }} class="fa fa-times" aria-hidden="true"></i>  */}
              <img onClick={() => { handleClose() }} src={popup_close} alt="popup close" />
              <CancelButton onClick={() => { handleClose() }}>
              </CancelButton>
              {/* // <CancelButton className="tool_rating_close" onClick={props.onClose}>
              //   <img src={popup_close} alt="popup close" />
              // </CancelButton> */}
            </Box>
            <div>
              <>
                <AnswerNormalText className="mb">
                  We would be honored if you chose to join them and support our efforts to continually improve, expand and share PAM as well as other new digital based-mental health tools.
                </AnswerNormalText>

                <AnswerTitleText className="mb">To make a gift online:</AnswerTitleText>

                <UL className="mb">
                  {[<div>Go to: <a href="https://medicalgiving.stanford.edu/">medicalgiving.stanford.edu</a></div>,
                    "Click on the blue “make a gift” tab in the upper right bar",
                    "In the special instructions/other designation box, note: This gift is intended to support Pause a Moment (PAM), in the Department of Psychiatry and Behavioral Sciences.",
                    "Then follow the prompts.",
                  ].map((item, index) => {
                    return (
                      <li key={index}>
                        <AnswerNormalText>{item}</AnswerNormalText>
                      </li>
                    )
                  })}
                </UL>

                <AnswerTitleText className="mb">To make a gift via check:</AnswerTitleText>

                <UL>
                  {["Please make your check payable to Stanford University",
                    "In the memo line, indicate Pause a Moment (PAM), Psychiatry",
                    "Also include a note that includes: This gift is intended to support Pause a Moment (PAM), in the Department of Psychiatry and Behavioral Sciences.",
                    <AnswerTitleText>Mail to:</AnswerTitleText>
                  ].map((item, index, arr) => {
                    return (
                      <li key={index} className={arr.length - 1 === index && "last-child"}>
                        <AnswerNormalText>{item}</AnswerNormalText>
                      </li>
                    )
                  })}
                </UL>

                <SubTextContainer className="mb-extra"><AnswerNormalText> Medical Center Development</AnswerNormalText>
                  <AnswerNormalText>485 Broadway Street, 4th Floor</AnswerNormalText>
                  <AnswerNormalText>Redwood City, CA 94063</AnswerNormalText>
                  <AnswerNormalText> MC  5470</AnswerNormalText>
                </SubTextContainer>


                <AnswerNormalText>
                  For a more personal discussion around your philanthropic interests and questions,
                  <span className="text-bold"> please contact</span>
                </AnswerNormalText>
                <AnswerNormalText>Stanford Medical Center Development</AnswerNormalText>
                <AnswerNormalText>Philanthropic Liaison for Psychiatry and Behavioral Sciences</AnswerNormalText>
                <AnswerNormalText><a href="mailto:medicalgiving@stanford.edu">medicalgiving@stanford.edu</a></AnswerNormalText>
                <AnswerNormalText>(650) 725 - 2504</AnswerNormalText>
              </>
            </div>

          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default PopUp;