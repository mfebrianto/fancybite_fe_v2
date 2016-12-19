import { Col } from 'react-bootstrap';
import React, { Component } from 'react';

import registrationForm from '../components/forms/RegistrationForm'

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <h1>Registration</h1>
        <registrationForm/>
      </div>
    );
  }
}

export default RegistrationPage;
