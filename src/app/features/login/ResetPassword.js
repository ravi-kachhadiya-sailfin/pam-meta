import React, { useRef, useState, useContext } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import {
  ForgotPasswordModal,
  LoginButton,
  LoginLabel,
  LoginTextFieldWrapper,
  ModalContentWrapper
} from "./LoginPage.styles";
import { useFormik } from "formik";
import { useHistory } from "react-router";

import { resetPasswordSchema } from "./LoginPageValidationSchema";
import TAMAlert from "app/tamComponents/alert/TAMAlert";
import { resetPassword } from "app/shared/services/auth";
import { AppStoreContext } from "app/shared/store/AppStoreProvider";
import { ROUTES } from "app/Routes";

const ResetPassword = (props) => {
  const handleModal = useRef();
  const history = useHistory();
  const [showModal, setShowModal] = useState(props.show);
  const [resetPasswordMessage, setResetPasswordMessage] = useState("");
  const [resetSuccess, setResetStatus] = useState(false);
  const { setModal } = useContext(AppStoreContext);
  React.useEffect(() => {
    if (!showModal) {
      history.push(ROUTES.default);
    }
  }, [history, showModal]);

  const [loadingStatus, setLoadingStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      reEnterPassword: "",
      registrationSecQue: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      setLoadingStatus(true);
      resetPassword({
        password: values.newPassword,
        token: props.token,
        securityAnswer: values.registrationSecQue,
      })
        .then(async (msg) => {
          setLoadingStatus(false);
          setResetStatus(true);
          setResetPasswordMessage(msg);
          await new Promise(() => setTimeout(() => setShowModal(false), 5000));
        })
        .catch((msg) => {
          setResetPasswordMessage(msg);
        })
        .finally(() => {
          setLoadingStatus(false);
        });
    },
  });

  return (
    <>
      <ForgotPasswordModal
        open={true}
        onClose={() => {
          setShowModal(false);
          setModal({ modalId: 0 });
        }}
        disableEnforceFocus
        style={{ scrollBehavior: "smooth" }}
        ref={handleModal}
      >
        <ModalContentWrapper className="forgot_password_wrapper">
          <form
            onSubmit={formik.handleSubmit}
            style={{ width: "100%", height: "100%" }}
          >
            <Grid container direction={"row"}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <h3>Reset Password </h3>
              </Grid>
              <Grid className="input_group_cs forgot_password_form" item lg={12} md={12} sm={12} xs={12}>
                {resetPasswordMessage && !resetSuccess ? (
                  <TAMAlert
                    key={"reset_error"}
                    kind="error"
                    message={resetPasswordMessage}
                  />
                ) : resetPasswordMessage && resetSuccess ? (
                  <TAMAlert
                    key={"reset_success"}
                    kind="success"
                    message={resetPasswordMessage}
                  />
                ) : null}
              </Grid>
              <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                <LoginLabel htmlFor="newPassword">
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      Enter new password
                    </Grid>
                  </Grid>
                </LoginLabel>
                <LoginTextFieldWrapper
                  fullWidth
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  //label="Password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.newPassword &&
                    Boolean(formik.errors.newPassword)
                  }
                  helperText={
                    formik.touched.newPassword
                      ? formik.errors.newPassword
                      : "Passwords are case sensitive"
                  }
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                <LoginLabel htmlFor="reEnterPassword">
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      Confirm password
                    </Grid>
                  </Grid>
                </LoginLabel>
                <LoginTextFieldWrapper
                  fullWidth
                  id="reEnterPassword"
                  name="reEnterPassword"
                  type="password"
                  //label="Password"
                  value={formik.values.reEnterPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.reEnterPassword &&
                    Boolean(formik.errors.reEnterPassword)
                  }
                  helperText={
                    formik.touched.reEnterPassword
                      ? formik.errors.reEnterPassword
                      : ""
                  }
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <LoginLabel htmlFor="registrationSecQue">
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item>Security Question &nbsp;*</Grid>
                    <Grid item style={{ marginTop: "1rem" }}>
                      What is your favorite comfort food?
                    </Grid>
                  </Grid>
                </LoginLabel>
                <LoginTextFieldWrapper
                  fullWidth={true}
                  id="registrationSecQue"
                  name="registrationSecQue"
                  //label="Password"
                  value={formik.values.registrationSecQue}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.registrationSecQue &&
                    Boolean(formik.errors.registrationSecQue)
                  }
                  helperText={formik.touched.registrationSecQue}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid className="reset_password" item lg={12} md={12} sm={12} xs={12}>
                <LoginButton className=" mb-0" variant="contained" disabled={false} type="submit">
                  {loadingStatus ? <CircularProgress size="3rem" /> : "Submit"}
                </LoginButton>
              </Grid>
            </Grid>
          </form>
        </ModalContentWrapper>
      </ForgotPasswordModal>
      <div style={{ backgroundColor: "#a9bdc5", height: "100%" }}></div>
    </>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
