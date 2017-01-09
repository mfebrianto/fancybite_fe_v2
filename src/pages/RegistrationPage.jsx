import { Col } from 'react-bootstrap';
import React, { Component } from 'react';

import RegistrationForm from '../components/forms/RegistrationForm'
import TopBarMenu from '../components/commons/TopBarMenu'
import Loading from '../components/commons/Loading'

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <Loading/>
        <TopBarMenu/>
        <RegistrationForm/>
      </div>
    );
  }
}

export default RegistrationPage;
