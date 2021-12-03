import { useEffect, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import {
  //   Layout,
  //   SeparatorLine,
  ToolsBottomButtonContainer,
} from './style';
import { data as contentData } from './content';
// import CustomButton from 'app/tamComponents/button';
import ListWithTitle from 'app/tamComponents/list-with-title';
import { getToolByType } from 'app/shared/services/toolServices';
import ToolsCard from 'app/tamComponents/ToolsCard/index';
import { FeelingEmotion } from 'app/shared/enums/index';
// import BodyWrapper from 'app/tamComponents/body-wrapper';

import {
  ToolsBody,
  ToolsCardContainer,
  ToolsContainerSection,
  ToolContainer,
  ToolPageTitle,
  ToolPageDescription,
  BackLink,
  ToolPageSubDescription,
  ToolPageSubTitleDescription,
  CustomButton,
  RecommandedPageButtonSection,
  HorizonatalLine

} from 'app/features/QSTools/ToolsPageComponent.styles';

import { throttle } from 'lodash';

import back_arrow from "../../shared/assets/images/understand_arrow.svg";

import Caraousel from 'app/tamComponents/carouselToolsCard';
import CarouselItem from 'app/tamComponents/carouselToolsCard/CarouselItem';
import { convertTestimonialArray, getDeviceSize } from 'app/shared/Utils/index';

const ToolsList = () => {
  const [toolsData, setToolsData] = useState([]);
  const [page, setpage] = useState(1);

  const disableLoadMore = useRef(false);
  const totalFetched = useRef(0);
  const location = useLocation();
  const history = useHistory();
  let type = 'qt';

  if (location.state) type = location.state.type;

  const content = contentData[type];

  const goBackHandler = () => history.goBack();

  const fetchData = () => {
    getToolByType(
      6,
      page,
      FeelingEmotion.filter((x) => x.text === sessionStorage.getItem('feelingEmotion').toUpperCase())[0].value,
      type === 'qt' ? 1 : 2
    ).then((res) => {
      if (page === 1) {
        totalFetched.current = res.list.length;
        disableLoadMore.current = totalFetched.current >= res.count;
        setToolsData(res.list);
      } else {
        totalFetched.current += res.list.length;
        disableLoadMore.current = totalFetched.current >= res.count;
        setToolsData(toolsData.concat(res.list));
      }
    });
  };

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
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const toolsDataArray = convertTestimonialArray(toolsData);

  console.log("content:", content, "disable", disableLoadMore);

  return (
    <ToolsBody>
      <div className="container">
        <Grid container direction="row">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <BackLink className="c-b cursor-p" onClick={goBackHandler}>
              {/* <i className="fa fa-chevron-left"></i> */}
              <img src={back_arrow} alt="back_arrow" />
              <span>Back to the recommendations</span>
            </BackLink>
            <ToolPageTitle className="recommend_title">{content.mainTitle}</ToolPageTitle>
            <ToolPageDescription>{content.toolsListed} </ToolPageDescription>

            <ToolPageSubTitleDescription>{content.tailoredRecommendations}</ToolPageSubTitleDescription>

            <ToolPageSubDescription>{content.weRecommend}</ToolPageSubDescription>
            <ToolPageSubDescription className="last-description">{content.trackingHelps}</ToolPageSubDescription>

            <RecommandedPageButtonSection>
              <CustomButton color="#0099BA">{content.loginToTrack}</CustomButton>
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
        <ToolsContainerSection>
          <ToolsCardContainer>
            {deviceSize < 0 ?
              toolsData && toolsData.length > 0 ? (
                <ToolContainer>
                  {toolsData
                    && toolsData.map((ele, index) => (
                      <div key={ele.id}>
                        <ToolsCard cardData={ele} />
                      </div>
                    ))}
                </ToolContainer>
              ) : (
                <Box className="no-Tool-found">
                  <span>No tools found</span>
                </Box>
              )
              : toolsDataArray && toolsDataArray.length > 0 ? (
                // <ToolContainer>
                <div className="row">
                  <div className="col-md-12 sliderContainer">
                    <Caraousel
                      indicatorIconButtonProps={{
                        style: {
                          border: '1px solid #a9bdc5',
                        },
                      }}
                      navButtonsAlwaysInvisible={!(toolsDataArray?.length > 1)}
                      navButtonsAlwaysVisible={toolsDataArray?.length > 1}
                      withCustomButton={true}
                    >
                      {toolsDataArray
                        && toolsDataArray.map((item, index) => {
                          return (
                            <CarouselItem allItems={toolsDataArray} data={item.Items[0]} length={2} index={index} key={index} component={ToolsCard} />
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
        </ToolsContainerSection>

        <ToolsContainerSection className="btn-normal">
          <ToolsBottomButtonContainer>
            <div>
              {disableLoadMore.current === true ? null : (
                <CustomButton className="full-width" color="#0099ba" disabled={disableLoadMore.current} onClick={() => setpage(page + 1)}>
                  Load more...
                </CustomButton>
              )}
            </div>
          </ToolsBottomButtonContainer>
        </ToolsContainerSection>
      </div>
    </ToolsBody>
  );

  // <BodyWrapper>
  //   <Layout>
  //     <BackLink className="c-b cursor-p navigate-back" onClick={goBackHandler}>
  //       <i className="fa fa-chevron-left"></i>
  //       <span className="back-desc">Back to the recommendations</span>
  //     </BackLink>

  //     <Box>
  //       <Box className="main-title">{content.mainTitle}</Box>
  //       <Box className="desc-line">{content.toolsListed}</Box>
  //     </Box>

  //     <Box>
  //       <Box className="sub-title">{content.tailoredRecommendations}</Box>
  //     </Box>

  //     <Box className="sub-desc">
  //       <Box className="sub-desc-line">{content.weRecommend}</Box>
  //       <Box className="sub-desc-line">{content.trackingHelps}</Box>
  //     </Box>

  //     <Box className="track-login-btn">
  //       <CustomButton color="#0099ba">{content.loginToTrack}</CustomButton>
  //     </Box>

  //     <SeparatorLine />

  //     <Box className="what-to-do">
  //       <ListWithTitle
  //         title="What to do next"
  //         liList={[
  //           'Pick one to start with. See if it works. If you like it, we suggest you favorite it. Set reminders to practice regularly.',
  //           "If you don't find it works or you don't like it, come back and try a different tool.",
  //         ]}
  //         titleClassName="what-to-do-title"
  //         listClassName="what-to-do-list"
  //       />
  //     </Box>

  //     <ToolsCardContainer>
  //       <Box className="toolsCardTitle">
  //         <Box className="toolsTitle">
  //           <span>{content.mainTitle}</span>
  //         </Box>
  //         <Box className="right-arrow">
  //           <i className="fa fa-chevron-right"></i>
  //         </Box>
  //       </Box>
  //       <Box className="subTitle">
  //         <span>{content.subTitle}</span>
  //       </Box>
  //       <Box className="toolTimeDuration">
  //         <span>{content.toolTimeDuration}</span>
  //       </Box>

  //       <ToolContainer>
  //         {toolsData &&
  //           toolsData.map((ele) => (
  //             <div key={ele.id}>
  //               <ToolsCard cardData={ele} id={ele.id} />
  //             </div>
  //           ))}
  //       </ToolContainer>

  //       <ToolsContainerSection>
  //         <ToolsBottomButtonContainer>
  //           <div>
  //             {disableLoadMore.current === true ? null : (
  //               <>
  //                 <CustomButton color="#0099ba" disabled={disableLoadMore.current} onClick={() => setpage(page + 1)}>
  //                   Load more...
  //                 </CustomButton>
  //               </>
  //             )}
  //           </div>
  //         </ToolsBottomButtonContainer>
  //       </ToolsContainerSection>
  //     </ToolsCardContainer>
  //   </Layout>
  // </BodyWrapper>
  // );
};

export default ToolsList;
