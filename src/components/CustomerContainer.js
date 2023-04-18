import React from "react";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CustomerCard from "./CustomerCard";
import NewCustomerModal from "./NewCustomerModal";

function CustomerContainer({ customers, setCustomers }) {
  function handleDeleteCustomer(deletedCustomer) {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== deletedCustomer.id
    );
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

  function handleNewCustomer(newCustomer) {
    setCustomers([...customers, newCustomer]);
  }

  const renderCustomers = customers.map((customer) => {
    return (
      <Col key={customer.id} xs="auto">
        <CustomerCard
          setCustomers={setCustomers}
          customer={customer}
          onDeleteCustomer={handleDeleteCustomer}
          onUpdateCustomer={handleUpdateCustomer}
        />
      </Col>
    );
  });

  return (
    <Container fluid className="p-3">
      <NewCustomerModal onAddCustomer={handleNewCustomer} />
      <Row className="g-3">{renderCustomers}</Row>
    </Container>
  );
}

export default CustomerContainer;
