import { Grid } from '@material-ui/core';
import { SelectWrapper, SelectLabel, SubLabel, MenuItemWrapper, PlaceHolderWrapper } from './style';
// import select_arrow from "../../shared/assets/images/select_arrow.svg"
import { handleClose, handleOpen } from 'app/shared/Utils/index';


// import {
//   RegistrationSelect,
// } from 'app/features/login/LoginPage.styles';
// import { FontDownload } from '@material-ui/icons';

const PlaceHolder = ({ value, options, placeholder }) => {
  // console.log("Value", value)
  const selected = options.find((i) => i.value === value);
  let defaultText = placeholder;

  if (selected) defaultText = selected.text;

  return <PlaceHolderWrapper className={value && "placeholder"}>{defaultText}</PlaceHolderWrapper>;
};

const CustomSelect = ({ id, label, subLabel, options, placeholder, ...rest }) => {
  // console.log(rest, options);
  // const icon = {
  //   borderRadius: 3,
  //   width: 16,
  //   height: 16,
  //   boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  //   backgroundColor: '#f5f8fa',
  //   backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  //   '$root.Mui-focusVisible &': {
  //     outline: '2px auto rgba(19,124,189,.6)',
  //     outlineOffset: 2,
  //   },
  //   'input:hover ~ &': {
  //     backgroundColor: '#ebf1f5',
  //   },
  //   'input:disabled ~ &': {
  //     boxShadow: 'none',
  //     background: 'rgba(206,217,224,.5)',
  //   },
  // } 

  return (
    <>
      {label && (
        <SelectLabel htmlFor={id}>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid className="c-db" item>
              {label}
            </Grid>
            {subLabel && (
              <Grid item>
                <SubLabel>&nbsp;{subLabel}</SubLabel>
              </Grid>
            )}
          </Grid>
        </SelectLabel>
      )}
      {/* <RegistrationSelect
        id={id}
        fullWidth={true}
        disableUnderline={true}
        renderValue={(value) => <PlaceHolder value={value} options={options} placeholder={placeholder} />}
        displayEmpty
        {...rest}
      >
        {options.map((data) => (
          <MenuItem
            key={data.value}
            value={data.value}
            style={{ "fontSize": "16px" }}
          >
            {data.text}
          </MenuItem>
        ))}
      </RegistrationSelect> */}
      <SelectWrapper
        id={id}
        disableUnderline={true}
        fullWidth={true}
        // IconComponent={(props) => (
        //   <img src={select_arrow} alt="select_arrow" />
        // )}
        defaultValue={rest.value}
        onOpen={handleOpen}
        onClose={handleClose}
        renderValue={(value) => <PlaceHolder value={value} options={options} placeholder={placeholder} />}
        displayEmpty
        {...rest}
      >
        {options.map((i) => (
          <MenuItemWrapper className="custom-select-option" value={i.value} key={i.value}>
            {i.text}
          </MenuItemWrapper>
        ))}
      </SelectWrapper>
    </>
  );
};

export default CustomSelect;
