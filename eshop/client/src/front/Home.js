import React from 'react'
import Header from './Header'
import SliderC from './Slider'
import { useEffect, useState } from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import promo1 from './assets/images/promo/01.png';
import promo2 from './assets/images/promo/02.png';
import promo3 from './assets/images/promo/03.png';

export default function Home() {

	const [IsShown, setIsShown] = useState(false);

	const removeMsg = ()  => {
     
		localStorage.setItem("discountmsg", "0");
		setIsShown(false);

	}
       useEffect(() => {
		const discountMsg = localStorage.getItem("discountmsg")
		if (!discountMsg) {
			setIsShown(true);
			localStorage.setItem("discountmsg", "1");
		} else if (discountMsg===0)
		{
			setIsShown(false);
		} else if(discountMsg===1)
		{
			setIsShown(true);
		}

		console.log(discountMsg, IsShown);

	   });


  return (
    <>
    <b className="screen-overlay"></b>
	<div className="wrapper">
		{IsShown && <div className="discount-alert d-none d-lg-block">
			<div className="alert alert-dismissible fade show shadow-none rounded-0 mb-0 border-bottom">
				<div className="d-lg-flex align-items-center gap-2 justify-content-center">
					<p className="mb-0">Get Up to <strong>40% OFF</strong> New-Season Styles</p>
				    <a href="" className="bg-dark text-white px-1 font-13 cursor-pointer">Men</a>
					<a href="" className="bg-dark text-white px-1 font-13 cursor-pointer">Women</a>
					<p className="mb-0 font-13">*Limited time only</p>
				</div>
				<button type="button" className="btn-close" data-bs-dismiss="alert" onClick={removeMsg} aria-label="Close"></button>
			</div>
		</div> }
	<Header></Header>	
	<SliderC></SliderC>	
		<div className="page-wrapper">
			<div className="page-content">
				
				<section className="py-3 border-top border-bottom">
					<div className="container">
						<div className="row row-cols-1 row-cols-lg-3 row-group align-items-center">
							<div className="col">
								<div className="d-flex align-items-center p-3 bg-white icon-color">
									<div className="fs-1"><BsFillCartCheckFill/>
									</div>
									<div className="info-box-content ps-3">
										<h6 className="mb-0">FREE SHIPPING &amp; RETURN</h6>
										<p className="mb-0">Free shipping on all orders over $49</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="d-flex align-items-center p-3 bg-white">
									<div className="fs-1"><AiFillDollarCircle />
									</div>
									<div className="info-box-content ps-3">
										<h6 className="mb-0">MONEY BACK GUARANTEE</h6>
										<p className="mb-0">100% money back guarantee</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="d-flex align-items-center p-3 bg-white">
									<div className="fs-1"><i className='bx bx-support'></i>
									</div>
									<div className="info-box-content ps-3">
										<h6 className="mb-0">ONLINE SUPPORT 24/7</h6>
										<p className="mb-0">Awesome Support for 24/7 Days</p>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</section>
				
				<section className="py-4">
					<div className="container">
						<div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
							<div className="col">
								<div className="card rounded-0 border shadow-none">
									<div className="row g-0 align-items-center">
										<div className="col">
											<img src={promo1} className="img-fluid" alt="" />
										</div>
										<div className="col">
											<div className="card-body">
												<h5 className="card-title text-uppercase">Mens' Wear</h5>
												<p className="card-text text-uppercase">Starting at $9</p>	<a href="" className="btn btn-dark btn-ecomm">SHOP NOW</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card rounded-0 border shadow-none">
									<div className="row g-0 align-items-center">
										<div className="col">
											<img src={promo2} className="img-fluid" alt="" />
										</div>
										<div className="col">
											<div className="card-body">
												<h5 className="card-title text-uppercase">Womens' Wear</h5>
												<p className="card-text text-uppercase">Starting at $9</p>	<a href="" className="btn btn-dark btn-ecomm">SHOP NOW</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card rounded-0 border shadow-none">
									<div className="row g-0 align-items-center">
										<div className="col">
											<img src={promo3} className="img-fluid" alt="" />
										</div>
										<div className="col">
											<div className="card-body">
												<h5 className="card-title text-uppercase">Kids' Wear</h5>
												<p className="card-text text-uppercase">Starting at $9</p>	<a href="" className="btn btn-dark btn-ecomm">SHOP NOW</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</section>
				
				<section className="py-4">
					<div className="container">
						<div className="d-flex align-items-center">
							<h5 className="text-uppercase mb-0">FEATURED PRODUCTS</h5>
							<a href="" className="btn btn-dark btn-ecomm ms-auto rounded-0">More Products<i className='bx bx-chevron-right'></i></a>
						</div>
						<hr/>
						<div className="product-grid">
							<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/01.png" className="card-img-top" alt="..." />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"><span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/02.png" className="card-img-top" alt="..." />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-light-4"></i>
														<i className="bx bxs-star text-light-4"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/03.png" className="card-img-top" alt="..."/>
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-light-4"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/04.png" className="card-img-top" alt="..." />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/05.png" className="card-img-top" alt="..." />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-light-4"></i>
														<i className="bx bxs-star text-light-4"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/06.png" className="card-img-top" alt="..." />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/07.png" className="card-img-top" alt="..." />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-light-4"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end gap-3">
												<a href="">
													<div className="product-compare"><span><i className='bx bx-git-compare'></i> Compare</span>
													</div>
												</a>
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/08.png" className="card-img-top" alt="..." />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
														<i className="bx bxs-star text-warning"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm">	<i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</section>
				
				<section className="py-4">
					<div className="container">
						<div className="d-flex align-items-center">
							<h5 className="text-uppercase mb-0">New Arrivals</h5>
							<a href="" className="btn btn-dark ms-auto rounded-0">View All<i className='bx bx-chevron-right'></i></a>
						</div>
						<hr/>
						<div className="product-grid">
							<div className="new-arrivals owl-carousel owl-theme">
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/09.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/10.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/11.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>4.9</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/12.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/13.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>3.9</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/14.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/15.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/16.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/17.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>4.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/18.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/19.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>4.5</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card">
										<div className="card-header bg-transparent border-bottom-0">
											<div className="d-flex align-items-center justify-content-end">
												<a href="">
													<div className="product-wishlist"> <i className='bx bx-heart'></i>
													</div>
												</a>
											</div>
										</div>
										<a href="product-details.html">
											<img src="assets/images/products/20.png" className="card-img-top" alt="" />
										</a>
										<div className="card-body">
											<div className="product-info">
												<a href="">
													<p className="product-catergory font-13 mb-1">Catergory Name</p>
												</a>
												<a href="">
													<h6 className="product-name mb-2">Product Short Name</h6>
												</a>
												<div className="d-flex align-items-center">
													<div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
														<span className="fs-5">$49.00</span>
													</div>
													<div className="cursor-pointer ms-auto">	<span>5.0</span>  <i className="bx bxs-star text-white"></i>
													</div>
												</div>
												<div className="product-action mt-2">
													<div className="d-grid gap-2">
														<a href="" className="btn btn-dark btn-ecomm"> <i className='bx bxs-cart-add'></i>Add to Cart</a>
														<a href="" className="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i className='bx bx-zoom-in'></i>Quick View</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			
				<section className="py-4">
					<div className="container">
						<div className="add-banner">
							<div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
								<div className="col d-flex">
									<div className="card rounded-0 w-100 border shadow-none">
										<img src="assets/images/promo/04.png" className="card-img-top" alt="" />
										<div className="position-absolute top-0 end-0 m-3 product-discount"><span className="">-10%</span>
										</div>
										<div className="card-body">
											<h5 className="card-title">Sunglasses Sale</h5>
											<p className="card-text">See all Sunglasses and get 10% off at all Sunglasses</p> <a href="" className="btn btn-dark btn-ecomm">SHOP BY GLASSES</a>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="card rounded-0 w-100 border shadow-none">
										<div className="position-absolute top-0 end-0 m-3 product-discount"><span className="">-80%</span>
										</div>
										<div className="card-body text-center mt-5">
											<h5 className="card-title">Cosmetics Sales</h5>
											<p className="card-text">Buy Cosmetics products and get 30% off at all Cosmetics</p> <a href="" className="btn btn-dark btn-ecomm">SHOP BY COSMETICS</a>
										</div>
										<img src="assets/images/promo/08.png" className="card-img-top" alt="" />
									</div>
								</div>
								<div className="col d-flex">
									<div className="card rounded-0 w-100 border shadow-none">
										<img src="assets/images/promo/06.png" className="card-img h-100" alt="" />
										<div className="card-img-overlay text-center top-20">
											<div className="border border-white border-3 py-3 bg-dark-3">
												<h5 className="card-title text-white">Fashion Summer Sale</h5>
												<p className="card-text text-uppercase fs-1 lh-1 mt-3 mb-2 text-white">Up to 80% off</p>
												<p className="card-text fs-5 text-white">On top Fashion Brands</p>	<a href="" className="btn btn-white btn-ecomm">SHOP BY FASHION</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="card rounded-0 w-100 border shadow-none">
										<div className="position-absolute top-0 end-0 m-3 product-discount"><span className="">-50%</span>
										</div>
										<div className="card-body text-center">
											<img src="assets/images/promo/07.png" className="card-img-top" alt="" />
											<h5 className="card-title fs-1 text-uppercase">Super Sale</h5>
											<p className="card-text text-uppercase fs-4 lh-1 mb-2">Up to 50% off</p>
											<p className="card-text">On All Electronic</p> <a href="" className="btn btn-dark btn-ecomm">HURRY UP!</a>
										</div>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</section>
			
				<section className="py-4">
					<div className="container">
						<div className="d-flex align-items-center">
							<h5 className="text-uppercase mb-0">Browse Catergory</h5>
							<a href="shop-categories.html" className="btn btn-dark ms-auto rounded-0">View All<i className='bx bx-chevron-right'></i></a>
						</div>
						<hr/>
						<div className="product-grid">
							<div className="browse-category owl-carousel owl-theme">
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/01.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Fashion</h6>
											<p className="mb-0 font-12 text-uppercase">10 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/02.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Watches</h6>
											<p className="mb-0 font-12 text-uppercase">8 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/03.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Shoes</h6>
											<p className="mb-0 font-12 text-uppercase">14 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/04.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Bags</h6>
											<p className="mb-0 font-12 text-uppercase">6 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/05.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Electronis</h6>
											<p className="mb-0 font-12 text-uppercase">6 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/06.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Headphones</h6>
											<p className="mb-0 font-12 text-uppercase">5 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/07.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Furniture</h6>
											<p className="mb-0 font-12 text-uppercase">20 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/08.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Jewelry</h6>
											<p className="mb-0 font-12 text-uppercase">16 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/09.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Sports</h6>
											<p className="mb-0 font-12 text-uppercase">28 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/10.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Vegetable</h6>
											<p className="mb-0 font-12 text-uppercase">15 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/11.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Medical</h6>
											<p className="mb-0 font-12 text-uppercase">24 Products</p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="card-body">
											<img src="assets/images/categories/12.png" className="img-fluid" alt="" />
										</div>
										<div className="card-footer text-center">
											<h6 className="mb-1 text-uppercase">Sunglasses</h6>
											<p className="mb-0 font-12 text-uppercase">18 Products</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="py-4 bg-light">
					<div className="container">
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 row-group">
							<div className="col">
								<div className="text-center">
									<div className="font-50">	<i className='bx bx-cart'></i>
									</div>
									<h2 className="fs-5 text-uppercase mb-0">Free delivery</h2>
									<p className="text-capitalize">Free delivery over $199</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
								</div>
							</div>
							<div className="col">
								<div className="text-center">
									<div className="font-50">	<i className='bx bx-credit-card'></i>
									</div>
									<h2 className="fs-5 text-uppercase mb-0">Secure payment</h2>
									<p className="text-capitalize">We possess SSL / Secure сertificate</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
								</div>
							</div>
							<div className="col">
								<div className="text-center">
									<div className="font-50">	<i className='bx bx-dollar-circle'></i>
									</div>
									<h2 className="fs-5 text-uppercase mb-0">Free returns</h2>
									<p className="text-capitalize">We return money within 30 days</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
								</div>
							</div>
							<div className="col">
								<div className="text-center">
									<div className="font-50">	<i className='bx bx-support'></i>
									</div>
									<h2 className="fs-5 text-uppercase mb-0">Customer Support</h2>
									<p className="text-capitalize">Friendly 24/7 customer support</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
								</div>
							</div>
						</div>
					
					</div>
				</section>
				
				<section className="py-4">
					<div className="container">
						<div className="d-flex align-items-center">
							<h5 className="text-uppercase mb-0">Latest News</h5>
							<a href="blog.html" className="btn btn-dark ms-auto rounded-0">View All News<i className='bx bx-chevron-right'></i></a>
						</div>
						<hr/>
						<div className="product-grid">
							<div className="latest-news owl-carousel owl-theme">
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="news-date">
											<div className="date-number">24</div>
											<div className="date-month">FEB</div>
										</div>
										<a href="">
											<img src="assets/images/blogs/01.png" className="card-img-top border-bottom" alt="" />
										</a>
										<div className="card-body">
											<div className="news-title">
												<a href="">
													<h5 className="mb-3 text-capitalize">Blog Short Title</h5>
												</a>
											</div>
											<p className="news-content mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
										</div>
										<div className="card-footer border-top">
											<a href="">
												<p className="mb-0"><small>0 Comments</small>
												</p>
											</a>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="news-date">
											<div className="date-number">24</div>
											<div className="date-month">FEB</div>
										</div>
										<a href="">
											<img src="assets/images/blogs/02.png" className="card-img-top border-bottom" alt="" />
										</a>
										<div className="card-body">
											<div className="news-title">
												<a href="">
													<h5 className="mb-3 text-capitalize">Blog Short Title</h5>
												</a>
											</div>
											<p className="news-content mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
										</div>
										<div className="card-footer border-top">
											<a href="">
												<p className="mb-0"><small>0 Comments</small>
												</p>
											</a>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="news-date">
											<div className="date-number">24</div>
											<div className="date-month">FEB</div>
										</div>
										<a href="">
											<img src="assets/images/blogs/03.png" className="card-img-top border-bottom" alt="" />
										</a>
										<div className="card-body">
											<div className="news-title">
												<a href="">
													<h5 className="mb-3 text-capitalize">Blog Short Title</h5>
												</a>
											</div>
											<p className="news-content mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
										</div>
										<div className="card-footer border-top">
											<a href="">
												<p className="mb-0"><small>0 Comments</small>
												</p>
											</a>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="news-date">
											<div className="date-number">24</div>
											<div className="date-month">FEB</div>
										</div>
										<a href="">
											<img src="assets/images/blogs/04.png" className="card-img-top border-bottom" alt="" />
										</a>
										<div className="card-body">
											<div className="news-title">
												<a href="">
													<h5 className="mb-3 text-capitalize">Blog Short Title</h5>
												</a>
											</div>
											<p className="news-content mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
										</div>
										<div className="card-footer border-top">
											<a href="">
												<p className="mb-0"><small>0 Comments</small>
												</p>
											</a>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="news-date">
											<div className="date-number">24</div>
											<div className="date-month">FEB</div>
										</div>
										<a href="">
											<img src="assets/images/blogs/05.png" className="card-img-top border-bottom" alt="" />
										</a>
										<div className="card-body">
											<div className="news-title">
												<a href="">
													<h5 className="mb-3 text-capitalize">Blog Short Title</h5>
												</a>
											</div>
											<p className="news-content mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
										</div>
										<div className="card-footer border-top">
											<a href="">
												<p className="mb-0"><small>0 Comments</small>
												</p>
											</a>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card rounded-0 product-card border">
										<div className="news-date">
											<div className="date-number">24</div>
											<div className="date-month">FEB</div>
										</div>
										<a href="">
											<img src="assets/images/blogs/06.png" className="card-img-top border-bottom" alt="" />
										</a>
										<div className="card-body">
											<div className="news-title">
												<a href="">
													<h5 className="mb-3 text-capitalize">Blog Short Title</h5>
												</a>
											</div>
											<p className="news-content mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
										</div>
										<div className="card-footer border-top">
											<a href="">
												<p className="mb-0"><small>0 Comments</small>
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			
				<section className="py-4">
					<div className="container">
						<h3 className="d-none">Brands</h3>
						<div className="brand-grid">
							<div className="brands-shops owl-carousel owl-theme border">
								<div className="item border-end">
									<div className="p-4">
										<a href="">
											<img src="assets/images/brands/01.png" className="img-fluid" alt="" />
										</a>
									</div>
								</div>
								<div className="item border-end">
									<div className="p-4">
										<a href="">
											<img src="assets/images/brands/02.png" className="img-fluid" alt="" />
										</a>
									</div>
								</div>
								<div className="item border-end">
									<div className="p-4">
										<a href="">
											<img src="assets/images/brands/03.png" className="img-fluid" alt="" />
										</a>
									</div>
								</div>
								<div className="item border-end">
									<div className="p-4">
										<a href="">
											<img src="assets/images/brands/04.png" className="img-fluid" alt="" />
										</a>
									</div>
								</div>
								<div className="item border-end">
									<div className="p-4">
										<a href="">
											<img src="assets/images/brands/05.png" className="img-fluid" alt="" />
										</a>
									</div>
								</div>
								<div className="item border-end">
									<div className="p-4">
										<a href="">
											<img src="assets/images/brands/06.png" className="img-fluid" alt="" />
										</a>
									</div>
								</div>
								<div className="item border-end">
									<div className="p-4">
										<a href="">
											<img src="assets/images/brands/07.png" className="img-fluid" alt="" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="py-4 border-top">
					<div className="container">
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
							<div className="col">
								<div className="bestseller-list mb-3">
									<h6 className="mb-3 text-uppercase">Best Selling Products</h6>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/01.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/02.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/03.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/04.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="featured-list mb-3">
									<h6 className="mb-3 text-uppercase">Featured Products</h6>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/05.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/06.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/07.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/08.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="new-arrivals-list mb-3">
									<h6 className="mb-3 text-uppercase">New arrivals</h6>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="jproduct-details.html">
												<img src="assets/images/products/09.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/10.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/11.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/12.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="top-rated-products-list mb-3">
									<h6 className="mb-3 text-uppercase">Top rated Products</h6>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/13.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/14.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/15.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
									<hr/>
									<div className="d-flex align-items-center">
										<div className="bottom-product-img">
											<a href="product-details.html">
												<img src="assets/images/products/16.png" width="100" alt="" />
											</a>
										</div>
										<div className="ms-0">
											<h6 className="mb-0 fw-light mb-1">Product Short Name</h6>
											<div className="rating font-12"> <i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
												<i className="bx bxs-star text-warning"></i>
											</div>
											<p className="mb-0"><strong>$59.00</strong>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					
					</div>
				</section>
				
			</div>
		</div>

		<footer>
			<section className="py-4 border-top bg-light">
				<div className="container">
					<div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
						<div className="col">
							<div className="footer-section1 mb-3">
								<h6 className="mb-3 text-uppercase">Contact Info</h6>
								<div className="address mb-3">
									<p className="mb-0 text-uppercase">Address</p>
									<p className="mb-0 font-12">123 Street Name, City, Australia</p>
								</div>
								<div className="phone mb-3">
									<p className="mb-0 text-uppercase">Phone</p>
									<p className="mb-0 font-13">Toll Free (123) 472-796</p>
									<p className="mb-0 font-13">Mobile : +91-9910XXXX</p>
								</div>
								<div className="email mb-3">
									<p className="mb-0 text-uppercase">Email</p>
									<p className="mb-0 font-13">mail@example.com</p>
								</div>
								<div className="working-days mb-3">
									<p className="mb-0 text-uppercase">WORKING DAYS</p>
									<p className="mb-0 font-13">Mon - FRI / 9:30 AM - 6:30 PM</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="footer-section2 mb-3">
								<h6 className="mb-3 text-uppercase">Shop Categories</h6>
								<ul className="list-unstyled">
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Jeans</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> T-Shirts</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Sports</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Shirts & Tops</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Clogs & Mules</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Sunglasses</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Bags & Wallets</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Sneakers & Athletic</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Electronis</a>
									</li>
									<li className="mb-1"><a href=""><i className='bx bx-chevron-right'></i> Furniture</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="footer-section3 mb-3">
								<h6 className="mb-3 text-uppercase">Popular Tags</h6>
								<div className="tags-box"> <a href="" className="tag-link">Cloths</a>
									<a href="" className="tag-link">Electronis</a>
									<a href="" className="tag-link">Furniture</a>
									<a href="" className="tag-link">Sports</a>
									<a href="" className="tag-link">Men Wear</a>
									<a href="" className="tag-link">Women Wear</a>
									<a href="" className="tag-link">Laptops</a>
									<a href="" className="tag-link">Formal Shirts</a>
									<a href="" className="tag-link">Topwear</a>
									<a href="" className="tag-link">Headphones</a>
									<a href="" className="tag-link">Bottom Wear</a>
									<a href="" className="tag-link">Bags</a>
									<a href="" className="tag-link">Sofa</a>
									<a href="" className="tag-link">Shoes</a>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="footer-section4 mb-3">
								<h6 className="mb-3 text-uppercase">Stay informed</h6>
								<div className="subscribe">
									<input type="text" className="form-control radius-30" placeholder="Enter Your Email" />
									<div className="mt-2 d-grid">	<a href="" className="btn btn-dark btn-ecomm radius-30">Subscribe</a>
									</div>
									<p className="mt-2 mb-0 font-13">Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
								</div>
								<div className="download-app mt-3">
									<h6 className="mb-3 text-uppercase">Download our app</h6>
									<div className="d-flex align-items-center gap-2">
										<a href="">
											<img src="assets/images/icons/apple-store.png" className="" width="160" alt="" />
										</a>
										<a href="">
											<img src="assets/images/icons/play-store.png" className="" width="160" alt="" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<hr/>
					<div className="row row-cols-1 row-cols-md-2 align-items-center">
						<div className="col">
							<p className="mb-0">Copyright © 2021. All right reserved.</p>
						</div>
						<div className="col text-end">
							<div className="payment-icon">
								<div className="row row-cols-auto g-2 justify-content-end">
									<div className="col">
										<img src="assets/images/icons/visa.png" alt="" />
									</div>
									<div className="col">
										<img src="assets/images/icons/paypal.png" alt="" />
									</div>
									<div className="col">
										<img src="assets/images/icons/mastercard.png" alt="" />
									</div>
									<div className="col">
										<img src="assets/images/icons/american-express.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</section>
		</footer>
		
		<div className="modal fade" id="QuickViewProduct">
			<div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-xl-down">
				<div className="modal-content rounded-0 border-0">
					<div className="modal-body">
						<button type="button" className="btn-close float-end" data-bs-dismiss="modal"></button>
						<div className="row g-0">
							<div className="col-12 col-lg-6">
								<div className="image-zoom-section">
									<div className="product-gallery owl-carousel owl-theme border mb-3 p-3" data-slider-id="1">
										<div className="item">
											<img src="assets/images/product-gallery/01.png" className="img-fluid" alt="" />
										</div>
										<div className="item">
											<img src="assets/images/product-gallery/02.png" className="img-fluid" alt="" />
										</div>
										<div className="item">
											<img src="assets/images/product-gallery/03.png" className="img-fluid" alt="" />
										</div>
										<div className="item">
											<img src="assets/images/product-gallery/04.png" className="img-fluid" alt="" />
										</div>
									</div>
									<div className="owl-thumbs d-flex justify-content-center" data-slider-id="1">
										<button className="owl-thumb-item">
											<img src="assets/images/product-gallery/01.png" className="" alt="" />
										</button>
										<button className="owl-thumb-item">
											<img src="assets/images/product-gallery/02.png" className="" alt="" />
										</button>
										<button className="owl-thumb-item">
											<img src="assets/images/product-gallery/03.png" className="" alt="" />
										</button>
										<button className="owl-thumb-item">
											<img src="assets/images/product-gallery/04.png" className="" alt="" />
										</button>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="product-info-section p-3">
									<h3 className="mt-3 mt-lg-0 mb-0">Allen Solly Men's Polo T-Shirt</h3>
									<div className="product-rating d-flex align-items-center mt-2">
										<div className="rates cursor-pointer font-13">	<i className="bx bxs-star text-warning"></i>
											<i className="bx bxs-star text-warning"></i>
											<i className="bx bxs-star text-warning"></i>
											<i className="bx bxs-star text-warning"></i>
											<i className="bx bxs-star text-light-4"></i>
										</div>
										<div className="ms-1">
											<p className="mb-0">(24 Ratings)</p>
										</div>
									</div>
									<div className="d-flex align-items-center mt-3 gap-2">
										<h5 className="mb-0 text-decoration-line-through text-light-3">$98.00</h5>
										<h4 className="mb-0">$49.00</h4>
									</div>
									<div className="mt-3">
										<h6>Discription :</h6>
										<p className="mb-0">Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>
									</div>
									<dl className="row mt-3">	<dt className="col-sm-3">Product id</dt>
										<dd className="col-sm-9">#BHU5879</dd>	<dt className="col-sm-3">Delivery</dt>
										<dd className="col-sm-9">Russia, USA, and Europe</dd>
									</dl>
									<div className="row row-cols-auto align-items-center mt-3">
										<div className="col">
											<label className="form-label">Quantity</label>
											<select className="form-select form-select-sm" defaultValue={''}>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="col">
											<label className="form-label">Size</label>
											<select className="form-select form-select-sm" defaultValue={''}>
												<option>S</option>
												<option>M</option>
												<option>L</option>
												<option>XS</option>
												<option>XL</option>
											</select>
										</div>
										<div className="col">
											<label className="form-label">Colors</label>
											<div className="color-indigators d-flex align-items-center gap-2">
												<div className="color-indigator-item bg-primary"></div>
												<div className="color-indigator-item bg-danger"></div>
												<div className="color-indigator-item bg-success"></div>
												<div className="color-indigator-item bg-warning"></div>
											</div>
										</div>
									</div>
									
									<div className="d-flex gap-2 mt-3">
										<a href="" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add"></i>Add to Cart</a>	<a href="" className="btn btn-light btn-ecomm"><i className="bx bx-heart"></i>Add to Wishlist</a>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
	 <a href="" className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></a>
		
	</div>

    
    </>
  )
}
