import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NewPieForm( {pies, customers} ) {
    
    const [selectedPie, setSelectedPie] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState()
    
    const customersArray = customers.map((customer) => <option key={customer.id} value={customer.id}>{customer.name}</option>)

    const handleClickCustomer = (e) => {
        setSelectedCustomer(e.target.value)
    }

    const piesArray = pies.map((pie) => <option key={pie.id} value={pie.id}>{pie.flavor}</option>)

    const handleClickPie = (e) => {
        setSelectedPie(e.target.value)
        // console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
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
          .then((updatedPie) => console.log(updatedPie));
      }

  return (
   <Container>
    <center>
    <form>
        <label htmlFor="customers">Choose Customer</label>
        <select name="customers" id="customers" onChange={handleClickCustomer}>{customersArray}</select>
        <label htmlFor="pies">Choose Pie</label>
        <select name="pies" id="pies" onChange={handleClickPie}>{piesArray}</select>
        <Button onClick={handleSubmit}>Submit</Button>
    </form>
    </center>
   </Container>
  )
}

export default NewPieForm