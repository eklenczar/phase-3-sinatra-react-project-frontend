import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function NewCustomerModal( {customer, onAddCustomer} ) {
  // const { name, phone} = customer
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNameChange = (e) => setName(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        
      }),
    })
      .then((r) => r.json())
      .then((newCustomer) => onAddCustomer(newCustomer));
  }

  return (
    <>
      <Button onClick={handleShow}>New Customer</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>New Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={handleNameChange}
                placeholder="customer name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="phone number"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Add Customer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewCustomerModal