import { useState, useContext, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { ToolPageTitle, ToolPageDescription, ToolPageSubDescription, ToolPageSubTitleDescription, BackLink, CustomButton, RecommandedPageButtonSection, HorizonatalLine } from './ToolsPageComponent.styles';
import ListWithTitle from 'app/tamComponents/list-with-title';
// import CustomButton from 'app/tamComponents/button';
import { throttle } from 'lodash';
import { useAuth } from 'app/features/registration/authService';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';

import back_arrow from "app/shared/assets/images/understand_arrow.svg";
import { getDeviceSize } from 'app/shared/Utils/index';

// import { getDeviceSize } from 'app/shared/Utils/index';
// import { throttle } from 'lodash';

import PopUp from './Popup';

const ToolsStaticComponent = (props) => {
  const auth = useAuth();
  const { setModal } = useContext(AppStoreContext);
  const [showPopup, setShowPopup] = useState(false)

  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  let healthCondition = !!props.healthCondition && props.healthCondition.map((hc) => {
    return <div>{hc}</div>
  })

  const trackProgress = () => {
    if (auth.isAuthenticated) {
      window.location.href = "/my-progress"
    } else {
      setModal({ modalId: 1, data: { redirect: '/my-progress' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };

  // let deviceCode = getDeviceSize();
  // const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  // const handleResize = throttle(() => {
  //   deviceCode = getDeviceSize()
  //   setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  // }, 500);

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  // }, [handleResize]);


  // console.log(healthCondition)
  return (
    <>
      <Grid container direction="row">
        <Grid className="tools_title" item lg={12} md={12} sm={12} xs={12}>
          {props.prevPage !== "home" && <BackLink className="c-b cursor-p" onClick={() => { window.location.href = "/recommendation" }}>
            {/* <i className="fa fa-chevron-left"></i> */}
            <img src={back_arrow} alt="back_arrow" />
            <span>Back to the recommendations</span>
          </BackLink>
          }
          <ToolPageTitle className={`${props.prevPage !== "home" && "personalize-tool"} recommend_title`}>
            <>
              {props.prevPage === "home" ? <>Recommended {deviceSize > -1 && <br />}for you</> : <span>Personalized <br />Recommendations {deviceSize > -1 && <br />}for You</span>}
            </>
          </ToolPageTitle>
          <ToolPageDescription className={props.prevPage !== "home" && "last-description"}>
            {props.prevPage === "home" ?
              <>Thank you for answering these questions about your experiences and concerns. Below are some tools that may be helpful to you based on your initial responses. We have selected some quick tools, and some more in-depth activities that we think may be helpful for you.</> :
              <div>Based on your responses we have selected some quick tools, and some longer ones, that have been helpful for people with similar feelings and experiences. Based on your responses, it looks like you may be experiencing some symptoms of:</div>}
          </ToolPageDescription>

          {props.prevPage === "home" && <>
            <ToolPageSubTitleDescription>Tailored Recommendations and tracking your progress can help even more!</ToolPageSubTitleDescription>
            <ToolPageSubDescription>
              We recommend taking a moment to do a more in-depth (but still brief!) assessment of how you're doing. This will allow us to make more personalized recommendations and help you track your progress.
            </ToolPageSubDescription>
            <ToolPageSubDescription className="last-description">
              Tracking helps you to see which skills seem to be helping the most, allows us to find new ones that may be useful to you, and will help you see your progress over time.
            </ToolPageSubDescription>
          </>}
          {/* <ToolPageDescription> */}
          {props.prevPage !== "home" &&
            <>
              <ListWithTitle
                title=""
                liList={healthCondition}
                listClassName={"prfy-li-list"}
              />
              <ToolPageSubDescription className="mb-0">
                {props.healthCondition.length > 0 && props.healthCondition[0] === "No elevated symptoms of Trauma, Anxiety or Depression" ?
                  <>We're so glad to see you've been feeling ok. We know it has been a difficult couple of years for many people! The activities we recommend can be helpful but if you ever have diffculties for more than a month or if these activities don't help enough, you may need additional help and support. These activities do not take the place of meeting with a trained therapist, counselor, or primary care provider. If you are having thoughts of suicide or need someone to talk to right now, immediate help is available through the <a className="link-text" target="_blank" rel="noreferrer" href="https://www.crisistextline.org/">Crisis Text Line</a> or <a className="link-text" target="_blank" rel="noreferrer" href="https://suicidepreventionlifeline.org/">Suicide Prevention Hotline</a> Outside the US, you can find international crisis lines <a className="link-text" target="_blank" rel="noreferrer" href="http://www.suicide.org/international-suicide-hotlines.html">here</a>.</>
                  :
                  <>The activities we recommend can help but if you have been feeling this way for more than a month or if these activities don't help enough, you may need additional help and support. These activities do not take the place of meeting with a trained therapist, counselor, or primary care provider. If you are having thoughts of suicide or need someone to talk to right now, immediate help is available through the <a className="link-text" target="_blank" rel="noreferrer" href="https://www.crisistextline.org/">Crisis Text Line</a> or <a className="link-text" target="_blank" rel="noreferrer" href="https://suicidepreventionlifeline.org/">Suicide Prevention Hotline</a> Outside the US, you can find international crisis lines <a className="link-text" target="_blank" rel="noreferrer" href="http://www.suicide.org/international-suicide-hotlines.html">here</a>.</>
                }
              </ToolPageSubDescription>
            </>
          }
          {/* </ToolPageDescription> */}
          <RecommandedPageButtonSection>
            {props.prevPage === "home" ?
              <CustomButton onClick={() => { trackProgress() }} color="#0099BA">Let me track my progress and activities</CustomButton> :
              <CustomButton onClick={() => { setShowPopup(true) }} color="#F19840" >Learn about ways to get additional support</CustomButton>
            }
          </RecommandedPageButtonSection>
          <HorizonatalLine>
            <hr
              className="horizonLine"
              style={{
                border: '0.5px solid #A9BDC5',
                opacity: '0.5',
              }}
            />
          </HorizonatalLine>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <ListWithTitle
            title="What to do next"
            liList={[
              'Pick one to start with. See if it works. If you like it, we suggest you favorite it. Set reminders to practice regularly.',
              "If you don't find it works or you don't like it, come back and try a different tool.",
            ]}
          />
        </Grid>
        {/* <div>
        <DbBoxWithTitles
          title="Recommended"
          subTitle="Tailor and track your progress"
          paragraph={`
            If you answer a few more questions about your concerns, we can
            provide you with more specific and focused recommendations. We can
            then work together to have you practice the skills, find new ones
            that may be useful for you, and track your progress over time.
          `}
        />
      </div> */}
      </Grid>
      {
        showPopup &&
        <PopUp setShowPopup={(bool) => { setShowPopup(bool) }} />
      }
    </>
  );
};

ToolsStaticComponent.propTypes = {};

export default ToolsStaticComponent;
