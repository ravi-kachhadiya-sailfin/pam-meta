import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { ToolPageTitle, ToolPageDescription, BackLink, ToolPageSubDescription, ToolPageSubTitleDescription, CustomButton, RecommandedPageButtonSection, HorizonatalLine } from './ToolsPageComponent.styles';
import ListWithTitle from 'app/tamComponents/list-with-title';
import { useAuth } from 'app/features/registration/authService';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import back_arrow from "app/shared/assets/images/understand_arrow.svg";


const ToolsStaticComponent = (props) => {
  const auth = useAuth();
  const { setModal } = useContext(AppStoreContext);
  const trackProgress = () => {
    if (auth.isAuthenticated) {
      window.location.href = "/my-progress"
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <Grid container direction="row">
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <BackLink className="c-b cursor-p" onClick={() => { window.location.href = "/recommendation" }}>
          {/* <i className="fa fa-chevron-left"></i> */}
          <img src={back_arrow} alt="back_arrow" />
          <span>Back to the recommendations</span>
        </BackLink>
        <ToolPageTitle className="recommend_title">{props.type === 1 ? "Quick Tools" : "Specialized Tools"}</ToolPageTitle>
        <ToolPageDescription>
          {props.type === 1 ?
            <>The tools listed here are easy to learn and should take about 5 minutes to try. You can use these skills as often as you need.</> :
            <>The tools listed here are in-depth tools that can help for the challenges and stressors you've been facing. They take a bit longer to learn, but with regular practice you can master them!</>}
        </ToolPageDescription>

        <ToolPageSubTitleDescription>Tailored Recommendations and tracking your progress can help even more!</ToolPageSubTitleDescription>
        <ToolPageSubDescription>
          {props.type === 1 ?
            <>We recommend taking a moment to log in and do a more in-depth (but still brief!) assessment of how you're doing. This will allow us to make more personalized recommendations and help you track your progress.</> :
            <>We recommend taking a moment for a brief assessment of how you're doing. This will allow help you track your progress and will allow us to make even more personalized recommendations based on what has helped people with profiles and experiences similar to yours.</>}
        </ToolPageSubDescription>
        <ToolPageSubDescription className="last-description">Tracking helps you to see which skills seem to be helping the most, allows us to find new ones that may be useful to you, and will help you see your progress over time.</ToolPageSubDescription>

        <RecommandedPageButtonSection>
          <CustomButton onClick={() => { trackProgress() }} color="#0099BA">Let me track my progress and activities</CustomButton>
        </RecommandedPageButtonSection>
        <HorizonatalLine>
          <hr
            className="horizonLine"
            style={{
              border: '0.5px solid #a9bdc5',
              opacity: '0.3',
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
    </Grid>
  );
};

ToolsStaticComponent.propTypes = {};

export default ToolsStaticComponent;
