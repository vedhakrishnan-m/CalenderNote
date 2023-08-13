import { Box, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setdragstore,
  setWorkspaceInput,
  setstoreindex,
} from "./demo/personSlice";
import { useEffect, useRef, useState } from "react";
import InputIcons from "./inputIcons";
import { WorkspaceInput } from "./workspace";
export default function MainDrag() {
  const list = useSelector((state) => state.person.list);
  const dragstore = useSelector((state) => state.person.dragstore);
  const storeindex = useSelector((state) => state.person.storeindex);
  const workspaceInput = useSelector((state) => state.person.workspaceInput);
  const dispatch = useDispatch();

  const styles = {
    backgroundColor: "gray",
    display: "flex",
    padding: "5px",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: "2px",
  };

  const dragStart = (e, position) => {
    dispatch(setstoreindex(position));
  };

  const drop = (e) => {
    const copyListItems = [...list];

    const dragItemContent = copyListItems[storeindex];

    dispatch(setWorkspaceInput({ name: dragItemContent }));
    dispatch(setstoreindex(null));
  };

  return (
    <div className="App">
      {/* {list}
   <button onClick={()=>dispatch(setList("picker"))}>on</button> */}
      <Box
        sx={{
          backgroundColor: "orange",
          height: "100vh",
          minHeight: "400px",
          margin: "5px auto",
          padding: "2px",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            sx={{ ...styles, height: "10vh", alignItems: "center" }}
            item
            xs={12}
          >
            Drag Inn
          </Grid>
          <Grid item xs={3}>
            <div style={{ ...styles, height: "60vh", backgroundColor: "red" }}>
              <InputIcons />
            </div>
          </Grid>
          <Grid item xs>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => drop()}
              style={{
                ...styles,
                height: "50vh",
                backgroundColor: "red",

                alignItems: "center",
              }}
            >
              <WorkspaceInput />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div
              style={{
                ...styles,
                wordWrap: "break-word",
                height: "60vh",
                backgroundColor: "red",
              }}
              //   onDragOver={() => {
              //     dispatch(setdragstore("entered"));
              //   }}
              //   onDragLeave={() => dispatch(setdragstore("leaved"))}
            >
              {JSON.stringify(workspaceInput)}
              {dragstore}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
