import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function NewPieForm({ pies, soldPies, setSoldPies, customers }) {
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
  }

  
  function handleUpdatePie(updatedPie) {
    console.log("soldPies", soldPies)
    const updatedPies = soldPies.map((pie) => {
      if (pie.id === updatedPie.id) {
        return updatedPie;
      } else {
        return pie;
      }
    });
    console.log("updatedPies", updatedPies)
    setSoldPies([...soldPies, updatedPie]);
  }

  const tableArray = soldPies.map((soldPie) => {
    
    return (
      <tr>
        <td>{soldPie.customer.name}</td>
        <td>{soldPie.flavor}</td>
      </tr>
    );
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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Pie</th>
          </tr>
        </thead>
        <tbody>{tableArray}</tbody>
      </Table>
    </>
  );
}

export default NewPieForm;
