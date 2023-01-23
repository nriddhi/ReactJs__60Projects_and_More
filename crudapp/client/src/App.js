import './App.css';
import {  Modal } from 'reactstrap'
import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useCreateDataMutation, useEditDataMutation, useGetDataQuery } from './store/ApiSlice';
import FormData from 'form-data';


function App() {

  const [userData, {isError}] = useCreateDataMutation();
  const {data, isLoading, isFetching} = useGetDataQuery();
  const [editData, {isLoading:loadData}]  = useEditDataMutation();
  const [modal, setModal] = useState(false);
  const [emodal, seteModal] = useState(false);
  const [editResData, setEditResData] = useState('');

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);
  
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


  if(isLoading || loadData || isFetching ) return 'Loading...';


  const toggle = () => setModal(!modal);

  const etoggle = async(e, id) => { 
    e.preventDefault();
    if(id!==undefined) {
    const editRes= await editData({id, data});
    setEditResData(editRes);
    setId(editRes.data? editRes.data._id: '');
    setName(editRes.data? editRes.data.name: '');
    setEmail(editRes.data? editRes.data.email: '');
    setAddress(editRes.data? editRes.data.address: '');
    setMobile(editRes.data? editRes.data.mobile: '');
    }
    console.log(id);
    seteModal(!emodal);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const formdata = new FormData();

    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('address', address);
    formdata.append('mobile', mobile);


    const response = userData({
      name, email, address, mobile
    });


  }

  const handleUpdate = (e) => {

    e.preventDefault();

    const formdata = new FormData();

    
    formdata.append('id', id);
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('address', address);
    formdata.append('mobile', mobile);

    const response = editData({id, name, email, address, mobile });

  }


  /* Pagination */

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

const pages = [];

if( data.length > 0 || data !=='undefined') {  
for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
  pages.push(i);
}
}

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


const renderPageNumbers = pages.map((number) => {
  if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
    return (
      <li className={currentPage == number ? "active" : 'page-item'}>
        <a key={number}
        id={number} className='page-link' onClick={handleClick}>{number}</a>
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
    <Fragment>
    <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Manage <b>Employees</b></h2>
            </div>
            <div className="col-sm-6">
              <div className="btn btn-success"  onClick={toggle}> <span>Add New Employee</span></div>
              <div className="btn btn-danger"><span> Delete </span></div>						
            </div>
          </div>
        </div>
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
      <td>
        <div onClick={(e) => etoggle(e, values._id)} className="edit" ><FiEdit></FiEdit></div>
        <a href={`delete/${values._id}`} className="delete"><FiTrash2></FiTrash2></a>
      </td>
    </tr> 
    ))
    : <tr><td>No Data Available</td></tr>
  }
  
          </tbody>
        </table>

        <div className="clearfix">
        <div className="hint-text">Showing <b>{indexOfLastItem}</b> out of <b>{data.length}</b> entries</div>
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >
              Previous
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
        </div>
      </div>
    </div>        
  </div>

  <Modal isOpen={modal} toggle={toggle} >
  <div>
		<div className="modal-content">
			<form>
				<div className="modal-header">						
					<h4 className="modal-title">Add Employee</h4>
					<button type="button" className="close" onClick={toggle}>&times;</button>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name</label>
						<input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea name='address' value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" name='phone' value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" required />
					</div>					
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" value="Cancel" onClick={toggle} />
					<input type="submit" className="btn btn-success" value="Add" onClick={handleSubmit} />
				</div>
			</form>
		
	</div>
</div>
  </Modal>

  <Modal isOpen={emodal} toggle={etoggle} >
  <div>
		<div className="modal-content">
			<form>
				<div className="modal-header">						
					<h4 className="modal-title">Add Employee</h4>
					<button type="button" className="close" onClick={etoggle}>&times;</button>
				</div>
				<div className="modal-body">	

        <input type="hidden" name='id'  defaultValue={editResData.data? editResData.data._id : id} onChange={(e) => setId(e.target.value)} className="form-control"/>			

					<div className="form-group">
						<label>Name</label>
						<input type="text" name='name'  defaultValue={editResData.data? editResData.data.name : name} onChange={(e) => setName(e.target.value)} className="form-control" required />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" name='email' defaultValue={editResData.data? editResData.data.email : email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea name='address' defaultValue={editResData.data? editResData.data.address : address} onChange={(e) => setAddress(e.target.value)} className="form-control" required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" name='phone' defaultValue={editResData.data? editResData.data.mobile : mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" required />
					</div>					
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" value="Cancel" onClick={etoggle} />
					<input type="submit" className="btn btn-success" value="Update" onClick={handleUpdate} />
				</div>
			</form>
		
	</div>
</div>
  </Modal>
 
  </Fragment>
  );
}

export default App;
