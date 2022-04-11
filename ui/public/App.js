/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/jsx-no-target-blank */

/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM */

/* eslint "react/jsx-no-undef": "off" */
import 'idempotent-babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import graphql from './graphql.js';
import { HashRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';
const element = /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Page, null));
const cNode = document.getElementById('contents');
ReactDOM.render(element, cNode);

if (module.hot) {
  module.hot.accept();
}