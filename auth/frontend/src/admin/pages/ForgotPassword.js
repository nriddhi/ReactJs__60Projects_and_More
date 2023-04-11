import React, {useState, useEffect} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useFEmailSendMutation } from '../../store/ApiSlice';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';


const FormData = require('form-data');


export default function ForgotPassword() {
  const [errMsg, setErrMsg] = useState('');
  const [fEmail, setfEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [fData]  = useFEmailSendMutation();


   useEffect(() => {
    setErrMsg('');
   }, [fEmail])

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('fEmail', fEmail);

    const response =fData({
        fEmail
    });

    const data = await response;

    console.log(data);
    
    if(data?.data?.code==='rp200')
    {
        toast.success('Reset Password Email Sent Successfully');
    }

    else if(data?.data?.code==='sv200')
    {
        toast.warning('Email not verfied yet, Verify Email sent again');
    }

    else if(data?.error?.data?.code==='nf404')
    {
        setErrMsg('Email Not Registered Yet'); 
    }
    

  }

  return (
    <div>
            <div id="wrapper">
                <div className="vertical-align-wrap">
                    <div className="vertical-align-middle auth-main">
                        <div className="auth-box">
                            <div className="top">
                                <strong>Email for Password</strong>
                            </div>
                            <div className="card">
                                <div className="body">
                                    <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                                    <ToastContainer/>
                                    <form className="form-auth-small" onSubmit={handleSubmit}>

                                        <div className="form-group">
                                            <label className="control-label" htmlFor="send-femail"
                                            >Email
                                            </label>
                                            <input
                                                className="form-control"
                                                id="send-femail"
                                                name="fEmail"
                                                type="email"
                                                onChange={(e) => {setfEmail(e.target.value)}}
                                                value={fEmail}
                                                required
                                            />
                                        </div>

                                        <button
                                            className="btn btn-primary btn-lg btn-block"
                                            type="submit">
                                            Send Email
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
