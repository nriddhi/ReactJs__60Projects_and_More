import React from 'react'
import { Link } from 'react-router-dom';
import { BsSearch, BsFillHouseFill, BsFillChatLeftTextFill, BsBellFill } from "react-icons/bs";
import userImage from '../../images/profile.png';

export default function Header() {
  return (
    <div>
	
	<div className="header">
		<div className="logo">
        <Link to='/home'><h2>SocialDaily</h2></Link>
		</div>
		
		<div className="mid-area">
             <div className="search-social">
						<form method="post" className="">
                        <BsSearch />
							<input type="text" placeholder="Search Posts,People" />						
						</form>
		</div>
    
        </div>

        <div className='notification'>
            <ul>
           <li>
           <BsFillHouseFill />
           </li>
           <li>
            <BsFillChatLeftTextFill />
           </li>
           <li>
            <BsBellFill />
           </li>
           </ul>
        </div>
            
        <div className='user-profile'>
            <img src={userImage} alt="Profile" />
        </div>
	</div>

    </div>
  )
}
