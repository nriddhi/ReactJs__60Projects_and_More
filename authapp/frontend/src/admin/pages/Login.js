import React, {useEffect, useState} from 'react';
import {FaCheck, FaEye, FaEyeSlash,FaFacebookF, FaTwitter,FaTimes, FaAppStore, FaApple} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {  useLoginUsersMutation, useAuthRefreshTokenQuery } from '../../store/ApiSlice';
import { useDispatch } from 'react-redux';
import {login, onetimeFalse} from '../../store/AppSlice';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login(props) {
    const [loginData, {isLoading,isError}] = useLoginUsersMutation();
    const [submitting, setSubmitting] = useState(false);
    const oneTimeToken = useSelector((state) => state.persistedReducer.appSlice.token);
    const [userData, setUser] = useState('');
    const [validUser, setValidUser] = useState('');
    const [password, setPwd] = useState('');
    const [pwdType, setPwdType] = useState('password');
    const [validPwd, setValidPwd] = useState('');
    const [pwdIcon, setPwdIcon] = useState(FaEyeSlash);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        setValidUser(USER_REGEX.test(userData));
        setErrMsg('');
    }, [userData]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setErrMsg('');
    }, [password]);

    if(oneTimeToken)
    {
        toast.warning('Token Expired, Please Login Again');
        dispatch(onetimeFalse());
    }
     

     const google = () => {
        window.open(process.env.REACT_APP_GOOGLE_LOGIN_URL, "_self");
      };
    
      const facebook = () => {
        window.open(process.env.REACT_APP_FACEBOOK_LOGIN_URL, "_self");
      };

      const twitter = () => {
        window.open(process.env.REACT_APP_TWITTER_LOGIN_URL, "_self");
      };
      

    const handleIconClick = () => {
        if (pwdType === 'password') {
            setPwdIcon(FaEye);
            setPwdType('text');
        } else if (pwdType === 'text') {
            setPwdIcon(FaEyeSlash);
            setPwdType('password');
        }
    };
    

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setSubmitting(true);
    
        const v2 = PWD_REGEX.test(password);

        if (!v2) {
            setErrMsg('Invalid Entry');
            return null;
        }

        const formdata = new FormData();
        formdata.append('userData', userData);
        formdata.append('password', password);

        let response = loginData({userData, password});

        const value = await response;
        //console.log(value);
        if(value) { setSubmitting(false);}
        if(value?.data?.code==='l200'){
            setSuccess('Logged in successfully');
            dispatch(login());
            toast.success('Logged in Successfully, Redirecting to Home...');
            setTimeout(() => {
                      navigate('/admin-dashboard');  }, 4000);
        } else if (value.error?.status === 'FETCH_ERROR') {
            setErrMsg("No Server Response");
          }
         else if ( value?.error?.data.code==='le404') {
            setErrMsg('Email Not Registered');
        } else if (value?.error?.data.code==='lu404') {
            setErrMsg('Username Not found');
        }
        else if (value?.error?.data.code==='lv404') {
            setErrMsg('User Not Verified');
            toast.info('Registration Verfication Again Sent');
        }
        else if (value?.error?.data.code==='lw404') {
            setErrMsg('Wrong credentials');
        }
        
        else {
            setErrMsg('Server Not Responding');
        }
    };

    return (
        <div>
            <div id="wrapper">
                <div className="vertical-align-wrap">
                    <div className="vertical-align-middle auth-main">
                        <div className="auth-box">
                            <div className="top">
                                <strong>Login</strong>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <p className="lead">Login</p>
                                </div>
                                <div className="body">
                                    <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                                    <ToastContainer/>
                                    <form className="form-auth-small" onSubmit={handleSubmit}>

                                        <div className="form-group">
                                            <label className="control-label" htmlFor="signup-uname"
                                            >Username or Email
                                            </label>
                                            <input
                                                className="form-control"
                                                id="signup-uname"
                                                name="userData"
                                                type="text"
                                                onChange={(e) => setUser(e.target.value)}
                                                value={userData}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="signup-password"
                                            >Password
                                                <FaCheck
                                                    className={validPwd ? "valid" : "hide"}/>
                                                <FaTimes
                                                    className={validPwd || !password ? "hide" : "invalid"}/>
                                            </label
                                            >
                                            <input
                                                className="form-control"
                                                id="signup-password"
                                                name="password"
                                                type={pwdType}
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={password}
                                                required
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="pwdnote"
                                            />
                                            <span className="eye" onClick={handleIconClick}>{pwdIcon}</span>
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
                                        <button
                                            className="btn btn-primary btn-lg btn-block"
                                            type="submit"
                                            disabled={!validPwd}>
                                        {submitting? 'Logged In...' : 'Login'}
                                        </button>
                                        <div className="forgot-pass">
                                  <span className="helper-text">Forget Password? 
                                   <Link to="/forget-password"> reset here</Link></span>
                                        </div>
  
                                    </form>
                                   
                                    <div className="separator-linethrough">
                                    <div className='not-have-account'>Not have an account? 
                                   <Link to="/register"> Register</Link></div>
                                        <span>or signup using</span></div>
                                    <div className="social-buttons">
                                        <div className='buttons'>

                                        <button className='btn btn-signin-social' onClick={google}>
                                                <FcGoogle />
                                            </button>

                                            <button className='btn btn-signin-social' onClick={facebook}>
                                                <FaFacebookF/>
                                            </button>

                                            <button className='btn btn-signin-social' onClick={twitter}>
                                                <FaTwitter/>
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;