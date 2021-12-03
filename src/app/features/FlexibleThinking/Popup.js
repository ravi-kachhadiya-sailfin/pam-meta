import React from 'react';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ToolRating from './tool-rating/starrating';
import { ProblemSolvingPopup } from 'app/features/ProblemSolving/style';

export default function PopUp(props) {
  const [step, setStep] = React.useState(1)
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

  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog className="problem_solving_popup"
        open={open}
        style={{ minWidth: 350 }}
        onClose={handleClose}
        scroll={scroll}
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
            {step === 1 && <ProblemSolvingPopup className="popup_card" >
              <span className="popup_text">Now let’s check in about what you thought of this skill. Was this exercise helpful?</span>
              <div className="popup_text_btn">
                <div className="popup_btn" onClick={() => { setIsuseful(false); if (props.auth.isAuthenticated) { setStep(2) } else { setStep(3) } }} >No</div>
                <div className="popup_btn popup_btn_yes" onClick={() => { setIsuseful(true); if (props.auth.isAuthenticated) { setStep(2) } else { setStep(3) } }} >Yes</div>
              </div>
            </ProblemSolvingPopup>}
            {step === 3 && <ProblemSolvingPopup className="popup_card">
              {isuseful ? <>
                <div className="popup_text great_text">Great!</div>
                <div className="popup_text great_sub_text">This is something you can practice when you notice you start to feel bad. You can come back to the app and go through this exercise as many times as you want. We recommend doing it once a day until it starts to feel easier--and maybe even automatic--to use the 3 C’s: Catch, check, change right in the moment when you find yourself starting to feel bad.</div>
              </> : <>
                <div className="popup_text great_sub_text">This can take some practice. Most people need to try it at least a few times to start getting the hang of it. You can come back to the app and go through this exercise as many times as you want. We recommend doing it once a day until it starts to feel easier--and maybe even automatic--to use the 3 C’s: Catch, check, change right in the moment when you find yourself starting to feel bad.</div>
              </>}
              <span className="popup_text">Want to try again with another thought?</span>
              <div className="popup_text_btn">
                <div className="popup_btn" onClick={() => { window.location.href = "/tools" }} >No</div>
                <div className="popup_btn popup_btn_yes" onClick={() => { props.reStart() }} >Yes</div>
              </div>
            </ProblemSolvingPopup>}
            {step === 2 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">How would you rate this tool?</span>
              <ToolRating onClose={() => { setStep(3) }} toolDetail={props.toolDetail} updateRating={(val) => { props.updateRating(val) }} />
            </ProblemSolvingPopup>}
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
