// ./components/UserForm.js

import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Grid, Col } from 'react-bootstrap';
import { Control, Form, actions, Field, getField, Errors } from 'react-redux-form';
import validator from 'validator';

import { setVisibilityFilter, hideVisibility } from '../actions/index'
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
    let { dispatch, user,  components } = this.props;

    // const source = submitUser('http://localhost/api/auth');
    //
    // source.subscribe({next: x => console.log(x),
    //   error: error => console.error(error),
    //   complete: () => console.log('done')});


    dispatch(setVisibilityFilter());


    setTimeout(() => {
      dispatch(hideVisibility())
    }, 5000)

    console.log("clicked");
  }

  render() {
    const { dispatch, user,  components } = this.props;

    return (
      <div className='fb-content'>
        <div className='fb-registration-header'>
          <div className='fb-signup-header'>
            Signup
          </div>
        </div>

        <Grid>
          <Row>
            <Col xs={2} md={2}/>
            <Col xs={8} md={8} className='fb-signup-form-wrapper'>
              <Form model="user" onSubmit={() => this.handleSubmit()}>
                <div>
                  <label>{ T.translate("registration.email") } <span>*</span> </label>
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
                  <label>{ T.translate("registration.password") } <span>*</span> </label>
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
                  <label>{ T.translate("registration.confirm_password") } <span>*</span> </label>
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
            </Col>
            <Col xs={2} md={2}/>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user, components: state.components };
}

export default connect(mapStateToProps)(RegistrationForm);