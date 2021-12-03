import { FormControlLabel } from "@material-ui/core"
import { CheckboxLabel } from './CustomCheckBox.style';
import CheckBoxEditable from "app/tamComponents/CheckBoxEditable";

const CheckBox = ({ id, label, ...rest }) => {
  return (
    <FormControlLabel
      control={<CheckBoxEditable id={id} {...rest} />}
      label={<CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>}
    />
  )
}

export default CheckBox
