import { withStyles } from "@material-ui/core/styles";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
// import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
// import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import Rating from "@material-ui/lab/Rating";
import './ratingStyle.css';

function StarRating({ onChange, name, defaultValue, className, disabled = false, ...rest }) {
  const StyledRating = withStyles({
    iconFilled: {
      color: rest.from === "popup" ? "#0099BA" : "#09425A"
    },
    iconHover: {
      color: rest.from === "popup" ? "#0099BA" : "#09425A"
    },

  })(Rating);

  return (
    <>
      <StyledRating
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        getLabelText={(value) => `${value} Star${value !== 1 ? "s" : ""} Rating`}
        className={`${className} ${rest.disabledFrom === "toolsCard" && "disabled-color"}`}
        // precision={0.5}
        icon={<StarRoundedIcon fontSize="inherit" />}
        onChange={onChange}
        size="large"
      />
    </ >
  );
}

export default StarRating;