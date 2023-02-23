import React, { useState } from "react";
import "../../css/Back-Css-Inc";
import {
  Checkbox,
  InputNumber,
  Select,
  Button,
} from "antd";
import { Form, FormGroup, Input, Label } from "reactstrap";
import ImageUploading from 'react-images-uploading';
import ReactQuill from "react-quill";


export default function CreateProduct() {
  const [allCategory, setallCategory] = useState(true);
  const [mostUsedCat, setmostUsedCat] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [featuredImg, setFeaturedImage] = useState("");
  const [images, setImages] = useState("");
  const maxNumber = 69;

  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const switchTab = (value) => {
    if (value === "allcat") {
      setallCategory(true);
      setmostUsedCat(false);
    } else if (value === "mostused") {
      setmostUsedCat(true);
      setallCategory(false);
    }
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, true] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const options = [
    { value: "red", Label: "Red" },
    { value: "green", Label: "Green" },
  ];

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const [size, setSize] = useState("middle");
  
  const onFImageChange = (imageList, addUpdateIndex) => {
    setFeaturedImage(imageList);
    console.log(featuredImg);
  };

  const onImages = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="main_content" id="main-content">
        <div className="page">
          <div className="container-fluid">
            <h3>Add New Product</h3>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row clearfix">
                <div className="col-lg-9 col-md-9">
                  <div className="table-responsive">
                    <div className="add-new-post">
                      <div className="add-new-post-options">
                        <p className={errMsg ? "errmsg" : "offscreen"}>
                          {errMsg}
                        </p>
                        <p
                          className={success ? "successmsg" : "offscreen"}
                          aria-live="assertive"
                        >
                          Successfully Created Post
                        </p>

                        <FormGroup>
                          <Label for="blog_title">Title</Label>
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
                          <Label htmlFor="text_editor">Description</Label>
                          <ReactQuill
                            id="text_editor"
                            value={desc}
                            onChange={setDesc}
                            modules={modules}
                            formats={formats}
                          />
                        </FormGroup>

                        <Label className="pl-3 pb-3 pf">
                          Product Options ::{" "}
                        </Label>
                        <FormGroup>
                          <div className="product_options">
                            <div className="col-md-8 col-lg-8">
                              <Label htmlFor="product__regular_price">
                                Product Price{" "}
                              </Label>
                              <InputNumber
                                id="product__regular_price"
                                addonAfter="$"
                                placeholder="Regular Price"
                              />
                              <InputNumber
                                id="product__sale_price"
                                addonAfter="$"
                                placeholder="Sale Price"
                              />
                            </div>
                            <div className="col-md-4 col-lg-4 stock-flex">
                              <Label htmlFor="stock_status" className="pr-2">
                                Stock Status
                              </Label>
                              <Select
                                id="stock_status"
                                placeholder="Please select"
                                onChange={handleChange}
                                options={options}
                              />
                            </div>
                          </div>
                        </FormGroup>

                        <Label className="pl-3 pb-2 pt-3 pf">
                          Product Attributes ::{" "}
                        </Label>
                        <FormGroup>
                          <div className="product_attributes">
                            <div className="col-md-3 col-lg-3">
                              <Label htmlFor="quantity">Quantity</Label>
                              <Select
                                id="quantity"
                                mode="multiple"
                                size={size}
                                placeholder="Please select"
                                onChange={handleChange}
                                style={{
                                  width: "100%",
                                }}
                                options={options}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3">
                              <Label htmlFor="size">Size</Label>
                              <Select
                                id="size"
                                mode="multiple"
                                size={size}
                                placeholder="Please select"
                                onChange={handleChange}
                                style={{
                                  width: "100%",
                                }}
                                options={options}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3">
                              <Label htmlFor="colors">Colors</Label>
                              <Select
                                id="colors"
                                mode="multiple"
                                size={size}
                                placeholder="Please select"
                                onChange={handleChange}
                                style={{
                                  width: "100%",
                                }}
                                options={options}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3">
                              <Label
                                htmlFor="check_review"
                                className="form-label pt-4 pr-1"
                              >
                                Enable Reviews{" "}
                              </Label>
                              <Checkbox id="check_review"></Checkbox>
                            </div>
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <FormGroup>
                    <Button type="primary" size="large" onClick={handleSubmit}>
                      Publish Product
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <Label for="categories">Categories </Label>
                    <div className="category-section">
                      <div className="section-one">
                        <div className="all-category">
                          <a
                            href="#"
                            onClick={() => switchTab("allcat")}
                          >
                            All Category
                          </a>
                        </div>
                        <div className="most-used">
                          <a
                            href="javascript:void(e)"
                            onClick={() => switchTab("mostused")}
                          >
                            Most Used
                          </a>
                        </div>
                      </div>
                      <div className="section-details">
                        <div
                          className={
                            allCategory
                              ? "all-category-details active-tab"
                              : "all-category-details deactive-tab"
                          }
                        >
                          <ul>
                            <li>
                              <label>
                                <input
                                  value="800"
                                  type="checkbox"
                                  name="tax_input[wpdmcategory][]"
                                  id="in-wpdmcategory-800"
                                />
                                Uncategorized
                              </label>
                            </li>

                            <li>
                              <label>
                                <input
                                  value="800"
                                  type="checkbox"
                                  name="tax_input[wpdmcategory][]"
                                  id="in-wpdmcategory-800"
                                />
                                Cat1
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={
                            mostUsedCat
                              ? "most-used-details active-tab"
                              : "most-used-details deactive-tab"
                          }
                        >
                          <ul>
                            <li>
                              <label>
                                <input
                                  value="800"
                                  type="checkbox"
                                  name="tax_input[wpdmcategory][]"
                                  id="in-wpdmcategory-800"
                                />
                                Uncategorized
                              </label>
                            </li>

                            <li>
                              <label>
                                <input
                                  value="800"
                                  type="checkbox"
                                  name="tax_input[wpdmcategory][]"
                                  id="in-wpdmcategory-800"
                                />
                                Cat1
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="section-two">
                        <div className="add-new-category">Add New Category</div>
                      </div>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label for="categories">Tags</Label>
                    <Select
                      mode="tags"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      tokenSeparators={[","]}
                      options={options}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="featured_image">Product Image</Label>
                    <ImageUploading
        value={featuredImg}
        onChange={onFImageChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove Image</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
                    </ImageUploading>
                   
                  </FormGroup>

                  <FormGroup>
                    <Label> Products Gallery</Label>
                    <ImageUploading
        multiple
        value={images}
        onChange={onImages}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
                    </ImageUploading>
                    
                  </FormGroup>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
