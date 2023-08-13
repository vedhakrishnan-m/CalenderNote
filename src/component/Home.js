import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "./context";
import React, { useContext } from "react";

export function Home({ setIsAdmin, setIsLoggedIn }) {
  const auth = useContext(authContext);

  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userpwd, setUserpwd] = useState("");

  var styles = {
    minHeight: "300px",
    minWidth: "300px",
    margin: "4px auto",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    padding: "1%",
    transition: ".5s",
    alignItems: "center",

    opacity: [0.9, 0.8, 0.7],
    "&:hover": {
      backgroundColor: "white.dark",
      opacity: [1, 1, 1],
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    },
  };

  function checkUser() {
    if (auth.admin.name === username) {
      if (auth.admin.pwd === userpwd) {
        navigate("/main", { replace: true });
        setIsAdmin(false);
        setIsLoggedIn(true);
      }
    } else if (auth.user.name === username) {
      if (auth.user.pwd === userpwd) {
        navigate("/main", { replace: true });
        setIsAdmin(true);
        setIsLoggedIn(true);
      }
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="home">
      <Box sx={styles}>
        <h2>Sign In</h2>
        <TextField
          id="outlined-basic"
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={(e) => setUserpwd(e.target.value)}
          label="Password"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={() => checkUser()}
          color="success"
          sx={{ height: 50, width: 100 }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
}
