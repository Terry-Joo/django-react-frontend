import React from 'react';
import {Route} from 'react-router-dom';
import {Posts} from "./pages";
import logo from './logo.svg';
import './App.css';


function Cover() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  )
}

const App = () => (
  <div>
    <Route exact path="/" component={Cover}/>
    <Route path="/posts" component={Posts}/>
  </div>
);


export default App;
