import React, { useEffect, useState } from "react";
import { FaCheck, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  useLoginUsersMutation,
  useAuthRefreshTokenQuery,
} from "../../store/Apislice";
import { useDispatch } from "react-redux";
import { login, onetimeFalse } from "../../store/Appslice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function LoginForm({ setVisible }) {
  const [loginData, { isLoading,isError }] = useLoginUsersMutation();
  const oneTimeToken = useSelector(
    (state) => state.persistedReducer.appSlice.token
  );
  const [submitting, setSubmitting] = useState(false);
  const [userData, setUser] = useState("");
  const [validUser, setValidUser] = useState("");
  const [password, setPwd] = useState("");
  const [pwdType, setPwdType] = useState("password");
  const [validPwd, setValidPwd] = useState("");
  const [pwdIcon, setPwdIcon] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setValidUser(USER_REGEX.test(userData));
    setErrMsg("");
  }, [userData]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setErrMsg("");
  }, [password]);

  if (oneTimeToken) {
    toast.warning("Token Expired, Please Login Again");
    dispatch(onetimeFalse());
  }

  const handleIconClick = () => {
    if (pwdType === "password") {
      setPwdIcon(true);
      setPwdType("text");
    } else if (pwdType === "text") {
      setPwdIcon(false);
      setPwdType("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const v2 = PWD_REGEX.test(password);

    if (!v2) {
      setErrMsg("Invalid Entry");
      return null;
    }

    const formdata = new FormData();
    formdata.append("userData", userData);
    formdata.append("password", password);

    let response = loginData({ userData, password });

    const value = await response;
    if(value) { setSubmitting(false);}
    if (value?.data?.code === "l200") {
      setSuccess("Logged in successfully");
      dispatch(login());
      toast.success("Logged in Successfully, Redirecting to Home...");
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }  else if (value.error.status === 'FETCH_ERROR') {
      setErrMsg("No Server Response");
    }
      else if (value?.error) {
        setErrMsg(value?.error?.data?.message);
      } 
    else {
      setErrMsg("Server Not Responding");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialDaily</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialDaily.
          </span>
        </div>
        <div className="loginRight">
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <ToastContainer />
          <form className="loginBox" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                id="signup-uname"
                name="userData"
                placeholder="Username or Email"
                type="text"
                onChange={(e) => setUser(e.target.value)}
                value={userData}
                required
              />
            </div>
            <div className="form-group">
              <FaCheck className={validPwd ? "valid" : "hide"} />

              <p className={validPwd ? "validp" : "hide"}>Valid Password</p>

              <FaTimes className={validPwd || !password ? "hide" : "invalid"} />

              <p className={validPwd || !password ? "hide" : "invalidp"}>
                Invalid Password
              </p>

              <input
                className="form-control"
                id="signup-password"
                name="password"
                placeholder="Password"
                type={pwdType}
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
              />
              <span className="eye" onClick={handleIconClick}>
                {pwdIcon ? <FaEye /> : <FaEyeSlash />}
              </span>
              <p
                id="pwdnote"
                className={password && !validPwd ? "instructions" : "offscreen"}
              >
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
            </div>
            <button className="loginButton" type="submit" disabled={!validPwd}>
            {submitting? 'Logged In...' : 'Login'}
            </button>
            <Link to="/forget-password" className="loginForgot">
              Forget Password?
            </Link>
            Or
            <Link to="/register" className="loginRegisterButton">
              Create New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
