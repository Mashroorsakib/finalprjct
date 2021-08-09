import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './Component/Order/Order';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {createContext,useState} from 'react';
import Login from './Component/Login/Login';
import Privateroute from './Component/Privateroute/Privateroute';
import Addservice from './Component/Order/Addservice/Addservice';
import Manageproduct from './Component/MAnageproduct/Manageproduct';
import Allorder from './Component/Allorder/Allorder';
import Orderlist from './Component/Orderlist/Orderlist';
import Review from './Component/Reviewcs/Review';
import Product from './Component/Productdetails/Product';
export const usercontext=createContext();

function App() {
  const [loggeduser,setloggeduser]=useState({
    displayName:"",
    email:""

  })
  return (
    <usercontext.Provider value={[loggeduser,setloggeduser]}>
    <Router>
      <Header></Header>
    <Switch>
    <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
                  <Home></Home>
          </Route>
       <Privateroute path="/order">
             <Order></Order>
       </Privateroute>
       <Route path="/login">
             <Login></Login>
       </Route>
       <Privateroute path="/Addservice">
           <Addservice></Addservice>
       </Privateroute >
       <Privateroute  path="/Manageproduct">
          <Manageproduct></Manageproduct>
       </Privateroute >
       <Privateroute  path="/Allorder">
            <Allorder></Allorder>
       </Privateroute >
       <Privateroute  path="/Orderlist">
          <Orderlist></Orderlist>
       </Privateroute >
       <Privateroute  path="/Review">
           <Review></Review>
       </Privateroute >
       <Privateroute path="/show/:id">
            <Product></Product>
       </Privateroute>
    </Switch>
    </Router>
    </usercontext.Provider>
  );
}

export default App;
