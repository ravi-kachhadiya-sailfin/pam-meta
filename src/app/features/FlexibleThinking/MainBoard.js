import { Box, Card } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import {
  BoardTitle,
  BoardText,
  BoardSubTitle
} from './style';
import gloria from 'app/shared/assets/images/gloria/gloria1.svg';
import jose from 'app/shared/assets/images/jose/jose1.svg';
import maria from 'app/shared/assets/images/maria/maria1.svg';
import james from 'app/shared/assets/images/james/james1.svg';
import alyssa from 'app/shared/assets/images/alyssa/alyssa1.svg';
import { getDeviceSize } from 'app/shared/Utils/index';

import { throttle } from 'lodash';
const MainBoard = (props) => {

  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  function scrollTop() {
    setTimeout(() => {
      var topScroll = document.getElementById("arrow_sticky_wrapper").offsetTop - 10;
      console.log("arrow_sticky_wrapper", document.getElementById("arrow_sticky_wrapper"))
      document.body.scrollTop = topScroll;
      document.documentElement.scrollTop = topScroll;
    }, 50)
  }

  return (
    <>
      <Card className="situations-card" >
        <BoardTitle className="flex_home_card_header">
          Examples
        </BoardTitle>
        <BoardSubTitle className="flex_home_card_title" >
          A coworker snaps at you for a small mistake you made.
        </BoardSubTitle>
        <BoardText className="flex_home_card_sub_title">
          Different people might react in different ways.
        </BoardText>
        <div className="flexible_home_image_wrapper">
          <div className=" flexible_home_text_wrapper">
            <Box onClick={() => { props.setScreen(2); scrollTop() }} className="situations-sub-user" >
              <img alt={"img"} src={gloria} />
            </Box>
            <Box onClick={() => { props.setScreen(2); scrollTop() }} >
              <BoardText className="situations-sub-title text-underline">click to see how Gloria reacted</BoardText>
            </Box>
          </div>
          <div className=" flexible_home_text_wrapper">
            <Box onClick={() => { props.setScreen(3); scrollTop() }} className="situations-sub-user" >
              <img alt={"img"} src={jose} />
            </Box>
            <Box onClick={() => { props.setScreen(3); scrollTop() }}>
              <BoardText className="situations-sub-title text-underline">click to see how Jose reacted</BoardText>
            </Box>
          </div>
        </div>


        {/* <div className="situations-title">
          <Box onClick={() => { props.setScreen(2) }} className="" >
            <BoardText className="situations-sub-title">click to see how Gloria reacted</BoardText>
          </Box>
          <Box onClick={() => { props.setScreen(3) }} className="">
            <BoardText className="situations-sub-title">click to see how Jose reacted</BoardText>
          </Box>
        </div> */}
        <BoardSubTitle className="situations_we_think">
          How we think about situations changes how we feel and react.
          {deviceSize < 0 && <br />} Here are some examples of how this skill can apply to other situations.
        </BoardSubTitle>
        <div className="flexible_home_image_wrapper">
          <div className="flexible_home_text_wrapper">
            <Box className="situations-sub-user">
              <img alt={"img"} src={maria} onClick={() => { props.setScreen(4); scrollTop() }} />
            </Box>
            <div className="flexible_link_text" >
              <Box onClick={() => { props.setScreen(4); scrollTop() }}>
                <BoardText className="situations-moment-title" >Depression</BoardText>
                <BoardText className="situations-sub-moment text-underline">click to see Maria's story</BoardText>
              </Box>
            </div>
          </div>
          <div className="flexible_home_text_wrapper">
            <Box className="situations-sub-user">
              <img alt={"img"} src={james} onClick={() => { props.setScreen(5); scrollTop() }} />
            </Box>
            <div className="flexible_link_text">
              <Box onClick={() => { props.setScreen(5); scrollTop() }} >
                <BoardText className="situations-moment-title">Trauma</BoardText>
                <BoardText className="situations-sub-moment text-underline">click to see James's story</BoardText>
              </Box>
            </div>
          </div>
        </div>

        <div className="flexible_home_image_wrapper" >
          <div className="flexible_home_text_wrapper">
            <Box className="situations-sub-user">
              <img alt={"img"} onClick={() => { props.setScreen(6); scrollTop() }} src={alyssa} />
            </Box>
            <div className="flexible_link_text">
              <Box onClick={() => { props.setScreen(6); scrollTop() }} >
                <BoardText className="situations-moment-title">Anxiety</BoardText>
                <BoardText className="situations-sub-moment text-underline">click to see Alyssa's story</BoardText>
              </Box>
            </div>
          </div>
        </div>
      </Card>
      <div id="border" className="luke_border"></div>

    </>
  );
};

export default MainBoard;
