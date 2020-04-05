
import React, { Component } from 'react';
import './App.css';
import Home from "./Component/Home/Home.js";
import NavBar from './Component/Home/NavBar';
import Profile from './Component/Farmer/Profile';
import Footer from './Component/Home/Footer';
import Content from './Component/Product/Content';
import Cart from './Component/Farmer/Cart';
import Notification from './Component/Notification/Notification';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Notification />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/test'>
              <Content />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App;
