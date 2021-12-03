import React, { useEffect, useContext } from "react";
//import PropTypes from "prop-types";
//import HeaderTitle from "app/tamComponents/header/HeaderTitle";
import {
  Grid
} from "@material-ui/core";
import { PageBody, PageTitle, PageTitleFootNote, Para, SubParaTitle, UL } from "./Editorial";
import { defaultMetaData } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';

const PPPage = (props) => {
  const { meta, setMeta } = useContext(MetaContext);

  useEffect(() => {
    const metaData = {
      title: "PAM | Privacy Policy",
      url: window.location.href,
    }
    setMeta({ ...meta, ...metaData });

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageBody>
      <div className="container">
        <Grid container direction="row" className="member-details-card">
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <PageTitle>Privacy Policy</PageTitle>
            <PageTitleFootNote className="normal-subtitle-gray">Effective September 15, 2021</PageTitleFootNote>

            <Para className="normal-primary-text">
              This Privacy Policy applies to the Pause A Moment (PAM) platform, including the website located at <a href={window.location.origin} className="text-underline">{window.location.origin}</a>, mobile interface (s), and related services that link to this Privacy Policy. This Privacy Policy incorporates the Stanford University Online Privacy Policy and includes the following supplemental terms (which supplemental terms take precedence in case of a conflict in the terms).The Stanford University <a target="_blank" rel="noreferrer" href={"https://www.stanford.edu/site/privacy/"} className="text-underline">Online Privacy Policy</a> and these supplemental terms are referred to below collectively as this “Privacy Policy.”
            </Para>
            <Para className="normal-primary-text">
              By using the PAM platform, you acknowledge the practices and policies outlined in this Privacy Policy. You acknowledge that we will collect, use, and share your information as described in this Privacy Policy. This Privacy Policy is not a contract and does not create any contractual rights or obligations. Your use of the PAM platform is governed by our <a href={window.location.origin + "/tnc"} className="text-underline">Terms of Use</a>.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Information Collected</SubParaTitle>
            <Para className="normal-primary-text">
              We will collect Personal Information that you manually enter into the PAM platform. For example: (1) information you provide to create your account during the registration process, such as your name, email address, zip code, phone number, gender, contact information, age, race and ethnicity, sexual orientation, employment type, and other demographic information, and (2) any screening data and responses you provide to the mood, anxiety, and post-traumatic stress surveys, as well as your responses to the prompts on the tools and activities.
            </Para>
            <Para className="normal-primary-text">
              The PAM platform may automatically collect usage data, such as your use of the PAM platform and your device, such as your IP address, your device’s MAC address, web browser, operating system, device model and manufacturer; performance issues; location, or your activity on the PAM platform. Location Information is a type of Personal Information that can be used to locate the device you use to access the Services. Location Information includes (i) the location of the device derived from GPS or Wi-Fi use, (ii) the IP address of the device or internet service used to access the Services, and (iii) any other information you or others make available that indicates your current or prior location.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">How We Use Your Information</SubParaTitle>
            <Para className="normal-primary-text">
              We may use your Personal Information for the following purposes:
            </Para>


            <UL>
              {["To verify your identity, register you for the PAM platform, and allow you to access the PAM platform.",
                "To evaluate your results and update the PAM platform to provide algorithm-based recommendations for tailored and appropriate tools for you to learn and track your progress.",
                "To communicate with you (including email, text messages and push notifications sent to your phone), to solicit feedback on the PAM platform, to make you aware of other educational opportunities, and to ask if you would be willing to participate in research opportunities.",
                "To evaluate the effectiveness of the PAM platform and to improve the PAM platform based on what we learn.",
                "To apply for funding to sustain and evaluate the PAM platform;",
                "To investigate or prevent actual or suspected fraud, criminal activity, injury or damage to use or others.",
                "When required by statute, regulation, other law, subpoena, court order, warrant, or similar legal process.",
                "To assert or protect our rights or assets, if necessary.",
              ].map((item, index, arr) => {
                return (
                  <li key={index} className={arr.length - 1 === index && "last-child"}>
                    <Para className="normal-primary-text">{item} </Para>
                  </li>
                )
              })}
            </UL>


            {/* <Para className="normal-primary-text">

            <b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>To verify your identity, register you for the PAM platform, and allow you to access the PAM platform.
            <br /><br /><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>To evaluate your results and update the PAM platform to provide algorithm-based recommendations for tailored and appropriate tools for you to learn and track your progress.
            <br /><br /><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>To communicate with you (including email, text messages and push notifications sent to your phone), to solicit feedback on the PAM platform, to make you aware of other educational opportunities, and to ask if you would be willing to participate in research opportunities.
            <br /><br /><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>To evaluate the effectiveness of the PAM platform and to improve the PAM platform based on what we learn.
            <br /><br /><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>To apply for funding to sustain and evaluate the PAM platform;
            <br /><br /><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>To investigate or prevent actual or suspected fraud, criminal activity, injury or damage to use or others.
            <br /><br /><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>When required by statute, regulation, other law, subpoena, court order, warrant, or similar legal process.
            <br /><br /><b style={{ fontSize: 50, color: "#0099BA", marginRight: "26px" }}>•</b>To assert or protect our rights or assets, if necessary.
          </Para> */}

            <Para className="normal-primary-text">
              We may also de-identify your Personal Information (“De-Identified Information”). This De-Identified Information is not Personal Information, because it cannot generally be used to identify you, and may be used by Stanford for any lawful purpose. Despite our rigorous de-identification process, which includes removing identifiers that reasonably can be used to identify you directly (such as name or telephone number), experts in re-identification may be able to reverse our processes and/or attempt to re-identify you if given sufficient cross-reference information. Consequently, total anonymity cannot be guaranteed.
              <br />
              Additionally, Stanford may use your Personal Information for any other reason if we tell you (1) when we collect it, or (2) in an authorization or consent.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Sharing Your Personal Information</SubParaTitle>
            <Para className="normal-primary-text">
              We may share your Personal Information (1) for the reasons we tell you when we collect it, (2) in an authorization or consent or at your direction, or (3) when we believe disclosure is necessary to protect the safety, rights, or property of Stanford or the public. We may share De-Identified Information in all legally permissible ways.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Children’s Information</SubParaTitle>
            <Para className="normal-primary-text">
              We do not knowingly collect or solicit Personal Information from anyone under the age of 18 or knowingly allow such persons to register for the PAM platform. If you are under 18, you must not attempt to register for the PAM platform and you must not send any information about yourself to us, including but not limited to your name, address, telephone number, or email address. In the event that we learn that we have collected Personal Information from a person under age 18, we will delete that information. If you believe that we might have any information from or about a person under the age of 18, please contact us at <a href={"mailto:pauseamoment@stanford.edu"} className="text-underline">pauseamoment @stanford.edu</a>.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Information Security</SubParaTitle>
            <Para className="normal-primary-text">
              We endeavor to protect the privacy of the Personal Information we hold in our records, but we cannot guarantee complete security. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of your Personal Information at any time.
            </Para>
            <Para className="normal-primary-text">
              Please note that all information collected by the Services will be processed in the United States, and this may be done by another entity under contract with Stanford. You should be aware that the laws of the United States may not protect your privacy to the same extent as the laws in the country from which you are accessing the PAM platform.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Knowing Your Choices</SubParaTitle>
            <Para className="normal-primary-text">
              Your choice to use the PAM platform and participate in the PAM activities is completely voluntary. But if you choose not to register, you will not be able to track your progress or save your activities.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Do Not Track Signals</SubParaTitle>
            <Para className="normal-primary-text">
              Stanford does not respond to Do Not Track signals to the extent received from a web browser. Because there currently is not a universally accepted technological or legal standard for recognizing or honoring DNT signals as reflections of user choice, we do not respond to them at this time. Once such technology is created and has received applicable regulatory approval, we will consider (a) whether it is possible; and (b) if so, how it can be incorporated within Stanford’s environment in the future.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Reviewing and Updating Your Personal Information</SubParaTitle>
            <Para className="normal-primary-text">
              You may access, and in some cases, edit or delete your user profile information and PAM responses through the platform. You may also request a correction to your data or request removal of records from our database by contacting us at <a href={"mailto:pauseamoment@stanford.edu"} className="text-underline">pauseamoment @stanford.edu</a>. Please do not include any Sensitive Personal Information in your messages. When you update or delete information, we may maintain a copy of the unrevised information in our records. In addition, please note that while any changes you make will be reflected in active user databases within a reasonable period of time, we may retain all information you submit for backups, archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so, as permitted by applicable law.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Changes to This Privacy Policy</SubParaTitle>
            <Para className="normal-primary-text">
              We may update this Privacy Policy periodically to reflect any material changes in our programs and practices. These changes will become effective when posted to the PAM platform at  <a href={window.location.origin} className="text-underline">{window.location.origin}</a>, as of the effective date mentioned above. Our use of Personal Information is subject to the version of the Privacy Policy in effect at the time such information is used. Your use and continued use of the PAM platform following the posting of any changes to this Privacy Policy means you acknowledge such changes.
            </Para>

            <SubParaTitle className="bold-primary-sub-title">Contacting Us</SubParaTitle>
            <Para className="normal-primary-text">
              If you have any questions or concerns regarding this Privacy Policy, you may contact us by e-mail at <a href={"mailto:pauseamoment@stanford.edu"} className="text-underline" >pauseamoment@stanford.edu</a>.
            </Para>
          </Grid>
        </Grid>

      </div>
    </PageBody >
  );
};

PPPage.propTypes = {};

export default PPPage;
