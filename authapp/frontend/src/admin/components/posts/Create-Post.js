import React, {useState} from 'react'
import Header from "../Header";
import Sidebar from "../Sidebar";
import axios from "axios";
import demo from '../../images/demo.jpg'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import ReactQuill from "react-quill";

const POST_URL = 'http://localhost:5000/api/data/posts';


function CreatePost() {
    const [modal, setModal] = useState(false);
    const [textEdit, setTextEdit] = useState(false);
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

        try {
            const response = await axios.post(POST_URL, {
                title: title, description: desc, featuredImg: featuredImg, categories: categories,
                tags: tags
            }, {headers: {'content-type': 'multipart/form-data'}});

            setSuccess(true);


        } catch (error) {

            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 500) {
                setErrMsg("Can't able to Create Post");
            }
        }
    };
    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="main_content" id="main-content">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12">
                                <div className="table-responsive">
                                    <div className="add-new-post">
                                        <div className="add-new-post-options">
                                            <h3>Posts</h3>

                                            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                                                <FormGroup>
                                                    <Label for="blog_title">
                                                        Title
                                                    </Label>
                                                    <Input
                                                        id="blog_title"
                                                        name="blog_title"
                                                        placeholder="Enter Your Title"
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

                                                <FormGroup>
                                                    <Label for="featured_image">Featured Image
                                                    </Label>
                                                    <input type="file" name="featuredImg" onChange={handleImage}/>
                                                    <img src={ImageValue} alt='' width='65px'
                                                         height='65px'/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="categories">Categories
                                                    </Label>
                                                    <Input id="categories" value={categories} onChange={(e) => {
                                                        setCategories(e.target.value);
                                                    }}/>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="categories">Tags
                                                    </Label>
                                                    <Input id="categories" value={tags} onChange={(e) => {
                                                        setTags(e.target.value)
                                                    }}/>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost