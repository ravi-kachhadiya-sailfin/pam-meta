import { FormControlLabel } from "@material-ui/core"
import { CheckboxWrapper, CheckboxLabel } from './style';

const CheckBox = ({ id, label, ...rest }) => {
  return (
    <FormControlLabel
      control={<CheckboxWrapper id={id} {...rest} />}
      label={<CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>}
    />
  )
}

export default CheckBox
