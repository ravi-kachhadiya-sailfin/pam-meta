import propTypes from "prop-types";
import { ButtonWrapper } from './style';

// import CheckIcon from '@material-ui/icons/Check';
import RightTick from 'app/shared/assets/images/bucket/right-tick.svg';

const MultiSelectButton = (props) => {
  const getClasses = (selectedAnswer, value) => {
    console.log(props.singleSelect, selectedAnswer, value)
    if (props.singleSelect && selectedAnswer.toString() === value) {
      return "selected";
    } else if (!props.singleSelect && selectedAnswer && selectedAnswer.length > 0 && selectedAnswer.indexOf(value) > -1) {
      return "selected";
    }

    return "";
  };

  return <ButtonWrapper
    value={props.value}
    onClick={props.onChange}
    className={`${getClasses(props.selectedAnswer, props.value)} multiple-select-btn ${(getClasses(props.selectedAnswer, props.value) !== "selected" && props.check) && "disabled-check-icon"} ${props.textCenter && "content-center-select"}`}
    disabled={getClasses(props.selectedAnswer, props.value) !== "selected" && props.check}
  >
    {props.text}
    {getClasses(props.selectedAnswer, props.value) === "selected" && props.check && <img alt={"img"} src={RightTick} className="right-tick" />}
  </ButtonWrapper>
}

MultiSelectButton.propTypes = {
  selectedAnswer: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.number,
  ]),
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.number,
  ]),
  text: propTypes.string,
  onChange: propTypes.func,
}

export default MultiSelectButton;
