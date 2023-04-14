import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useValidTokenMutation } from '../../store/ApiSlice';
import success_img from '../images/email_verified.jpg';

export default function EmailVerify() {

let param = useParams();
let [checkToken, {isLoading}] = useValidTokenMutation();
const [validToken, setValidToken] = useState(false);
const [aVerified, setAVerified] = useState(false);

useEffect(() => { 
    checkValue();
}, [param]);

const checkValue = async() => {
	try {
	const response = checkToken({param});
	const value = await response;
	console.log(value);
	if(value?.data?.code==='v200'){
	setValidToken(true);
   }
else if(value?.error?.data?.code==='av201')
    {
		setAVerified(true);
	}
}
catch(err)
{ 
	setValidToken(false); 
}
}

if(isLoading) return 'Loading...';

  return (
    <>
	   {validToken ? (
				 <div id="wrapper">
				 <div className="vertical-align-wrap">
					 <div className="vertical-align-middle auth-main">
					 <div className="auth-boxv">
					<img src={success_img} alt="success_img" className='' />
					<h1 className='p-10'>Email verified successfully</h1>
					<Link to="/login">
						<button className='btn btn-success btn-lg btn-block'>Login</button>
					</Link>
					</div>
				</div>
				</div>
				</div>
			) : aVerified? (
                <div id="wrapper">
				 <div className="vertical-align-wrap">
					 <div className="vertical-align-middle auth-main">
					 <div className="auth-boxv">
				<h1>Already Verified</h1>
				<Link to="/login">
						<button className='btn btn-success btn-lg btn-block'>Login</button>
					</Link>
				</div>
				</div>
				</div>
				</div>

			): (
				<div id="wrapper">
				 <div className="vertical-align-wrap">
					 <div className="vertical-align-middle auth-main">
					 <div className="auth-boxv">
				<h1>Token Not Found Or Already Verified</h1>
				<Link to="/">
						<button className='btn btn-danger btn-lg btn-block'>Back To Home</button>
					</Link>
				</div>
				</div>
				</div>
				</div>

			)}
	</>
  )
}
