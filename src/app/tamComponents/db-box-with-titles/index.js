import {
  Container,
  Title,
  SubTitle,
  Paragraph,
} from './style';
import propTypes from "prop-types";
// import { IconButton } from "@material-ui/core";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useHistory } from 'react-router';
import recommend_arrow from "../../shared/assets/images/recommended-arrow.svg";
import recommend_arrow_responsive from "../../shared/assets/images/mobile-arrow.svg";


const DbBoxWithTitles = (props) => {
  let history = useHistory()
  return (
    <Container>
      {/* <div onClick={() => { history.push('/understanding-you') }}> */}
      <div className="title">
        <Title>Recommended</Title>

        <img className="goto" src={recommend_arrow} alt="goto" onClick={() => { history.push('/understanding-you') }} />
        <img className="goto_responsive" src={recommend_arrow_responsive} alt="goto_responsive" onClick={() => { history.push('/understanding-you') }} />
        {/* <IconButton
          onClick={() => { history.push('/understanding-you') }}
          className="goto"
          aria-label="upload picture"
          component="span"
        >
          <NavigateNextIcon fontSize="large" />
        </IconButton> */}
      </div>

      <SubTitle>Tailored Recommendations and tracking your progress can help even more!</SubTitle>
      <Paragraph>
        If you answer a few more questions about your concerns, we can
        provide you with more specific and focused recommendations. We can
        then work together to have you practice the skills, find new ones
        that may be useful for you, and track your progress over time.
      </Paragraph>
      {/* </div> */}
    </Container>
  )
};

DbBoxWithTitles.propTypes = {
  title: propTypes.string,
  subTitle: propTypes.string,
  paragraph: propTypes.string,
  gotoClick: propTypes.func,
};

export default DbBoxWithTitles;
