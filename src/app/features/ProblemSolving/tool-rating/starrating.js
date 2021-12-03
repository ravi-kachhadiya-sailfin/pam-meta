import {
  CardRating,
  CustomerButtonWrapper,
} from './style';
import CustomButton from 'app/tamComponents/button';
import propTypes from 'prop-types';
import { useState } from 'react';
import { submitRating } from '../toolDetailService'

const ToolRating = (props) => {
  // let lvl = sessionStorage.getItem("distressLevel") == null ? 3 : parseInt(sessionStorage.getItem("distressLevel")
  const [userRating, updateUserRating] = useState(null)

  let submitHandler = async () => {
    let tool = props.toolDetail
    let rbody = {
      "toolId": tool.id,
      "rating": userRating
    }
    // let dtres = await submitDestress(dbody)
    let rtres = await submitRating(rbody)
    if (rtres.statusCode === 200) {
      props.onClose()
    } else {
      props.onClose()
    }
  }

  return (
    <>
      {/* <ContentWrapper> */}

      {/* <ScrollWrapper> */}
      {/* <Box> */}
      {/* <QuestionWrapper>
              <span className="card-number">2</span>
              <span className="card-title">How helpful was this tool?</span>
            </QuestionWrapper> */}
      {/* <ToolRatingWrapper> */}
      <CardRating
        // disabled={true}
        style={{ paddingLeft: 150, paddingRight: 150 }}
        name={1}
        val={userRating}
        size="large"
        className="mt-12"
        onChange={(e, value) => {
          updateUserRating(value);
        }}
        key={3}
      />
      {/* </ToolRatingWrapper> */}
      {/* </Box> */}

      <CustomerButtonWrapper>
        <CustomButton onClick={() => { submitHandler() }} color="#e87e1f" style={{ height: '54px' }}>
          Submit
        </CustomButton>
      </CustomerButtonWrapper>
      {/* </ScrollWrapper> */}
      {/* </ContentWrapper> */}
    </>
  );
};

ToolRating.propTypes = {
  onClose: propTypes.func,
};

export default ToolRating;
