import './App.css';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
function App() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {

    e.preventDefault();

  }

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
                  <label for="selectAll"></label>
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
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox5" name="options[]" value="1" />
                  <label for="checkbox5"></label>
                </span>
              </td>
              <td>Martin Blank</td>
              <td>martinblank@mail.com</td>
              <td>Via Monte Bianco 34, Turin, Italy</td>
              <td>(480) 631-2097</td>
              <td>
                <div className="edit" ><FiEdit></FiEdit></div>
                <div className="delete"><FiTrash2></FiTrash2></div>
              </td>
            </tr> 
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox5" name="options[]" value="1" />
                  <label for="checkbox5"></label>
                </span>
              </td>
              <td>Martin Blank</td>
              <td>martinblank@mail.com</td>
              <td>Via Monte Bianco 34, Turin, Italy</td>
              <td>(480) 631-2097</td>
              <td>
                <div className="edit" ><FiEdit></FiEdit></div>
                <div className="delete"><FiTrash2></FiTrash2></div>
              </td>
            </tr> 

            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox5" name="options[]" value="1" />
                  <label for="checkbox5"></label>
                </span>
              </td>
              <td>Martin Blank</td>
              <td>martinblank@mail.com</td>
              <td>Via Monte Bianco 34, Turin, Italy</td>
              <td>(480) 631-2097</td>
              <td>
                <div className="edit" ><FiEdit></FiEdit></div>
                <div className="delete"><FiTrash2></FiTrash2></div>
              </td>
            </tr> 

            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox5" name="options[]" value="1" />
                  <label for="checkbox5"></label>
                </span>
              </td>
              <td>Martin Blank</td>
              <td>martinblank@mail.com</td>
              <td>Via Monte Bianco 34, Turin, Italy</td>
              <td>(480) 631-2097</td>
              <td>
                <div className="edit" ><FiEdit></FiEdit></div>
                <div className="delete"><FiTrash2></FiTrash2></div>
              </td>
            </tr> 

            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox5" name="options[]" value="1" />
                  <label for="checkbox5"></label>
                </span>
              </td>
              <td>Martin Blank</td>
              <td>martinblank@mail.com</td>
              <td>Via Monte Bianco 34, Turin, Italy</td>
              <td>(480) 631-2097</td>
              <td>
                <div className="edit" ><FiEdit></FiEdit></div>
                <div className="delete"><FiTrash2></FiTrash2></div>
              </td>
            </tr> 

          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
          <ul className="pagination">
            <li className="page-item disabled"><a href="#">Previous</a></li>
            <li className="page-item"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item active"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">4</a></li>
            <li className="page-item"><a href="#" className="page-link">5</a></li>
            <li className="page-item"><a href="#" className="page-link">Next</a></li>
          </ul>
        </div>
      </div>
    </div>        
  </div>

  <Modal isOpen={modal} toggle={toggle} >
  <div>
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Add Employee</h4>
					<button type="button" class="close" onClick={toggle}>&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-control" required />
					</div>
					<div class="form-group">
						<label>Email</label>
						<input type="email" class="form-control" required />
					</div>
					<div class="form-group">
						<label>Address</label>
						<textarea class="form-control" required></textarea>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input type="text" class="form-control" required />
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" value="Cancel" onClick={toggle} />
					<input type="submit" class="btn btn-success" value="Add" onClick={handleSubmit} />
				</div>
			</form>
		
	</div>
</div>
  </Modal>
 
  </Fragment>
  );
}

export default App;
