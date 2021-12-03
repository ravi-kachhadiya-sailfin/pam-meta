/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { Box } from '@material-ui/core';
import ToolsCard from '../../tamComponents/ToolsCard';
import filter_icon from "../../shared/assets/images/filter.svg";

import {
  ToolsBody,
  ToolsContainerSection,
  FilterControlWrapper,
  FilterControlIcon,
  FilterControlPopover,
  ToolsBottomButtonContainer,
  ControlWrappers,
  ToolContainer,
} from './style';
import ToolsAndTechniquesStaticComponent from './ToolsAndTechniquesStaticComponent';
import CustomSelect from 'app/tamComponents/select';
import CheckBox from 'app/tamComponents/checkbox';
import { getListOfTools, getToolsFilter } from 'app/shared/services/toolServices';
import CustomButton from 'app/tamComponents/button';
import { ToolsSortingData } from 'app/shared/enums';
import { useParams } from 'react-router-dom';
import { AppStoreContext } from 'app/shared/store/AppStoreProvider';
import { useAuth } from 'app/features/registration/authService';
import { defaultMetaData, handleClose, handleOpen } from 'app/shared/Utils/index';
import { MetaContext } from 'app/shared/context/MetaProvider';

const ToolsAndTechniquesLanding = (props) => {
  const [page, setpage] = useState(1);
  const [shownTools, setShownTools] = useState(3)
  const [loadMoreOption, setloadMoreOption] = useState(false);
  const [filterSelection, setfilterSelection] = useState([]);
  const [FILTER_OPTIONS, setFILTER_OPTIONS] = useState([]);
  // const [SORTING_OPTIONS, setSORTING_OPTIONS] = useState(null);
  const [sortingOptions] = useState(ToolsSortingData);
  const [receivedResponse, setreceivedResponse] = useState(null);
  const [sortingEle, setSortingEle] = React.useState(null);
  const [maxPage, setMaxPage] = useState(1);
  const [filterPayload, setFilterPayload] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const { meta, setMeta } = useContext(MetaContext);

  const openSortingPopup = (event) => {
    document.body.classList.add("filter-dropdown");
    handleOpen();
    setSortingEle(event.currentTarget);
  }
  const { fid } = useParams()
  const auth = useAuth();
  const { setModal } = useContext(AppStoreContext);

  const goToProgress = () => {
    if (auth.isAuthenticated) {
      window.location.href = "/my-progress"
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }

  const goToAssesment = () => {
    if (auth.isAuthenticated) {
      window.location.href = "/understanding-you"
    } else {
      setModal({ modalId: 1, data: { redirect: 'tools' } });
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const metaData = {
      title: "PAM | Tools",
      url: window.location.href,
    }
    setMeta({ ...meta, ...metaData });

    return () => {
      setMeta(defaultMetaData());
    };
  }, [])


  const closeSortingPopup = () => {
    document.body.classList.remove("filter-dropdown");
    handleClose();
    setSortingEle(null);
    let selectedFilter = [];
    let renderingType0 = receivedResponse.filter(
      (ele) => ele.filterRenderingType === 0 && filterSelection.includes(ele.filterEnumKey.toString())
    );
    if (renderingType0.length !== 0) {
      selectedFilter = selectedFilter.concat(renderingType0);
    }
    let renderingType1 = receivedResponse.filter((ele) => ele.filterRenderingType === 1);
    let tempData = renderingType1[0].options.filter((data) => filterSelection.includes(data.id));
    if (tempData.length !== 0) {
      selectedFilter.push({
        filterRenderingType: 1,
        filterEnumKey: 5,
        title: 'Tags',
        options: tempData,
      });
    }
    setFilterPayload([selectedFilter]);
    setpage(1);
  };

  console.log("filterPayload", filterPayload)
  const sortData = (event) => {
    setpage(1);
    setSortBy(event.target.value);
  };
  const [specializedToolsData, setspecializedToolsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      getListOfTools(sortBy, filterPayload, page)
        .then((resp) => {
          if (fid) {
            let arr = []
            switch (fid) {
              case "f1":
                arr = ["compassion-and-loving-kindness", "take-a-mental-vacation", "fill-your-bucket", "flexible-thinking", "exiting-the-thinking-loop", "fill-your-well"]
                resp.list = resp.list.filter((flt) => { return arr.indexOf(flt.slug) > -1 })
                break;
              case "f2":
                arr = ["compassion-and-loving-kindness", "ground-yourself", "take-a-moment-to-breathe", "flexible-thinking", "exiting-the-thinking-loop", "find-a-solution"]
                resp.list = resp.list.filter((flt) => { return arr.indexOf(flt.slug) > -1 })
                break;
              case "f3":
                arr = ["fill-your-bucket", "shift-positive", "take-a-moment-to-breathe", "flexible-thinking", "fill-your-well", "stop-second-guessing-yourself"]
                resp.list = resp.list.filter((flt) => { return arr.indexOf(flt.slug) > -1 })
                break;
              case "f4":
                arr = ["take-a-moment-to-breathe", "take-a-mental-vacation", "ground-yourself", "flexible-thinking", "exiting-the-thinking-loop", "find-a-solution"]
                resp.list = resp.list.filter((flt) => { return arr.indexOf(flt.slug) > -1 })
                break;
              case "f5":
                arr = ["compassion-and-loving-kindness", "take-a-moment-to-breathe", "ground-yourself", "flexible-thinking", "exiting-the-thinking-loop", "find-a-solution"]
                resp.list = resp.list.filter((flt) => { return arr.indexOf(flt.slug) > -1 })
                break;
              default:
                break;
            }
          }
          if (page === 1) {
            setMaxPage(Math.round(resp.count / 3));
            setspecializedToolsData(resp.list);
          } else {
            setspecializedToolsData(specializedToolsData.concat(resp.list));
          }
        })
        .then(() => {
          if (page > maxPage) {
            setloadMoreOption(true);
          } else {
            setloadMoreOption(false);
          }
        });
    }
    fetchData().then(() =>
      getToolsFilter().then((filters) => {
        setreceivedResponse(filters);
        let renderingType0 = [];
        let renderingType1 = [];
        let tempData = filters.filter((ele) => ele.filterRenderingType === 0);
        renderingType0 = tempData.map((ele) => ({
          id: ele.filterEnumKey.toString(),
          label: ele.title,
        }));
        tempData = filters.filter((ele) => ele.filterRenderingType === 1);
        renderingType1 = tempData[0].options.map((ele) => ({
          id: ele.id,
          label: ele.name,
        }));
        setFILTER_OPTIONS(renderingType0.concat(renderingType1));
      })
    );
  }, [page, filterPayload, sortBy, maxPage]);


  // console.log("specializedToolsData", specializedToolsData, specializedToolsData && specializedToolsData === null && specializedToolsData.length <= shownTools);
  return (
    <ToolsBody>
      <div className="container">
        <ToolsAndTechniquesStaticComponent goToAssesment={() => { goToAssesment() }} goToProgress={() => { goToProgress() }} />
        <FilterControlWrapper>
          <ControlWrappers>
            <FilterControlIcon aria-label="add" onClick={openSortingPopup}>
              <img src={filter_icon} alt="filter" />
            </FilterControlIcon>
            <CustomSelect className="filter_select" id="custome-filter" options={sortingOptions} placeholder="Sort by" onChange={sortData} />
            <FilterControlPopover
              open={Boolean(sortingEle)}
              anchorEl={sortingEle}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={closeSortingPopup}
            >
              <Box>
                {FILTER_OPTIONS
                  ? FILTER_OPTIONS.map((i) => {
                    if (filterSelection.includes(i.id)) {
                      return (
                        <CheckBox
                          id={i.id}
                          checked={true}
                          label={<span className="sortingLabel">{i.label}</span>}
                          onChange={(e) => {
                            if (e.target.checked) {
                              console.log("sort if", e.target.name)
                              setShownTools(3)
                              setfilterSelection(() => [...filterSelection, e.target.id]);
                            } else {
                              console.log("sort else", e.target.name)
                              setShownTools(3)
                              setfilterSelection(filterSelection.filter((data) => data !== e.target.id));
                            }
                          }}
                        />
                      );
                    } else {
                      return (
                        <CheckBox
                          id={i.id}
                          checked={false}
                          label={<span className="sortingLabel">{i.label}</span>}
                          onChange={(e) =>
                            e.target.checked
                              ? setfilterSelection(() => [...filterSelection, e.target.id])
                              : setfilterSelection(filterSelection.filter((data) => data !== e.target.id))
                          }
                        />
                      );
                    }
                  })
                  : []}
              </Box>
            </FilterControlPopover>
          </ControlWrappers>
        </FilterControlWrapper>
        {specializedToolsData === null &&
          <Box className="no-Tool-found">
            <span>Loading...</span>
          </Box>
        }
        {specializedToolsData && specializedToolsData?.length > 0 && (
          <ToolContainer>
            {specializedToolsData
              ? specializedToolsData.map((ele, i) => (
                <>
                  {i < shownTools && <div key={ele.id} className="card-center">
                    <ToolsCard cardData={{ tool: ele }} id={ele.id} className="without-carousel-card" />
                  </div>}
                </>
              ))
              : null}
          </ToolContainer>
        )}
        {specializedToolsData && specializedToolsData?.length === 0 && (
          <Box className="no-Tool-found">
            <span>No tools found</span>
          </Box>
        )}

        <ToolsContainerSection>
          <ToolsBottomButtonContainer>
            <div>
              {specializedToolsData === null || specializedToolsData.length <= shownTools ? null : (
                <>
                  <CustomButton color="#0099ba" disabled={loadMoreOption} onClick={() => { setShownTools(shownTools + 3) }}>
                    Load more...
                  </CustomButton>
                </>
              )}
            </div>
          </ToolsBottomButtonContainer>
        </ToolsContainerSection>
      </div>
    </ToolsBody>
  );
};

ToolsAndTechniquesLanding.propTypes = {};

export default ToolsAndTechniquesLanding;
