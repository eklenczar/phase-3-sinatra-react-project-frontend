import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function NewPieModal( {onAddPie} ) {
  const [flavor, setFlavor] = useState("");
//   const [image, setImage] = useState()
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState()
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFlavorChange = (e) => setFlavor(e.target.value);
//   const handleImageChange = (e) => setImage(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value)

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/desserts/available", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        flavor: flavor,
        description: description,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((newPie) => onAddPie(newPie));
      setFlavor("");
      setDescription("");
      setPrice("");
  }

  return (
    <>
      <Button onClick={handleShow}>Add New Pie</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Pie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Flavor</Form.Label>
              <Form.Control
                type="flavor"
                value={flavor}
                onChange={handleFlavorChange}
                placeholder="pie flavor"
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="image"
                value={image}
                onChange={handleImageChange}
                placeholder="image"
                autoFocus
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="description"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="price"
                value={price}
                onChange={handlePriceChange}
                placeholder="price"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add Pie</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewPieModal;
