import React, { useState } from "react";
import "../../css/Back-Css-Inc";
import demo from "../../images/demo.jpg";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Checkbox,
  InputNumber,
  Select,
  Upload,
  message,
  Modal,
  Button,
} from "antd";
import { Form, FormGroup, Input, Label } from "reactstrap";
import ReactQuill from "react-quill";


export default function CreateProduct() {
  const [modal, setModal] = useState(false);
  const [allCategory, setallCategory] = useState(true);
  const [mostUsedCat, setmostUsedCat] = useState(false);
  const [ImageValue, setImageValue] = useState(demo);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [featuredImg, setFeaturedImage] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

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

  const handleImage = (e) => {
    setImageValue(URL.createObjectURL(e.target.files[0]));
    setFeaturedImage(e.target.files[0]);
  };

  const options = [
    { value: "red", Label: "Red" },
    { value: "green", Label: "Green" },
  ];

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const [size, setSize] = useState("middle");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange2 = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    //console.log(info.file);
    // if (info.file.status === "error") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
   // }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange3 = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton2 = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

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
                    <Upload
                      name="avatar"
                      action="admin-dashboard/create-product"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={beforeUpload}
                      onChange={handleChange2}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{
                            width: "100%",
                          }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </FormGroup>

                  <FormGroup>
                    <Label> Products Gallery</Label>
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange3}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                      open={previewOpen}
                      title={previewTitle}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage}
                      />
                    </Modal>
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
