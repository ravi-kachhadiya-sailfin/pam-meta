import React, { useEffect, useContext } from "react";
//import PropTypes from "prop-types";
//import HeaderTitle from "app/tamComponents/header/HeaderTitle";
import {
  Grid
} from "@material-ui/core";
import { PageBody, PageTitle, PageTitleFootNote, Para, SubParaTitle } from "./Editorial";
import { defaultMetaData } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';
const TCPage = (props) => {
  const { meta, setMeta } = useContext(MetaContext);

  useEffect(() => {
    const metaData = {
      title: "PAM | Terms of use",
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
            <PageTitle>Terms of Use</PageTitle>
            <PageTitleFootNote className="normal-subtitle-gray">Effective June 10, 2021</PageTitleFootNote>

            <Para className="normal-primary-text font-weight-bold">
              If you have a medical emergency, call your healthcare provider, 911 in the United States, or the emergency medicine services in your country immediately.
            </Para>
            <Para className="normal-primary-text">
              Welcome to the Pause A Moment (PAM) platform of The Board of Trustees of the Leland Stanford Junior University on behalf of its School of Medicine ("Stanford", "we", "our", or "us"). The Pause A Moment (PAM) platform offers the website located at <a href={window.location.origin} className="text-underline">{window.location.origin}</a>, mobile interface(s), and related services that link to these Terms (collectively, the "Platform") subject to your compliance with the terms, conditions, and notices set forth below (these "Terms").
            </Para>
            <Para className="normal-primary-text">
              Please read these Terms carefully before you use the Platform as they are a legal agreement between you and Stanford once they are accepted. <span className="font-weight-bold">By clicking “I accept” or other similar icon (where applicable), or otherwise by accessing or using any of the Services, you accept and agree to be bound by these Terms, including the mandatory arbitration provision and class action waiver below.</span> If you do not agree with any portion of these Terms, including the mandatory arbitration and class action waiver provisions, then do not click “I accept” or other similar icon and do not use the Platform.
            </Para>
            <Para className="normal-primary-text font-weight-bold">
              IMPORTANT NOTICE REGARDING ARBITRATION FOR U.S. CUSTOMERS – IF YOU RESIDE IN THE U.S., NOTE THAT THESE TERMS CONTAIN A MANDATORY ARBITRATION PROVISION AND CLASS ACTION WAIVER THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS AND LIMITS THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF CERTAIN DISPUTES.
            </Para>
            <Para className="normal-primary-text">
              Please also review our <a href={window.location.origin + "/privacypolicy"} className="text-underline">Privacy Policy</a> to learn about our information collection, use, and privacy practices associated with the Platform.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc primary-text">
              USER AGE AND ELIGIBILITY
            </SubParaTitle>
            <Para className="normal-primary-text">
              Access to the Platform is restricted to those individuals who are adults of legal age, and who are fully able and competent to enter into these terms, conditions, obligations, affirmations, representations and warranties herein. By accessing the Platform, you affirm that you are at least 18 years old and meet the eligibility requirements. This Platform is not intended for persons under 18. If you are under 18 years of age, do not use the Platform.
            </Para>
            <Para className="normal-primary-text">
              You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Your Permission to Use the Platform
            </SubParaTitle>
            <Para className="normal-primary-text">
              Stanford grants you limited personal permission to access and use the Platform in accordance with these Terms. You agree not to transmit content or information that you do not have the right to transmit or that infringes the right of any party, and you agree to use the Platform in compliance with all applicable laws.
            </Para>
            <Para className="normal-primary-text">
              Your permission to use the Platform is limited in a number of ways. You may only use the information and material from the Platform for your own personal use. Any commercial use, such as selling content, creating course packs, or posting information elsewhere, is prohibited. Your permission terminates immediately, without any further action by Stanford, if you breach these Terms. You may not transfer or assign your permission to any other party.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Your Account
            </SubParaTitle>
            <Para className="normal-primary-text">
              The Platform may require an account and password for access to content. If you use such feature, you are responsible for maintaining the confidentiality of your account and password, if any, and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You agree that registration information you provide on the Platform will be accurate and complete. Stanford and its affiliates reserve the right to refuse service, terminate accounts, or remove or edit content in their sole discretion.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Proprietary Rights
            </SubParaTitle>
            <Para className="normal-primary-text">
              You understand that the Platform may be subject to patent, copyright, trademark or other intellectual property protection and that the ownership of software and other intellectual property related to the Platform, as well as the goodwill associated therewith, remains with Stanford or its licensors. You agree that any improvements or other changes to the Platform itself are the sole property of Stanford.
            </Para>
            <Para className="normal-primary-text">
              Stanford is the owner or licensee of all rights in the Platform, its content, software, and related services. You have no right to such content, software or services if not expressly granted in these Terms. “Stanford”, “Pause A Moment” and related logos and marks are owned by Stanford. All other trademarks appearing on the Platform are the marks of their respective owners. No right, title or interest in those trademarks is granted you in these Terms.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Links to Other Sites / Third Party Content
            </SubParaTitle>
            <Para className="normal-primary-text">
              The Platform may contain links to websites and content owned, maintained or operated by third parties. Stanford is providing these links to you only as a convenience. The Sites may include hyperlinks to websites maintained or controlled by others. Stanford is not responsible for and does not routinely screen, approve, review or endorse the contents of or use of any of the products or services that may be offered at these websites. The inclusion of any link does not imply that Stanford endorses any third-party website, content or third-party company or product. You acknowledge that Stanford does not have any control over the content of such third-party websites and assumes no responsibility whatsoever for the functionality of such websites or for the accuracy, integrity, quality, legality, usefulness or safety of any information presented at such other websites. We have no obligation to monitor third party content, and we may, in our sole discretion, block or disable access to any third party content (in whole or part) via the Platform at any time. You should take precautions when downloading files from all websites to protect your computer from viruses and other destructive programs. If you decide to access other organizations’ websites, you do so at your own risk.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Disclaimer of Warranties
            </SubParaTitle>
            <Para className="normal-primary-text">
              The contents of this Platform are for informational purposes only. The Platform is not intended to be a substitute for clinical or therapeutic services or the advice of an appropriately qualified and licensed physician or other health care provider regarding diagnosis or treatment. It is not intended to recommend the self-management of health problems or wellness. It is not intended to endorse or recommend any particular type of medical treatment. The Platform is not provided by Stanford Health Care or Stanford Medicine, and is not related to their clinical activities. <span className="font-weight-bold text-uppercase" >THE PLATFORM DOES NOT CONSTITUTE MEDICAL ADVICE, AND STANFORD DOES NOT REPRESENT OR GUARANTEE THAT ANY SUGGESTED ACTION WILL CURE, TREAT OR PREVENT ANY DISEASE OR HEALTH CONDITION.</span> Should you have any health care related question, you should promptly call or consult a physician or healthcare provider of your choice. <span className="font-weight-bold">If you are experiencing acute mental health distress and / or thoughts of suicide and / or homicide, please consulting with an appropriate health practitioner as soon as possible.</span>
            </Para>
            <Para className="normal-primary-text">
              THE SERVICES AND INFORMATION CONTAINED IN THE PLATFORM ARE PROVIDED AS IS AND AS AVAILABLE. STANFORD MAKES NO, AND HEREBY DISCLAIMS ANY, WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF TITLE, NONINFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR USE OR PURPOSE. FURTHER, STANFORD DISCLAIMS ANY WARRANTY THAT THE PLATFORM OR ANY COMPONENTS OF THE PLATFORM WILL BE AVAILABLE AT ALL TIMES OR WILL OPERATE WITHOUT INTERRUPTION OR ERROR. STANFORD MAKES NO WARRANTY AS TO THE RELIABILITY, ACCURACY, TIMELINESS, USEFULNESS, ADEQUACY, COMPLETENESS OR SUITABILITY OF THE SERVICES OR INFORMATION PROVIDED THROUGH THE PLATFORM. USE OF INFORMATION OBTAINED FROM OR THROUGH THE PLATFORM IS AT YOUR OWN RISK.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Limitation of Liability
            </SubParaTitle>
            <Para className="normal-primary-text">
              IN NO EVENT WILL STANFORD OR ANY OF OUR AFFILIATES OR RESPECTIVE OFFICERS, TRUSTEES, DIRECTORS, EMPLOYEES, STUDENTS, VOLUNTEERS, REPRESENTATIVES, AGENTS, OR CONTRACTORS BE LIABLE TO YOU (WHETHER UNDER CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, OR ANY OTHER THEORY) FOR: (i) ANY INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, WHETHER FORESEEABLE OR UNFORESEEABLE (INCLUDING DEFAMATION, ERRORS, LOSS OF USE, DATA, OR INFORMATION OF ANY KIND) ARISING OUT OF OR RELATED TO THESE TERMS, YOUR USE OF OR INABILITY TO USE THE PLATFORM, OR TO YOUR RELIANCE UPON INFORMATION OBTAINED FROM OR THROUGH THE PLATFORM, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGES, OR (ii) DAMAGES ARISING OUT OF OR RELATING TO THESE TERMS EXCEEDING, IN THE AGGREGATE FOR ALL CLAIMS, ONE HUNDRED UNITED STATES DOLLARS ($100.00).
            </Para>
            <Para className="normal-primary-text">
              EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN YOU AND STANFORD. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN YOU AND STANFORD. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THESE TERMS WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
            </Para>
            <Para className="normal-primary-text">
              EXCEPT TO EXTENT PROHIBITED BY APPLICABLE LAW, STANFORD'S LIABILITY TO YOU IS LIMITED AS SET FORTH IN THIS SECTION. BECAUSE SOME STATES OR COUNTRIES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL, INCIDENTAL, OR OTHER DAMAGES OR TOTAL LIABILITY, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Indemnification
            </SubParaTitle>
            <Para className="normal-primary-text">
              In addition to any other indemnification obligations you may have, you will indemnify Stanford and our respective affiliates, trustees, officers, directors, employees, students, volunteers, representatives, agents, and contractors (collectively, “Indemnified Parties”) from and against any and all claims, actions, suits, demands, liabilities, damages, losses, penalties, interest, fines, costs, and expenses (including reasonable attorneys’ fees and legal costs) arising out of or related to: (i) your use of, your inability to use, or your reliance upon the Platform or any of its components; or (ii) your violation of these Terms or any applicable law. You agree to provide Stanford and our other Indemnified Parties with such cooperation as we reasonably request related to any such claims, actions, suits, or demands.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Release
            </SubParaTitle>
            <Para className="normal-primary-text">
              If you reside in the U.S., to the fullest extent permitted by applicable law, you, on behalf of yourself and your heirs, executors, administrators, legal representatives, and personal representatives, hereby release, waive, acquit and forever discharge Stanford from and against, and covenant not to sue Stanford for, all claims you have or may have arising out of or in any way related to these Terms. IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE YOUR RIGHTS UNDER CALIFORNIA CIVIL CODE 1542, WHICH STATES “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.”
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Binding Arbitration
            </SubParaTitle>
            <Para className="normal-primary-text font-weight-bold">
              Please read the following Section carefully because it requires you to arbitrate certain disputes and claims with Stanford and limits the manner in which you can seek relief from us if you are a U.S. resident.
            </Para>
            <div className="paragraph-margin">
              <Para className="normal-primary-text">
                Except for any disputes, claims, suits, actions, causes of action, demands or proceedings (collectively, <span className="font-weight-bold">“Disputes”</span>) in which you or Stanford seeks to bring an individual action in small claims court or seeks injunctive or other equitable relief for the alleged unlawful use of intellectual property, including, without limitation, copyrights, trademarks, trade names, logos, trade secrets or patents, you and Stanford agree (a) to waive your and Stanford's respective rights to have any and all Disputes arising from or related to these Terms or the Platform resolved in a court, and (b) to waive your and Stanford’s respective rights to a jury trial. Instead, you and Stanford agree to arbitrate Disputes through binding arbitration (which is the referral of a Dispute to one or more persons charged with reviewing the Dispute and making a final and binding determination to resolve it instead of having the Dispute decided by a judge or jury in court).
              </Para>

              <SubParaTitle className="bold-primary-sub-title">Waiver of Right to Participate in a Class Action</SubParaTitle>
              <Para className="normal-primary-text font-weight-bold">
                By entering into these Terms, you and Stanford are each waiving the right to participate in a class or representative action.
              </Para>
              <SubParaTitle className="bold-primary-sub-title semi-sub-title">Federal Arbitration Act</SubParaTitle>
              <Para className="normal-primary-text">
                You and Stanford agree that these Terms affect interstate commerce and that the enforceability of this Section shall be both substantively and procedurally governed by and construed and enforced in accordance with the Federal Arbitration Act, 9 U.S.C. § 1 et seq. (the <span className="font-weight-bold">“FAA”</span>), to the maximum extent permitted by applicable law. </Para>
              <SubParaTitle className="bold-primary-sub-title semi-sub-title">Notice; Informal Dispute Resolution</SubParaTitle>
              <Para className="normal-primary-text">
                You and Stanford agree that each party will notify the other party or parties in writing of any arbitrable or small claims Dispute within thirty (30) days of the date it arises, so that the parties can attempt in good faith to resolve the Dispute informally. Notice to Stanford shall be sent by certified mail or courier to Counsel for the School of Medicine, Office of General Counsel, Stanford University, 450 Serra Mall, Building 170, 3rd Floor, P.O. Box 20386, Stanford, CA 94305-2038, U.S.A., with a copy to Dr. Stirman, Department of Psychiatry and Behavioral Sciences, Stanford University, 401 Quarry Road, Stanford, CA 94025, U.S.A. Your notice must include (a) your name, postal address, telephone number and/or mobile phone number, the email address you use or used for your account and, if different, an email address at which you can be contacted, (b) a description in reasonable detail of the nature or basis of the Dispute, and (c) the specific relief that you are seeking. Our notice to you will be sent in accordance with the Section titled “Notices” below, and will include (x) our name, postal address, telephone number and an email address at which we can be contacted with respect to the Dispute, (y) a description in reasonable detail of the nature or basis of the Dispute, and (z) the specific relief that we are seeking. If you and Stanford cannot agree how to resolve the Dispute within thirty (30) days after the date notice is received by the applicable party, then either you or Stanford may, as appropriate and in accordance with this Section, commence an arbitration proceeding or, to the extent specifically provided for in Section, file a claim in court.
              </Para>

              <SubParaTitle className="bold-primary-sub-title semi-sub-title">Process</SubParaTitle>
              <Para className="normal-primary-text">
                <span className="font-weight-bold">Except for Disputes in which either you or Stanford seeks to bring an individual action in small claims court or seeks injunctive or other equitable relief for the alleged unlawful use of intellectual property, including, without limitation, copyrights, trademarks, trade names, logos, trade secrets or patents, you and Stanford agree that any Dispute must be commenced or filed by you or Stanford within one (1) year of the date the Dispute arose, otherwise the underlying claim is permanently barred (which means that you and Stanford will no longer have the right to assert such claim regarding the Dispute).</span> You and Stanford agree that(a) any arbitration will occur(i) in Santa Clara County, California, (ii) in the county where you reside, or(iii) telephonically, (b) arbitration will be conducted confidentially by a single arbitrator in accordance with the American Arbitration Association’s(<span className="font-weight-bold">“AAA”</span>) Consumer Arbitration Rules that are in effect at the time the arbitration is initiated, as modified by the terms set forth herein(<span className="font-weight-bold">“AAA Rules”</span>), which are hereby incorporated by reference, and(c) that the seat of the arbitration shall be Palo Alto, California and that state or federal courts of the State of California and the United States, respectively, sitting in the Santa Clara County, California, have exclusive jurisdiction over any litigation in aid of arbitration and the enforcement of any arbitration awards.The parties shall attempt to agree on the single arbitrator to be appointed to resolve the dispute.If the parties are unable to reach agreement within thirty(30) days after commencement of the arbitration with the AAA, the arbitrator selection process identified in the AAA Consumer Arbitration Rules shall apply.You may also litigate a Dispute in the small claims court located in the county of your home address if the Dispute meets the requirements to be heard in small claims court and is located within the United States.Each party shall be responsible for its costs incurred in such arbitration, but the arbitrator shall not have the authority to re - allocate those costs in an award or otherwise.If you cannot afford to pay for the arbitration, you agree to provide us the option of paying the arbitrator before seeking to initiate any other form of dispute resolution, including litigation.As part of the arbitration, both you and Stanford will have the opportunity to reasonable discovery of non - privileged information that is relevant and material to the Dispute, including the ability to request from each other, and third parties, documents, information and testimony that is relevant and material to the Dispute.
              </Para>

              <SubParaTitle className="bold-primary-sub-title semi-sub-title">Authority of Arbitrator</SubParaTitle>
              <Para className="normal-primary-text">
                As limited by the FAA, these Terms and the applicable AAA rules, the arbitrator will have (a) the exclusive authority and jurisdiction to make all procedural and substantive decisions regarding a Dispute, including the determination of whether a Dispute is arbitrable, and (b) the authority to grant any remedy that would otherwise be available in court; provided, however, that the arbitrator does not have the authority to conduct a class arbitration or a representative action, which is prohibited by these Terms. The arbitrator may only conduct an individual arbitration and may not consolidate more than one individual’s claims, preside over any type of class or representative proceeding or preside over any proceeding involving more than one individual. Notwithstanding any other provision of this Section, any and all issues relating to the scope, interpretation and enforceability of the class action waiver provisions contained in this Section, are to be decided only by a court of competent jurisdiction, and not by the arbitrator.
              </Para>

              <SubParaTitle className="bold-primary-sub-title semi-sub-title">Rules of AAA</SubParaTitle>
              <Para className="normal-primary-text">
                The AAA Rules and additional information about the AAA are available on the AAA website. By agreeing to be bound by these Terms, you either (a) acknowledge and agree that you have read and understand the AAA Rules, or (b) waive your opportunity to read the AAA Rules and any claim that the AAA Rules are unfair or should not apply for any reason.
              </Para>

              <SubParaTitle className="bold-primary-sub-title semi-sub-title">Severability</SubParaTitle>
              <Para className="normal-primary-text">
                If any term, clause or provision of this Section is held invalid or unenforceable, it will be so held to the minimum extent required by law, and all other terms, clauses and provisions of this Section (Binding Arbitration) will remain valid and enforceable. Further, the waivers set forth in Section are severable from the other provisions of these Terms and will remain valid and enforceable, except as prohibited by applicable law.
              </Para>
            </div>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Choice of Law/Forum Selection/International Use
            </SubParaTitle>
            <Para className="normal-primary-text">
              The Platform is hosted by Stanford on computing resources located on the Stanford campus or elsewhere in the United States. You agree that any dispute arising out of or relating to these Terms, whether based in contract, tort, statutory or other law, will be governed by and construed in accordance with the laws of the State of California, United States of America, as such laws would apply to a contract fully negotiated, entered into, and performed in that state. You and Stanford each irrevocably agrees that any Dispute between the parties that is not subject to arbitration or cannot be heard in small claims court, shall be resolved on an individual basis exclusively in the state or federal courts located in Santa Clara County, California. You and Stanford each irrevocably consent to the personal jurisdiction of these courts and waives any and all objections to the exercise of jurisdiction by these courts and to this venue. Notwithstanding the foregoing, however, you and Stanford agree that Stanford may commence and maintain an action or proceeding seeking injunctive or other equitable relief in any court of competent jurisdiction. If any provision of these Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the Terms remain in full force and effect.
            </Para>
            <Para className="normal-primary-text">
              Because the Platform may be accessible internationally, you agree to comply with all local statutes, rules, regulations and other laws including, without limitation, all laws, rules, and regulations in effect in the United States, the country in which you reside, and the country from which you access the Platform. The information on this Platform is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to the laws of that jurisdiction or country or those of the United States, or which would subject Stanford to any registration requirement within such jurisdiction or country.
            </Para>
            <Para className="normal-primary-text">
              The official language of these Terms is English. Any translation of these Terms is done for local requirements and in the event of a conflict between the English and any non-English version, the English version of these Terms shall govern. To the extent permitted by applicable law, in the event of a dispute the parties confirm that they have requested that these Terms and all related documents be drafted in English.
            </Para>
            <SubParaTitle className="bold-primary-sub-title-tnc">
              Communication Preferences
            </SubParaTitle>
            <Para className="normal-primary-text">
              By creating an account, you also consent to receive electronic notices and other communications from Stanford in connection with these Terms or your use of the Platform may be delivered to you by electronic mail, text message, a general notice posted on the Platform or other forms of communication. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including, but not limited to, that such communications be in writing. You should maintain copies of electronic communications from us by printing a paper copy or saving an electronic copy.
            </Para>
            <Para className="normal-primary-text">
              You may give notice to Stanford at any time by letter delivered by first class postage prepaid U.S. mail or overnight courier to the following address:
            </Para>
            <Para className="normal-primary-text font-weight-bold font-italic">
              Attention: Shannon Wiltsey Stirman or Debra Kaysen<br />
              Department of Psychiatry and Behavioral Sciences<br />
              Stanford University<br />
              401 Quarry Road Stanford, CA 94025<br />
              U.S.A.
            </Para>
            <Para className="normal-primary-text">
              We may communicate with you about the Platform, our products and services, and other information that we think may be of interest to you. For more information about the purposes for which we may communicate with you, please review our <a href={window.location.origin + "/privacypolicy"} className="text-underline" style={{ color: "#0099BA" }}>Privacy Policy</a>.
            </Para>

            <div className="paragraph-margin">
              <SubParaTitle className="bold-primary-sub-title">Email Communications</SubParaTitle>
              <Para className="normal-primary-text">
                You may opt out of receiving marketing and other promotional emails at any time by following the unsubscribe instructions provided therein.
              </Para>
              <SubParaTitle className="bold-primary-sub-title">Automated or Prerecorded Calls and Text Messages</SubParaTitle>
              <Para className="normal-primary-text">
                By providing your mobile phone number to us through the Platform, you consent to receive calls or text messages at any such phone number sent by or on behalf of Stanford, including autodialed calls and/or text messages, for marketing and promotional, operational, or informational purposes. You may opt out of calls or text messages by following the applicable unsubscribe or other opt-out instructions provided to you. Following such opt-out, you may continue to receive calls or messages for a short period of time while Stanford processes your request. It is your responsibility to keep your account information, including your phone number, updated. Standard message and data rates applied by your mobile phone carrier may apply to the text messages we send you. Please contact your mobile phone carrier for details.
              </Para>
            </div>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Survival of Terms
            </SubParaTitle>
            <Para className="normal-primary-text">
              Upon any termination, discontinuation or cancellation of the Platform or your account, the following Sections will survive: Proprietary Rights, Links to Other Sites/Third Party Content, Disclaimer of Warranties, Limitation of Liability, Indemnification, Release, Binding Arbitration, Choice of Law/Forum Selection/International Use, Notice, and Miscellaneous.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Miscellaneous
            </SubParaTitle>
            <Para className="normal-primary-text">
              You may not assign or transfer your rights or obligations under these Terms in whole or in part to any third party without our consent. These Terms shall bind and inure to the benefit of the parties to these Terms and their respective permitted successors and permitted assigns. We and you are independent contractors and are not partners, joint venturers, agents, employees or representatives of the other party. These Terms constitute the entire agreement between you and Stanford regarding your use of the Platform, other than any click-through or end user license agreement or written consents provided by us. The headings and captions used in these Terms are used for convenience only and are not to be considered in construing or interpreting these Terms. If any part of these Terms is held to be unlawful, void or unenforceable, that part will be deemed severable and shall not affect the validity and enforceability of the remaining provisions. Stanford's failure to enforce any provision of these Terms shall not be deemed a waiver of that or any other provision of these Terms.
            </Para>
            <Para className="normal-primary-text">
              Stanford will not be liable for failure or delay in performing its obligations if such failure or delay is due to a force majeure event or other circumstances beyond Stanford’s reasonable control, including acts of any governmental body, war, cyber war or attack, terrorism, insurrection, sabotage, embargo, fire, flood, severe weather, earthquake, tornado, hurricane, pandemic, labor disturbance, interruption of or delay in the internet or transportation, unavailability of third-party services, failure of third-party software or services, or inability to obtain raw materials, supplies, or power used in or equipment needed for provision of the Platform or any other products or services contemplated by these Terms.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Changes to these Terms
            </SubParaTitle>
            <Para className="normal-primary-text">
              Stanford may update these Terms from time to time for any reason in our sole discretion and without prior notice. We may notify you of changes to the Terms through email or other forms of communication. Even if we do not notify you, it is your obligation to check these Terms for changes regularly. Your continued use of the Platform means that you accept and agree to the changes; provided that any such changes shall only apply to your use of the Platform after the date of such change, unless you expressly accept retroactive application of such changes, via a click-through, signed agreement or otherwise. If you do not agree with the changes, immediately stop using the Platform.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Questions
            </SubParaTitle>
            <Para className="normal-primary-text">
              If you have any questions regarding the Platform or these Terms, you may contact Stanford at <a href={"mailto:pauseamoment@stanford.edu"} className="text-underline" style={{ color: "#0099BA" }}>pauseamoment@stanford.edu</a> or Drs. Debra Kaysen and Shannon Wiltsey Stirman, Department of Psychiatry and Behavioral Sciences, Stanford University, 401 Quarry Road, Stanford, CA 94025, U.S.A.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc">
              Copyright Complaints
            </SubParaTitle>
            <Para className="normal-primary-text">
              Stanford respects the intellectual property rights of others. If you believe your copyright has been violated on a Stanford site, please give notice as stated under <a href="https://uit.stanford.edu/security/copyright-infringement" className="text-underline" target="https://uit.stanford.edu/security/copyright-infringement">Reporting of Alleged Copyright Infringement</a>.
            </Para>
          </Grid>

        </Grid>
      </div>
    </PageBody>
  );
};

TCPage.propTypes = {};

export default TCPage;
