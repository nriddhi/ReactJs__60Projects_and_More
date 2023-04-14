import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App2.css';

const CrudApp = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(result.data.map((item) => ({ ...item, selected: false })));
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleModalOpen = (mode, item) => {
    setModalMode(mode);
    if (mode === 'edit') {
      setFormData(item);
    } else {
      setFormData({
        id: '',
        name: '',
        email: '',
        phone: '',
      });
    }
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalMode === 'add') {
      setData((prevData) => [
        ...prevData,
        {
          ...formData,
          id: prevData.length + 1,
          selected: false,
        },
      ]);
    } else {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === formData.id ? { ...formData, selected: item.selected } : item
        )
      );
    }
    setModalIsOpen(false);
  };

  const handleSelect = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        selected: checked,
      }))
    );
  };

  const handleDelete = () => {
    setData((prevData) => prevData.filter((item) => !item.selected));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>User Data</h1>
      <button onClick={() => handleModalOpen('add', null)}>Add User</button>
      <button onClick={handleDelete}>Delete Selected</button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={data.every((item) => item.selected)}
                onChange={handleSelectAll}
              />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
          </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelect(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => handleModalOpen('edit', item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {data.length > itemsPerPage && (
          <div>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
              <button
                key={i}
                disabled={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
      {modalIsOpen && (
        <div className='modal-content'>
          <div onClick={handleModalClose} style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }} />
          <div className='body'>
            <h2>{modalMode === 'add' ? 'Add User' : 'Edit User'}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>ID:</label>
                <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
              </div>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div>
                <label>Email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div>
                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
              <button type="submit">{modalMode === 'add' ? 'Add' : 'Save'}</button>
              <button onClick={handleModalClose}>Cancel</button>
            </form>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default CrudApp;
