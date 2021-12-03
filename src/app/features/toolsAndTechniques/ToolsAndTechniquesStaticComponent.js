import React from 'react';
import { Box, Grid } from '@material-ui/core';
import check_arrow from "../../shared/assets/images/check-arrow.svg";




import {
  ToolPageTitle,
  ToolPageDescription,
  ToolsRightFormMeTitle,
  ToolRightForMeWrapper,
  ToolsRightFormMeDesc,
} from './style';
import DbBoxWithTitles from 'app/tamComponents/db-box-with-titles';

const ToolsAndTechniquesStaticComponent = (props) => {
  return (

    <Grid container direction="row">
      <Grid className="tools_title" item lg={8} md={8} sm={12} xs={12}>
        <ToolPageTitle >Tools & Techniques</ToolPageTitle>
        <ToolPageDescription>
          PAM includes a variety of different tools that can help with challenges you might be facing. You can browse
          all of our tools, use the menu below, or take a quick assessment so we can make personalized recommendations
          and send you to tools that would be the most helpful for you.
        </ToolPageDescription>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} style={{ float: "right" }}>
        <ToolRightForMeWrapper style={{ cursor: "pointer" }} onClick={() => { props.goToProgress() }}>
          <ToolsRightFormMeTitle className="c-db">
            <Box className="tools-right-for-me-title" >Check your progress to keep track of what's helping.</Box>
            <Box className="cursor-p">
              <img src={check_arrow} alt="check" />
            </Box>
          </ToolsRightFormMeTitle>
          <ToolsRightFormMeDesc className="c-db"></ToolsRightFormMeDesc>
          <Box className="tools-right-for-me-access c-db">Go to My Progress.</Box>
        </ToolRightForMeWrapper>
      </Grid>


      <div style={{ width: "100%" }}>
        <DbBoxWithTitles
          goToAssesment={() => { props.goToAssesment() }}
          title="Recommended"
          subTitle="Tailored Recommendations and tracking your progress can help even more!"
          paragraph={`
            If you answer a few more questions about how you're feeling, we can provide more specific and focused
            recommendations. PAM can also help you track your progress and activities, and find new tools for you over
            time as you make progress.
          `}
        />
      </div>

    </Grid >
  );
};

ToolsAndTechniquesStaticComponent.propTypes = {};

export default ToolsAndTechniquesStaticComponent;
