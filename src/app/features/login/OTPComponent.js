import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress, Grid, IconButton, InputAdornment } from '@material-ui/core';
import { FormDiv, LoginButton, LoginLabel, LoginTextFieldWrapper, SecondaryButton, SubLoginLabel } from './LoginPage.styles';
import { useFormik } from 'formik';
import { OTPSchema } from './LoginPageValidationSchema';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import TAMAlert from 'app/tamComponents/alert/TAMAlert';
import { verifyOTP, resendOTP as resendOTPAPI } from 'app/shared/services/auth';
import { saveInitialScreener } from 'app/shared/services/initialScreener';
import { ROUTES } from 'app/Routes';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';

const OTPComponent = (props) => {
  const { modal, setModal } = useContext(AppStoreContext);
  const history = useHistory();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [enteredOTP] = useState('');
  const [loading, setloading] = useState(false);
  const [OTPMessage, setOTPMessage] = useState('');
  const [authSuccess, setauthSuccess] = useState(false);
  const [resendOTP, sendOTP] = useState(false);
  const [resndLoading, setresndLoading] = useState(false);
  const [authToken, setAuthToken] = useState(props.authToken);

  useEffect(() => {
    if (resendOTP) {
      setOTPMessage("");
      setresndLoading(true);
      resendOTPAPI({
        token: JSON.parse(localStorage.getItem('token')),
      })
        .then((msg, data) => {
          setAuthToken(JSON.parse(localStorage.getItem('token')));
          setOTPMessage(msg);
        })
        .catch((msg) => {
          setOTPMessage(msg);
        })
        .finally(() => {
          setresndLoading(false);

          setTimeout(() => {
            setOTPMessage("");
            sendOTP(false);
          }, 5000);

        });
    }
  }, [resendOTP]);
  const formik = useFormik({
    initialValues: {
      otp: enteredOTP,
    },
    validationSchema: OTPSchema,
    onSubmit: async (values) => {
      setOTPMessage('');
      setloading(true);
      verifyOTP({
        otp: values.otp,
        token: authToken,
      })
        .then(async (msg) => {
          setOTPMessage(msg);
          setauthSuccess(true);

          // console.log("modal", modal);
          if (location.state == null) {

            // history.push(ROUTES.default);
            history.go(0);
            props.setShowModal(false);
            setModal({ modalId: 0 });
          } else {
            console.log("redirect", location.state.redirect, modal.data.redirect);

            (location.state.redirect === '/my-progress' || modal.data.redirect === "/my-progress")
              ? saveInitialScreener().then((toolsData) => {

                history.push(ROUTES.my_progress, { toolsData });
                window.scrollTo(0, 0);
                history.go(0);
              })
              : location.state.redirect ? history.push(location.state.redirect) : history.push(modal.data.redirect);

            props.setShowModal(false);
            setModal({ modalId: 0 });
          }
        })
        .catch((msg) => {
          setOTPMessage(msg);
          setauthSuccess(false);
        })
        .finally(() => {
          setloading(false);

          sendOTP(false);
          setTimeout(() => {
            setOTPMessage("");
          }, 5000);
        });
    },
  });
  console.log(OTPMessage, authSuccess, resendOTP)

  return (
    <FormDiv>
      {OTPMessage && !authSuccess && !resendOTP ? (
        <TAMAlert key={'otp_error'} kind="error" message={OTPMessage} />
      ) : OTPMessage && resendOTP ? (
        <TAMAlert key={'otp_info'} kind="info" message={OTPMessage} />
      ) : !OTPMessage && authSuccess ? (
        <TAMAlert key={'otp_success'} kind="success" message={OTPMessage} />
      ) : null}

      <form onSubmit={formik.handleSubmit}>
        <Grid container direction={'row'}>
          <Grid item lg={12} md={12} sm={12} xs={12} fullWidth>
            <LoginLabel htmlFor="otp">
              <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  Enter Verification Code <SubLoginLabel>(For security, we have sent a verification code to your email and/or phone.)</SubLoginLabel>
                </Grid>
              </Grid>
            </LoginLabel>

            <LoginTextFieldWrapper
              fullWidth
              id="otp"
              name="otp"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.otp}
              onChange={formik.handleChange}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment className="eye_icon" position="start">
                    <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid className="otp_modal otp_button_group" item lg={12} md={12} sm={12} xs={12}>
            <LoginButton className="otp_button" variant="contained" disabled={false} type="submit">
              {loading ? <CircularProgress size="2.5rem" /> : 'Submit Verification Code'}
            </LoginButton>
          </Grid>
          <Grid className="otp_button_group" item lg={12} md={12} sm={12} xs={12}>
            <SecondaryButton
              variant="contained"
              disabled={false}
              onClick={() => sendOTP(true)}
              style={{ backgroundColor: '#007c91' }}
            >
              {resndLoading ? <CircularProgress size="2.5rem" /> : 'Resend Verification Code'}
            </SecondaryButton>
          </Grid>
        </Grid>
      </form>
    </FormDiv>
  );
};

OTPComponent.propTypes = {};

export default OTPComponent;
