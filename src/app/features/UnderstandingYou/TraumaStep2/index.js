import { QuestionWrapper } from 'app/features/UnderstandingYou/Question/style';
// import { OptionsWrapper, Option, QuestionWrapper } from './style';
// import { withStyles } from '@material-ui/core/styles';
// import { Switch } from '@material-ui/core';
import { useEffect, useState } from 'react';

import RadioGroupComponent from 'app/tamComponents/radio-group/RadioGroupComponent';

const TraumaTwo = (props) => {
  const [otherTrauma] = useState(props.otherTrauma)
  const [traumaOptions] = useState(props.traumaOptions)
  const [selectedOpt, setSelectedOpt] = useState(props.selectedTrauma || traumaOptions[0])
  useEffect(() => {
    if (traumaOptions.indexOf(selectedOpt) === -1 && traumaOptions.length > 0) {
      setSelectedOpt(traumaOptions[0])
      props.updateTraumaTwo(traumaOptions[0])
    }
  }, [traumaOptions, selectedOpt, props])
  // const TamSwitch = withStyles((theme) => ({
  //   root: {
  //     width: 42,
  //     height: 26,
  //     padding: 0,
  //     margin: theme.spacing(1),
  //   },
  //   switchBase: {
  //     padding: 1,
  //     '&$checked': {
  //       transform: 'translateX(16px)',
  //       color: theme.palette.common.white,
  //       '& + $track': {
  //         backgroundColor: '#0099ba',
  //         opacity: 1,
  //         border: 'none',
  //       },
  //     },
  //     '&$focusVisible $thumb': {
  //       color: '#0099ba',
  //       border: '6px solid #fff',
  //     },
  //   },
  //   thumb: {
  //     width: 24,
  //     height: 24,
  //   },
  //   track: {
  //     borderRadius: 26 / 2,
  //     border: `1px solid ${theme.palette.grey[400]}`,
  //     backgroundColor: theme.palette.grey[50],
  //     opacity: 1,
  //     transition: theme.transitions.create(['background-color', 'border']),
  //   },
  //   checked: {},
  //   focusVisible: {},
  // }))(({ classes, ...props }) => {
  //   return (
  //     <Switch
  //       focusVisibleClassName={classes.focusVisible}
  //       disableRipple
  //       classes={{
  //         root: classes.root,
  //         switchBase: classes.switchBase,
  //         thumb: classes.thumb,
  //         track: classes.track,
  //         checked: classes.checked,
  //       }}
  //       {...props}
  //     />
  //   );
  // });
  const toggleData = (msg, i) => {
    console.log("msg :", msg, i);
    setSelectedOpt(msg)
    props.updateTraumaTwo(msg)
  }

  // console.log("selectedOpt", selectedOpt)
  return (
    <>
      <QuestionWrapper>Of these experiences, which one bothers you the most? [select one]</QuestionWrapper>
      <RadioGroupComponent selected={selectedOpt} choices={traumaOptions} onChange={(e) => { toggleData(e.target.value) }} otherTrauma={otherTrauma} />


      {/* <OptionsWrapper>
        {
          traumaOptions.map((op, i) => {
            let ckd = selectedOpt === op;
            return <>
              <Option>
                <TamSwitch checked={ckd} onChange={() => { toggleData(op, i) }} /> {op === "Other trauma (Please describe briefly)" ? otherTrauma : op}
                <Radio id={i} selected={ckd} onChange={() => { toggleData(op, i) }} style={{ color: "#0099ba" }} />{op === "Other trauma (Please describe briefly)" ? otherTrauma : op}
              </Option>
            </>
          })
        }
      </OptionsWrapper> */}
    </>
  );
};

export default TraumaTwo
