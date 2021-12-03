import React from "react";
import { HeaderTitleContainerWrapper } from "./HeaderTitle.styles";
import PropType from "prop-types";

/*Header Titile component. Which have titile for the header section of the page and description.
 *
 */
const HeaderTitle = (props) => {
  return (
    <>
      <HeaderTitleContainerWrapper >
        <div className="hello" style={{ width: 500 }}>{props.title}</div>
        <div className="hello-desc hello-sub-desc">{props.content}</div><br />
        <div className="hello-desc hello-sub-desc" style={{ padding: 'left' }}>{props.subcontent}</div>
      </HeaderTitleContainerWrapper>
    </>
  );
};

HeaderTitle.propTypes = {
  title: PropType.string.isRequired,
  content: PropType.string.isRequired,
};

export default HeaderTitle;
