import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import style from "./style.module.css";
const Login = ({ handelClose, handelRegister, open }) => {
  const userRef = useRef();
  const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [pwd, setPwd] = useState("");
  const [formData, setFormData] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    // userRef.current.focus();
  }, []);
  const handelUserName = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };
  const handelPassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://dummyjson.com/auth/login",
      { ...formData },

      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(formData);
    console.log(res);
    handelRegister(true, res.data);
    handelClose();

    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...formData }),
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
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
            onChange={handelUserName}
            value={formData.username}
          />
          <TextField
            required
            value={formData.password}
            id="standard-basic"
            label="Password"
            fullWidth
            variant="standard"
            sx={{ marginBottom: 3 }}
            onChange={handelPassword}
          />
          {/* <p ref={errMsg}>{errMsg}</p> */}
          <Button
            variant="contained"
            fullWidth
            color="success"
            sx={{ textAlign: "center" }}
            onClick={handelSubmit}
          >
            Success
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default Login;
