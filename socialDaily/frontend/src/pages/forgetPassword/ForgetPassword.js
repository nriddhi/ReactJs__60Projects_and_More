import React, {useState, useEffect} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useFEmailSendMutation } from '../../store/Apislice';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';


const FormData = require('form-data');


export default function ForgetPassword() {
  const [errMsg, setErrMsg] = useState('');
  const [submitText, setSubmitText] = useState(false);
  const [fEmail, setfEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [fData]  = useFEmailSendMutation();


   useEffect(() => {
    setErrMsg('');
   }, [fEmail])

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setSubmitText(true);
    
    const formData = new FormData();
    formData.append('fEmail', fEmail);

    const response =fData({
        fEmail
    });

    const data = await response;
    
    if(data?.data?.code==='rp200')
    { 
        setSubmitText(false);
      
        toast.success('Reset Password Email Sent Successfully');
        
    }

    else if(data?.data?.code==='sv200')
    {   setSubmitText(false);
        toast.warning('Email not verfied yet, Verify Email sent again');
    }

    else if(data?.error?.data?.code==='nf404')
    {   setSubmitText(false);
        setErrMsg('Email Not Registered Yet'); 
    }
    

  }

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
        <ToastContainer/>
          <form className="loginBox" onSubmit={handleSubmit}>
          
          <div className="form-group">
                <input
                  className="form-control"
                  id="signup-email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={(e) => setfEmail(e.target.value)}
                  value={fEmail}
                  required
                />
              </div>

              
            <button className="loginButton" type="submit">
             {submitText ? 'Sending Email...' : 'Send Email'}
            </button>
            <span className="loginForgot">Back To Login? </span> 
            <Link to="/login" className="loginRegisterButton">
                   Login
                  </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
