import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import CustomerContainer from './components/CustomerContainer'
import Pies from './components/Pies'
import NewCustomerForm from "./components/NewCustomerForm";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((r) => r.json())
      .then((customers) => setCustomers(customers));
  }, []);

  // function handleUpdateCustomer(updatedCustomer) {
  //   const updatedCustomers = customers.map((customer) => {
  //     if (customer.id === updatedCustomer.id) {
  //       return updatedCustomer;
  //     } else {
  //       return customer;
  //     }
  //   });
  //   setCustomers(updatedCustomers);
  // }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/customers">
          <CustomerContainer customers={customers} setCustomers={setCustomers} />
        </Route>
        <Route path="/pies">
          <Pies />
        </Route>
        <Route path="/newcustomer">
          <NewCustomerForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
