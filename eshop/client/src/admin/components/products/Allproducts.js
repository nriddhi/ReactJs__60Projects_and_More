import React, {Fragment, useState} from 'react';
import 'react-quill/dist/quill.snow.css';

import {NavLink} from "react-router-dom";
import { FaEye, FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';


function Allproducts(props) {
    const [modal, setModal] = useState(false);
    const [ImageValue, setImageValue] = useState('');
    const [featuredImg, setFeaturedImage] = useState('');
    

    const toggle = () => {
        setModal(!modal);
    };

    const handleImage = (e) => {

        setImageValue(URL.createObjectURL(e.target.files[0]));
        setFeaturedImage(e.target.files[0]);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    };
    return (
       <>
            <div className="main_content" id="main-content">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12">
                                <div className="table-responsive">
                                    <div className="add-new-post">
                                        <div className="col-lg-3 col-md-3">
                                            <div className="add-new-post-options">
                                                <h3>Products </h3>
                                                <NavLink className='btn btn-primary' to='/admin-dashboard/create-product'>
                                                    Create Product
                                                </NavLink>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-options mb-0">
                                        <div className="col-lg-3 col-md-3">
                                            <div
                                                className="dataTables_length"
                                                id="DataTables_Table_0_length"
                                            >
                                                <label
                                                >Show
                                                    <select
                                                        name="DataTables_Table_0_length"
                                                        aria-controls="DataTables_Table_0"
                                                        className="form-control form-control-sm"
                                                    >
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                    entries</label
                                                >
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="filter-options">
                                                <div className="bulk-apply">
                                                    <select
                                                        name="bulk-options"
                                                        className="form-control form-control-sm"
                                                    >
                                                        <option value="10">Bulk Options</option>
                                                        <option value="10">Delete</option>
                                                    </select>
                                                    <input
                                                        type="submit"
                                                        name="apply_action"
                                                        id="post-query-submit"
                                                        className="button"
                                                        value="Apply"
                                                    />
                                                </div>
                                                <div className="bulk-filter">
                                                    <div className="filter-date" id="filter-date">
                                                        <select
                                                            name="filter-date"
                                                            className="form-control form-control-sm"
                                                        >
                                                            <option value="10">All Dates</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                        </select>
                                                    </div>
                                                    <div className="filter-cat" id="filter-cat">
                                                        <select
                                                            name="filter-cat"
                                                            className="form-control form-control-sm"
                                                        >
                                                            <option value="10">Cat1</option>
                                                            <option value="25">Cat2</option>
                                                            <option value="50">Cat3</option>
                                                            <option value="100">Cat4</option>
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="submit"
                                                        name="filter_action"
                                                        id="post-query-submit"
                                                        className="button"
                                                        value="Filter"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <div
                                                id="DataTables_Table_0_filter"
                                                className="dataTables_filter"
                                            >
                                                <label
                                                >Search:<input
                                                    type="search"
                                                    className="form-control form-control-sm"
                                                    placeholder=""
                                                    aria-controls="DataTables_Table_0"
                                                /></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-hover mb-0">
                                    <thead>
                                    <tr>
                                        <th className="w60">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck1"
                                                />
                                                <label className="custom-control-label" htmlFor="customCheck1"
                                                >&nbsp;</label
                                                >
                                            </div>
                                        </th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Categories</th>
                                        <th>Tags</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck1"
                                                />
                                                <label className="custom-control-label" htmlFor="customCheck1"
                                                >&nbsp;</label
                                                >
                                            </div>
                                        </td>
                                        <td>
                                            <img
                                                src="../images/profile.png"
                                                className="avatar w30"
                                                alt=""
                                            />
                                            <span className="ml-2">Post1</span>
                                        </td>
                                        <td>
                                            <span>Data1</span>
                                        </td>
                                        <td>
                                            <span><a href="#">Cat1</a></span>
                                        </td>
                                        <td><span><a href="#">Tag1</a> </span>
                                        </td>

                                        <td>
                                            <span>2021/09/05 at 11:59 am</span>
                                        </td>

                                        <td>
                                            <button className="btn btn-tertiary btn-sm">
                                               <FaEye />
                                            </button>
                                            <button className="btn btn-primary btn-sm">
                                               <FaEdit />
                                            </button>
                                            <button className="btn btn-danger btn-sm">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </>
    );
}


export default Allproducts;