import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/bootstrap.min.css'
import './index.css';

import { Provider } from 'react-redux';
import store from './store';

import { Router, Route, hashHistory } from 'react-router'
import comingSoonPage from './pages/ComingSoonPage'
import registrationPage from './pages/RegistrationPage'

import T from 'i18n-react';
T.setTexts(require('../locales/en.yml'));

ReactDOM.render((
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={comingSoonPage}/>
      <Route path="/register" component={registrationPage}/>
    </Router>
  </Provider>
), document.getElementById('root'));
