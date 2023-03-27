import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

function CustomerCard(props) {
    // console.log(props)
    const { customer, onDeleteCustomer } = props
    const { name, phone } = customer

    function handleDeleteClick() {
      fetch(`http://localhost:9292/customers/${customer.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => onDeleteCustomer(customer));
    }

  return (
    <Card>
        <Card.Text>{name}</Card.Text>
        <Card.Text>{phone}</Card.Text>
        <ButtonGroup>
            <Button>Edit</Button>
            <Button onClick={handleDeleteClick}>Delete</Button>
        </ButtonGroup>
    </Card>
  )
}

export default CustomerCard