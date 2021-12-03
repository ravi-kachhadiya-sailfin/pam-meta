import React, { useEffect, useContext } from "react";
//import PropTypes from "prop-types";
//import HeaderTitle from "app/tamComponents/header/HeaderTitle";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Typography,
// } from "@material-ui/core";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FAQSectionWrapper, AnswerNormalText, AnswerTitleText, QuestionText, UL, SubTextContainer } from "./FAQPage.styles";
import HeaderBanner from "./Banner/HeaderBanner"
import op from '../../shared/assets/images/openAcc.svg'
import cl from '../../shared/assets/images/closeAcc.svg'
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { defaultMetaData } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';

const FAQPage = ({ title, banner }) => {
  const [expandFAQ, setExpandFAQ] = React.useState(0);
  const { setModal } = useContext(AppStoreContext);
  const { meta, setMeta } = useContext(MetaContext);

  const questions = [
    {
      question: <span onClick={() => expandFAQ === 1 ? setExpandFAQ(0) : setExpandFAQ(1)}>Why was PAM created?</span>,
      answer: (<AnswerNormalText>
        The COVID-19 pandemic significantly increased healthcare worker distress and mental health concerns. Although many healthcare workers’ distress has decreased as the pressures from COVID-19 have improved, some individuals may find that these stressors have left a more lasting impact on their mental health. We recognize the inordinate amount of burden this global crisis has placed on all of the individuals working in our healthcare system, which is why PAM was developed with healthcare workers in mind. Healthcare workers require support, tools and strategies that will fit into their schedules-- a toolkit that can adapt and change based on their preferences and progress.
      </AnswerNormalText>)
    },
    {
      question: <span onClick={() => expandFAQ === 1 ? setExpandFAQ(0) : setExpandFAQ(2)}>Is there a PAM app?</span>,
      answer: (<>
        <AnswerNormalText className="mb">
          No, but you can add PAM to your home screen so that you can easily open PAM on your phone anytime you need it! It will look and perform much like it would as an app.
        </AnswerNormalText>

        <AnswerNormalText className="mb">
          <span className="font-weight-bold">On iOS:</span> Open PAM in your browser. At the bottom center of your screen, click the “share” icon. Scroll down and select “add to my home screen”.
        </AnswerNormalText>

        <AnswerNormalText className="mb">
          <span className="font-weight-bold">For Android:</span> Launch Chrome for Android and open PAM. Tap the menu button and tap Add to home screen. You’ll be able to enter “PAM” for the shortcut and then Chrome will add it to your home screen.
        </AnswerNormalText>

      </>)
    },
    {
      question: <span onClick={() => expandFAQ === 2 ? setExpandFAQ(0) : setExpandFAQ(3)}>Who is PAM for?</span>,
      answer: (<AnswerNormalText>
        PAM was developed for the healthcare workforce, with input from a large variety of healthcare workers. We recognize that the healthcare workforce encompasses a wide range of types of professionals including doctors, nurses, technicians, front desk staff, scribes, housekeeping, EMT’s, home health aides and others. We also recognize that healthcare workers are in a variety of settings including hospitals, free standing clinics, patient homes, and long term care facilities. The stressors individuals faced from the pandemic may have differed based on their role or setting but few aspects of the healthcare workforce have not been impacted. This platform was designed for people who work in any of these roles and settings.
      </AnswerNormalText>)
    },
    {
      question: <span onClick={() => expandFAQ === 3 ? setExpandFAQ(0) : setExpandFAQ(4)}>Can I use PAM even if I am not in healthcare?</span>,
      answer: (<AnswerNormalText>
        Yes, you might find it helpful as well. Please feel free to look at and use the tools! You may find that some examples involve healthcare workers and settings, but the principles can be useful for anyone.
      </AnswerNormalText>)
    },
    {
      question: <span onClick={() => expandFAQ === 4 ? setExpandFAQ(0) : setExpandFAQ(5)}>My community experienced a traumatic event. Can we adapt PAM?</span>,
      answer: (<AnswerNormalText>
        We would like to help. If PAM doesn’t quite meet your needs and you would like to adapt it, please contact us at <a href="mailto:pauseamoment@stanford.edu" className="text-underline">pauseamoment@stanford.edu</a>
      </AnswerNormalText>)
    },
    {
      question: <span onClick={() => expandFAQ === 5 ? setExpandFAQ(0) : setExpandFAQ(6)}>Who designed the tools?</span>,
      answer: (<>
        <AnswerNormalText className="mb">
          The tools provided in PAM are based on strategies that have been proven effective when used in digital mental health, self-guided, or therapist-supported formats. The strategies were drawn from cognitive behavioral therapy, mindfulness-based therapies, acceptance and commitment therapy, and positive psychology. They have been shown to increase well-being in different formats.
        </AnswerNormalText>

        <AnswerNormalText className="mb">
          The Loving Kindness Meditation draws on a traditional guided meditation. In creating the script for our version, we reviewed many versions including instructions from the Metta Institute and a script created by Emma Seppala, Science Director of Stanford University’s Center for Compassion and Altruism Research and Education and author of The Happiness Track.
        </AnswerNormalText>

        <AnswerNormalText className="mb">
          The gratitude intervention was based on the 3GT intervention, developed by Dr. Martin Seligman and colleagues. We are grateful that they provided permission to adapt their intervention for PAM.
        </AnswerNormalText>

        <AnswerNormalText>
          The problem solving intervention was based on the Engage intervention, developed by Pat Arean and colleagues. We are grateful that they provided permission to adapt their intervention for PAM.
        </AnswerNormalText>
      </>)
    },
    {
      question: <span onClick={() => expandFAQ === 6 ? setExpandFAQ(0) : setExpandFAQ(7)}>What will you do with the information you collect?</span>,
      answer: (<>
        <AnswerNormalText className="mb">
          We are committed to respecting your privacy and confidentiality. We will never sell your data or information. Please see <a href="/privacypolicy" className="text-underline">privacy policy page</a> for more information about how we protect and use the information you provide.
        </AnswerNormalText>

        <AnswerNormalText>
          We will use your information to continue to improve the PAM algorithm as we learn from you what tools you find most helpful, and how best to tailor our recommendations.
        </AnswerNormalText>
      </>)
    },
    {
      question: <span onClick={() => expandFAQ === 7 ? setExpandFAQ(0) : setExpandFAQ(8)}>How is PAM funded?</span>,
      answer: (<AnswerNormalText>
        PAM is funded through the generous support of philanthropic donors. The Huang Family Foundation provided the initial support for development and deployment. In the future, we will use a combination of philanthropic funding and licensing agreements with institutions to ensure that PAM remains accessible to all.
      </AnswerNormalText>)
    },
    {
      question: <span onClick={() => expandFAQ === 8 ? setExpandFAQ(0) : setExpandFAQ(9)}>Can I donate to help sustain PAM?</span>,
      answer: (<>
        <AnswerNormalText className="mb">
          We would be honored if you chose to join them and support our efforts to continually improve, expand and share PAM as well as other new digital based-mental health tools.
        </AnswerNormalText>

        <AnswerTitleText className="mb">To make a gift online:</AnswerTitleText>

        <UL className="mb">
          {[<div>Go to: <a href="https://medicalgiving.stanford.edu/" className="text-underline" target="https://medicalgiving.stanford.edu/">medicalgiving.stanford.edu</a></div>,
            "Click on the blue “make a gift” tab in the upper right bar",
            "In the special instructions/other designation box, note: This gift is intended to support Pause a Moment (PAM), in the Department of Psychiatry and Behavioral Sciences.",
            "Then follow the prompts.",
          ].map((item, index) => {
            return (
              <li key={index}>
                <AnswerNormalText>{item}</AnswerNormalText>
              </li>
            )
          })}
        </UL>

        <AnswerTitleText className="mb">To make a gift via check:</AnswerTitleText>

        <UL>
          {["Please make your check payable to Stanford University",
            "In the memo line, indicate Pause a Moment (PAM), Psychiatry",
            "Also include a note that includes: This gift is intended to support Pause a Moment (PAM), in the Department of Psychiatry and Behavioral Sciences.",
            <AnswerTitleText>Mail to:</AnswerTitleText>
          ].map((item, index, arr) => {
            return (
              <li key={index} className={arr.length - 1 === index && "last-child"}>
                <AnswerNormalText>{item}</AnswerNormalText>
              </li>
            )
          })}
        </UL>

        <SubTextContainer className="mb-extra"><AnswerNormalText> Medical Center Development</AnswerNormalText>
          <AnswerNormalText>485 Broadway Street, 4th Floor</AnswerNormalText>
          <AnswerNormalText>Redwood City, CA 94063</AnswerNormalText>
          <AnswerNormalText> MC  5470</AnswerNormalText>
        </SubTextContainer>


        <AnswerNormalText>
          For a more personal discussion around your philanthropic interests and questions,
          <span className="text-bold"> please contact</span>
        </AnswerNormalText>
        <AnswerNormalText>Stanford Medical Center Development</AnswerNormalText>
        <AnswerNormalText>Philanthropic Liaison for Psychiatry and Behavioral Sciences</AnswerNormalText>
        <AnswerNormalText><a href="mailto:medicalgiving@stanford.edu" className="text-underline">medicalgiving@stanford.edu</a></AnswerNormalText>
        <AnswerNormalText>(650) 725 - 2504</AnswerNormalText>
      </>)
    },
    {
      question: <span onClick={() => expandFAQ === 9 ? setExpandFAQ(0) : setExpandFAQ(10)}>What if I lose my password?</span>,
      answer: (<>
        <AnswerNormalText>
          You can click on the Forgot password link present on the <span style={{ color: "#0099BA", cursor: "pointer" }} className="text-underline" onClick={() => {
            setModal({ modalId: 1, data: { redirect: 'tools' } });
            window.scroll({ top: 0, behavior: 'smooth' });
          }}>login</span> screen. If you still face the issue write us at <a href="mailto:pauseamoment@stanford.edu" className="text-underline"><span style={{ color: "#0099BA", cursor: "pointer" }}>pauseamoment@stanford.edu</span></a>.
        </AnswerNormalText>
      </>)
    },
    {
      question: <span onClick={() => expandFAQ === 10 ? setExpandFAQ(0) : setExpandFAQ(11)}>We are looking for designers or developers for our own program. Who designed and developed PAM?</span>,
      answer: (<>
        <AnswerNormalText>See our <a target="_blank" rel="noreferrer" href='/about' className="text-underline"> Team</a> page</AnswerNormalText>
      </>)
    },
    {
      question: <span onClick={() => expandFAQ === 11 ? setExpandFAQ(0) : setExpandFAQ(12)}>We would like to do a news story about PAM. Who do we contact?</span>,
      answer: (<>
        <AnswerNormalText className="mb">Please contact <a href="mailto:pauseamoment@stanford.edu" className="text-underline">pauseamoment@stanford.edu</a> and the Stanford Press Office at</AnswerNormalText>
        <AnswerNormalText>Lisa Kim</AnswerNormalText>
        <AnswerNormalText>Media Relations Specialist</AnswerNormalText>
        <AnswerNormalText>Stanford Health Care | School of Medicine</AnswerNormalText>
        <AnswerNormalText> Office of Communications</AnswerNormalText>
        <AnswerNormalText>301 Ravenswood Avenue, MC 5547 • Menlo Park, CA 94025</AnswerNormalText>
        <AnswerNormalText> office: 650.723.6696 cell: 650.346.4454</AnswerNormalText>
        <AnswerNormalText>email: <a href="mailto:likim@stanfordhealthcare.org" className="text-underline">likim@stanfordhealthcare.org</a></AnswerNormalText>
      </>)
    }

  ]

  useEffect(() => {
    const metaData = {
      title: "PAM | FAQs",
      url: window.location.href,
    }
    setMeta({ ...meta, ...metaData });

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("expandFAQ", expandFAQ);
  return (
    <FAQSectionWrapper>
      <HeaderBanner />
      <div class="container">
        <div class="panel-group" id="accordion">
          {questions.map((qt, i) => {
            return <div class="panel faq-panel">
              <div class="panel-heading" onClick={() => expandFAQ === i + 1 ? setExpandFAQ(0) : setExpandFAQ(i + 1)}>
                <h4 class="panel-title">
                  <QuestionText>
                    <a
                      style={{ border: questions.length - 1 === i ? "none" : i + 1 === expandFAQ && "none" }}
                      data-toggle="collapse"
                      className="collapsed"
                      data-parent="#accordion"
                      href="#collapse1"

                    >
                      {qt.question}
                    </a>
                    <span className="arrow" style={{ float: "right" }}>{expandFAQ === i + 1 ? <img className="down-arrow" src={op} alt={""} /> : <img className="right-arrow" src={cl} alt={""} />}</span>
                  </QuestionText>
                </h4>
              </div>
              <div
                class={
                  expandFAQ === i + 1
                    ? "panel-collapse collapse in"
                    : "panel-collapse collapse"
                }
                aria-expanded={expandFAQ}
              >
                <div class="panel-body">
                  {qt.answer}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </FAQSectionWrapper>
  );
};

FAQPage.propTypes = {};

export default FAQPage;
