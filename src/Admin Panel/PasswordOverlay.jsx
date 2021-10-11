import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import styles from "./CombinedAdminPanel.module.css";
import { useDispatch } from "react-redux";
import { passwordActions } from "../Store/Slices/AdminPasswordControl";
const PasswordOverlay = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {};
  const login = (e) => {
    e.preventDefault();
    if (Ninput === "Admin" && Pinput === "sanBooks") {
      dispatch(passwordActions.toggle());
    } else alert("Password is wrong");
    setPInput("");
    setPInput("");
  };
  const Fname = (event) => {
    setNInput(event.target.value);
  };
  const Fpassword = (event) => {
    setPInput(event.target.value);
  };
  const [Ninput, setNInput] = React.useState("");
  const [Pinput, setPInput] = React.useState("");
  return (
    <div style={{ minHeight: "90vh" }}>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Admin Panel Login</DialogTitle>
          <DialogContent>
            <form onSubmit={login}>
              <label>
                <h6 className={""}>Username</h6>
                <input
                  name="lUsername"
                  type="text"
                  placeholder="Username (Admin)"
                  minLength="5"
                  required
                  onChange={Fname}
                  value={Ninput}
                  autoComplete="off"
                />
              </label>
              <br />
              <label>
                <h6 style={{ marginTop: "15px" }}>Password</h6>
                <input
                  name="lPassword"
                  type="password"
                  placeholder="Password (sanBooks)"
                  minLength="5"
                  required
                  onChange={Fpassword}
                  value={Pinput}
                  autoComplete="off"
                />
              </label>
              <br />
              <Link to="/">
                <Button color="primary">Cancel</Button>
              </Link>
              <Button
                type="submit"
                value="submit"
                color="primary"
                onClick={login}
              >
                Login
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PasswordOverlay;
