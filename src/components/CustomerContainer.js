import React from 'react'
import "../App.css"
import { useHistory } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CustomerCard from './CustomerCard'

function CustomerContainer( {customers, setCustomers} ) {
  // console.log(props)
  
  const history = useHistory();

  const newCustomerForm = () => {
    history.push("/newcustomer")
}

  function handleDeleteCustomer(deletedCustomer) {
    const updatedCustomers = customers.filter((customer) => customer.id !== deletedCustomer.id);
    setCustomers(updatedCustomers);
  }

  function handleUpdateCustomer(updatedCustomer) {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === updatedCustomer.id) {
        return updatedCustomer;
      } else {
        return customer;
      }
    });
    setCustomers(updatedCustomers);
  }

  

    // const renderCustomers = customers.map(customer => <CustomerCard key={customer.id} customer={customer} onDeleteCustomer={handleDeleteCustomer}/>)

  const renderCustomers = customers.map(customer => {
    return (
      <Col key={customer.id} xs="auto">
        <CustomerCard
          setCustomers={setCustomers}
          customer={customer}
          onDeleteCustomer={handleDeleteCustomer} 
          onUpdateCustomer={handleUpdateCustomer}
        />
      </Col>
    )
  })
  
    return (
    <Container fluid className="p-3">
      <Button onClick={newCustomerForm}>New Customer</Button>
      <Row className="g-3">{renderCustomers}</Row>
    </Container>
    
  )
}

export default CustomerContainer