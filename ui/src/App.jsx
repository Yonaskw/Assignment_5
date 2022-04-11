import 'idempotent-babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';
const element = (
  <Router>
  <Page />
  </Router>
 );
const cNode = document.getElementById('contents');
ReactDOM.render(element, cNode);

if (module.hot) {
  module.hot.accept();
}
