import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import CustomerContainer from './components/CustomerContainer'
import PieContainer from './components/PieContainer'
import NewCustomerModal from "./components/NewCustomerModal";
import NewPieForm from "./components/NewPieForm";

function App() {
  const [customers, setCustomers] = useState([]);
  const [pies, setPies] = useState([])
  const [soldPies, setSoldPies] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((r) => r.json())
      .then((customers) => setCustomers(customers));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/desserts/available")
      .then((r) => r.json())
      .then((pies) => setPies(pies));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/desserts/sold")
      .then((r) => r.json())
      .then((soldPies) => setSoldPies(soldPies));
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
          <PieContainer pies={pies} setPies={setPies} />
        </Route>
        <Route path="/newcustomer">
          <NewCustomerModal />
        </Route>
        <Route path="/newpie">
          <NewPieForm pies={pies} soldPies={soldPies} setSoldPies={setSoldPies} customers={customers} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
