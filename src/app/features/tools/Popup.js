import React from 'react';
// import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { CancelButton } from './ToolsPageComponent.styles';
import popup_close from "app/shared/assets/images/popup_close.svg";
export default function PopUp(props) {
  const [scroll] = React.useState('paper');

  // const handleClickOpen = (scrollType) => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };

  const handleClose = () => {
    props.setShowPopup(false);
  };

  const descriptionElementRef = React.useRef(null);


  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog className="personalized_popup"
        open={true}
        style={{ maxWidth: "1018px !important" }}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent className="personalized_popup_wrapper" dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box textAlign="right" >
              <CancelButton className="close_popup_button" onClick={() => { handleClose() }}>
                {/* <i style={{ color: 'orange' }} class="fa fa-times" aria-hidden="true"></i> */}
                <img src={popup_close} alt="close" />
              </CancelButton>
            </Box>
            <div>
              <div className="personalized_popup_text">
                To seek treatment, you can contact your employer’s <b className="personalized_bold">Employee Assistance Program.</b>
              </div>

              <div className="personalized_popup_text">
                You can also talk with your primary care doctor and/or find therapists through your health coverage.If you don't have health coverage, community behavioral health clinics may be available in your area to provide care.
              </div>

              <div className="personalized_popup_text main_help_link">
                These links can help you find: <br></br>
                a trained cognitive behavioral therapist <a target="_blank" rel="noreferrer" href="https://www.findcbt.org/FAT/">https://www.findcbt.org/FAT/</a><br></br>
                or a trauma specialist <a target="_blank" rel="noreferrer" href="https://istss.org/public-resources/find-a-clinician">https://istss.org/public-resources/find-a-clinician</a>
              </div>

              <div className="personalized_popup_title personalized_bold">
                <b>If you are having thoughts of suicide, help is available 24 hours a day.</b>
              </div>

              <div className="personalized_popup_text">
                For immediate help, you can text <b>HOME</b> to <b>741741</b><br></br>
                <a target="_blank" rel="noreferrer" href="https://www.crisistextline.org/">https://www.crisistextline.org/</a>
              </div>
              <div className="personalized_popup_text">
                or call <b className="personalized_bold">800-273-8255</b> in the US.
              </div>
              <div className="personalized_popup_text">
                Need help outside the US? <a target="_blank" rel="noreferrer" href="http://www.suicide.org/international-suicide-hotlines.html">http://www.suicide.org/international-suicide-hotlines</a>
              </div>
              {/* <div style={{ display: "flex", marginTop: 25, justifyContent: 'center' }}>
                <div onClick={() => {  }} style={{ backgroundColor: "#09425A", color: "#fff", height: 40, width: 80, textAlign: "center", padding: "7px", borderRadius: 20 }}>NO</div>
                <div onClick={() => {  }} style={{ backgroundColor: "#F19840", color: "#fff", height: 40, width: 80, textAlign: "center", padding: "7px", borderRadius: 20, marginLeft: 20 }}>YES</div>
              </div> */}
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
    </div >
  );
}
