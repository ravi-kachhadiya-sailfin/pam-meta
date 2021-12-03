import { Box } from "@material-ui/core";
import propTypes from "prop-types";
import { ContainerBox, ControlWrapper } from "./style";
// import BoxWithBg from "app/tamComponents/box-with-bg";
import Options from "./Options";

const Question = (props) => {
  return (
    <>
      <ContainerBox>
        <Box className="question">
          <Box className="questionNo">{props.questionNo}</Box>
          <Box className="questionTitle">{props.questionText}</Box>
        </Box>
        <ControlWrapper data-type={props.optionDetails.type}>
          <Options
            type={props.optionDetails.type}
            id={props.questionId}
            options={props.optionDetails.options}
            onChange={props.onChange}
            selectedAnswer={props.selectedAnswer}
          />
        </ControlWrapper>
      </ContainerBox>
    </>
  );
};

Question.propTypes = {
  questionId: propTypes.string,
  questionNo: propTypes.number,
  questionText: propTypes.string,
  optionDetails: propTypes.object,
  onChange: propTypes.func,
  selectedAnswer: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.number,
  ]),
};

export default Question;
