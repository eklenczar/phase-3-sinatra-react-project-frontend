import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import CustomerContainer from './components/CustomerContainer'
import Pies from './components/Pies'
import NewCustomerModal from "./components/NewCustomerModal";

function App() {
  const [customers, setCustomers] = useState([]);
  const [pies, setPies] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((r) => r.json())
      .then((customers) => setCustomers(customers));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/desserts")
      .then((r) => r.json())
      .then((pies) => setPies(pies));
  }, []);

  
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
          <Pies pies={pies} setPies={setPies} customers={customers} />
        </Route>
        <Route path="/newcustomer">
          <NewCustomerModal />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
