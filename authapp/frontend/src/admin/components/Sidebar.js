import React, {Fragment, useRef, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Collapse} from "reactstrap";
import profilePic from '../images/profile.png'
import { useGetUserDataQuery } from '../../store/ApiSlice';

function Sidebar(props) {

    const {data, isLoading} = useGetUserDataQuery();
    const [pagesIsOpen, setpagesIsOpen] = useState(false);
    const [apperanceIsOpen, setapperanceIsOpen] = useState(false);
    const [usersIsOpen, setusersIsOpen] = useState(false);

    const childMenuRef = useRef(false);
    const [postIsOpen, setpostIsOpen] = useState(false);

    const userPic = data?.user?.profilePic;

    const toggle = (props) => {
        //alert(childMenuRef.current);
        // alert(postIsOpen);
        if (props === 'posts') {
            setpostIsOpen(!postIsOpen);
            childMenuRef.current = !postIsOpen;
        } else if (props === 'pages') {
            setpagesIsOpen(!pagesIsOpen);
        } else if (props === 'appearnce') {
            setapperanceIsOpen(!apperanceIsOpen);
        } else if (props === 'users') {
            setusersIsOpen(!usersIsOpen);
        }

    };

    const childIsOpen = (props) => {
        //alert(childMenuRef.current);
        if (props === 'postsc') {
            setpostIsOpen(childMenuRef.current);
        }

    };

  if(isLoading) return 'Loading..';

  //console.log(data);

    return (

        <Fragment>

            <div className="left_sidebar">
                <nav className="sidebar">
                    <div className="user-info">
                        <div className="image">
                           <img src={userPic? userPic : profilePic } alt="User"/>
                        </div>
                        <div className="detail mt-3">
                            <h5 className="mb-0">{data?.user?.name}</h5>
                            <small>{data?.user?.role}</small>
                        </div>
                    </div>
                    <ul id="main-menu" className="metismenu">
                        <li className="g_heading">Main Menu</li>
                        <li>
                            <NavLink to="/admin-dashboard"
                                     className={({isActive}) => (isActive ? 'active' : null)}> <i
                                className="ti-home"></i><span>Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <a href="#" className="has-arrow" onClick={() => toggle('posts')}
                            ><i className="ti-pencil-alt"></i><span>Posts</span></a>
                            <Collapse isOpen={postIsOpen ? true : childMenuRef.current}>
                                <ul>
                                    <li><NavLink to="/admin-dashboard/all-posts"
                                                 onClick={() => childIsOpen('postsc')}
                                                 className={({isActive}) => (isActive ? 'active' : null)}>
                                        All Posts
                                    </NavLink></li>
                                    <li><NavLink to="/admin-dashboard/categories" onClick={() => childIsOpen('postsc')}
                                                 className={({isActive}) => (isActive ? 'active' : null)}>
                                        Categories
                                    </NavLink></li>
                                    <li><NavLink to="/admin-dashboard/tags" onClick={() => childIsOpen('postsc')}
                                                 className={({isActive}) => (isActive ? 'active' : null)}>
                                        Tags
                                    </NavLink></li>
                                    <li><NavLink to="/admin-dashboard/comments" onClick={() => childIsOpen('postsc')}
                                                 className={({isActive}) => (isActive ? 'active' : null)}>
                                        Comments
                                    </NavLink></li>
                                </ul>
                            </Collapse>
                        </li>

                        <li>
                            <a href="#" className="has-arrow" onClick={() => toggle('pages')}
                            ><i className="ti-bookmark-alt"></i><span>Pages</span></a
                            >
                            <Collapse isOpen={pagesIsOpen}>
                                <ul>
                                    <li><a href="form-elements.html">All Pages</a></li>
                                    <li><a href="form-advanced.html">Add New</a></li>
                                </ul>
                            </Collapse>
                        </li>


                        <li>
                            <a href="#" className="has-arrow" onClick={() => toggle('appearnce')}>
                                <i className="ti-layout"></i><span>Appearance</span></a>
                            <Collapse isOpen={apperanceIsOpen}>
                                <ul>
                                    <li><a href="form-elements.html">Menu</a></li>
                                    <li><a href="form-advanced.html">Sidebar</a></li>
                                </ul>
                            </Collapse>
                        </li>

                        <li>
                            <a href="#" className="has-arrow" onClick={() => toggle('users')}>
                                <i className="ti-comments-smiley"></i><span>Users</span></a>
                            <Collapse isOpen={usersIsOpen}>
                                <ul>
                                    <li><a href="form-elements.html">All Users</a></li>
                                    <li><a href="form-advanced.html">Add New</a></li>
                                </ul>
                            </Collapse>
                        </li>

                        <li>
                            <a href="ui-elements.html">
                                <i className=" ti-layout-grid2"></i><span>Site options</span></a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
}

export default Sidebar;