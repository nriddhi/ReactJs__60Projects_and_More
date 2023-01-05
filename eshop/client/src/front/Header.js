import React from "react";
import { useState } from "react";
import product1 from "../front/assets/images/products/01.png";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Select } from "antd";

export default function Header() {
  const [cartDrop, setCartDrop] = useState(false);

  const handleCartDrop = () => {
    setCartDrop(!cartDrop);
  };

  const items = [

	{
		label: (
		  <div>
			<i class="flag-icon flag-icon-um"></i>         
			<span> English</span>
		  </div>
		),
		key: "01",
	  },

    {
      label: (
        <div>
          <i class="flag-icon flag-icon-de me-2"></i>
          <span>German</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div>
          <i class="flag-icon flag-icon-fr me-2"></i>
          <span>French</span>
        </div>
      ),
      key: "1",
    },
  ];

  const items2 = [
    {
      label: (
        <div>
          <span>USD</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div>
          <span>EUR</span>
        </div>
      ),
      key: "1",
    },
  ];

  const handleChange = () => {

  };

  const languagesDefault = [
    {
      label: (
        <div>
          <i class="flag-icon flag-icon-um"></i>         
          <span> English</span>
        </div>
      ),
      key: "01",
    }
  ];

  
  return (
    <div>
      <div className="header-wrapper">
        <div className="top-menu border-bottom">
          <div className="container">
            <nav className="navbar navbar-expand">
              <div className="shiping-title text-uppercase font-13 d-none d-sm-flex">
                Welcome to our eStore!
              </div>
              <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="order-tracking.html">
                    Track Order
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="about-us.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="shop-categories.html">
                    Our Stores
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="contact-us.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="">
                    Help & FAQs
                  </a>
                </li>
              </ul>

              <ul class="navbar-nav">
				
				<li className="nav-item dropdown">
				  <Select
				  suffixIcon={<CaretDownOutlined/>}
				  bordered= {false}
                  defaultValue='USD'
                  style={{ width: 80 }}
                  onChange={handleChange}
                  options={items2}
                  />
        </li>
              
               
                <li className="nav-item dropdown">
				  <Select
				  suffixIcon={<CaretDownOutlined/>}
				  bordered= {false}
                  defaultValue={languagesDefault}
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={items}
                  />
                </li>
              </ul>

              <ul className="navbar-nav social-link ms-lg-2 ms-auto">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-content pb-3 pb-md-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4 col-md-auto">
                <div className="d-flex align-items-center">
                  <div
                    className="mobile-toggle-menu d-lg-none px-lg-2"
                    data-trigger="#navbar_main"
                  >
                    <i className="bx bx-menu"></i>
                  </div>
                  <div className="logo d-none d-lg-flex">
                    <a href="index.html">
                      <img
                        src="assets/images/logo-icon.png"
                        className="logo-icon"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-md order-4 order-md-2">
                <div className="input-group flex-nowrap px-xl-4">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Search for Products"
                  />
                  <li className="nav-item dropdown">
				  <Select
				    suffixIcon={<CaretDownOutlined/>}
                  defaultValue='All Categories'
                  style={{ width:170 }}
                  listHeight={2500}
                  size='large'
                  onChange={handleChange}
                  options={items2}
                  />
        </li>
                  <span className="input-group-text cursor-pointer bg-transparent">
                    <i className="bx bx-search"></i>
                  </span>
                </div>
              </div>
              <div className="col-4 col-md-auto order-3 d-none d-xl-flex align-items-center">
                <div className="fs-1 text-white">
                  <i className="bx bx-headphone"></i>
                </div>
                <div className="ms-2">
                  <p className="mb-0 font-13">CALL US NOW</p>
                  <h5 className="mb-0">+011 5827918</h5>
                </div>
              </div>
              <div className="col-4 col-md-auto order-2 order-md-4">
                <div className="top-cart-icons float-end">
                  <nav className="navbar navbar-expand">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a
                          href="account-dashboard.html"
                          className="nav-link cart-link"
                        >
                          <i className="bx bx-user"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="wishlist.html" className="nav-link cart-link">
                          <i className="bx bx-heart"></i>
                        </a>
                      </li>
                      <li className="nav-item dropdown dropdown-large">
                        <div
                          onClick={handleCartDrop}
                          className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative cart-link"
                          data-bs-toggle="dropdown"
                        >
                          {" "}
                          <span className="alert-count">8</span>
                          <i className="bx bx-shopping-bag"></i>
                        </div>
                        {cartDrop && (
                          <div className="dropdown-menu dropdown-menu-end show">
                            <a href="javascript:void(e)">
                              <div className="cart-header">
                                <p className="cart-header-title mb-0">
                                  8 ITEMS
                                </p>
                                <p className="cart-header-clear ms-auto mb-0">
                                  VIEW CART
                                </p>
                              </div>
                            </a>
                            <div className="cart-list">
                              <a className="dropdown-item" href="">
                                <div className="d-flex align-items-center">
                                  <div className="flex-grow-1">
                                    <h6 className="cart-product-title">
                                      Men White T-Shirt
                                    </h6>
                                    <p className="cart-product-price">
                                      1 X $29.00
                                    </p>
                                  </div>
                                  <div className="position-relative">
                                    <div className="cart-product-cancel position-absolute">
                                      <i className="bx bx-x"></i>
                                    </div>
                                    <div className="cart-product">
                                      <img
                                        src={product1}
                                        className=""
                                        alt="product image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item" href="">
                                <div className="d-flex align-items-center">
                                  <div className="flex-grow-1">
                                    <h6 className="cart-product-title">
                                      Puma Sports Shoes
                                    </h6>
                                    <p className="cart-product-price">
                                      1 X $29.00
                                    </p>
                                  </div>
                                  <div className="position-relative">
                                    <div className="cart-product-cancel position-absolute">
                                      <i className="bx bx-x"></i>
                                    </div>
                                    <div className="cart-product">
                                      <img
                                        src={product1}
                                        className=""
                                        alt="product image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item" href="">
                                <div className="d-flex align-items-center">
                                  <div className="flex-grow-1">
                                    <h6 className="cart-product-title">
                                      Women Red Sneakers
                                    </h6>
                                    <p className="cart-product-price">
                                      1 X $29.00
                                    </p>
                                  </div>
                                  <div className="position-relative">
                                    <div className="cart-product-cancel position-absolute">
                                      <i className="bx bx-x"></i>
                                    </div>
                                    <div className="cart-product">
                                      <img
                                        src={product1}
                                        className=""
                                        alt="product image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <a href="">
                              <div className="text-center cart-footer d-flex align-items-center">
                                <h5 className="mb-0">TOTAL</h5>
                                <h5 className="mb-0 ms-auto">$189.00</h5>
                              </div>
                            </a>
                            <div className="d-grid p-3 border-top">
                              {" "}
                              <a href="" className="btn btn-dark btn-ecomm">
                                CHECKOUT
                              </a>
                            </div>
                          </div>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="primary-menu border-top">
          <div className="container">
            <nav
              id="navbar_main"
              className="mobile-offcanvas navbar navbar-expand-lg"
            >
              <div className="offcanvas-header">
                <button className="btn-close float-end"></button>
                <h5 className="py-2">Navigation</h5>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  {" "}
                  <a className="nav-link" href="index.html">
                    Home{" "}
                  </a>
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Categories <i className="bx bx-chevron-down"></i>
                  </a>
                  <div className="dropdown-menu dropdown-large-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="large-menu-title">Fashion</h6>
                        <ul className="">
                          <li>
                            <a href="#">Casual T-Shirts</a>
                          </li>
                          <li>
                            <a href="#">Formal Shirts</a>
                          </li>
                          <li>
                            <a href="#">Jackets</a>
                          </li>
                          <li>
                            <a href="#">Jeans</a>
                          </li>
                          <li>
                            <a href="#">Dresses</a>
                          </li>
                          <li>
                            <a href="#">Sneakers</a>
                          </li>
                          <li>
                            <a href="#">Belts</a>
                          </li>
                          <li>
                            <a href="#">Sports Shoes</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <h6 className="large-menu-title">Electronics</h6>
                        <ul className="">
                          <li>
                            <a href="#">Mobiles</a>
                          </li>
                          <li>
                            <a href="#">Laptops</a>
                          </li>
                          <li>
                            <a href="#">Macbook</a>
                          </li>
                          <li>
                            <a href="#">Televisions</a>
                          </li>
                          <li>
                            <a href="#">Lighting</a>
                          </li>
                          <li>
                            <a href="#">Smart Watch</a>
                          </li>
                          <li>
                            <a href="#">Galaxy Phones</a>
                          </li>
                          <li>
                            <a href="#">PC Monitors</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <div className="pramotion-banner1">
                          <img
                            src="assets/images/gallery/menu-img.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Shop <i className="bx bx-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="#"
                      >
                        Shop Layouts{" "}
                        <i className="bx bx-chevron-right float-end"></i>
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-grid-left-sidebar.html"
                          >
                            Shop Grid - Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-grid-right-sidebar.html"
                          >
                            Shop Grid - Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-list-left-sidebar.html"
                          >
                            Shop List - Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-list-right-sidebar.html"
                          >
                            Shop List - Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-grid-filter-on-top.html"
                          >
                            Shop Grid - Top Filter
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-list-filter-on-top.html"
                          >
                            Shop List - Top Filter
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="#"
                      >
                        Shop Pages{" "}
                        <i className="bx bx-chevron-right float-end"></i>
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="shop-cart.html">
                            Shop Cart
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-categories.html"
                          >
                            Shop Categories
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="checkout-details.html"
                          >
                            Checkout Details
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="checkout-shipping.html"
                          >
                            Checkout Shipping
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="checkout-payment.html"
                          >
                            Checkout Payment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="checkout-review.html"
                          >
                            Checkout Review
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="checkout-complete.html"
                          >
                            Checkout Complete
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="order-tracking.html"
                          >
                            Order Tracking
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="product-comparison.html"
                          >
                            Product Comparison
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="about-us.html">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contact-us.html">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="authentication-signin.html"
                      >
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="authentication-signup.html"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="authentication-forgot-password.html"
                      >
                        Forgot Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="blog.html">
                    Blog{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="about-us.html">
                    About Us{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="contact-us.html">
                    Contact Us{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="shop-categories.html">
                    Our Store
                  </a>
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    My Account <i className="bx bx-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-dashboard.html"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-downloads.html"
                      >
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="account-orders.html">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-payment-methods.html"
                      >
                        Payment Methods
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-user-details.html"
                      >
                        User Details
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
