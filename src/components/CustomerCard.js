import React from 'react'
import "../App.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import EditCustomerModal from './EditCustomerModal';

function CustomerCard(props) {
    const { customer, onDeleteCustomer, onUpdateCustomer } = props
    const { id, name, phone } = customer
    // console.log(customer)

    function handleDeleteClick() {
      fetch(`http://localhost:9292/customers/${customer.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => onDeleteCustomer(customer));
    }

  return (
    <Card key={id} className="m-auto">
      <Card.Body>
        <Card.Text>{name}</Card.Text>
          <Card.Text>{phone}</Card.Text>
          <EditCustomerModal customer={customer} onUpdateCustomer={onUpdateCustomer} />
          <ButtonGroup>
            <Button onClick={handleDeleteClick}>Delete</Button>
          </ButtonGroup>
      </Card.Body>
    </Card>
     
  
  )
}

export default CustomerCard