import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CustomerCard from './CustomerCard'

function CustomerContainer() {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  const newCustomerForm = () => {
    history.push("/newcustomer")
}

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((r) => r.json())
      .then((customers) => setCustomers(customers));
  }, []);

  function handleDeleteCustomer(deletedCustomer) {
    const updatedCustomers = customers.filter((customer) => customer.id !== deletedCustomer.id);
    setCustomers(updatedCustomers);
  }
  

    const renderCustomers = customers.map(customer => (<CustomerCard key={customer.id} customer={customer} onDeleteCustomer={handleDeleteCustomer}/>))
  return (
    <Container>
      <Button onClick={newCustomerForm}>New Customer</Button>
      <div>{renderCustomers}</div>
    </Container>
    
  )
}

export default CustomerContainer