import React from 'react'
import { useGetUserDataQuery, useProfileUpdateMutation } from '../../store/ApiSlice';
import { useState, useEffect } from 'react';
import { FaCheck, FaEye, FaEyeSlash, FaTimes, FaCircle } from 'react-icons/fa';
const FormData = require('form-data');

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function ProfileEdit () {

    
    const {data:userData, isLoading} = useGetUserDataQuery();
    const[updateUserData, {isSuccess}] = useProfileUpdateMutation();
    const [userId, setUserId] = useState('');
    const [gender, setGender]= useState('');
    const [name, setName] = useState('');
    const [username, setUser] = useState('');
    const [validUser, setValidUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');
    const [profile, setProfilePic] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [pwdType, setPwdType] = useState('password');
    const [pwdIcon, setPwdIcon] = useState(false);
    const [pwdTypeMatch, setPwdTypeMatch] = useState('password');
    const [pwdIconMatch, setPwdIconMatch] = useState(false);
    const [validPwd, setValidPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [sucessMsg, setSucessMsg] = useState('');

    useEffect(() => {
        setName(userData?.user?.name);
        setUser(userData?.user?.username);
        setEmail(userData?.user?.email);
        setAddress(userData?.user?.address);
        setMobile(userData?.user?.mobile);
        setGender(userData?.user?.gender);

    }, [isLoading]);

    useEffect(() => {
        setValidUser(USER_REGEX.test(username));
        setSucessMsg(''); 
        setErrMsg('');
    }, [name, gender, username, email, password, matchPwd, address, mobile]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatchPwd(password === matchPwd);
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

    const handleIconClickMatch = () => {

        if (pwdTypeMatch === 'password') {
            setPwdIconMatch(true);
            setPwdTypeMatch('text');
        } else if (pwdTypeMatch === 'text') {
            setPwdIconMatch(false);
            setPwdTypeMatch('password');
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);

        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return null;
        }

        const userId = userData?.user?._id? userData?.user?._id:null;

        const form = new FormData();
        form.append('name', name);
        form.append('usernames', username);
        form.append('email', email);
        form.append('password', password);
        form.append('profile', profile);
        form.append('mobile', mobile);
        form.append('address', address);
        form.append('gender', gender);
        form.append('userid', userId);


        const response = updateUserData(form);

         const value = await response;
          
           if(!value.error && value.data){
            setErrMsg('');
            setSucessMsg('success');         
           }
           else {
            if (value.error.status==='FETCH_ERROR') 
           {
              setErrMsg('No Server Response');
             
           } else if (((value.error.status===406) && (value.error.data.code)) === 'u406') 
           {
            setSucessMsg('');   
            setErrMsg('Username Taken');
              
           }
             else if (((value.error.status===406) && (value.error.data.code)) === 'e406') 
           {
                setSucessMsg(''); 
                setErrMsg('Email Already Registered');
           } 
              else 
            {
                setSucessMsg('');
                setErrMsg('Registration Failed');
                
            }
            
           }
        
    }

    const handleImages = (e) => {
       
        setProfilePic(e.target.files[0])
        setSucessMsg(''); 
        setErrMsg('');

    }


    if(isLoading)   return 'Loading...';
    

  return (
    <>
        <div className="main_content" id="main-content">
                <div className="page">
                    <div className="container-fluid">
                    <div className="header text-center pb-2">
                         <h3>Update Profile</h3>
                        </div>
               <p className={errMsg ? "errmsg" : "offscreen"}
                                       aria-live="assertive">{errMsg}</p>
               <p className={sucessMsg ? "successmsg" : "offscreen"}
                                       aria-live="assertive">Successfully Registered</p>       
                        <div className="clearfix">
                <form id="basic-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group">

             <label className="control-label" htmlFor="user-name">Name</label>
                <input type="text"
                 className="form-control"
                 id="user-name"
                 name="name"
                 onChange={(e) => setName(e.target.value)}
                 value={name}
                required />
                    </div>

            <div className="form-group">
            <label className="control-label" htmlFor="user-uname">Username
            <FaCheck className={validUser ? "valid" : "hide"}/>
            <FaTimes className={validUser || !username ? "hide" : "invalid"}/>
            </label>
                <input type="text" 
                 className="form-control" 
                 id="user-uname"
                 name="uname"
                 onChange={(e) => setUser(e.target.value)}
                 value={username}
                required />
            </div>
            <div className="form-group">
            <label className="control-label" htmlFor="user-email" >Email</label>
            <input type="email" className="form-control" 
            id="user-email"
            name="uemail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />
        </div>
            <div className="form-group">
            <label>Profile Picture</label>
                <input type="file"
                  name="profile"
                 className="form-control"
                 accept='.png,.jpg,.jpeg'
                 onChange={handleImages}
                required />
                    </div>                
                    <div className="form-group">
            <label className="control-label" htmlFor="signup-password">Password
                <FaCheck className={validPwd ? "valid" : "hide"}/>
                <FaTimes className={validPwd || !password ? "hide" : "invalid"}/>
            </label>

                <input className="form-control"
                       id="signup-password"
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
                                            <label className="control-label" htmlFor="signup-matchPwd"
                                            >Confirm Password
                                                <FaCheck
                                                    className={validMatchPwd && matchPwd ? "valid" : "hide"}/>
                                                <FaTimes
                                                    className={validMatchPwd || !matchPwd ? "hide" : "invalid"}/></label
                                            >
                                            <input
                                                className="form-control"
                                                id="signup-matchPwd"
                                                type={pwdTypeMatch}
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                value={matchPwd}
                                                aria-invalid={matchPwd ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                required
                                            />
                                            <span className="eye" onClick={handleIconClickMatch}>{pwdIconMatch? <FaEye />: <FaEyeSlash />}</span>
                                            <p id="confirmnote"
                                               className={matchPwd && !validMatchPwd ? "instructions" : "offscreen"}>
                                                <FaCircle />
                                                Must match the first password input field.
                                            </p>
                                        </div>
                           <div className="form-group">
                            <label className="control-label" htmlFor="updateProfile-address">Address</label>
                                              <input
                                                className="form-control"
                                                id="updateProfile-address"
                                                name="address"
                                                type='text'
                                                onChange={(e) => setAddress(e.target.value)}
                                                value={address}
                                                required
                                            />

                                    </div>
                                    <div className="form-group">
                            <label className="control-label" htmlFor="updateProfile-mobile">Mobile</label>
                                              <input
                                                className="form-control"
                                                id="updateProfile-mobile"
                                                name="mobile"
                                                type='text'
                                                onChange={(e) => setMobile(e.target.value)}
                                                value={mobile}
                                                required
                                            />

                                    </div>
                    <div className="form-group">
                            <label>Gender</label>
                   <select className="form-control select-option" onChange={(e)=> setGender(e.target.value)} defaultValue={userData?.user?.gender}>
                    <option value='not-selected' disabled>Select Gender</option>
                    <option value='male' >Male</option>
                    <option value='female'>Female</option>

                    </select>
            </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                                </form>
                                </div>
                                </div>
                                </div>
    </div>
    </>
  )
}
