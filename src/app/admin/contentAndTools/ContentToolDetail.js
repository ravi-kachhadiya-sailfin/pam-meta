
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../containers/TheHeader';
import Footer from 'app/tamComponents/footer/Footer';
import { getToolsDetail, getTags, updateTool, updateImage } from '../services/ContentToolServices';
import Switch from 'app/tamComponents/ISOSwitch';

import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
// import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'app/Routes';
import { Chip, Input, Select, MenuItem } from '@material-ui/core';
import { handleClose, handleOpen } from 'app/shared/Utils/index';


import {
  AdminContainer,
  NormalCard,
  CardHeader,
  PaginationContainer,
  FormFeildname,
  Title,
  FeildContainer,
  CustomFileInput,
  FtTextArea
  // ChartAndCounterContainer
} from 'app/admin/containers/DashBoard.style';
import CustomSelect from "app/tamComponents/select";

const ContentAndTools = () => {
  const { tid } = useParams()
  const [toolDetail, setToolDetail] = useState({})
  const [thumbImage, setThumbImage] = useState([])
  const [largeImage, setLargeImage] = useState([])
  const [allTags, setAlltags] = useState([])
  const [selectedBackendTags, setSelectedBackendTags] = useState([])
  const [selectedFrontTags, setSelectedFrontTags] = useState([])
  const history = useHistory();

  const toolTypeOption = [
    { value: 1, text: "Quick Tool" },
    { value: 2, text: "Specialized Tools" },
  ];


  const scrollTop = () => {
    var topScroll = 0;
    document.body.scrollTop = topScroll;
    document.documentElement.scrollTop = topScroll;
  }


  const Button = styled(MuiButton)(spacing);


  useEffect(() => {
    getToolsDetail(tid).then((data) => {
      setToolDetail(data.data.details);
      setSelectedBackendTags(data.data.details.backendTags.map((tag) => { return tag = tag.tagId }));
      setSelectedFrontTags(data.data.details.uiTags.map((tag) => { return tag = tag.tagId }));
      setThumbImage(data.data.details.thumbnailImage)
      setLargeImage(data.data.details.largeImage);
    })
    getTags().then((data) => {
      if (data.statusCode === 200) {
        setAlltags(data.data.tags)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function changeData(fild, data) {
    let td = toolDetail
    td[fild] = data
    setToolDetail({ ...toolDetail, td })
  }

  function updtaeToolDetail() {
    let body = toolDetail
    body.toolId = body.id
    body.uiTags = selectedFrontTags
    body.backendTags = selectedBackendTags
    updateTool(body).then((res) => {
      if (res.statusCode === 200) {
        alert(res.data.success.message)
      }
    })

  }

  function uploadImage(type, e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file)
    formData.append('id', tid)
    formData.append('type', type)
    updateImage(formData).then((res) => {
      alert(res.data.message)
      getToolsDetail(tid).then((data) => {
        setThumbImage(data.data.details.thumbnailImage)
        setLargeImage(data.data.details.largeImage);
      })
    })
  }

  console.log("option", allTags, selectedFrontTags, selectedBackendTags);
  return (
    <AdminContainer>
      <Header />
      <div className="continer page-container">

        <NormalCard>
          <CardHeader>
            <div className="user-details-header">
              <div className="user-details-header">
                {/* <MenuIcon className="hamburger-icon" /> */}
                <Title className="font-weight-bold mb-0 p-0 pl-10 ml-25">UPDATE TOOLS</Title>
              </div>
            </div>
          </CardHeader>

          <form enctype="multipart/form-data" className="p-50">
            <FeildContainer>
              <FormFeildname>Title</FormFeildname>
              <input className="normal-input-feild" type="text" name="title" onChange={(e) => { changeData(e.target.name, e.target.value) }} value={toolDetail.title} placeholder="title" />
              {/* <a style={{ paddingLeft: "10px" }} href={"/ContentToolDetail/" + toolDetail.id}>Update</a> */}
            </FeildContainer>

            {!!toolDetail && toolDetail !== {} && <FeildContainer>
              <FormFeildname>Status</FormFeildname>
              <Switch
                checked={toolDetail.status === true ? true : false}
                onChange={(e) => { changeData("status", !toolDetail.status) }}
                color="primary"
                name="status"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </FeildContainer>}
            {/* <Grid item lg={6} md={6} sm={6} xs={6} style={{ paddingRight: "40px" }}>
              <input style={{ borderWidth: "2px", width: "200px", height: "40px", borderColor: "#00000026", fontSize: "medium" }} type="text" name="title" onInputChange={() => { onInputChange() }} value={toolDetail.title} placeholder="title" />
              <a style={{ paddingLeft: "10px" }} href={"/ContentToolDetail/" + toolDetail.id}>Update</a>
            </Grid> */}

            <FeildContainer>
              <FormFeildname>Tool Type</FormFeildname>
              <CustomSelect
                fullWidth
                id="type"
                name="type"
                className="normal-input-feild"
                placeholder="Select tool type"
                // defaultValue={toolDetail.type}
                value={toolDetail.type}
                onChange={(e) => { changeData("type", e.target.value) }}
                // error={formik.touched.race && Boolean(formik.errors.race)}
                options={toolTypeOption}
              />
              {/* <input className="normal-input-feild" type="text" name="type" placeholder="Tool type" value={type[toolDetail.type]} onInputChange={() => { onInputChange() }} /> */}
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Video URL</FormFeildname>
              <input className="normal-input-feild" type="text" name="videoLink" value={!!toolDetail.videoLink ? (toolDetail.videoLink !== "null" ? toolDetail.videoLink : "") : ""} onChange={(e) => { changeData(e.target.name, e.target.value) }} placeholder="URL" />
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Description</FormFeildname>
              <FtTextArea className="normal-input-feild" name="summary" rows="7" placeholder="Description" value={toolDetail.summary} onChange={(e) => { changeData(e.target.name, e.target.value) }}></FtTextArea>
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Benefit</FormFeildname>
              <FtTextArea className="normal-input-feild" name="benefit" rows="7" placeholder="Benefit" value={toolDetail.benefit} onChange={(e) => { changeData(e.target.name, e.target.value) }}></FtTextArea>
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Duration</FormFeildname>
              <input className="normal-input-feild" type="text" name="duration" value={toolDetail.duration} placeholder="title" onChange={(e) => { changeData(e.target.name, e.target.value) }} />
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Frontend Tags</FormFeildname>

              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                className="normal-input-feild multi-select-custom"
                multiple
                value={selectedFrontTags}
                onOpen={handleOpen}
                onClose={handleClose}
                onChange={(e) => {
                  // console.log("value", e.target.value);
                  // console.log("selectedFrontTags:", selectedFrontTags);

                  setSelectedFrontTags([...e.target.value])
                }}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className="select-chips">
                    {selected.map((value) => {
                      const tag = allTags.find((tag) => tag.id === value)
                      // console.log("tag:", tag);
                      return (
                        <Chip key={value} label={tag?.name} />
                      )
                    })}
                  </div>
                )}
              // MenuProps={MenuProps}
              >
                {allTags.map((tag) => (
                  <MenuItem key={tag.id} value={tag.id} className="chips-menu">
                    {tag.name}
                  </MenuItem>
                ))}
              </Select>

              {/* <select
                multiple
                onChange={(e) => {
                  let selectedIds = selectedFrontTags
                  let tagId = e.target.value
                  let tagIndex = selectedIds.indexOf(tagId)
                  if (tagIndex > -1) {
                    selectedIds = selectedIds.splice(tagIndex, 1)
                  } else {
                    selectedIds.push(tagId)
                  }
                  setSelectedFrontTags([...selectedIds])
                }}
                value={selectedFrontTags}
                name="frontendtags"
                className="normal-input-feild" >

                {allTags && allTags.map((tag) => {
                  return (
                    <option value={tag.id}>{tag.name}</option>
                  )
                })}

              </select> */}
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Backend Tags</FormFeildname>

              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                className="normal-input-feild multi-select-custom"
                multiple
                value={selectedBackendTags}
                onOpen={handleOpen}
                onClose={handleClose}
                onChange={(e) => {
                  // console.log("value", e.target.value);
                  // console.log("selectedFrontTags:", selectedFrontTags);

                  setSelectedBackendTags([...e.target.value])
                }}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className="select-chips">
                    {selected.map((value) => {
                      const tag = allTags.find((tag) => tag.id === value)
                      // console.log("tag:", tag);
                      return (
                        <Chip key={value} label={tag?.name} />
                      )
                    })}
                  </div>
                )}
              // MenuProps={MenuProps}
              >
                {allTags.map((tag) => (
                  <MenuItem key={tag.id} value={tag.id} className="chips-menu">
                    {tag.name}
                  </MenuItem>
                ))}
              </Select>


              {/* <select multiple onChange={(e) => {
                let selectedIds = selectedBackendTags
                let tagId = e.target.value
                let tagIndex = selectedIds.indexOf(tagId)
                if (tagIndex > -1) {
                  selectedIds = selectedIds.splice(tagIndex, 1)
                } else {
                  selectedIds.push(tagId)
                }
                setSelectedBackendTags([...selectedIds])
              }} value={selectedBackendTags} name="frontendtags" className="normal-input-feild" >
                {allTags && allTags.map((tag) => {
                  return (
                    <option value={tag.id}>{tag.name}</option>
                  )
                })}
              </select> */}
            </FeildContainer>

            <FeildContainer className="flex">
              <div className="thumbnailImage">
                {/* <img src={cardImage} alt="thumbnail" /> */}
                <img src={thumbImage} alt="thumbnail" />
              </div>
              <div className="largeImage">
                {/* <img src={cardImage} className="" alt="thumbnail" /> */}
                <img src={largeImage} alt="largeImage" />
              </div>

              {/* <img src={largeImage} alt="thumbnail"/> */}
            </FeildContainer>

            <FeildContainer>
              <CustomFileInput>
                <div className="flex">
                  <label className="button" for="thumimage">Choose File</label>
                  <label className="file-name" for="thumimage">Thumbnail Image</label>
                  <input onChange={(e) => {
                    uploadImage("thumbnail", e)
                  }} className="normal-input-feild" type="file" name="thumimage" id="thumimage" />
                </div>
              </CustomFileInput>

              <CustomFileInput className="ml-35">
                <div className="flex">
                  <label className="button" for="largeimage">Choose File</label>
                  <label className="file-name" for="largeimage">Tool Image</label>
                  <input onChange={(e) => {
                    uploadImage("large", e)
                  }} className="normal-input-feild" type="file" name="largeimage" id="largeimage" />
                </div>
              </CustomFileInput>


              {/* <input className="normal-input-feild ml-35" type="file" name="largeimage" /> */}
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Created Date</FormFeildname>
              <FormFeildname>{new Date(toolDetail.createdAt).toLocaleString()}</FormFeildname>
              {/* <input type="text" className="normal-input-feild" name="createdAt" value={toolDetail.createdAt} onInputChange={() => { onInputChange() }} placeholder="created at" /> */}
            </FeildContainer>

            {/* <FeildContainer>
              <FormFeildname>Expiry Date</FormFeildname>
              <input type="text" className="normal-input-feild" name="ExpiredAt" value={toolDetail.expireAt} onInputChange={() => { onInputChange() }} placeholder="Expiry Date" />
            </FeildContainer>

            <FeildContainer>
              <FormFeildname>Modified By</FormFeildname>
              <input type="text" className="normal-input-feild" name="updatedBy" value={toolDetail.updatedBy} onInputChange={() => { onInputChange() }} placeholder="Modified by" />
            </FeildContainer> */}

            {!!toolDetail.updatedAt && <FeildContainer>
              <FormFeildname>Last Modified</FormFeildname>
              <FormFeildname>{new Date(toolDetail.updatedAt).toLocaleString()}</FormFeildname>
            </FeildContainer>}
            <FeildContainer style={{ width: "100%" }}>
              <Button onClick={() => { updtaeToolDetail() }} style={{ float: "right" }} className="btn data-change-btn shadow-display">Update</Button>
            </FeildContainer>
          </form>
        </NormalCard>
        <PaginationContainer>
          <div></div>
          <Button onClick={() => { history.push(ROUTES.ContentAndTools); scrollTop(); }} className="btn data-change-btn shadow-display">Back</Button>
        </PaginationContainer>
      </div>
      <Footer adminClassName="admin-footer" />
    </AdminContainer >

  );
}
export default ContentAndTools;