import { FormControlLabel } from "@material-ui/core";
import { RadioWrapper } from "./style";

const RadioWhite = ({ id, label, value, fullWidth, color, ...rest }) => {
  return (
    <FormControlLabel
      control={<RadioWrapper id={id} tam_color={color || "#fff"} {...rest} />}
      label={label}
      value={value}
      style={{ width: fullWidth ? "100%" : "auto" }}
    />
  );
};

export default RadioWhite;
