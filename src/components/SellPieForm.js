import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function SellPieForm({ pies, setPies, customers, setCustomers }) {
  const [selectedPie, setSelectedPie] = useState();
  const [selectedCustomer, setSelectedCustomer] = useState();

  const customersArray = customers.map((customer) => (
    <option key={customer.id} value={customer.id}>
      {customer.name}
    </option>
  ));

  const handleClickCustomer = (e) => {
    setSelectedCustomer(e.target.value);
  };

  const piesArray = pies.map((pie) => (
    <option key={pie.id} value={pie.id}>
      {pie.flavor}
    </option>
  ));

  const handleClickPie = (e) => {
    setSelectedPie(e.target.value);
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/desserts/${selectedPie}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: selectedCustomer,
      }),
    })
      .then((r) => r.json())
      .then((updatedPie) => handleUpdatePie(updatedPie));
    selectedCustomer("");
    selectedPie("");
  }

  console.log(selectedCustomer);
  // find customer, access array of pies
  // add the pie to customer's pie array
  // call state setter and update customers
  function handleUpdatePie(updatedPie) {
    const customerIndex = customers.findIndex(
      (customer) => customer.id === parseInt(selectedCustomer)
    );
    const pieIndex = pies.findIndex((pie) => pie.id === parseInt(selectedPie));
    setCustomers([
      ...customers.slice(0, customerIndex),
      ...customers.slice(customerIndex + 1),
      updatedPie.customer,
    ]);
    setPies([
      ...pies.slice(0, pieIndex),
      ...pies.slice(pieIndex + 1),
      updatedPie.customer,
    ]);
  }

  const tableArray = customers.map((customer) => {
    const flavors = customer.desserts?.map((dessert) => (
      <li key={dessert.id}>{dessert.flavor}</li>
    ));
    if (customer.desserts?.length > 0) {
      return (
        <ul>
          <li key={customer.id}>{customer.name}</li>
          <ul>{flavors}</ul>
        </ul>
      );
    }
  });

  return (
    <>
      <Container>
        <center>
          <form>
            <label htmlFor="customers">Choose Customer</label>
            <select
              name="customers"
              id="customers"
              onChange={handleClickCustomer}
            >
              {customersArray}
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
            </select>
            <label htmlFor="pies">Choose Pie</label>
            <select name="pies" id="pies" onChange={handleClickPie}>
              {piesArray}
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
            </select>
            <Button onClick={handleSubmit}>Submit</Button>
          </form>
        </center>
      </Container>

      <div>{tableArray}</div>
    </>
  );
}

export default SellPieForm;
