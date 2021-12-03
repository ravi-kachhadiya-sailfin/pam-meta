import React from 'react';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Reminder from '../../tamComponents/reminder';
// import { ProblemSolvingPopup } from './style';
import { ProblemSolvingPopup } from 'app/features/ProblemSolving/style';


export default function PopUp({ popUpStep, setPopUpStep, ...props }) {
  // const [step, setStep] = React.useState(1)
  const [isuseful, setIsuseful] = React.useState(true)
  const [open, setOpen] = React.useState(true);
  const [scroll] = React.useState('paper');

  // const handleClickOpen = (scrollType) => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const scrollTop = () => {
    var topScroll = 70;
    // console.log("scroll top")
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        style={{ minWidth: 350 }}
        onClose={handleClose}
        scroll={scroll}
        className="problem_solving_popup"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {popUpStep === 1 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text" >Would you like to set a calendar notification for these action steps?</span>
              <div className="popup_text_btn">
                <div onClick={() => { props.feedbackOpen(); props.closePopup(); scrollTop(); }} className="popup_btn">No</div>
                <div onClick={() => { setIsuseful(false); setPopUpStep(2); }} className="popup_btn popup_btn_yes">Yes</div>
              </div>
              {/* {hasReminder &&
                <Card style={{ padding: 10, position: 'absolute', marginTop: '50px', width: 400, zIndex: 500 }}>
                  <Reminder closePopup={() => { setHasReminder(false) }} location={window.location.origin + "/tool-detail/" + props.toolDetail.id} title={'PAM - ' + props.toolDetail.title} discription={props.toolDetail.summary} />
                </Card>

              } */}
            </ ProblemSolvingPopup>}

            {popUpStep === 3 && <ProblemSolvingPopup className="popup_card">
              {isuseful ? <>
                <div className="popup_text great_text">Great!</div>
                <div className="popup_text great_sub_text">This is something you can practice when you notice you start to feel bad. You can come back to the app and go through this exercise as many times as you want. We recommend doing it once a day until it starts to feel easier--and maybe even automatic--to use the 3 C’s: Catch, check, change right in the moment when you find yourself starting to feel bad.</div>
              </> :
                <div className="popup_text great_sub_text">This can take some practice. Most people need to try it at least a few times to start getting the hang of it. You can come back to the app and go through this exercise as many times as you want. We recommend doing it once a day until it starts to feel easier--and maybe even automatic--to use the 3 C’s: Catch, check, change right in the moment when you find yourself starting to feel bad.</div>
              }
              <span className="popup_text">Want to try again with another thought?</span>
              <div className="popup_text_btn">
                <div className="popup_btn" onClick={() => { props.setScreen(1); props.closePopup(); setPopUpStep(1); scrollTop(); }}>No</div>
                <div className="popup_btn popup_btn_yes" onClick={() => { props.reStart(); props.closePopup(); setPopUpStep(1) }} >Yes</div>
              </div>
            </ProblemSolvingPopup>}

            {popUpStep === 2 && <div style={{ textAlign: 'center', }}>
              {/* <Card style={{ padding: 10, marginTop: '50px', width: 400, zIndex: 500 }}> */}
              <Reminder closePopup={() => { setPopUpStep(1); }} callBack={() => { props.feedbackOpen(); props.closePopup(); scrollTop() }} location={window.location.origin + "/probsolve/" + props.toolDetail.id} title={'PAM - ' + props.toolDetail.title} discription={props.toolDetail.summary} />
              {/* </Card> */}
              {/* <span style={{ fontSize: 25, color: "#09425A", width: "70%" }}><b>How would you rate this tool?</b></span><br />
              <ToolRating onClose={() => { setStep(3) }} toolDetail={props.toolDetail} updateRating={(val) => { props.updateRating(val) }} /> */}
            </div>}
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
