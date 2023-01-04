import React, {useState} from 'react';
import '../../css/Back-Css-Inc';
import demo from '../../images/demo.jpg'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import ReactQuill from "react-quill";


function CreatePost() {
    const [modal, setModal] = useState(false);
    const [allCategory, setallCategory] = useState(true);
    const [mostUsedCat, setmostUsedCat] = useState(false);
    const [ImageValue, setImageValue] = useState(demo);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [featuredImg, setFeaturedImage] = useState('');
    const [categories, setCategories] = useState('');
    const [tags, setTags] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const toggle = () => {
        setModal(!modal);
    };

    const switchTab =(value) => {
     
     if(value==='allcat')
     {
        setallCategory(true);
        setmostUsedCat(false);
     }
     else if(value==='mostused') {
        setmostUsedCat(true);
        setallCategory(false);

    }
}
    const modules = {
        toolbar: [
            [{'header': [1, 2, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

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
                    <h3>Add New Post</h3>
                        <div className="row clearfix">
                            <div className="col-lg-9 col-md-9">
                                <div className="table-responsive">
                                    <div className="add-new-post">
                                        <div className="add-new-post-options">

                                            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                                                <FormGroup>
                                                    <Label for="blog_title">
                                                        Title
                                                    </Label>
                                                    <Input
                                                        id="blog_title"
                                                        name="blog_title"
                                                        type="text"
                                                        value={title}
                                                        onChange={(e) => {
                                                            setTitle(e.target.value);
                                                        }}
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="text_editor">Description
                                                    </Label>
                                                    <ReactQuill id="text_editor" value={desc} onChange={setDesc}
                                                                modules={modules}
                                                                formats={formats}/>
                                                </FormGroup>

                                                <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                                                <p className={success ? "successmsg" : "offscreen"}
                                                   aria-live="assertive">Successfully Created Post</p>
                                                <Button color="primary" onClick={handleSubmit}>
                                                    Save
                                                </Button>
                                                <Button color="secondary" onClick={toggle}>
                                                    Cancel
                                                </Button>

                                            </Form>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-3">

                                                <FormGroup>
                            <Label for="categories">Categories </Label>
                               <div className="category-section">
                                <div className="section-one">
                                <div className="all-category"><a href="javascript:void(e)" onClick={() => switchTab('allcat')}>All Category</a></div>
                                <div className="most-used"><a href="javascript:void(e)" onClick={() => switchTab('mostused')}>Most Used</a></div>
                                </div>
                                <div className="section-details">
                               <div className={allCategory? 'all-category-details active-tab': 'all-category-details deactive-tab'}>                                   
                                <ul>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Uncategorized</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                </ul>
                                
                                </div>
                                <div className={mostUsedCat? 'most-used-details active-tab': 'most-used-details deactive-tab'}>
                                <ul>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Uncategorized</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>
                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                <li>
                                    <label><input value="800" type="checkbox" name="tax_input[wpdmcategory][]" id="in-wpdmcategory-800" />Cat1</label>
                                </li>

                                </ul>
                                    </div>
                                </div>
                                                <div className="section-two">
                                                  <div className='add-new-category'>
                                                    Add New Category
                                                  </div>
                                                  </div>
                                                   </div>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="categories">Tags
                                                    </Label>
                                                    <Input id="categories" value={tags} onChange={(e) => {
                                                        setTags(e.target.value)
                                                    }}/>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="featured_image">Featured Image
                                                    </Label>
                                                    <input type="file" name="featuredImg" onChange={handleImage}/>
                                                    <img src={ImageValue} alt='' width='65px'
                                                         height='65px'/>
                                                </FormGroup>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost