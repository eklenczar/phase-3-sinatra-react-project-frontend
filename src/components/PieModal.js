import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function PieModal( {customers, pie, onNewPie} ) {
    const {flavor, price, customer_id, image, description} = pie
    const [selectedCustomer, setSelectedCustomer] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const customersArr = customers.map((customer) => {
        const handleClickTest = () => {
            setSelectedCustomer(customer)
        }
        return (
            <Dropdown.Item key={customer.id} onClick={handleClickTest}>{customer.name}</Dropdown.Item>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/desserts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                flavor: flavor,
                price: price,
                customer_id: selectedCustomer.id,
                image: image,
                description: description
            }),
        })
        .then((response) => response.json())
        .then((newPie) => console.log(newPie))

  return (
    <>
        <h1>hello</h1>
        <Button variant="primary" onClick={handleShow}>Add Pie To Order</Button>
        <h1>goodbye</h1>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{flavor}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Choose Customer</Modal.Body>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">{customersArr}</DropdownButton>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onNewPie} >Add Pie</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
}

export default PieModal