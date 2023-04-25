import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CustomerContainer from "./components/CustomerContainer";
import PieContainer from "./components/PieContainer";
import SellPieForm from "./components/SellPieForm";

function App() {
  const [customers, setCustomers] = useState([]);
  const [pies, setPies] = useState([]);

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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/customers">
          <CustomerContainer
            customers={customers}
            setCustomers={setCustomers}
          />
        </Route>
        <Route path="/pies">
          <PieContainer pies={pies} setPies={setPies} />
        </Route>
        <Route path="/sellpie">
          <SellPieForm
            pies={pies}
            setPies={setPies}
            customers={customers}
            setCustomers={setCustomers}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
