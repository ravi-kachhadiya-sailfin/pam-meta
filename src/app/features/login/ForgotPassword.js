import React, { useRef, useState, useContext } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import {
  ForgotPasswordModal,
  LoginButton,
  LoginLabel,
  LoginTextFieldWrapper,
  SecondaryButton,
  SubLoginLabel,
  ModalContentWrapper,
} from './LoginPage.styles';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from './LoginPageValidationSchema';
import TAMAlert from 'app/tamComponents/alert/TAMAlert';
import { forgetPassword } from 'app/shared/services/auth';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';

const ResetPassword = (props) => {
  const handleModal = useRef();
  // const history = useHistory();
  // const [showModal, setShowModal] = useState(props.show);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');
  const [forgotPasswordSuccess, isForgetPasswordSuccess] = useState(false);
  const { setModal } = useContext(AppStoreContext);
  // useEffect(() => {
  //   if (signInRequest) {
  //     history.push("/login");
  //   }
  // }, [history, signInRequest]);

  // React.useEffect(() => {
  //   if (!showModal && !signInRequest) {
  //     history.push("/");
  //   }
  // }, [history, showModal, signInRequest]);

  const goToLoginPage = () => {
    setModal({ modalId: 1 });
  };

  const [loadingStatus, setLoadingStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      setLoadingStatus(true);
      forgetPassword({
        email: values.email.toLowerCase(),
      })
        .then(async (msg) => {
          isForgetPasswordSuccess(true);
          setForgotPasswordMessage(msg);
          // await new Promise(() => setTimeout(() => setShowModal(false), 5000));
        })
        .catch((msg) => {
          setForgotPasswordMessage(msg);
        })
        .finally(() => {
          setLoadingStatus(false);
        });
    },
  });
  return (
    <ForgotPasswordModal
      open={props.show}
      //BackdropProps={{ style: { backgroundColor: "transparent" } }}
      onClose={() => {
        // setShowModal(false);
        setModal({ modalId: 0 });
      }}
      disableEnforceFocus
      style={{ scrollBehavior: 'smooth' }}
      ref={handleModal}
    >
      <ModalContentWrapper className="forgot_password_wrapper" >
        <form onSubmit={formik.handleSubmit} style={{ width: '100%', height: '100%' }}>
          <Grid container direction={'row'}>
            <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
              <h3>Recover Password </h3>
              {!forgotPasswordSuccess && <h5>Please provide email address to recover forgotten password</h5>}
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {forgotPasswordMessage && !forgotPasswordSuccess ? (
                <TAMAlert key={'forgot_error'} className="text-message" kind="error" message={forgotPasswordMessage} />
              ) : forgotPasswordMessage && forgotPasswordSuccess ? (
                <TAMAlert key={'forgot_success'} className="text-message" kind="success" message={forgotPasswordMessage} />
              ) : null}
            </Grid>
            {forgotPasswordSuccess ? null : (
              <>
                <Grid className="input_group_cs forgot_password_form" item lg={12} md={12} sm={12} xs={12}>
                  {/* <LoginLabel>   */}
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
                  {/* </LoginLabel> */}
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <LoginButton className="forgot_password" variant="contained" disabled={false} type="submit">
                    {loadingStatus ? <CircularProgress size="2.5rem" /> : 'Submit'}
                  </LoginButton>
                </Grid>
              </>
            )}

            <Grid item lg={12} md={12} sm={12} xs={12}>
              <SecondaryButton
                variant="contained"
                disabled={false}
                onClick={() => goToLoginPage()}
                style={{ backgroundColor: '#007c91' }}
              >
                Back to Sign in
              </SecondaryButton>
            </Grid>
          </Grid>
        </form>
      </ModalContentWrapper>
    </ForgotPasswordModal>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
