import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import "./RadioGroup.css";
const RadioGroupComponent = (props) => {

  return (
    <RadioGroup className="main_radio_group" onChange={props.onChange} defaultValue={props.selected}>
      {props.choices.length !== 0
        && props.choices.map((choice, i) => (
          <FormControlLabel
            control={
              <Radio id={i} selected={props.selected === choice} style={{ color: "#0099ba" }} />
            }
            id={i}
            name={choice}
            label={choice === "Other trauma (Please describe briefly):" ? props.otherTrauma : choice}
            value={choice}
          />
        ))}
    </RadioGroup >
  );
}

export default RadioGroupComponent;