import { Grid } from '@material-ui/core';
import { ToolPageDescription } from './ToolsPageComponent.styles';

const ToolsStaticComponent = (props) => {
  return (
    <Grid direction="row">
      <Grid lg={12} md={12} sm={12} xs={12}>
        <ToolPageDescription className="searched-msg">
          <div>
            <span>Your search for </span>
            <span className="searched-text">'{props.text}'</span>
          </div>
        </ToolPageDescription>
      </Grid>
    </Grid>
  );
};

ToolsStaticComponent.propTypes = {};

export default ToolsStaticComponent;