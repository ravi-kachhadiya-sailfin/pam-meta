import { OptionsWrapper, Option } from './style';
import { QuestionWrapper } from 'app/features/UnderstandingYou/Question/style';

import { withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';
import { useState } from 'react';

const TraumaOne = (props) => {
  const [selectedOpts, setSelectedOpts] = useState(props.traumaOneData)
  const [otherTrauma, setOtherTrauma] = useState(props.traumaOther)
  const [isNone, setIsNone] = useState(false)
  const traumaOptions = [
    "Death of a colleague or patient due to COVID",
    "Having to make life or death decisions regarding care for a critically ill patient",
    "Serious illness with COVID (e.g., in ICU, severe difficulty breathing) for yourself or a close friend or family member",
    "Death of a close friend or family member due to COVID",
    "Serious, life threatening illness",
    "Physical Assault",
    "Sexual assault",
    "Military combat or lived in a war zone",
    "Child abuse",
    "Accident",
    "Natural disaster",
    "Other trauma",
    "None"
  ]

  const TamSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#0099ba',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#0099ba',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  const toggleData = (msg, i) => {
    let opts = selectedOpts
    if (msg === "None" && opts !== []) {
      setIsNone(true)
      opts = []
    } else {
      setIsNone(false)
      let opIndex = opts.indexOf(msg)
      if (opIndex === -1) {
        opts.push(msg)
      } else {
        opts.splice(opIndex, 1)
      }
    }
    setSelectedOpts([...opts])
    props.updateTraumaOne([...opts], otherTrauma)
  }
  // console.log("selectedOpts",selectedOpts)
  return (
    <>
      <QuestionWrapper className="questionWrapper_radio_step">Have you ever experienced any of the following events (check all that apply):</QuestionWrapper>


      <OptionsWrapper>
        {
          traumaOptions.map((op, i) => {
            let ckd = op !== "None" ? (selectedOpts.indexOf(op) > -1 ? true : false) : isNone;
            // console.log("op: ", op, "checked:", ckd)
            return <>
              <Option>
                <div className="switch_wrapper">
                  <TamSwitch checked={ckd} onChange={() => { toggleData(op, i) }} />
                  <div className="text_input">
                    <p>{op}</p>
                    {i === 11 && ckd && <textarea className="switch_text_area desk_area" placeholder="Please describe briefly" onChange={(e) => { setOtherTrauma(e.target.value); props.updateTraumaOne([...selectedOpts], e.target.value) }} value={otherTrauma} type="text" />}
                  </div>
                </div>
                {i === 11 && ckd && <textarea className="switch_text_area mobile_area" placeholder="Please describe briefly" onChange={(e) => { setOtherTrauma(e.target.value); props.updateTraumaOne([...selectedOpts], e.target.value) }} value={otherTrauma} type="text" />}

              </Option>
            </>
          })
        }
      </OptionsWrapper>
    </>
  );
};

export default TraumaOne
