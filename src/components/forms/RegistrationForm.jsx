// ./components/UserForm.js

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Control, Form, actions, Field, getField, Errors } from 'react-redux-form';
import validator from 'validator';

// import { submitUser } from '../services/submitUser'

import T from 'i18n-react';

const passwordMatch = (password, confirmation) => {
  let result = true;
  if (confirmation != null && confirmation.length > 0) {
    result = password == confirmation;
  }
  return result;
}

class RegistrationForm extends React.Component {

  handleSubmit() {
    let { user, dispatch } = this.props;

    // const source = submitUser('http://localhost/api/auth');
    //
    // source.subscribe({next: x => console.log(x),
    //   error: error => console.error(error),
    //   complete: () => console.log('done')});

    console.log("clicked");
  }

  render() {
    const { dispatch, user } = this.props;

    return (
      <Form model="user" onSubmit={() => this.handleSubmit()}>
        <div>
          <label>{ T.translate("registration.email") }</label>
          <Field model="user.email"
                 validators={{
                   required: (val) => val && val.length,
                   valid: validator.isEmail
                 }}
                 validateOn="blur">
            <input type="email" />
          </Field>
        </div>
        <Errors model="user.email"
                show={{ touched: true, focus: false }}
                messages={{
                  required: 'Please provide an email address.',
                  valid: (val) => `${val} is not a valid email.`,
                }}/>

        <div>
          <label>{ T.translate("registration.password") }</label>
          <Field model="user.password"
                 validators={{
                   required: (val) => val && val.length,
                   passwordMatch: (val) => passwordMatch(val, user.passwordConfirmation)
                 }}
                 validateOn="blur">
            <input type="password" />
          </Field>
        </div>
        <Errors model="user.password"
                show={{ touched: true, focus: false }}
                messages={{
                  required: 'Please put in your password.',
                  passwordMatch: 'Must same with password confirmation'
                }}/>

        <div>
          <label>{ T.translate("registration.confirm_password") }</label>
          <Field model="user.passwordConfirmation"
                 validators={{
                   required: (val) => val && val.length,
                   passwordMatch: (val) => passwordMatch(user.password, val)
                 }}
                 validateOn="blur">
            <input type="password" />
          </Field>
        </div>
        <Errors model="user.passwordConfirmation"
                show={{ touched: true, focus: false }}
                messages={{
                  required: 'Please confirm your password',
                  passwordMatch: 'Must same with password'
                }}/>

        <Button type="submit">
          { T.translate("registration.submit") }
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(RegistrationForm);