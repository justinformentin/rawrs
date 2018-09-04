import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import Usage from '../components/Usage';

class App extends Component {

  render() {
    return (
    <div>  
    <div className="main-container">
      <Header />
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/usage" component={Usage}/>
          </Switch>
        </div>
      <Footer />
    </div>
  </div>  
  );
  }
}

export default App;
