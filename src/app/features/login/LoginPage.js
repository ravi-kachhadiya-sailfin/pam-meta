import React, { useCallback, useRef, useState, useEffect, useContext } from 'react';
import { CircularProgress, Grid, MenuItem } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import {
  FormDiv,
  LoginButton,
  LoginLabel,
  LoginPageWrapper,
  LoginTab,
  LoginTextFieldWrapper,
  PrivacyTypography,
  RegistrationSelect,
  RegistrationTab,
  SubLoginLabel,
  SubLoginLabelBlue,
  ModalContentWrapper,
} from './LoginPage.styles';
import { useFormik } from 'formik';
import { registrationValidationSchema } from './LoginPageValidationSchema';
import { GenderData, JobRoleData, RaceOrEthicityData } from './RegistrationPageData';
import LoginForm from './LoginForm';
import { setupAxios } from '../../../common/setupAxios';
import TAMAlert from 'app/tamComponents/alert/TAMAlert';
import { registerUser } from 'app/shared/services/auth';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { ROUTES } from 'app/Routes';
import { handleClose, handleOpen } from 'app/shared/Utils/index';


const LoginPage = (props) => {
  const handleModal = useRef();
  const [showModal, setShowModal] = React.useState(props.show);
  const [registrationFormSize, setRegistrationFormSize] = React.useState({
    height: '500px',
    topMargin: '100px',
  });
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const location = useLocation();
  React.useEffect(() => {
    if (!showModal) {
      if (location.state == null) history.push(ROUTES.default);
      else history.push(location.state.redirect);
    }
  }, [showModal, history, location.state]);

  //If registration status is available or not
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const [responseData, setResponseData] = useState('');
  const [loadingStatus, setLoadingStatus] = useState(false);
  //show or hide registration component
  const [showRegistration, setshowRegistration] = useState(true);
  const { setModal } = useContext(AppStoreContext);
  //Hide once registration is success
  useEffect(() => {
    if (registrationStatus) {
      setshowRegistration(false);
    }
  }, [registrationStatus]);
  setupAxios();
  const registration = useFormik({
    initialValues: {
      registrationEmail: '',
      registrationPassword: '',
      registrationRace: '',
      registrationGender: '',
      registrationAge: '',
      registrationJobRole: '',
      registrationName: '',
      registrationOrgCode: '',
      registrationSecQue: '',
    },

    validationSchema: registrationValidationSchema,
    onSubmit: async (values) => {
      if (!values.registrationPassword || !values.registrationPassword.match(/[0-9]/g) || !values.registrationPassword.match(/[A-Z]/g) || value.length < 8) {

        return false
      }
      setLoadingStatus(true);
      registerUser({
        name: values.registrationName,
        email: values.registrationEmail.toLocaleLowerCase(),
        password: values.registrationPassword,
        race: values.registrationRace,
        age: values.registrationAge,
        gender: values.registrationGender,
        jobRole: values.registrationJobRole,
        orgCode: values.registrationOrgCode,
        securityAnswer: values.registrationSecQue,
      })
        .then(() => {
          setRegistrationStatus(true);
          handleModal.current.scrollTo(0, 0);
          // await delay(5000);
          setShowModal(false);
        })
        .catch((msg) => {
          handleModal.current.scrollTo(0, 0);
          setRegistrationStatus(false);
          setResponseData(msg);
        })
        .finally(() => {
          setLoadingStatus(false);
        });
    },
  });

  const closeModalControl = useCallback(() => setShowModal(!showModal), [showModal]);
  const resizeModal = useCallback(() =>
    setRegistrationFormSize({
      height: '300px',
      topMargin: '100px',
    }), []
  );


  // const handleOpen = () => {
  //   document.body.style.removeProperty('overflow');
  //   var temp = document.body.style.cssText;
  //   temp = temp + "overflow:hidden !important;";
  //   document.body.style.cssText = temp;
  // }

  // const handleClose = () => {
  //   document.body.style.removeProperty('overflow');
  //   var temp = document.body.style.cssText;
  //   temp = temp + "overflow:auto !important;";
  //   document.body.style.cssText = temp;
  // }



  return (
    <LoginPageWrapper
      open={props.show}
      //BackdropProps={{ style: { backgroundColor: "transparent" } }}
      onClose={() => {
        setShowModal(false);
        setModal({ modalId: 0 });
        localStorage.removeItem("token");
      }}
      topMargin={registrationFormSize.topMargin}
      disableEnforceFocus
      style={{ position: 'absolute' }}
      ref={handleModal}
    >
      <ModalContentWrapper>
        <div className="login_bg">
          <TabContext value={value}>
            <TabList
              TabIndicatorProps={{
                style: { height: '0px' },
              }}
              //style={{ marginTop: "1rem" }}
              textColor="primary"
              onChange={(e, val) => {
                setValue(val);
                val === 0
                  ? setRegistrationFormSize({
                    height: '500px',
                    topMargin: '100px',
                  })
                  : setRegistrationFormSize({
                    height: '550px',
                    topMargin: '100px',
                  });
              }}
            >
              <LoginTab label={'Login'} value={0}></LoginTab>
              <RegistrationTab label={'Register'} value={1}></RegistrationTab>
            </TabList>

            <TabPanel className="form_group_cs" value={0} style={{ width: '100%', height: '100%' }}>
              <FormDiv id="login_form_div">
                <LoginForm control={closeModalControl} resizeModal={resizeModal} setShowModal={setShowModal} setValue={setValue} />
              </FormDiv>
            </TabPanel>
            <TabPanel className="form_group_cs" value={1} id="registration_form_panel">
              <FormDiv id="registration_form_div">
                {responseData && !registrationStatus ? (
                  <TAMAlert key={'reg_error'} kind="error" message={responseData} />
                ) : !responseData && registrationStatus ? (
                  <TAMAlert
                    key={'reg_success'}
                    kind="success"
                    message={`Registration Successful, Please check your email to proceed. \n We have send a verification link to your email address. Kindly access link to activate your account.`}
                  />
                ) : null}
                {showRegistration ? (
                  <form onSubmit={registration.handleSubmit}>
                    {/*<form>*/}
                    <Grid container direction={'row'}>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="password">
                          <SubLoginLabel>Already have an account? <span className="hyperlink" onClick={() => setValue(0)}>Login</span>
                          </SubLoginLabel>
                        </LoginLabel>
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12} >
                        <SubLoginLabelBlue >Fields with * are required</SubLoginLabelBlue>
                        <LoginLabel htmlFor="registrationEmail">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Email</Grid>
                            <Grid item>
                              <SubLoginLabel>&nbsp;(this is your username)</SubLoginLabel>
                            </Grid>
                            <Grid className="star_input" item>&nbsp;*</Grid>
                          </Grid>
                        </LoginLabel>
                        <LoginTextFieldWrapper
                          fullWidth
                          id="registrationEmail"
                          name="registrationEmail"
                          //label="Email(this is your username)"
                          value={registration.values.registrationEmail}
                          onChange={registration.handleChange}
                          error={registration.touched.registrationEmail && Boolean(registration.errors.registrationEmail)}
                          helperText={registration.touched.registrationEmail && registration.errors.registrationEmail}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </Grid>

                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationPassword">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Password</Grid>
                            <Grid className="star_input" item>&nbsp;*</Grid>
                          </Grid>
                        </LoginLabel>
                        <LoginTextFieldWrapper className="reg_password"
                          fullWidth={true}
                          type="password"
                          id="registrationPassword"
                          name="registrationPassword"
                          //label="Password"
                          value={registration.values.registrationPassword}
                          onChange={registration.handleChange}
                          error={
                            registration.touched.registrationPassword && Boolean(registration.errors.registrationPassword)
                          }
                          helperText={
                            registration.touched.registrationPassword
                              ? registration.errors.registrationPassword
                              : 'Passwords must be a min of 8 characters & contain at least one capital & a number'
                          }
                          InputLabelProps={{ shrink: true }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationName">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Name</Grid>
                            <Grid className="star_input" item>&nbsp;*</Grid>

                            <Grid item>
                              {/* <SubLoginLabelBlue>&nbsp;(Optional)</SubLoginLabelBlue> */}
                            </Grid>
                          </Grid>
                        </LoginLabel>
                        <LoginTextFieldWrapper
                          fullWidth
                          id="registrationName"
                          name="registrationName"
                          // label="Name (Optional)"
                          value={registration.values.registrationName}
                          onChange={registration.handleChange}
                          error={registration.touched.registrationName && Boolean(registration.errors.registrationName)}
                          helperText={registration.touched.registrationName && registration.errors.registrationName}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </Grid>

                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationSecQue">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Security Question</Grid>&nbsp;
                            <Grid item >
                              What is your favorite comfort food?
                            </Grid>
                            <Grid className="star_input" item>&nbsp;*</Grid>
                          </Grid>
                        </LoginLabel>
                        <LoginTextFieldWrapper
                          fullWidth={true}
                          id="registrationSecQue"
                          name="registrationSecQue"
                          //label="Password"
                          value={registration.values.registrationSecQue}
                          onChange={registration.handleChange}
                          error={
                            registration.touched.registrationSecQue && Boolean(registration.errors.registrationSecQue)
                          }
                          helperText={registration.touched.registrationSecQue}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </Grid>

                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationRace">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Race/Ethnicity</Grid>
                            <Grid item>
                              {/* <SubLoginLabelBlue>&nbsp;(Optional)</SubLoginLabelBlue> */}
                            </Grid>
                          </Grid>
                        </LoginLabel>
                        <RegistrationSelect
                          id="registrationRace"
                          name="registrationRace"
                          label="registrationRace"
                          disableUnderline={true}
                          fullWidth={true}
                          onOpen={handleOpen}
                          onClose={handleClose}
                          value={registration.values.registrationRace}
                          onBlur={() => registration.setFieldTouched('registrationRace', true)}
                        >
                          {RaceOrEthicityData.map((data) => (
                            <MenuItem
                              key={data.value}
                              value={data.value}
                              style={{ fontSize: '16px' }}
                              onClick={() => {
                                registration.setFieldValue('registrationRace', data.value);
                              }}
                            >
                              {data.text}
                            </MenuItem>
                          ))}
                        </RegistrationSelect>
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationGender">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Gender</Grid>
                            <Grid item style={{ fontWeight: 'normal' }}>
                              &nbsp;- that you identify as
                            </Grid>
                            <Grid item>
                              {/* <SubLoginLabelBlue>&nbsp;(Optional)</SubLoginLabelBlue> */}
                            </Grid>
                          </Grid>
                        </LoginLabel>

                        <RegistrationSelect
                          id="registrationGender"
                          name="registrationGender"
                          label="registrationGender"
                          disableUnderline={true}
                          fullWidth={true}
                          onOpen={handleOpen}
                          onClose={handleClose}
                          value={registration.values.registrationGender}
                          onBlur={() => registration.setFieldTouched('registrationGender', true)}
                        >
                          {GenderData.map((data) => (
                            <MenuItem
                              key={data.value}
                              value={data.value}
                              style={{ fontSize: '16px' }}
                              onClick={() => {
                                registration.setFieldValue('registrationGender', data.value);
                              }}
                            >
                              {data.text}
                            </MenuItem>
                          ))}
                        </RegistrationSelect>
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationAge">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Age</Grid>
                            <Grid item>
                              {/* <SubLoginLabelBlue>&nbsp;(Optional)</SubLoginLabelBlue> */}
                            </Grid>
                          </Grid>
                        </LoginLabel>
                        <LoginTextFieldWrapper
                          fullWidth
                          id="registrationAge"
                          name="registrationAge"
                          //label="Age (Optional)"
                          value={registration.values.registrationAge}
                          onChange={registration.handleChange}
                          error={registration.touched.registrationAge && Boolean(registration.errors.registrationAge)}
                          helperText={registration.touched.registrationAge && registration.errors.registrationAge}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationJobRole">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Job Role</Grid>
                            <Grid item>
                              {/* <SubLoginLabelBlue>&nbsp;(Optional)</SubLoginLabelBlue> */}
                            </Grid>
                          </Grid>
                        </LoginLabel>
                        <RegistrationSelect className="meet_main"
                          fullWidth={true}
                          id="registrationJobRole"
                          name="registrationJobRole"
                          disableUnderline={true}
                          onOpen={handleOpen}
                          onClose={handleClose}
                          value={registration.values.registrationJobRole}
                          onBlur={() => registration.setFieldTouched('registrationJobRole', true)}
                        >
                          {JobRoleData.map((data) => (
                            <MenuItem
                              key={data.value}
                              value={data.value}
                              style={{ fontSize: '16px', }}
                              onClick={() => {
                                registration.setFieldValue('registrationJobRole', data.value);
                              }}
                            >
                              {data.text}
                            </MenuItem>
                          ))}
                        </RegistrationSelect>
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginLabel htmlFor="registrationOrgCode">
                          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>Organization Code</Grid>
                            <Grid item>
                              {/* <SubLoginLabelBlue>&nbsp;(Optional)</SubLoginLabelBlue> */}
                            </Grid>
                          </Grid>
                        </LoginLabel>
                        <LoginTextFieldWrapper
                          fullWidth
                          id="registrationOrgCode"
                          name="registrationOrgCode"
                          // label="Name (Optional)"
                          value={registration.values.registrationOrgCode}
                          onChange={registration.handleChange}
                          error={
                            registration.touched.registrationOrgCode && Boolean(registration.errors.registrationOrgCode)
                          }
                          helperText={registration.touched.registrationOrgCode && registration.errors.registrationOrgCode}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{ disableUnderline: true }}
                        />
                      </Grid>


                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <Grid container>
                          <Grid item>
                            <SubLoginLabel className="privacy_policy_cs"
                              style={{
                                lineHeight: '1',
                                fontweight: 'bold',
                              }}
                            >
                              Privacy
                            </SubLoginLabel>
                          </Grid>
                          <Grid>
                            <PrivacyTypography className="privacy_policy_text_cs" style={{ lineHeight: '1.07' }}>
                              We take your privacy seriously and will never sell your personal information. <br></br> Only members
                              of our team will have access to the information you provide.Read the full Policy <a href={"/privacypolicy"} className="text-underline">here</a>
                            </PrivacyTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <LoginButton variant="contained" disabled={false} type={'submit'} onClick={() => { }}>
                          {loadingStatus ? <CircularProgress size="2.5rem" /> : 'Register'}
                        </LoginButton>
                      </Grid>
                      <Grid className="input_group_cs" item lg={12} md={12} sm={12} xs={12}>
                        <PrivacyTypography className="by_click_text" style={{ lineHeight: '1.07' }}>
                          By clicking Register I have read & agree with the Stanford Healthcare Privacy Policy
                        </PrivacyTypography>
                      </Grid>
                    </Grid>
                  </form>
                ) : null}
              </FormDiv>
            </TabPanel>
          </TabContext>
        </div>
      </ModalContentWrapper>
    </LoginPageWrapper >
  );
};
LoginPage.propTypes = {};

export default LoginPage;
