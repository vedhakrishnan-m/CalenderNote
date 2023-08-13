import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import authContext from "../component/context";

export default function BasicDatePicker({ identy }) {
  const { setFYear, fYear, datevalue, setDatevalue } =
    React.useContext(authContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disablePast={true}
        label={identy == "start" ? "START DATE" : "END DATE"}
        value={identy == "start" ? datevalue : fYear}
        onChange={(newValue) => {
          identy == "start" ? setDatevalue(newValue) : setFYear(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
