import { OptionsWrapper, ButtonWrapper, QuestionWrapper } from './style';
import propTypes from 'prop-types';

const Question = (props) => {
  const getClasses = (selectedAnswer, value) => {
    if (selectedAnswer && selectedAnswer === value) return 'selected';

    return '';
  };

  return (
    <>
      <QuestionWrapper>{props.question}</QuestionWrapper>

      <OptionsWrapper>
        {props.options.map((option) => {
          return (
            <ButtonWrapper
              key={option.value}
              onClick={() => props.onChange(props.id, option.id)}
              className={getClasses(props.answer, option.id)}
            >
              {props.type === "trauma" ? option.option === 0 ? "Not at all" : option.option === 1 ? "A little bit" : option.option === 2 ? "Moderately" : option.option === 3 ? "Quite a bit" : "Extremely" : option.option === 0 ? "Not at all" : option.option === 1 ? "Several days" : option.option === 2 ? "More than half the days" : option.option === 3 ? "Nearly everyday" : ""}
            </ButtonWrapper>
          );
        })}
      </OptionsWrapper>
    </>
  );
};

Question.propTypes = {
  question: propTypes.string,
  options: propTypes.array,
  answer: propTypes.string,
  onChange: propTypes.func,
  id: propTypes.number,
};

export default Question;
