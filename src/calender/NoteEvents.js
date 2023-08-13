import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState, useContext, useEffect } from "react";
import authContext from "../component/context";
export function NoteEvents({
  idforward,
  month,
  year,
  setToDisplay,
  createArr,
  empobj,
  updateEvt,
  setUpdateEvt,
}) {
  const { setCentral } = useContext(authContext);
  const styles = {
    position: "fixed",
    top: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#0000006b",
    boxSizing: "border-box",
  };

  function todo() {
    createArr[idforward] = updateEvt;
    empobj[`${month}${year}`] = createArr;
    setCentral({ ...empobj });
    setToDisplay(false);
    setUpdateEvt({
      event: "",
      location: "",
      src: "",
    });
  }

  return (
    <div className="NoteEvents" style={styles}>
      <Paper
        sx={{
          width: "60vw",
          justifyContent: "space-between",
          height: "50%",
          maxWidth: "20%",
          margin: "5% auto",
          padding: "3%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ float: "left", width: "100%", fontVariant: "small-caps" }}
          variant="h5"
          color="#900c3e"
        >
          Memories
          <CloseIcon
            onClick={() => {
              setToDisplay(false);
              setUpdateEvt({
                event: "",
                location: "",
                src: "",
              });
            }}
            sx={{ color: "gray", float: "right" }}
          />
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "black", mr: 1, my: 0.5 }} />
          <TextField
            onChange={(e) =>
              setUpdateEvt({ ...updateEvt, event: e.target.value })
            }
            id="input-with-sx"
            label="Event"
            variant="standard"
            value={updateEvt.event}
            inputProps={{ maxLength: 5 }}
            required
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <FmdGoodIcon sx={{ color: "success.active", mr: 1, my: 0.5 }} />
          <TextField
            onChange={(e) =>
              setUpdateEvt({ ...updateEvt, location: e.target.value })
            }
            id="input-with-sx"
            label="Location"
            variant="standard"
            value={updateEvt.location}
            inputProps={{ maxLength: 5 }}
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <InsertLinkIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            onChange={(e) =>
              setUpdateEvt({ ...updateEvt, src: e.target.value })
            }
            id="input-with-sx"
            label="Memories src"
            variant="standard"
            value={updateEvt.src}
            required
          />
        </Box>

        <Button
          disabled={Object.values(updateEvt).includes("")}
          variant="contained"
          endIcon={
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          }
          onClick={todo}
        >
          post
        </Button>
      </Paper>
    </div>
  );
}
