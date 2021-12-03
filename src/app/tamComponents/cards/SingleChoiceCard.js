import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  CardContentWrapper,
  CardsWrapper,
} from "./Cards.styles";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@material-ui/core";

/*Single choice card. In which user can answer with clicking on the specific one choice from many.
 *
 */
const SingleChoiceCard = (props) => {
  const [value, setValue] = React.useState(
    sessionStorage.getItem("hasTraumaticEvent") == null
      ? "No"
      : sessionStorage.getItem("hasTraumaticEvent")
  );
  const [changeBool, setChangeBool] = useState(props.changeBool)
  // useEffect(() => {
  //   sessionStorage.setItem("hasTraumaticEvent", value);
  // }, [value]);
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
    } else {
      if (props.changeBool !== undefined && (changeBool !== props.changeBool)) {
        setValue("No")
        setChangeBool(props.changeBool)
      } else {
        sessionStorage.setItem("hasTraumaticEvent", value);
      }
      // do componentDidUpdate logic
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <CardsWrapper className="experienced_card" bootstrapClass="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card-header">
        <span className="card-number">{props.number}</span>
        <span className="card-title">{props.question}</span>
      </div>
      <CardContentWrapper
        bootstrapClass={"card col-xs-12 col-sm-12 col-md-12 col-lg-12 padding_0 event_radio"}
      >
        <div className="card-description">{props.description}</div>
        <div className="controls">
          <RadioGroup className="event_radio_group" onChange={handleChange} defaultValue="No">
            <Grid container>
              {props.choices.length !== 0
                ? props.choices.map((choices) => (
                  <Grid item key={choices.id}>
                    <FormControlLabel
                      control={
                        <Radio id={choices.id} selected={choices.title === value} style={{ color: "#0099ba" }} />
                      }
                      id={choices.id}
                      name={new Date().getSeconds()}
                      label={choices.title}
                      value={choices.title}
                    />
                  </Grid>
                ))
                : null}
            </Grid>
          </RadioGroup>
        </div>
      </CardContentWrapper>
    </CardsWrapper>
  );
};

SingleChoiceCard.propTypes = {
  /** Question Number */
  number: PropTypes.number.isRequired,
  /** Question for the Card */
  question: PropTypes.string.isRequired,
  /** Question description */
  description: PropTypes.string,
  /** Array of choices Example : [{id:"Sample_ID",title:"Sample_Title",name:"SAMPLE_Title",value:"Sample_Value"},...] */
  choices: PropTypes.array.isRequired,
};

SingleChoiceCard.defaultProps = {
  number: "X",
  question: "Default Questions",
  description: "Default Description",
  choices: [
    {
      title: "defaultTitle",
      id: "defaultID",
      name: "defaultName",
      value: "defaultValue",
    },
  ],
};

export default SingleChoiceCard;
