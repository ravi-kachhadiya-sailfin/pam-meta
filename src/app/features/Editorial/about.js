import React, { useEffect, useContext } from "react";
//import PropTypes from "prop-types";
//import HeaderTitle from "app/tamComponents/header/HeaderTitle";
import {
  Grid
} from "@material-ui/core";
import { PageBody, PageTitle, Para, SubParaTitle } from "./Editorial";
import Member from "./Member";
import HealthCare from "./HealthCare";
import sailfin from '../../shared/assets/images/sailfin.png'
import cfrontiers from '../../shared/assets/images/cfrontiers.svg'
import fc from '../../shared/assets/images/fc.svg'
import non from '../../shared/assets/images/non.png'

import dbr from '../../shared/assets/images/team/DrDebraKaysen.png'
import snn from '../../shared/assets/images/team/DrShannonWiltseyStirman.png'
import eri from '../../shared/assets/images/team/DrEricKuhn.png'
import hong from '../../shared/assets/images/team/DrDavidSHong.png'
import szu from '../../shared/assets/images/team/DrSzuChiHuang.png'
import jan from '../../shared/assets/images/team/DrJaniceKuo.png'
import inb from '../../shared/assets/images/team/DrInbalNahumShani.png'
import mel from '../../shared/assets/images/team/DrMelanieBrucks.png'
import dvd from '../../shared/assets/images/team/DrDavidMohr.png'
import mark from '../../shared/assets/images/team/DrMarkMcGovern.png'
import pab from '../../shared/assets/images/team/MrPabloParedes.png'
import gigi from '../../shared/assets/images/team/MsGigiGuan.png'
import dan from '../../shared/assets/images/team/DrDanielPeng.png'
import kar from '../../shared/assets/images/team/DrKarinMolander.png'
import emily from "../../shared/assets/images/team/Emily_Brown.png"
import { HorizonatalLine } from "../tools/ToolsPageComponent.styles";
import { defaultMetaData } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';

