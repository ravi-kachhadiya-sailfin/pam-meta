import React, { useEffect, useState, useContext } from 'react';

import ToolsStaticComponent from './ToolsStaticComponent';
import ToolsCard from '../../tamComponents/ToolsCard/index';
import { Box } from '@material-ui/core';
import {
  ToolsBody,
  ToolsCardContainer,
  ToolsContainerSection,
  ToolContainer,
} from './ToolsPageComponent.styles';
import { getListOfTools } from 'app/shared/services/toolServices';

import { throttle } from 'lodash';

import Caraousel from 'app/tamComponents/carouselToolsCard';
import CarouselItem from 'app/tamComponents/carouselToolsCard/CarouselItem';
import { defaultMetaData, convertTestimonialArray, getDeviceSize } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';


const ToolsLandingPageAll = (props) => {
  // const location = useLocation();
  const [quickToolsData, setQuickToolsData] = useState([])
  const [type] = useState(window.location.pathname === "/quick" ? 1 : 2)
  const { meta, setMeta } = useContext(MetaContext);

  let [specializedToolsData, setSpecializedToolsData] = useState([])
  let [healthCondition] = useState([])
  let [prevPage] = useState("home")

  let deviceCode = getDeviceSize();
  const [deviceSize, setDeviceSize] = useState(['md', 'sm', 'xs'].indexOf(deviceCode))

  const handleResize = throttle(() => {
    deviceCode = getDeviceSize()
    setDeviceSize(['md', 'sm', 'xs'].indexOf(deviceCode));
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize]);

  useEffect(() => {
    getListOfTools().then((res) => {
      let toolsData = res
      if (!!toolsData && !!toolsData.list) {
        setQuickToolsData(toolsData.list.filter((tl) => { return tl.type === 1 }))
        setSpecializedToolsData(toolsData.list.filter((tl) => { return tl.type === 2 }))
        // setHealthCondition(toolsData.data.healthCondition)
        // setPrevpage(localStorage.getItem("prevPage"))
      }
    })

    if (window.location.pathname === "/quick") {
      const metaData = {
        title: "PAM | Quick tools",
        url: window.location.href,
      }
      setMeta({ ...meta, ...metaData });
    } else {
      const metaData = {
        title: "PAM | Special tools",
        url: window.location.href,
      }
      setMeta({ ...meta, ...metaData });
    }

    return () => {
      setMeta(defaultMetaData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  const quickToolsDataArray = convertTestimonialArray(quickToolsData);
  const specialToolsDataArray = convertTestimonialArray(specializedToolsData);

  return (
    <ToolsBody>
      <div className="container">
        <ToolsStaticComponent prevPage={prevPage} type={type} healthCondition={healthCondition} />
        <ToolsContainerSection>
          {type === 1 ?
            <ToolsCardContainer>
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
            </ToolsCardContainer>
            : <ToolsCardContainer>
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
                : specialToolsDataArray && specialToolsDataArray.length > 0 ? (
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
            </ToolsCardContainer>
          }
        </ToolsContainerSection>
      </div>
    </ToolsBody>
  );
};

ToolsLandingPageAll.propTypes = {};

export default ToolsLandingPageAll;
