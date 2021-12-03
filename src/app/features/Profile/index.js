import React, { useEffect, useMemo, useRef, useState, useContext } from "react";
import { Grid, Box, RadioGroup, CircularProgress, } from "@material-ui/core";
import { useFormik } from "formik";
import { withRouter } from "react-router";

import BoxWithBg from "app/tamComponents/box-with-bg";
// import CheckBox from "app/tamComponents/checkbox";
import CheckBox from 'app/tamComponents/CheckBoxEditable';
import RadioWithColor from "app/tamComponents/radio-w";
import Input from "app/tamComponents/input";

import {
  CheckBoxLabel,
} from 'app/features/login/LoginPage.styles';

import {
  ContainerBox,
  ContentHeaderBox,
  ContactDetailsBox,
  AboutMeFormBox,
  ButtonWrapper,
  RadioGroupContainer,
  CameraIconBox,
  WeWillUseInfoContainer,
} from "./style";
import { validationSchema } from "./ProfileValidationSchema";
import {
  getUserPersonalProfileData,
  updateUserPersonalProfileData,
  updateUserProfilePicture
} from "app/shared/services/profile";
import TAMAlert from "app/tamComponents/alert/TAMAlert";
import CustomSelect from "app/tamComponents/select";
import profile from "../../shared/assets/images/profile.svg";
import profile_camera from "../../shared/assets/images/profile-camera.svg";
import { defaultMetaData } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';
import {
  GenderData,
  SexualOrientationData,
  RaceOrEthicityData,
} from "app/shared/enums";

