import React from 'react';
import { Grid } from '@material-ui/core';
import DbBoxWithTitles from 'app/tamComponents/db-box-with-titles';

const ToolsStaticTailComponent = (props) => {
  return (
    <Grid spacing={2} container direction="row">
      <div>
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
      </div>
    </Grid>
  );
};

ToolsStaticTailComponent.propTypes = {};

export default ToolsStaticTailComponent;