const Team = (props) => {
  const { meta, setMeta } = useContext(MetaContext);

  useEffect(() => {
    const metaData = {
      title: "PAM | About",
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
            <PageTitle className="about-title">About PAM</PageTitle>

            <Para className="normal-primary-text">
              PAM, short for Pause a Moment, is an educational platform that teaches skills designed to improve emotional well-being. Our mission is to improve the emotional well-being of healthcare workers impacted by the COVID-19 pandemic, by providing opportunities to learn and practice these tools aimed towards cultivating effective coping, self-care, and resilience-building strategies, among others.
            </Para>
            <Para className="normal-primary-text">
              PAM is built for individuals who want to pause a moment to focus on their emotional health. It is not intended to be, or to substitute for, psychotherapy. However, it was developed to support you to learn and use tools and practice skills that can help you cope with the stress, anxiety, sadness, guilt and other emotional impacts of the pandemic. The PAM platform tailors its tools and recommendations based on your goals, symptoms, and progress.
            </Para>
            <Para className="normal-primary-text">
              Development began in 2020 and PAM launched in 2021, in response to the increase in distress and mental health concerns among healthcare workers as a result of the COVID-19 pandemic.
            </Para>
            <Para className="normal-primary-text">
              PAM was developed by Stanford University School of Medicine faculty working with faculty and students from Stanford, the University of Michigan, Palo Alto University, and Columbia University in collaboration with healthcare workers. A full breakdown of our team can be found here.
            </Para>

            <SubParaTitle className="bold-primary-sub-title-tnc primary-text text-align-center">
              Team PAM
            </SubParaTitle>

            <SubParaTitle className="bold-primary-sub-title semi-sub-title text-align-center">
              Leads
            </SubParaTitle>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"Debra Kaysen, PhD"} img={dbr} details={"Clinical Psychologist. Professor, Psychiatry & Behavioral Sciences, Stanford University; Research Scientist, Dissemination and Training Division, National Center for PTSD"} />
              </Grid>
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"Shannon Wiltsey Stirman, PhD"} img={snn} details={"Clinical Psychologist and Implementation Scientist. Associate Professor, Psychiatry & Behavioral Sciences, Stanford University; Dissemination and Training Division, National Center for PTSD; Co-Director, Stanford Mental Health Innovation and Technology Hub"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <HorizonatalLine className="about-hr-line">
          <hr style={{ borderTop: "1px solid #A9BDC5" }} />
        </HorizonatalLine>

        <Grid container direction="row" className="member-details-card">
          <Grid item lg={9} md={12} sm={12} xs={12}>

            <SubParaTitle className="bold-primary-sub-title semi-sub-title text-align-center">
              Core Team
            </SubParaTitle>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"Eric Kuhn, PhD"} img={eri} details={"Clinical Psychologist, Clinical Associate Professor (Affiliated), Psychiatry & Behavioral Sciences, Stanford University; Dissemination and Training Division, National Center for PTSD; Co-Director, Stanford Mental Health Innovation and Technology Hub"} />
              </Grid>
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"David S. Hong, MD"} img={hong} details={"Psychiatrist, Associate Director of Clinical Neuroscience, Psychiatry & Behavioral Sciences, Stanford University, Co-Director, Stanford Mental Health Innovation and Technology Hub"} />
              </Grid>
            </Grid>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member
                  name={
                    <>
                      <span>Szu Chi Huang, PhD </span>
                      <span className="normal-primary-text">(Marketing)</span>
                      <span>, MA </span><span className="normal-primary-text">(Advertising)</span>
                    </>
                  }
                  img={szu} details={"Associate Professor, Graduate School of Business., Stanford University"} />
              </Grid>
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"Janice Kuo, PhD"} img={jan} details={"Associate Professor, Department of Psychology, Palo Alto University"} />
              </Grid>
            </Grid>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={
                  <>
                    <span>Inbal Nahum-Shani, PhD, MA</span>
                    <span className="normal-primary-text"> (Educational Leadership and Policy)</span>
                  </>
                }
                  img={inb} sub={"Educational Leadership and Policy"} details={"Research Associate Professor. University of Michigan, Behavioral and Management Sciences. Co-Director Data Science for Dynamic Decision-Making Lab."} />
              </Grid>
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={
                  <>
                    <span>Melanie Brucks, PhD </span>
                    <span className="normal-primary-text">(Marketing)</span>
                  </>
                }
                  img={mel} details={"Assistant Professor, Business School, Columbia University."} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <HorizonatalLine className="about-hr-line">
          <hr style={{ borderTop: "1px solid #A9BDC5" }} />
        </HorizonatalLine>


        <Grid container direction="row" className="member-details-card">
          <Grid item lg={9} md={12} sm={12} xs={12}>

            <SubParaTitle className="bold-primary-sub-title semi-sub-title text-align-center">
              Consultants
            </SubParaTitle>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"Pat Arean, PhD"} img={non} details={"Professor, Department of Psychiatry & Behavioral Sciences, Director, ALACRITY Center & Director, CREATIV Lab at University of Washington"} />
              </Grid>
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"David Mohr, PhD"} img={dvd} details={"Director, Center for Behavioral Intervention Technologies (CBITs), Professor of Preventive Medicine (Behavioral Medicine), Medical Social Sciences and Psychiatry and Behavioral Sciences, Northwestern University"} />
              </Grid>
            </Grid>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"Sherry Pagoto, PhD"} img={non} details={"Professor, Department of Allied Health Sciences, University of Connecticut Director of the University of Connecticut Center for mHealth and Social Media"} />
              </Grid>
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={"Mark McGovern, PhD"} img={mark} details={"Clinical Psychologist and Implementation Scientist. Co-Chief of the Division of Public Mental Health and Population Sciences, Medical Director of Integrated Behavioral Health in the Division of Primary Care and Population Health in the Department of Medicine, Psychiatry & Behavioral Sciences, Stanford University"} />
              </Grid>
            </Grid>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <Member name={
                  <>
                    <span>Pablo Paredes, PhD </span>
                    <span className="normal-primary-text">(Computer Science)</span>
                    <span>, MBA</span>
                  </>
                }
                  img={pab} details={"User Centered Design, Human Factors. Assistant Professor, Psychiatry & Behavioral Sciences, Stanford University."} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <HorizonatalLine className="about-hr-line">
          <hr style={{ borderTop: "1px solid #A9BDC5" }} />
        </HorizonatalLine>


        <Grid container direction="row" className="member-details-card">
          <Grid item lg={9} md={12} sm={12} xs={12}>

            <SubParaTitle className="bold-primary-sub-title semi-sub-title text-align-center">
              Healthcare Consultants
            </SubParaTitle>

            <Para className="normal-primary-text">
              PAM could not have been developed without input and feedback from the healthcare community.Over twenty individuals working in a variety of roles including nurses, housekeeping staff, medical scribes, doctors, and health aids, dental practice managers, and other essential workers (some of whom remain anonymous) provided input and feedback on the design and content.We would like to acknowledge and thank some of our core advisors here, as well as the many others who gave their time to support PAM’s development.
            </Para>

            <Grid container direction="row" className="health-member-details-card">
              <Grid item lg={5} md={5} sm={6} xs={6}>
                <HealthCare img={gigi} name={"Gigi Guan, RN"} />
              </Grid>
              <Grid item lg={5} md={5} sm={6} xs={6}>
                <HealthCare img={dan} name={"Daniel Peng, MD"} />
              </Grid>
            </Grid>

            <Grid container direction="row" className="health-member-details-card">
              <Grid item lg={5} md={5} sm={6} xs={6}>
                <HealthCare img={kar} name={"Karin Molander, MD"} />
              </Grid>
              <Grid item lg={5} md={5} sm={6} xs={6}>
                <HealthCare img={emily} name={"Emily Brown, RN"} />
              </Grid>
            </Grid>

            <Grid container direction="row" className="health-member-details-card">
              <Grid item lg={5} md={5} sm={6} xs={6}>
                <HealthCare img={non} name={"Nastasia Poso, RN"} />
              </Grid>
              <Grid item lg={5} md={5} sm={6} xs={6}>
                <HealthCare img={non} name={"Martine Bernstein"} />
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        <HorizonatalLine className="about-hr-line">
          <hr style={{ borderTop: "1px solid #A9BDC5" }} />
        </HorizonatalLine>

        <Grid container direction="row" className="member-details-card">
          <Grid item lg={9} md={12} sm={12} xs={12}>

            <SubParaTitle className="bold-primary-sub-title semi-sub-title text-align-center ">Innovation Tournament Contributions</SubParaTitle>

            <Para className="normal-primary-text innovation-sub-deatils">At the beginning of the project, we ran an innovation and idea generation tournament for students and community members to contribute ideas and concepts and to begin our process of integrating stakeholder input into the project.We are grateful for their ideas and contributions.</Para>

            <Para className="normal-primary-text">
              <span className="font-weight-bold">Winning team: Team Listen <span className="desktop-view-winnig-team">- </span></span>
              <br className="mobile-view-winnig-team" />
              Grace Cheng, Tyler Ma Yep, Shaoli Yusaf
            </Para>

            <Para className="normal-primary-text">
              <span className="font-weight-bold">Second Place: Team EnCompass <span className="desktop-view-winnig-team">- </span></span>
              <br className="mobile-view-winnig-team" />
              Janet Azar, Chris Berniel Cobashatse
            </Para>

            <Para className="normal-primary-text">
              <span className="font-weight-bold">Third Place: Team WassUp <span className="desktop-view-winnig-team">- </span></span>
              <br className="mobile-view-winnig-team" />
              Susan Zhou, Pooja Raghani, Luciana Frazao
            </Para>
          </Grid>
        </Grid>
        <HorizonatalLine style={{ marginBottom: "10px" }} >
          <hr style={{ borderTop: "1px solid #A9BDC5" }} />
        </HorizonatalLine>

        <Grid container direction="row" className="member-details-card">
          <Grid item lg={9} md={12} sm={12} xs={12}>

            <Grid container direction="row" className="member-details-card">
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <SubParaTitle className="bold-primary-sub-title semi-sub-titl text-align-center">
                  Development
                </SubParaTitle>
                <div className="salfin-logo text-align-center"><img alt={"img"} src={sailfin} /></div>
              </Grid>

              <Grid item lg={5} md={5} sm={12} xs={12} >
                <SubParaTitle className="bold-primary-sub-title semi-sub-title  text-align-center design-text">
                  Design
                </SubParaTitle>
                <div className="design-logo text-align-center">
                  <img alt={"img"} src={cfrontiers} />
                  <img alt={"img"} src={fc} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </PageBody>
  );
};

Team.propTypes = {};

export default Team;
