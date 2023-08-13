import { useContext, useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import authContext from "../component/context";

import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import BasicDatePicker from "./calenderdatepicker";

export function CalenderInput() {
  const { datevalue, mon, monArr, fYear, setMon, year, setYear } =
    useContext(authContext);

  function moveRou() {
    if (mon != null && year != null) {
      navigate(`/CalenderNote/${mon}/${year}`, {
        replace: true,
      });
    }
  }
  let navigate = useNavigate();
  useEffect(() => {
    moveRou();
  }, [mon, year]);
  useEffect(() => {
    setMon(monArr[new Date(datevalue).getMonth()]);
    setYear(new Date(datevalue).getFullYear());
  }, [datevalue]);

  return (
    <div>
      <Stack
        sx={{ display: "flex", flexBasis: "25%", height: "10vh" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <BasicDatePicker identy="start" />
        <BasicDatePicker identy="end" />

        <Typography
          sx={{
            flexGrow: "2",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          variant="h3"
          color="red"
        >
          DAY FOR YOU
        </Typography>
      </Stack>
    </div>
  );
}
