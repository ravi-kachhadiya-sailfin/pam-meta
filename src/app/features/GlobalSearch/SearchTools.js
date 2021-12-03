import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { throttle } from 'lodash';
import { useParams } from 'react-router-dom';

import { ROUTES } from 'app/Routes';
import ToolsStaticComponent from './ToolsStaticComponent';
import ToolsCard from '../../tamComponents/ToolsCard/index';
import { Box } from '@material-ui/core';
import {
  ToolsBody,
  ToolsCardContainer,
  ToolsContainerSection,
  ToolContainer,
  RecomamndedPageToolDiscription
} from './ToolsPageComponent.styles';
import { getSearchTools } from './ToolsServices'

import check_arrow from "app/shared/assets/images/recommanded_arrow_right.svg";

import Caraousel from 'app/tamComponents/carouselToolsCard';
import CarouselItem from 'app/tamComponents/carouselToolsCard/CarouselItem';
import { defaultMetaData, convertTestimonialArray, getDeviceSize } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';

const ToolsLandingPageAll = (props) => {
  // const location = useLocation();
  const history = useHistory();
  const { text } = useParams()
  const [quickToolsData, setQuickToolsData] = useState(null)
  let [specializedToolsData, setSpecializedToolsData] = useState(null)
  let [healthCondition, setHealthCondition] = useState([])
  let [prevPage, setPrevpage] = useState("home")
  const { meta, setMeta } = useContext(MetaContext);

  useEffect(() => {
    let config = {
      perPage: 10,
      quickToolPage: 10,
      specializedToolPage: 10,
      name: text
    }
    // let toolsData = localStorage.getItem("toolData")
    // toolsData = JSON.parse(toolsData)
    getSearchTools(config).then((res) => {
      let toolsData = res
      if (!!toolsData && !!toolsData.data) {
        setQuickToolsData(toolsData.data.quickTools.list)
        setSpecializedToolsData(toolsData.data.specializedTools.list)
        setHealthCondition(toolsData.data.healthCondition)
        setPrevpage(localStorage.getItem("prevPage"))
      }
    })

    const metaData = {
      title: "PAM | Search",
      url: window.location.href,
    }
    setMeta({ ...meta, ...metaData });

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  // const quickToolsData = useMemo(() => {
  //   if (location.state) {
  //     return location.state.toolsData.quickTools.list;
  //   }
  // }, [location]);

  // const specializedToolsData = useMemo(() => {
  //   if (location.state) {
  //     return location.state.toolsData.specializedTools.list;
  //   }
  // }, [location]);

  const openToolsList = (type) => {
    history.push({ pathname: type === "qt" ? ROUTES.quick_tools : ROUTES.special_tools, state: { type: type } });
    // if (specializedToolsData && specializedToolsData.length > 0) {
    // } else {
    //   return;
    // }
  };

  const quickToolsDataArray = convertTestimonialArray(quickToolsData);
  const specialToolsDataArray = convertTestimonialArray(specializedToolsData);

  return (
    <ToolsBody>
      <div className="container">
        <ToolsStaticComponent prevPage={prevPage} text={text} healthCondition={healthCondition} />
        <ToolsContainerSection>
          {quickToolsData && quickToolsData.length > 0 && <ToolsCardContainer>
            <h1 className="cursor-p mt-0" onClick={() => openToolsList('qt')}>
              QUICK TOOLS <img className="right-arrow" src={check_arrow} alt="check_arrow" />
            </h1>
            <div className="discription">The tools listed here are easy to learn and should take about 5-10 minutes to try. You can use these skills as often as you need.</div>
            <div className="time">Approx 5-10 mins each</div>
            {deviceSize < 0 ?
              quickToolsData && quickToolsData.length > 0 ? (
                <ToolContainer>
                  {quickToolsData
                    ? quickToolsData.map((ele, index) => (
                      <div key={ele.id}>
                        <ToolsCard cardData={ele} className="without-carousel-card" />
                      </div>
                    ))
                    : null}
                </ToolContainer>
              ) : (
                <Box className="no-Tool-found">
                  <span>No tools found</span>
                </Box>
              )
              : quickToolsDataArray && quickToolsDataArray.length > 0 ? (
                // <ToolContainer>
                <div className="row">
                  <div className="col-md-12 sliderContainer">
                    <Caraousel
                      indicatorIconButtonProps={{
                        style: {
                          border: '1px solid #a9bdc5',
                        },
                      }}
                      navButtonsAlwaysInvisible={!(quickToolsDataArray?.length > 1)}
                      navButtonsAlwaysVisible={quickToolsDataArray?.length > 1}
                      withCustomButton={true}
                    >
                      {quickToolsDataArray
                        && quickToolsDataArray.map((item, index) => {
                          return (
                            <CarouselItem allItems={quickToolsDataArray} desktopMode={true} data={item.Items[0]} length={2} index={index} key={index} component={ToolsCard} />
                          );
                        })}
                    </Caraousel>
                  </div>
                </div>
                // </ToolContainer>
              ) : (
                <Box className="no-Tool-found">
                  <span>No tools found</span>
                </Box>
              )}
          </ToolsCardContainer>}
          {specializedToolsData && specializedToolsData.length > 0 && <ToolsCardContainer>
            <h1 className="cursor-p special-tool-title" onClick={() => openToolsList('st')}>
              SPECIALIZED TOOLS  <img className="right-arrow" src={check_arrow} alt="check_arrow" />
            </h1>
            <RecomamndedPageToolDiscription>
              The tools listed here are in-depth tools that can help for the challenges and stressors you've been facing. They take a bit longer to learn, but with regular practice you can master them!
            </RecomamndedPageToolDiscription>
            <div className="time">Approx 15-20 mins each</div>
            {deviceSize < 0 ?
              specializedToolsData && specializedToolsData.length > 0 ? (
                <ToolContainer>
                  {specializedToolsData
                    ? specializedToolsData.map((ele) => (
                      <div key={ele.id}>
                        <ToolsCard cardData={ele} id={ele.id} className="without-carousel-card" />
                      </div>
                    ))
                    : null}
                </ToolContainer>
              ) : (
                <Box className="no-Tool-found">
                  <span>No tools found</span>
                </Box>
              )
              :
              specialToolsDataArray && specialToolsDataArray.length > 0 ? (
                <div className="row">
                  <div className="col-md-12 sliderContainer">
                    <Caraousel
                      indicatorIconButtonProps={{
                        style: {
                          border: '1px solid #a9bdc5',
                        },
                      }}
                      navButtonsAlwaysInvisible={!(specialToolsDataArray?.length > 1)}
                      navButtonsAlwaysVisible={specialToolsDataArray?.length > 1}
                      withCustomButton={true}
                    >
                      {specialToolsDataArray
                        && specialToolsDataArray.map((item, index) => {
                          return (
                            <CarouselItem allItems={specialToolsDataArray} desktopMode={true} data={item.Items[0]} length={2} index={index} key={index} component={ToolsCard} />
                          );
                        })}
                    </Caraousel>
                  </div>
                </div>
                // </ToolContainer>
              ) : (
                <Box className="no-Tool-found">
                  <span>No tools found</span>
                </Box>
              )}
          </ToolsCardContainer>}
          {(specialToolsDataArray === null && quickToolsDataArray === null) &&
            <Box className="no-Tool-found">
              <span>Loading...</span>
            </Box>
          }
          {specialToolsDataArray && quickToolsDataArray && specialToolsDataArray.length === 0 && quickToolsDataArray.length === 0 &&
            <Box className="no-Tool-found">
              <span>No tools found</span>
            </Box>
          }
        </ToolsContainerSection>
      </div>
    </ToolsBody>
  );
};

ToolsLandingPageAll.propTypes = {};

export default ToolsLandingPageAll;
