import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import style from "./style.module.css";
const Login = ({ handelClose, handelOpen, open }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    // userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handelSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Dialog sx={{ m: 5, p: 5 }} maxWidth="lg" open={open}>
      <div className={style.wrapper}>
        <DialogTitle>
          <h3>Login</h3>
          <CloseIcon
            onClick={handelClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          />
        </DialogTitle>
        <DialogContent display="flex" justify="center">
          <TextField
            required
            id="standard-basic"
            label="User Name"
            fullWidth
            variant="standard"
            // ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <TextField
            required
            value={pwd}
            id="standard-basic"
            label="Password"
            fullWidth
            variant="standard"
            sx={{ marginBottom: 3 }}
            onChange={(e) => setPwd(e.target.value)}
          />
          {/* <p ref={errMsg}>{errMsg}</p> */}
          <Button
            variant="contained"
            fullWidth
            color="success"
            sx={{ textAlign: "center" }}
          >
            Success
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default Login;
