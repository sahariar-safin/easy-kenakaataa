import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './componant/Header/Header';
import Admin from './componant/Admin/Admin';
import Home from './componant/Home/Home';
import PrivateRoute from './componant/PriveteRoute/PrivateRoute';
import Checkout from './componant/Checkout/Checkout';
import Login from './componant/Login/Login';
import Order from './componant/Order/Order';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    displayName: "",
    email: ""
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
