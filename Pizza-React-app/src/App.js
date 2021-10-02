import React from 'react';
import './App.css';
import About from './About';
import { ClassComp } from './ClassComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
export class App extends React.Component {
  state = {
    pizzalist: [
      {
          name: "veg pizza",
          rs: "150",
          count: '0',
          total: "00.0"
      },
      {
          name: "chicken pizza",
          rs: "220",
          count: 0,
          total: "00.0"
      },
      {
          name: "cheese pizza",
          rs: "180",
          count: 0,
          total: "00.0"
      }
  ],



  };
  handleCallback = (childData) => {
    this.setState({ pizzalist: childData })
  }
  render() {
    return (
      <Router>

        <div>
          
          <Switch>
            <Route exact path="/" component={() => (<ClassComp parentcall={this.handleCallback}  pizz={this.state.pizzalist}/>)} />
            <Route exact path="/about" component={() => (<About call={this.state.pizzalist} />)} />
          </Switch>
        </div>

      </Router>
    );

  }
}
