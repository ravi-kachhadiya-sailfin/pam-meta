import React from "react";
import {
  CardContentWrapper,
  CardsWrapper,
  ClearALLButton,
  ContinueButton,
} from "./Cards.styles";

import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../slider/Slider";
import SingleChoiceCard from "./SingleChoiceCard";
import PropTypes from "prop-types";
import MultiReactionCard from "./MultiReactionCard";

function Cards(props) {
  return (
    <>
      <MultiReactionCard
        number={1}
        question={" How are you feeling?"}
        description={"Pick your current mood"}
        choices={[
          "HAPPY",
          "CONTENT",
          "SAD",
          "AFRAID",
          "GUILTY",
          "ANGERY",
          "WORRIED",
          "STRESSED",
          "GRIEVING",
          "NOT_SURE",
        ]}
      />

      <CardsWrapper bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
        <div className="card-header">
          <span className="card-number">2</span>
          <span className="card-title">
            Please rate your level of distress (at this time)
          </span>
        </div>
        <CardContentWrapper
          bootstrapClass={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}
        >
          <Slider />
        </CardContentWrapper>
      </CardsWrapper>
      <SingleChoiceCard
        number={3}
        question={"Have you experienced a traumatic event?"}
        description={
          "This may include: life-threatening experiences, witnessing deaths or death of a loved " +
          "one or colleague, significant exposure to COVID-related deaths or complications, " +
          "physical or sexual assault."
        }
        choices={[
          {
            id: "hasTraunmaticEvent",
            title: "Yes",
            value: "hasTraunmaticEvent",
            name: "hasTraunmaticEvent",
          },
          {
            id: "hasNotTraunmaticEvent",
            title: "No",
            value: "hasNotTraunmaticEvent",
            name: "hasNotTraunmaticEvent",
          },
        ]}
      />
      <div className="row">
        <div className="col-xs-12">
          {/*<input type="button" className="continue-button" value="Continue"/>*/}
          <ContinueButton />
        </div>
        <div className="col-xs-12 text-center text-underline">
          <ClearALLButton>Clear all my choices</ClearALLButton>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  singleCardData: PropTypes.array,
};

export default Cards;