const Profile = (props) => {
  const [userData, setuserData] = useState(null);
  const userProfileIconInputRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [imageIsUploading, setImageIsUploading] = useState(false);
  const { meta, setMeta } = useContext(MetaContext);

  useEffect(() => {
    getUserPersonalProfileData().then((data) => setuserData(data));

    const metaData = {
      title: "PAM | General Profile",
      url: window.location.href,
    }
    setMeta({ ...meta, ...metaData });

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const intialValues = useMemo(() => {
    // console.log(userData);
    if (userData)
      return {
        email: userData.email,
        sendNotification: userData.isEmailConsentAgreed || false,
        phoneNumber: userData.phone || "",
        name: userData.name,
        gender: userData.gender || "",
        age: userData.age,
        sexualOrientation:
          userData.sexualOrientation || "",
        identifyAsTransgender: userData.identifyAsTransgender,
        sendEmailOpportunities: userData.research ? "Yes" : "No",
        howWeUseInfoProvide: userData.privacySetting
          ? userData.privacySetting.toString()
          : "1",
        userProfile: userData.profileImage || "",
        securityAnswer: "",
        race: userData.race || "",
        organizationCode: userData.organizationCode || "",
      };
    else
      return {
        email: "",
        sendNotification: false,
        phoneNumber: "",
        name: "",
        gender: "",
        age: "",
        sexualOrientation: "",
        identifyAsTransgender: "",
        sendEmailOpportunities: "",
        howWeUseInfoProvide: 1,
        userProfile: "",
        securityAnswer: "",
        race: "",
        organizationCode: "",
      };
  }, [userData]);

  const formik = useFormik({
    initialValues: intialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("user:", values)
      setisLoading(true);
      setSubmitMessage("");
      updateUserPersonalProfileData({
        name: values.name,
        gender: values.gender,
        age: values.age || "",
        sexualOrientation: values.sexualOrientation,
        transgender: 1,
        research: values.sendEmailOpportunities === "Yes" ? true : false,
        privacySetting: parseInt(values.howWeUseInfoProvide),
        isEmailConsentAgreed: values.sendNotification,
        securityAnswer: values.securityAnswer,
        race: values.race,
        phone: values.phoneNumber,
        organizationCode: values.organizationCode,
      })
        .then((resp) => {
          setisSuccess(true);
          setSubmitMessage("Settings saved successfully");
          // window.scroll({
          //   behavior: "smooth",
          //   top: "0",
          // });
        })
        .catch((resp) => {
          setisSuccess(false);
          setSubmitMessage(resp);
        })
        .finally(() => setisLoading(false));
    },
    enableReinitialize: true,
  });

  const openFileManager = () => {
    if (userProfileIconInputRef) userProfileIconInputRef.current.click();
  };

  const processFile = (event) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setImageIsUploading(true)
      var reader = new FileReader();
      var file = event.currentTarget.files[0];

      const formData = new FormData();
      formData.append('image', file)
      formData.append('type', "profile")

      updateUserProfilePicture(formData).then((res) => {
        if (res.statusCode === 200) {
          reader.onload = function (e) {
            formik.setFieldValue("userProfile", e.target.result);
          };

          reader.readAsDataURL(file);
          setImageIsUploading(false);
        }
      });
    }
  };

  const scrollTop = (id) => {

    var topScroll = document.getElementById(id).offsetParent.offsetParent.offsetTop - 200;

    console.log("topScroll", topScroll)
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }

  useEffect(() => {
    const errorKeys = Object.keys(formik.errors);
    if (errorKeys.length && formik.submitCount) {
      scrollTop(errorKeys[0]);
    }
  }, [formik.errors, formik.submitCount]);

  return (
    <>
      {/* <NavBar menuItems={MENU_ITEMS} /> */}

      <ContainerBox className="container">
        <ContentHeaderBox>
          <Box className="titleContainer c-b">
            <span className="title">My Profile</span>
            <span className="sub_title">Contact details</span>
          </Box>

          <Box className="profileIcon">
            {imageIsUploading ?
              <CircularProgress />
              : formik.values.userProfile !== "" ? (
                <img className="profileImg" src={formik.values.userProfile} alt={formik.values.userProfile} />
              ) : (
                // <i className="fa fa-user-o" aria-hidden="true"></i>
                <img className="profile_placeholder" src={profile} alt="profile" />

              )}
            <CameraIconBox onClick={openFileManager}>
              <img className="profile_placeholder_camera" src={profile_camera} alt="profile_camera" />
            </CameraIconBox>
          </Box>
        </ContentHeaderBox>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="file"
            ref={userProfileIconInputRef}
            id="userProfile"
            name="userProfile"
            accept="image/*"
            onChange={processFile}
            className="display-none"
          />
          <ContactDetailsBox className="">
            <Grid direction="row">
              <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
                <BoxWithBg className="profile_card">
                  <div className="boxDesc c-b" >
                    We take your privacy seriously and will never sell your personal information or share it without your consent. You can edit your privacy preferences below.
                  </div>
                  <div className="boxAllReqMsg c-db " >Fields with <span>*</span> are required</div>
                  <Box>
                    <Grid direction="row">
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Box className="input_group_cs ">
                          <Input
                            fullWidth
                            id="email"
                            name="email"
                            disabled
                            label="Email"
                            subLabel="(username)"
                            placeholder="emailaddress@provider.com"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box className="input_group_cs checkbox_group">

                      <CheckBox
                        id="sendNotification"
                        label="Please send me notifications, reminders to this email address"
                        value={formik.values.sendNotification}
                        checked={formik.values.sendNotification}
                        onChange={formik.handleChange} />
                      <CheckBoxLabel>Please send me notifications, reminders to this email address</CheckBoxLabel>
                    </Box>


                    <Grid direction="row">
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Box className="input_group_cs ">
                          <Input
                            fullWidth
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone"
                            placeholder="+01 123456789"
                            inputProps={{
                              maxLength: 15,
                            }}
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.phoneNumber &&
                              Boolean(formik.errors.phoneNumber)
                            }
                            helperText={
                              formik.touched.phoneNumber && formik.errors.phoneNumber
                            }
                          />
                        </Box>
                      </Grid>
                    </Grid>


                  </Box>
                </BoxWithBg>
              </Grid>
            </Grid>
          </ContactDetailsBox>

          <Grid direction="row">
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <BoxWithBg title="About Me" >
                <div className="boxDesc c-db" >
                  Thank you for providing any information you feel comfortable with. All information is covered with our <a href="/privacypolicy" className="text-underline">Privacy Policy</a>. It is only used by the PAM team to understand issues better & improve our services.
                </div>
                {/* <div className="boxDesc c-db">
                    Privacy Policy. It is only used by our internal teams to
                    understand issues better & improve our services
                  </div> */}

                <AboutMeFormBox className="about-section" id="profile-form">
                  <div className="about-width">
                    <Box className="AboutMeFormBox_col">
                      <div className="input_group_cs about_group_cs">
                        <Input
                          fullWidth
                          id="name"
                          name="name"
                          label="Name"
                          required
                          placeholder="Firstname Familyname"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          error={formik.touched.name && Boolean(formik.errors.name)}
                          helperText={formik.touched.name && formik.errors.name}
                        />
                      </div>
                    </Box>
                    <Box className="AboutMeFormBox_col">
                      <div className="input_group_cs about_group_cs">
                        <CustomSelect
                          fullWidth
                          id="gender"
                          name="gender"
                          label="Gender Identity"
                          subLabel="(Optional)"
                          placeholder="Select gender"
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.gender && Boolean(formik.errors.gender)
                          }
                          options={GenderData}
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="about-width">
                    <Box className="AboutMeFormBox_col">
                      <div className="input_group_cs about_group_cs">
                        <Input
                          fullWidth
                          id="age"
                          name="age"
                          label="Age"
                          subLabel="(Optional)"
                          placeholder="Enter your age"
                          value={formik.values.age}
                          onChange={formik.handleChange}
                          error={formik.touched.age && Boolean(formik.errors.age)}
                          helperText={formik.touched.age && formik.errors.age}
                        />
                      </div>
                    </Box>
                    <Box className="AboutMeFormBox_col">
                      <div className="input_group_cs about_group_cs">
                        <CustomSelect
                          fullWidth
                          id="sexualOrientation"
                          name="sexualOrientation"
                          label="Sexual Orientation"
                          subLabel="(Optional)"
                          placeholder="Select sexual orientation"
                          value={formik.values.sexualOrientation}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.sexualOrientation &&
                            Boolean(formik.errors.sexualOrientation)
                          }
                          options={SexualOrientationData}
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="about-width">
                    <Box className="AboutMeFormBox_col">
                      <div className="input_group_cs about_group_cs">
                        <CustomSelect
                          fullWidth
                          id="race"
                          name="race"
                          label="Race/Ethnicity"
                          subLabel="(Optional)"
                          placeholder="Select Race/Ethnicity"
                          value={formik.values.race}
                          onChange={formik.handleChange}
                          error={formik.touched.race && Boolean(formik.errors.race)}
                          options={RaceOrEthicityData}
                        />
                      </div>
                    </Box>
                    <Box className="AboutMeFormBox_col">
                      <div className="input_group_cs about_group_cs">
                        <Input
                          fullWidth
                          id="organizationCode"
                          name="organizationCode"
                          label="Organization Code"
                          subLabel="(Optional)"
                          placeholder="Organization Code"
                          value={formik.values.organizationCode}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.organizationCode &&
                            Boolean(formik.errors.organizationCode)
                          }
                          helperText={
                            formik.touched.organizationCode &&
                            formik.errors.organizationCode
                          }
                        />
                      </div>
                    </Box>
                  </div>

                </AboutMeFormBox>
                <div className="input_group_cs about_group_cs security_input">
                  <Input
                    fullWidth
                    id="securityAnswer"
                    name="securityAnswer"
                    label="Security Question"
                    placeholder="What is your favorite comfort food?"
                    required
                    value={formik.values.securityAnswer}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.securityAnswer &&
                      Boolean(formik.errors.securityAnswer)
                    }
                    helperText={
                      formik.touched.securityAnswer &&
                      formik.errors.securityAnswer
                    }
                  />
                </div>
              </BoxWithBg>
            </Grid>
          </Grid>




          <Box className="my_privacy">
            <BoxWithBg bg="#09425a" customClass="privacySeriously" >
              <div className="boxTitle c-w" >MY PRIVACY SETTINGS</div>
              <div className="boxDesc c-w font-w-n" >
                We take your privacy seriously and will never sell your personal information. Only members of our team will have access to the
                information you provide. Everyone on our team has been trained in best practices for maintaining your privacy and confidentiality and
                Stanford uses two factor authentication and many other practices to ensure information security <a href="https://uit.stanford.edu/security" className="text-underline">https://uit.stanford.edu/security</a>.<br />
                More information about Stanford University’s privacy policy can be found here: <a href="https://www.stanford.edu/site/privacy/" className="text-underline">https://www.stanford.edu/site/privacy</a>.<br />
              </div>
            </BoxWithBg>
          </Box>




          <Grid direction="row">
            <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>
              <Box className="">
                <WeWillUseInfoContainer>
                  <div className="radioGroupTitle" >
                    We will use the information you provide to:
                  </div>
                  <ul style={{ fontSize: 25 }}>
                    <li>Make personalized recommendations for activities that might be helpful to you</li>
                    <li>Understand who is using the program, how often they use it, and which activities seem to be the ones they use the most and least</li>
                    <li>Understand whether the activities are effective (e.g., helpful and make a difference in terms of how people feel). When we do this, the information you provide about yourself and how you are feeling will be made anonymous and averaged in with information from other people who use the program. Your identifying information will never be shared.</li>
                    <li>Make improvements to the program</li>
                  </ul>
                </WeWillUseInfoContainer>
                <RadioGroupContainer>
                  <div className="radioGroupTitle" >
                    You can choose how we use your information
                  </div>
                  <RadioGroup
                    aria-label="howWeUseInfoProvide"
                    name="howWeUseInfoProvide"
                    id="howWeUseInfoProvide"
                    onChange={formik.handleChange}
                    value={formik.values.howWeUseInfoProvide}
                    defaultValue="1"
                    row
                  >
                    <RadioWithColor
                      color="#0099ba"
                      value="1"
                      fullWidth
                      id="how_we_use_info_provide_1"
                      label={<span className="c-db radio_label_cs" >Use my information for all the purposes above</span>}
                    />
                    <RadioWithColor
                      color="#0099ba"
                      value="2"
                      fullWidth
                      id="how_we_use_info_provide_2"
                      label={
                        <span className="c-db radio_label_cs" >Use my information to make personalized recommendations and to refine the program, but don’t include it in evaluations of how effective the program is</span>
                      }
                    />
                    <RadioWithColor
                      color="#0099ba"
                      value="3"
                      fullWidth
                      id="how_we_use_info_provide_3"
                      label={
                        <span className="c-db radio_label_cs" >Don’t track my information (This means you can still use the program but we won’t be able to personalize recommendations for you, keep track of your favorites, or show you your progress on the dashboard)</span>
                      }
                    />
                  </RadioGroup>
                </RadioGroupContainer>
              </Box>
            </Grid>
          </Grid>




          <Box className=" research_card" >
            <BoxWithBg bg="#0099ba">
              <div className="boxTitle c-w" >RESEARCH</div>
              <div className=" research_dec  c-w font-w-n" >
                Although we are not currently conducting any research studies
                based on this program, in the future there may be opportunities
                to participate in research that will help us learn more about
                how to make digital mental health interventions effective. We
                will post that information on the website but we can also
                contact you by email as well if you would like to learn about
                these opportunities in the future. Your participation would help
                us improve this program, but would also help developers of other
                digital mental health programs understand how to make them more
                effective, and we will never share your name or specific details
                with others.
              </div>
              <Box mt={2}>
                <RadioGroup
                  aria-label="sendEmailOpportunities"
                  name="sendEmailOpportunities"
                  onChange={formik.handleChange}
                  value={formik.values.sendEmailOpportunities}
                  row
                >
                  <RadioWithColor
                    value="Yes"
                    id="send_email_opportunities_yes"
                    label={
                      <span className="c-w" >
                        Yes, please email me about these opportunities
                      </span>
                    }
                  />
                  <RadioWithColor
                    value="No"
                    id="send_email_opportunities_no"
                    label={
                      <span className="c-w" >
                        No, please do not contact me about these opportunities
                      </span>
                    }
                  />
                </RadioGroup>
              </Box>
            </BoxWithBg>
          </Box>



          {submitMessage !== "" ? (
            <TAMAlert
              kind={isSuccess ? "success" : "error"}
              message={submitMessage}
            />
          ) : null}



          <Grid direction="row">
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <div className="button_submit">
                <ButtonWrapper
                  variant="contained"
                  color="primary"
                  type="submit"

                  onClick={() => (console.log(formik))}
                >
                  {isLoading ? <CircularProgress size="2.5rem" /> : "Submit"}
                </ButtonWrapper>
              </div>

            </Grid>
          </Grid>
        </form>
      </ContainerBox>

      {/* <Footer /> */}
    </>
  );
};

export default withRouter(Profile);
