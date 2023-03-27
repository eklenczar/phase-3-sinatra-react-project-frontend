import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewCustomerForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleChange(e) {
    const key = e.target.name
    const value = e.target.value
    // setFormState(prevState => ({...prevState, [key]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    const customerData = {
      name: name,
      phone: phone
    };
    fetch("http://localhost:9292/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customerData),
  })
    .then((r) => r.json())
    .then((newCustomer) => console.log(newCustomer));
  }


  return (
    <form onSubmit={handleSubmit} className="new-customer-form">
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Add customer name" />
      <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Add phone number" />
      <input type="submit" value="Submit" />
    </form>
  )
}
export default NewCustomerForm