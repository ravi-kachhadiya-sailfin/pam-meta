import React, { useEffect, useState, useRef } from "react";
import { SliderWrapper } from "./Slider.styled";

const TAMSlider = (props) => {
  const [slliderValue, setslliderValue] = useState(0);
  const [changeBool, setChangeBool] = useState(props.changeBool)
  const mounted = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      setslliderValue(
        !!props.distressScore ? props.distressScore : 0
      );
      mounted.current = true;
    } else {
      if (props.updateDistressLevel) {
        props.updateDistressLevel(slliderValue)
      }
      if (props.changeBool !== undefined && (changeBool !== props.changeBool)) {
        setslliderValue(0)
        setChangeBool(props.changeBool)
      } else {
        sessionStorage.setItem("distressLevel", slliderValue);
      }
      // do componentDidUpdate logic
    }
  });
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
  ];
  const sliderValueChange = (val) => {
    if (!!props.sliderUpdate) {
      props.sliderUpdate(val)
    }
    setslliderValue(val)
  }
  return (
    <SliderWrapper className={`${props.from === "popup" && "tools_rating_slider_popup"} ${props.from === "popupFillBucket" && "tools_rating_slider_popup margin-top"}`}
      style={{ marginTop: "20px" }}
      //getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay={!props.disable ? "on" : "off"}
      step={1}
      marks={marks}
      min={0}
      max={10}
      value={!props.disable ? slliderValue : props.value}
      onChange={(e, value) => { !props.disable && sliderValueChange(value) }}
    />
  );
};

TAMSlider.propTypes = {};

export default TAMSlider;
