import React, {Fragment, useState} from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { useAddCategoriesMutation } from '../../store/ApiSlice';
const FormData = require('form-data');

function ContentsCategories(props) {
    const [catData, {isLoading, isError}] = useAddCategoriesMutation();
    const [modal, setModal] = useState(false);
    const [textEdit, setTextEdit] = useState(false);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [desc, setDesc] = useState('');
    const [featuredImg, setFeaturedImage] = useState('');
    const [parentCat, setParentCat] = useState('');
    const [tags, setTags] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData();

        formdata.append('name', name );
        formdata.append('slug', slug );
        formdata.append('parentCat',parentCat );
        formdata.append('desc', desc);
        
        const response = new catData({
        name, slug, parentCat, desc
        });
    };
    return (
        <>
            <div className="main_content" id="main-content">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-4">

                        <form id="basic-form" onSubmit={handleSubmit}>  
                                <div className="table-responsive">
                                    <div className="add-new-category">
                                            <div className="add-new-post-options">
                                                <h6>Add New Category</h6>
                                            </div>
                                    </div>
                                               
                                <div className="pt-4">         
                                   <label htmlFor='cat-name'>Name</label>
                                   <input id='cat-name' className='form-control' type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
                                </div>
                                <div className="pt-4">         
                                   <label htmlFor='cat-slug'>Slug</label>
                                   <input id='cat-slug' className='form-control' type="text" name="slug" value={slug} onChange={(e)=> setSlug(e.target.value)} />
                                </div>
                                <div className="pt-4">
                            <label htmlFor='parent-cat'>Parent Category</label>
                   <select id='parent-cat' className="form-control select-option" onChange={(e)=> setParentCat(e.target.value)} defaultValue='not-selected'>
                    <option value='not-selected' disabled>None</option>
                    <option value='uncategorized'>Uncategorized</option>

                    </select>
                                </div>
                     <div className="pt-4">         
                                   <label htmlFor='cat-description'>Description</label>
                                   <textarea id="cat-description" className='form-control' rows="4" cols="50" value={desc} onChange={(e)=> setDesc(e.target.value)} ></textarea>
                     </div>            
                                </div>        
                <button type="submit" className="mt-4 btn btn-primary" onClick={handleSubmit}>Add New Category</button>
                </form>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="table-responsive">
                                    <div className="add-new-post">
                                        <div className="col-lg-3 col-md-3">
                                            <div className="add-new-post-options">
                                                <h3>Categories</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-options mb-0">
                                        <div className="col-lg-3 col-md-3">
                                            <div
                                                className="dataTables_length"
                                                id="DataTables_Table_0_length"
                                            >
                                                <label>
                                                    Show
                                                    <select
                                                        name="DataTables_Table_0_length"
                                                        aria-controls="DataTables_Table_0"
                                                        className="form-control select-option form-control-sm"
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
                                        <div className="col-lg-4 col-md-4">
                                            <div className="filter-options">
                                                <div className="bulk-apply">
                                                    <select
                                                        name="bulk-options"
                                                        className="form-control select-option form-control-sm"
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
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Slug</th>
                                        <th>Count</th>
                                        <th>ID</th>
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
                                                >&nbsp;</label>
                                            </div>
                                        </td>
                                        <td className='data'>
                                            <span className='category'>Uncategorized</span>
                                            <div className="row-actions">
                                            <button className="btn btn-tertiary btn-sm">
                                                <FaEye></FaEye>
                                            </button>
                                            <button className="btn btn-primary btn-sm">
                                                <FaEdit></FaEdit>
                                            </button>
                                            <button className="btn btn-danger btn-sm">
                                               <FaTrash></FaTrash>
                                            </button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>Description.......</span>
                                        </td>
                                        <td><span> uncategorized </span>
                                        </td>

                                        <td>
                                            <span>25</span>
                                        </td>

                                        <td>
                                            <span>2555</span>
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


export default ContentsCategories;