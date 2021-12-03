import React from 'react';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Reminder from '../../tamComponents/reminder';
import MultiSelectButton from "app/tamComponents/multi-select-btn";
import { ProblemSolvingPopup, FtTextArea } from './style';
export default function PopUp(props) {
  const [step, setStep] = React.useState(1)
  const [open, setOpen] = React.useState(true);
  const [selectedOpt, setSelectedOpt] = React.useState([]);
  const [scroll] = React.useState('paper');

  const noactivity = [
    "I did something else to address the problem.",
    "Too busy",
    "Too tired",
    "I forgot",
    "The action step were too big and over whelming",
    "Didn't feel like doing it",
    "I don't have something. I need to try the action step"
  ]

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
        // style={{ minWidth: 350 }}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent className="problem_solving_popup_card p-0" dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {step === 1 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">Did you implement last plan you made?</span>
              <div className="popup_text_btn">
                <div onClick={() => { setStep(2) }} className="popup_btn">No</div>
                <div onClick={() => { setStep(3) }} className="popup_btn popup_btn_yes">Yes</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 2 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">Let’s see if we can figure out a way to make it happen. What do you think got in the way of implementing your plan?</span>
              <div className="popup_text_btn">
                <div onClick={() => { setStep(8) }} className="trouble-shoot_btn">Trouble shoot</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 3 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">Great! Was the plan effective?</span>
              <div className="popup_text_btn">
                <div onClick={() => { setStep(4) }} className="popup_btn">No</div>
                <div onClick={() => { setStep(5) }} className="popup_btn popup_btn_yes">Yes</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 4 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">You need to make a new or refined plan to address the problem</span>
              <div className="popup_text_btn">
                <div className="trouble-shoot_btn" onClick={() => { props.toStep(3) }} >Return to step 3</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 5 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">Great! Do you think the plan needs to be changed or updated?</span>
              <div className="popup_text_btn">
                <div onClick={() => { setStep(6) }} className="popup_btn">No</div>
                <div onClick={() => { props.toStep(3) }} className="popup_btn popup_btn_yes">Yes</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 6 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">Do you want to tackle a new problem?</span>
              <div className="popup_text_btn">
                <div onClick={() => { setStep(7) }} className="popup_btn">No</div>
                <div onClick={() => { props.toStep(0) }} className="popup_btn popup_btn_yes">Yes</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 7 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">Let’s try a new skill.</span>
              <div className="popup_text_btn">
                <div onClick={() => { window.location.href = "/" }} className="popup_btn">No</div>
                <div onClick={() => { window.location.href = "/recommendation" }} className="popup_btn popup_btn_yes">Yes</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 8 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text" >Look like you didn't get to trying your plan. What do you think got in the way doing trying?</span>


              <div className="step_checkbox_button step_checkbox_button_wrapper">
                {noactivity.map((val) => {
                  return <MultiSelectButton
                    key={1}
                    onChange={() => {
                      let data = selectedOpt
                      let valIndex = data.indexOf(val)
                      if (valIndex === -1) {
                        // data.push(val)
                        setSelectedOpt([...selectedOpt, val])
                      } else {
                        data.splice(valIndex, 1)
                        setSelectedOpt([...data])

                      }
                    }}
                    text={val}
                    value={val}
                    selectedAnswer={selectedOpt}
                  ></MultiSelectButton>
                })}
              </div >
              <div className="popup_text_btn">
                <div className="trouble-shoot_btn trouble_shoot_btn_que" onClick={() => { setStep(9) }}>Next</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 9 && <ProblemSolvingPopup className="popup_card popup_text_input">
              <span className="popup_text ">What can you do to address what got in the way of trying out your plan?</span>
              <FtTextArea className="popup_textarea"
                // value={eyp}
                rows={2}
                onChange={(e) => { }}
                style={{ width: "100%" }}
                placeholder={"Type here..."}>
              </FtTextArea>
              {/* <FtTextField placeholder={"Type here..."} onChange={(e) => { }} style={{ width: "100%", height: "60px" }} /> */}
              <div className="popup_text_btn">
                <div onClick={() => { setStep(10) }} className="popup_btn">Next</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 10 && <ProblemSolvingPopup className="popup_card">
              <span className="popup_text">Let’s make a plan to try again.</span>
              <div className="popup_text_btn">
                <div onClick={() => { setStep(11) }} className="popup_btn">Set a reminder</div>
                <div onClick={() => { props.toStep(2) }} className="popup_btn popup_btn_yes">Try again</div>
              </div>
            </ProblemSolvingPopup>}

            {step === 11 && <ProblemSolvingPopup className="popup_card">
              <Reminder closePopup={() => { setStep(10) }} callBack={() => { props.close() }} location={window.location.origin + "/probsolve/" + props.toolDetail.id} title={'PAM - ' + props.toolDetail.title} discription={props.toolDetail.summary} />
            </ProblemSolvingPopup>}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
