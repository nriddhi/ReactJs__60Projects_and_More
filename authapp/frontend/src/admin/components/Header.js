import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FaBell, FaCogs, FaEnvelope, FaSignOutAlt, FaUser} from "react-icons/fa";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import { useLogOutMutation } from '../../store/ApiSlice';

function Header(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [logOut] = useLogOutMutation();
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const navigate = useNavigate();
    const SignOut = async (e) => {
    const response = logOut();
    const data = await response;
    
    if(data?.data?.code==='logoutscs200')
       {
        return navigate('/login');
        
       }
    };

    return (
        <div>
            <nav className="navbar custom-navbar navbar-expand-lg py-2">
                <div className="container-fluid px-0">
                    <Link to="/" className="menu_toggle"
                    ><i className="fa fa-align-left"></i
                    ></Link>
                    <Link to="/admin-dashboard" className="navbar-brand"
                    ><strong>Admin</strong></Link>
                    <div id="navbar_main">
                        <ul className="navbar-nav mr-auto hidden-xs">
                            <li className="nav-item page-header">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/"><i className="fa fa-home"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item hidden-xs">
                                <form className="form-inline main_search">
                                    <input
                                        className="form-control form-control-sm mr-sm-2"
                                        type="search"
                                        placeholder="Search..."
                                        aria-label="Search"
                                    />
                                </form>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="#"
                                ><FaCogs></FaCogs></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link nav-link-icon"
                                    href="#"
                                    id="navbar_1_dropdown_2"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                ><FaBell></FaBell></a>
                                <div
                                    className="dropdown-menu dropdown-menu-right dropdown-menu-xl py-0"
                                >
                                    <div className="py-3 px-3">
                                        <h5 className="heading h6 mb-0">
                                            Notifications
                                            <span
                                                className="badge badge-pill badge-primary text-uppercase float-right"
                                            >3</span
                                            >
                                        </h5>
                                    </div>
                                    <div className="list-group">
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action d-flex"
                                        >
                                            <div className="list-group-img">
                                                <span className="avatar bg-purple">JD</span>
                                            </div>
                                            <div className="list-group-content">
                                                <div className="list-group-heading">
                                                    Johnyy Depp <small>10:05 PM</small>
                                                </div>
                                                <p className="text-sm">
                                                    Lorem ipsum dolor consectetur adipiscing eiusmod tempor
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action d-flex"
                                        >
                                            <div className="list-group-img">
                                                <span className="avatar bg-pink">TC</span>
                                            </div>
                                            <div className="list-group-content">
                                                <div className="list-group-heading">
                                                    Tom Cruise <small>10:05 PM</small>
                                                </div>
                                                <p className="text-sm">
                                                    Lorem ipsum dolor sit amet consectetur eiusmod tempor
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action d-flex"
                                        >
                                            <div className="list-group-img">
                                                <span className="avatar bg-blue">WS</span>
                                            </div>
                                            <div className="list-group-content">
                                                <div className="list-group-heading">
                                                    Will Smith <small>10:05 PM</small>
                                                </div>
                                                <p className="text-sm">
                                                    Lorem sit amet consectetur adipiscing eiusmod tempor
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="py-3 text-center">
                                        <a
                                            href="#"
                                            className="link link-sm link--style-3"
                                        >View all notifications</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <div className="d-flex">
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret><FaUser></FaUser></DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <a className="dropdown-item" href="#"
                                            ><FaUser></FaUser>My Profile</a
                                            >
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a className="dropdown-item" href="#"
                                            ><span className="float-right badge badge-warning">4</span
                                            ><FaEnvelope></FaEnvelope>Inbox</a
                                            >
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a className="dropdown-item" href="#"
                                            ><FaCogs></FaCogs>Settings</a
                                            >
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a onClick={SignOut} className="dropdown-item"
                                            ><FaSignOutAlt></FaSignOutAlt> Sign out</a
                                            >
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;