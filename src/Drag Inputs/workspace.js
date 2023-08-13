import { Box } from "@mui/material";
import React, { useState } from "react";

import Draggable from "react-draggable";
import { margin } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { setdragstore } from "./demo/personSlice";

export function WorkspaceInput() {
  const dispatch = useDispatch();
  const workspaceInput = useSelector((state) => state.person.workspaceInput);
  const dragstore = useSelector((state) => state.person.dragstore);

  function trackPos(data) {}
  return (
    <Box sx={{ position: "relative" }}>
      {workspaceInput.map((a) => (
        <Draggable
          disabled={dragstore}
          onDrag={(e, data) => {
            console.log(data);
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexWrap: "wrap",
              height: "100%",
              marginBottom: "20px",
            }}
          >
            <input type={a.name} />
          </div>
        </Draggable>
      ))}
    </Box>
  );
}
