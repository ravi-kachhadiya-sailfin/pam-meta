import { TextField } from '@material-ui/core';
import { useState } from 'react';
import ICalendarLink from "react-icalendar-link";
import CustomButtom from "../button"
import pop_close from "../../shared/assets/images/popup_close.svg";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
// import { IconButton, InputAdornment } from "@material-ui/core";
// import EventIcon from '@material-ui/icons/Event';
import { LoginLabel } from 'app/features/login/LoginPage.styles'
import moment from 'moment';
import TAMAlert from "app/tamComponents/alert/TAMAlert";

const Reminder = (props) => {
  const [errorOpen, setErrorOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [event, setEvent] = useState({
    title: props.title,
    description: props.discription,
    startTime: new Date().toISOString(),
    endTime: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
    location: props.location
  })

  const changeDate = (type, val) => {
    let dateStr = new Date(val).toISOString()
    console.log(dateStr)
    if (type === "from") {
      setEvent({ ...event, "startTime": dateStr })
    } else {
      setEvent({ ...event, "endTime": dateStr })
    }
    console.log("event", event)

  }

  const addToCalendar = () => {
    console.log("momenet", event.startTime, event.endTime, moment(event.startTime).isBefore(event.endTime))
    if (moment(event.startTime).isBefore(event.endTime)) {
      if (props.callBack) {
        setTimeout(() => { props.callBack() }, 1000)
      }
      else {
        setTimeout(() => { props.closePopup(); }, 1000)
      }
    }
    else {
      setErrorOpen(true)
      setErrorMsg(`"To" date and time should not be before "From" date and time.`)
      setTimeout(() => {
        setErrorOpen(false)
        setErrorMsg("")
      }, 5000)
    }
  }

  console.log(event)
  return (
    <div className={`${props.className} reminder_main popup_card_reminder`}>
      {/* <i onClick={() => { props.closePopup() }} style={{ color: '#0099BA', float: "right", fontSize: 25, marginTop: -20, marginRight: 10, cursor: "pointer" }} class="fa fa-times" aria-hidden="true"></i> */}
      <img onClick={() => { props.callBack() }} src={pop_close} alt="pop_close" className="reminder_close" />
      <h2 className="remainder_maion_text">Set a Reminder</h2>
      <h5 className="reminder-text">Select the date and time you'd like to do this activity. A .ics file will download. Open it, add any details you need to, and save to integrate it with your calendar.</h5>
      <div className="reminder-text-field-container">
        <LoginLabel htmlFor="registrationName">
          Title
        </LoginLabel>
        <TextField
          disabled
          fullWidth
          value={event.title}
          InputLabelProps={{ shrink: true }}
          InputProps={{ disableUnderline: true }}
        />
      </div>
      <div className="reminder-text-field-container">
        <LoginLabel htmlFor="registrationName">From</LoginLabel>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{ disableUnderline: true }}
            className="date-field"
            onChange={(e) => { changeDate("from", e) }}
            value={event.startTime}
            hideTabs={true}
            format="LLL d, yyyy h:mm aa"
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className="reminder-text-field-container">
        <LoginLabel htmlFor="registrationName">To</LoginLabel>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{ disableUnderline: true }}
            className="date-feild"
            onChange={(e) => { changeDate("to", e) }}
            value={event.endTime}
            minDate={event.startTime}
            minDateMessage={<></>}
            hideTabs={true}
            format="LLL d, yyyy h:mm aa"
          />
        </MuiPickersUtilsProvider>
      </div>
      {/* <TextField
        label="From"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => { changeDate("from", e.target.value) }}
        style={{ width: "100%", fontSize: 25, marginTop: 10 }}
        variant="outlined"
      />
      <TextField
        label="To"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => { changeDate("to", e.target.value) }}
        style={{ width: "100%", fontSize: 25, marginTop: 10 }}
        variant="outlined"
      /> */}
      {
        errorOpen && <TAMAlert
          kind={"error"}
          message={errorMsg}
        />
      }
      <ICalendarLink event={event} >
        <CustomButtom onClick={() => {
          addToCalendar()
        }} color={"#F19840"} className="reminder_addcard">
          Add to Calendar
        </CustomButtom>
      </ICalendarLink>
      {/* <TextField
        label="Time"
        type="time"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ width: "100%", fontSize: 25, marginTop: 10 }}
        variant="outlined"
      /> */}
      {/* <Select
        native
        value={10}
        onChange={() => { }}
        label="Age"
        inputProps={{
          name: 'age',
          id: 'outlined-age-native-simple',
        }}
        style={{ width: "100%", marginTop: 10 }}
        variant="outlined"
      >
        <option value={"once"}>Once</option>
        <option value={"daily"}>Daily</option>
        <option value={"weekly"}>Weekly</option>
        <option value={"monthly"}>Monthly</option>
      </Select> */}
    </div >

  );
};

export default Reminder;
