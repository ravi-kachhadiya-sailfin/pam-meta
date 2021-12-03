import React from "react";
import { HeaderTitleContainerWrapper } from "./HeaderTitle.styles";
import PropType from "prop-types";

/*Header Titile component. Which have titile for the header section of the page and description.
 *
 */
const HeaderTitle = (props) => {
  return (
    <>
      <HeaderTitleContainerWrapper>
        <span className="hello">{props.title}</span>

        <div className="hello-desc">{props.content}</div>
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
