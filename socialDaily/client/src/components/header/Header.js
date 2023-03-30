import React from "react";
import { Link } from "react-router-dom";
import { Search, HomeActive, Friends, Watch, Market, Gaming  } from  "../../svg" 
import './style.css';

export default function Header() {
    
    const color = "#65676b";

  return (
    <header>
    <div className="header_left">
      <Link to="/" className="header_logo">
        <div className="circle">
         <h3>SD</h3>
        </div>
      </Link>
      <div className="search search1">
        <Search color={color} />
        <input
          type="text"
          placeholder="Search SocialDaily"
          className="hide_input"
        />
      </div>
    </div>
    <div className="header_middle">
      <Link to="/" className="middle_icon active">
        <HomeActive />
      </Link>
      <Link to="/" className="middle_icon hover1">
        <Friends color={color} />
      </Link>
      <Link to="/" className="middle_icon hover1">
        <Watch color={color} />
        <div className="middle_notification">9+</div>
      </Link>
      <Link to="/" className="middle_icon hover1">
        <Market color={color} />
      </Link>
      <Link to="/" className="middle_icon hover1">
        <Gaming color={color} />
      </Link>
    </div>
    <div className="header_right"></div>
  </header>
  );
}
