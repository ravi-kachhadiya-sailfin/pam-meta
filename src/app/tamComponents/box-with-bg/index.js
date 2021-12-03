import { Box } from "@material-ui/core";
import { TitleBox, BgCard } from "./style";
import PropTypes from "prop-types";

const BgBox = (props) => {

  return (
    <>
      <Box className={props.customClass}>
        {props.title && (
          <TitleBox className={`c-b`}>{props.title}</TitleBox>
        )}
        <BgCard bg={props.bg || "#fff"} width={props.width || "100%"}>
          <Box className="content-bgcard">{props.children}</Box>
        </BgCard>
      </Box>
    </>
  );
};

BgBox.propTypes = {
  bg: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
  customClass: PropTypes.string,
};

export default BgBox;
