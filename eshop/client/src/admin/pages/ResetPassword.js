import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {FaCheck, FaCircle, FaEye, FaEyeSlash, FaTimes} from "react-icons/fa";
import { useResetPassMutation } from '../../store/ApiSlice';
import { Link } from 'react-router-dom';
const FormData = require('form-data');
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function ResetPassword() {

  let param = useParams();
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');
  const [password, setPwd] = useState('');
  const [pwdType, setPwdType] = useState('password');
  const [pwdIcon, setPwdIcon] = useState(false);
  const [pwdTypeMatch, setPwdTypeMatch] = useState('password');
  const [pwdIconMatch, setPwdIconMatch] = useState(false);
  const [validPwd, setValidPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatchPwd, setValidMatchPwd] = useState('');
  const [rFData]  = useResetPassMutation();


  const handleSubmitData = async (e) => {
    
    e.preventDefault();
    
    const formData = new FormData();
    const rId = param.id;
    const rToken = param.token;
    formData.append('rId', rId);
    formData.append('rToken', rToken);
    formData.append('rPass', matchPwd);

    const response = rFData({
      rId, rToken, matchPwd
    });

    const data = await response;

    console.log(data);

    if(data?.data?.code==='rtSuccess')
    {
        setSuccess(data?.data?.message);
    }
    else if(data?.data?.code==='notVerified')
    {
        setErrMsg(data?.data?.message);
        setSuccess('');
    }
    else if(data?.data?.code==='rtExpired')
    {
        setErrMsg(data?.data?.message);
        setSuccess('');
    }
    else if(data?.error?.data?.code==='rntvalid')
    {
        setErrMsg(data?.error?.data?.message);
        setSuccess('');
    }

  }

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatchPwd(password === matchPwd);
    setErrMsg('');
}, [password, matchPwd]);

  const handleIconClick = () => {
    if (pwdType === 'password') {
        setPwdIcon(true);
        setPwdType('text');
    } else if (pwdType === 'text') {
        setPwdIcon(false);
        setPwdType('password');
    }
};

const handleIconClickMatch = (e) => {

    if (pwdTypeMatch === 'password') {
        setPwdIconMatch(true);
        setPwdTypeMatch('text');
    } else if (pwdTypeMatch === 'text') {
        setPwdIconMatch(false);
        setPwdTypeMatch('password');
    }

};

  return (
    <div>
            <div id="wrapper">
                <div className="vertical-align-wrap">
                    <div className="vertical-align-middle auth-main">
                        <div className="auth-box">
                            <div className="top">
                                <strong>Reset Password Form</strong>
                            </div>
                            <div className="card">
                                <div className="body">
                                    <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                                    <p className={success ? "successmsg" : "offscreen"}>{success}</p>
                                    
                                    <form className="form-auth-small" onSubmit={handleSubmitData}>

                                    <div className="form-group">
                                            <label className="control-label" htmlFor="signup-rpassword"
                                            >New Password
                                                <FaCheck
                                                    className={validPwd ? "valid" : "hide"}/>
                                                <FaTimes
                                                    className={validPwd || !password ? "hide" : "invalid"}/>
                                            </label
                                            >

                                            <input
                                                className="form-control"
                                                id="signup-rpassword"
                                                name="password"
                                                type={pwdType}
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={password}
                                                required
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="pwdnote"
                                            />
                                           <span className="eye" onClick={handleIconClick}>{pwdIcon? <FaEye />:<FaEyeSlash />}</span>
                                            <p id="pwdnote"
                                               className={password && !validPwd ? "instructions" : "offscreen"}>
                                                8 to 24 characters.<br/>
                                                Must include uppercase and lowercase letters, a number and a special
                                                character.<br/>
                                                Allowed special characters: <span aria-label="exclamation mark">!</span>
                                                <span
                                                    aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
                                                <span
                                                    aria-label="dollar sign">$</span> <span
                                                aria-label="percent">%</span>
                                            </p>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="signup-rmatchPwd"
                                            >Confirm Password
                                                <FaCheck
                                                    className={validMatchPwd && matchPwd ? "valid" : "hide"}/>
                                                <FaTimes
                                                    className={validMatchPwd || !matchPwd ? "hide" : "invalid"}/></label
                                            >
                                            <input
                                                className="form-control"
                                                id="signup-rmatchPwd"
                                                type={pwdTypeMatch}
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                value={matchPwd}
                                                aria-invalid={matchPwd ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                required
                                            />
                                            <span className="eye" onClick={handleIconClickMatch}>{pwdIconMatch? <FaEye />:<FaEyeSlash />}</span>
                                            <p id="confirmnote"
                                               className={matchPwd && !validMatchPwd ? "instructions" : "offscreen"}>
                                                <FaCircle/>
                                                Must match the first password input field.
                                            </p>

                                        </div>
                                        <button
                                            className="btn btn-primary btn-lg btn-block"
                                            type="submit"
                                            disabled={ !validPwd || !validMatchPwd}>
                                            Reset Password
                                        </button>

                                        <div className="forgot-pass">
                                  <span className="helper-text">Back to Login? 
                                   <Link to="/login"> Login</Link></span>
                                        </div>
  
                                    </form>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
