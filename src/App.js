import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import CustomerContainer from './components/CustomerContainer'
import Pies from './components/Pies'
import NewCustomerForm from "./components/NewCustomerForm";



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/customers">
          <CustomerContainer />
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
