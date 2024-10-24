import React, { useState } from "react";
import authService from "../../Service/authService";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import LoginDrp from "../../Assets/logindrp.png"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterImg from "../../Assets/logo1.png"


const LoginPage = () => {
  const notifySuccess = () => toast.success("Submitted Successfully!");
  const notifyError = () => toast.error("Something Went Wrong!");

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };


  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const goto = useNavigate();

  const isLoggedIn = authService.getCurrentToken();
  const isUser = authService.getCurrentUser();

  function onChange(e) {
    const { name, value, type } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "number" ? parseFloat(value) : value,
      };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const data = await authService.login(form.username, form.password);
      notifySuccess();
      if (data.userType === "Admin") goto("/admin");
      else goto("/user");
    } catch (err) {
      notifyError(err);
      if ((err.response && err.response.status === 401) || 400) {
        setError(
          err.response.data.message
            ? err.response.data.message
            : "Forbidden: You don't have access to this resource."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  }
  return !isLoggedIn ? (
    <div className="body-login">
      <ToastContainer position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover />
      <div className="container">
        <div className="col col-12col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-0 col-sm-0 col-md-0 col-lg-3 col-xl-4 col-xxl-4">
              <div className="login-image-container">
                <img src={LoginDrp} alt="Login Illustration" className="login-image" />
              </div>
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 login-page">
              <div className="login-header">
                <div className="login-1stheader">Log in to your account</div>
                <div className="login-2ndheader">
                  Welcome back! Please enter your details.
                </div>
              </div>
              <div>
                <div className="login-content">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      {/* <label for="exampleFormControlInput1" class="form-label">
                        Username
                      </label>
                      <input
                        // type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your username"
                        value={form.username}
                        onChange={onChange}
                        name="username"
                      /> */}
                      <FormControl sx={{
                        m: 1,
                        width: { xs: '100%' }
                      }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-email" class="form-label">User Name</InputLabel>
                        <FilledInput
                          className="form-control"
                          id="filled-adornment-email"
                          type="text"
                          name="username"
                          value={form.username}
                          onChange={onChange}
                        />
                      </FormControl>
                    </div>
                    <div>
                      {/* <label for="inputPassword5" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="inputPassword5"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                        value={form.password}
                        onChange={onChange}
                        name="password"
                      ></input> */}

                      <FormControl sx={{
                        m: 1,
                        width: { xs: '100%' }
                      }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password" class="form-label">Password</InputLabel>
                        <FilledInput
                          className="form-control"
                          id="filled-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={form.password}
                          onChange={onChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                    <br />
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary" type="submit">
                        Sign in
                      </button>
                    </div>
                  </form>
                  <div className="text-danger fw-bold">{error}</div>
                </div>
              </div>
            </div>
            <div className="login-footer-container">
              <img src={FooterImg} className="login-footer" />
            </div>

            <div className="col col-0 col-sm-0 col-md-0 col-lg-3 col-xl-4 col-xxl-4"></div>
          </div>
        </div>
      </div>
    </div>
  ) : isUser === "Admin" ? (
    <Navigate to="/admin" />
  ) : isUser === "User" ? (
    <Navigate to="/user" />
  ) : (
    authService.logout()
  );
};

export default LoginPage;
