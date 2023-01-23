import '../App.css';
import React, { useEffect, useState } from "react";
import { useGetDataQuery } from '../store/ApiSlice';

  export const renderData = (currentItems) =>
  { return (
  
    <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>
          <span className="custom-checkbox">
            <input type="checkbox" id="selectAll" />
            <label htmlFor="selectAll"></label>
          </span>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>	

{ currentItems ? currentItems.map((values) => (	

<tr key={values._id}>
<td>
  <span className="custom-checkbox">
    <input type="checkbox" id="checkbox5" name="options[]" value="1" />
    <label htmlFor="checkbox5"></label>
  </span>
</td>
<td>{values.name}</td>
<td>{values.email}</td>
<td>{values.address}</td>
<td>{values.mobile}</td>
{/* <td>
  <div onClick={(e) => etoggle(e, values._id)} className="edit" ><FiEdit></FiEdit></div>
  <a href={`delete/${values._id}`} className="delete"><FiTrash2></FiTrash2></a>
</td> */}
</tr> 
))
: <tr><td>No Data Available</td></tr>
}

    </tbody>
  </table>
    
    )};
  
  function PaginationComponent() {

    const {data:dataQuery, isLoading, isFetching} = useGetDataQuery();

    const [employeeData, setEmployeeData] = useState([]);
  
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(2);
  
    const [pageNumberLimit, setpageNumberLimit] = useState(2);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  
   

    useEffect(() => {

      fetch('http://localhost:5000/api/getData')
      .then((response) => response.json())
      .then((data) => setEmployeeData(data));
    
      }, []);


    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
      };

    const pages = [];
    
    if( employeeData.length > 0 || employeeData !=='undefined') {  
    for (let i = 1; i <= Math.ceil(employeeData.length / itemsPerPage); i++) {
      pages.push(i);
    }
   }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employeeData.slice(indexOfFirstItem, indexOfLastItem);


    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage == number ? "active" : null}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });
  
    const handleNextbtn = () => {
      setcurrentPage(currentPage + 1);
  
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };
  
    const handlePrevbtn = () => {
      setcurrentPage(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit == 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };
  
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }
  
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }
  
    const handleLoadMore = () => {
      setitemsPerPage(itemsPerPage + 2);
    };
   
    

    return (
      <>

        { renderData(currentItems)
        }
        <ul className="pageNumbers">
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
  
          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
        <button onClick={handleLoadMore} className="loadmore">
          Load More
        </button>
      </>
    );
  }
  
  export default PaginationComponent;