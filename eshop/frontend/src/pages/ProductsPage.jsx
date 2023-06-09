import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import {getAllProductsShopFilter} from "../redux/actions/product.js";
import styles from "../styles/styles";
import { Slider } from 'antd';


const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const {productsFilter,isLoadingf} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  
  const [data, setData] = useState([]);
  const [fdata, setfData] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);

  const [range, setRange] = useState([0, 800]); // Initial range values

  const maxPrice = Math.max.apply(null, data?.map(element => element.originalPrice));;

  const handleCatCheck = (e) => {
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }
    setRange([0, 800]);
    setCategoryIds(inTheState);
    dispatch(getAllProductsShopFilter({category:inTheState}));

  };
  const handleRangeChange = (values) => {
    setCategoryIds('');
    setRange(values);
    dispatch(getAllProductsShopFilter({range:range}));
  };

  useEffect(() => {
    if (categoryIds.length === 0 && (range[0]===0 && range[1]===800)) {
      const d = allProducts;
      setData(d);
      setfData(d);
    } else {
      const d = allProducts;
      const f = productsFilter;
      // allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
      setfData(f);
    }
    //    window.scrollTo(0,0);
  }, [allProducts, productsFilter]);


  useEffect(() => {
    const datas = allProducts;
      setData(datas);
      setfData(datas);
  }, [allProducts]);

  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={3} />

<div className="w-11/12 mx-auto flex bg-[#f5f5f5] py-10">

<div className="bg-[#fff] w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%] filter-card">
      <div className="filter-container">
    <div className="filter-title">Categories:</div>
    <ul className="checkbox-list">
    {data && data?.map((i, index) => 
    <li key={i.category}><input onChange={handleCatCheck} type="checkbox" name='category' value={i.category} checked={categoryIds.includes(i.category)}/>{i.category}</li>
    )}      
    </ul>
     </div>
    <hr />
  <div className="filter-container">
      <div className="filter-title">Price Range:</div>
      <div className="range-container">

<Slider range min={0} max={maxPrice+5} value={range} onChange={handleRangeChange} />

<div className="filter-button">
				<button type="button" className="bg-[#000] hover:bg-teal-500 duration-300 px-3 py-1 rounded-md text-white md:w-auto w-full">Filter</button>
				<p className="ml-3">Range: {range[0]}$ - {range[1]}$</p>
</div>
      </div>
    </div>
    <hr />
  <div className="filter-container">
    <div className="filter-title">Size:</div>
    <ul className="checkbox-list">
      <li><input type="checkbox" name="size" value="small"/>Small</li>
      <li><input type="checkbox" name="size" value="medium"/>Medium</li>
      <li><input type="checkbox" name="size" value="large"/>Large</li>
    </ul>
  </div>
  <hr />
  <div className="filter-container">
    <div className="filter-title">Colors:</div>
    <ul className="checkbox-list">
      <li><input type="checkbox" name="color" value="red"/> <span className="color-filter"></span>Red</li>
      <li><input type="checkbox" name="color" value="blue"/> <span className="color-filter"></span>Blue</li>
      <li><input type="checkbox" name="color" value="green"/> <span className="color-filter"></span>Green</li>
    </ul>
  </div>
  <hr />
  <div className="filter-container">
    <div className="filter-title">Rating:</div>
    <ul className="checkbox-list">
      <li><input type="checkbox" name="rating" value="5"/>5 Stars</li>
      <li><input type="checkbox" name="rating" value="4"/>4 Stars</li>
      <li><input type="checkbox" name="rating" value="3"/>3 Stars</li>
      <li><input type="checkbox" name="rating" value="2"/>2 Stars</li>
      <li><input type="checkbox" name="rating" value="1"/>1 Star</li>
    </ul>
  </div>
  </div>

    <div className="w-full">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 pb-6">
										<div>
											<div className="d-flex align-items-center flex-nowrap">
												<p className="mb-0 font-13 text-nowrap">Sort By:</p>
												<select defaultValue='menu_order' className="form-select ms-3 rounded-0">
													<option value="menu_order">Default sorting</option>
													<option value="popularity">Sort by popularity</option>
													<option value="rating">Sort by average rating</option>
													<option value="date">Sort by newness</option>
													<option value="price">Sort by price: low to high</option>
													<option value="price-desc">Sort by price: high to low</option>
												</select>
											</div>
										</div>
										<div>
											<div className="d-flex align-items-center flex-nowrap">
												<p className="mb-0 font-13 text-nowrap">Show:</p>
												<select defaultValue='9'className="form-select ms-3 rounded-0">
													<option value="9">9</option>
													<option>12</option>
													<option>16</option>
													<option>20</option>
													<option>50</option>
													<option>100</option>
												</select>
											</div>
										</div>
									</div>
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-1 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-3 xl:gap-[30px] mb-12">
          {fdata && fdata.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {fdata && fdata.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      </div>
  </div>
      <Footer />
    </div>
    )
  }
  </>
  );
};

export default ProductsPage;
