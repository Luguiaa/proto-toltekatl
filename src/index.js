/**

  Toltekatl

  @author Ulises Viña Almeida <contacto@ulisesvina.me>
  @author Juan Almanza <scidroid@scidroid.me>

  @version 0.1
  VERSIONS BELOW 1.0 ARE PROTOTYPES

*/

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/index.css';
import reportWebVitals from './js/reportWebVitals';

// Components
import Header from './components/Header'
import Home from './components/Home';

// Render
ReactDOM.render(
  <React.StrictMode>
    <div id="app">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products">Productos</Route>
          <Route path="/account">Cuenta</Route>
          <Route path="/cart">Carrito</Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();