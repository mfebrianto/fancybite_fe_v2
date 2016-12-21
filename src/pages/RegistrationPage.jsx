import { Col } from 'react-bootstrap';
import React, { Component } from 'react';

import RegistrationForm from '../components/forms/RegistrationForm'
import TopBarMenu from '../components/commons/TopBarMenu'

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <TopBarMenu/>
        <RegistrationForm/>
      </div>
    );
  }
}

export default RegistrationPage;
