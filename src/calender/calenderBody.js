import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ActionAreaCard from "./card";
import "./calender.css";
import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import authContext from "../component/context";
import { Check } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2vw",
  fontFamily: "serif",
  fontWeight: "bolder",
  height: "15vh",
  width: "10vw",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.32)",
  "&:hover": {
    backgroundColor: " white",
    transform: "rotate(10deg)",
    transition: "1s",
    color: "rgba(0, 0, 0, 0.32)",
  },
}));

export default function CalenderBody({
  updateCreateArr,
  setUpdateEvt,
  setIdforward,
  setToDisplay,
  createArr,
  month,
}) {
  const dayArr = "SUN MON TUE WED THURS FRI SAT".split(" ");
  const { fYear, datevalue, newdate, check } = useContext(authContext);
  function doFun(id) {
    setIdforward(id);
    setToDisplay(true);
    createArr[id] != true && setUpdateEvt(createArr[id]);
  }

  return (
    <Box sx={{ width: "90%", margin: "4px auto" }}>
      <Grid
        sx={{ gap: "2px" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
      >
        {dayArr.map((a) => (
          <Grid className="datecard1" xs={1.66}>
            {a}
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        className="datecard"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
      >
        {updateCreateArr.map((a, i) => (
          <Grid key={i} item xs={1.7}></Grid>
        ))}
        {createArr.map((data, i) => {
          return (
            <Grid key={i + 1} item xs={1.7}>
              {createArr[i] === true ? (
                <Button>
                  <Item onClick={() => doFun(i)}>{i + 1}</Item>{" "}
                </Button>
              ) : (
                <ActionAreaCard
                  i={i}
                  doFun={doFun}
                  src={data.src}
                  events={data.event}
                  location={data.location}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
