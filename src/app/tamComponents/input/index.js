import { InputWrapper, LabelWrapper } from './style';
import {
  Grid
} from "@material-ui/core";

const Input = ({ label, subLabel, required, ...rest }) => {
  return (
    <>
      <LabelWrapper htmlFor={rest.id}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>{label}</Grid>
          {subLabel && <Grid item>
            <span className="sub-label">
              &nbsp;{subLabel}
            </span>
          </Grid>}
          {required && <Grid item>
            <span className="c-b star_input">&nbsp;*</span>
          </Grid>}
        </Grid>
      </LabelWrapper>
      <InputWrapper
        {...rest}
        InputLabelProps={{ shrink: true }}
        InputProps={{ disableUnderline: true }}
      />
    </>
  )
}

export default Input
