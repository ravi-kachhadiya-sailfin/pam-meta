import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress, FormControlLabel, Grid, Link } from '@material-ui/core';
import {
  CheckBoxLabel,
  LoginButton,
  // LoginCheckbox,
  LoginFootnote,
  LoginLabel,
  LoginTextFieldWrapper,
  SubLoginLabel,
  // InputContentWrapper
} from './LoginPage.styles';
import { useFormik } from 'formik';
import { validationSchema } from './LoginPageValidationSchema';
import PropTypes from 'prop-types';
import OTPComponent from './OTPComponent';
import TAMAlert from 'app/tamComponents/alert/TAMAlert';
import { userLogin } from 'app/shared/services/auth';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import CheckBox from 'app/tamComponents/CheckBoxEditable';

const LoginForm = ({ control, resizeModal, setShowModal, ...props }) => {
  const { setModal } = useContext(AppStoreContext);

  const [loginMessage, setLoginMessage] = useState('');
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showOTP, setshowOTP] = useState(false);
  const [loginSuccess, setloginSuccess] = useState(false);
  const [authToken, setAuthToken] = useState('');
  //Show or hide component of login
  const [showLoginComponent, setshowLoginComponent] = useState(true);
  //Hide component when login becomes true
  useEffect(() => {
    if (loginSuccess) {
      setshowLoginComponent(false);
    }
  }, [loginSuccess]);

  //If otp promptsthen reduce box size
  useEffect(() => {
    if (showOTP) {
      resizeModal();
    }
  }, [resizeModal, showOTP]);
  useEffect(() => {
    if (forgotPassword === true) {
      control(true);
      setModal({
        modalId: 2,
        modalData: {},
      });
    }
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoginMessage('');
      setLoadingStatus(true);
      userLogin({
        email: values.email.toLocaleLowerCase(),
        password: values.password,
      })
        .then((msg) => {
          setAuthToken(msg.token)
          setLoginMessage(msg.msg);
          setLoadingStatus(false);
          setloginSuccess(true);
          setshowOTP(true);
        })
        .catch((msg) => {
          if (!msg) {
            msg = "Your account is not yet verified. Please check your email to access the verification link and enable your account."
          }
          setLoadingStatus(false);
          setLoginMessage(msg);
          setTimeout(() => {
            setLoginMessage("");
          }, 5000)
        });
    },
  });

  return (
    <>
      {showOTP && authToken !== "" ? (
        <OTPComponent authToken={authToken} setShowModal={setShowModal} />
      ) : (
        <>
          {loginMessage && !loginSuccess ? (
            <TAMAlert key={'login_error'} kind="error" message={loginMessage} />
          ) : loginMessage && loginSuccess ? (
            <TAMAlert key={'login_success'} kind="success" message={loginMessage} />
          ) : null}
          {showLoginComponent ? (
            <form onSubmit={formik.handleSubmit}>
              <Grid container direction={'row'}>
                <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                  <LoginLabel htmlFor="password">
                    <SubLoginLabel>If you haven't created an account, please <span className="hyperlink" onClick={() => props.setValue(1)}>register</span> now
                    </SubLoginLabel>
                  </LoginLabel>
                </Grid>
                <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                  <LoginLabel htmlFor="email">
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                      <Grid item>Email</Grid>
                      <Grid item>
                        <SubLoginLabel>&nbsp;(this is your username)</SubLoginLabel>
                      </Grid>
                    </Grid>
                  </LoginLabel>
                  <LoginTextFieldWrapper
                    fullWidth
                    id="email"
                    name="email"
                    // label="Email (this is your username)"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{ disableUnderline: true }}
                  />
                </Grid>
                <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12} fullWidth>
                  <LoginLabel htmlFor="password">
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        Password
                      </Grid>
                    </Grid>
                  </LoginLabel>
                  <LoginTextFieldWrapper
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    //label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password ? formik.errors.password : 'Passwords are case sensitive'}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{ disableUnderline: true }}
                  />
                </Grid>
                <Grid className="input_checkbox" item lg={12} md={12} sm={12} xs={12}>
                  <FormControlLabel
                    control={<CheckBox name="checkedC" />}
                    label={<CheckBoxLabel>Keep me logged in</CheckBoxLabel>}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <LoginButton variant="contained" disabled={false} type="submit">
                    {loadingStatus ? <CircularProgress size="2.5rem" /> : 'Login'}
                  </LoginButton>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Link>
                    <LoginFootnote >
                      <div className="hyperlink" onClick={() => setForgotPassword(true)}> Forgot username or password? </div>
                      (hint: your username is your email address)
                    </LoginFootnote>

                  </Link>
                </Grid>
              </Grid>
            </form>
          ) : null}
        </>
      )
      }
    </>
  );
};

LoginForm.propTypes = {
  control: PropTypes.func,
};

export default LoginForm;
