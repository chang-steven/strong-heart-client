import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { userLogIn, fetchExerciseLog } from '../../actions';
import Modalbox from '../modalbox';

import './login.css';

export class Login extends React.Component {
  // state = {
  //   redirectToReferrer: false
  // }

  // login = () => {
  //   fakeAuth.authenticate(() => {
  //     this.setState(() => ({
  //       redirectToReferrer: true
  //     }))
  //   })
  // }

  onSubmit(values) {
    console.log(values);
    this.props.userLogIn(values);
    this.props.fetchExerciseLog();
    //How to do this only on success?
    // this.props.history.push("/dashboard");

  }

  render() {
    console.log(this.props);
    const { redirectToReferrer } = this.props.redirectToReferrer;

    if (redirectToReferrer === true) {
        return (
          <Redirect to='/dashboard' />
        )
    }


    return (
      <form
        className="login form"
        onSubmit = {this.props.handleSubmit(this.onSubmit.bind(this))}
      >
        <fieldset>
          <legend>Log-in</legend>
          <label for="email">Email</label>
          <Field name="email" id="email" type="email" component="input" />
          <br />
          <label for="password">Password</label>
          <Field name="password" id="password" type="password" component="input" />
          <br />
          <button type="submit">Log-in</button>
          <p>New user? <Link to="/signup">Sign-up!</Link></p>
          <p>Wanna just look around? <button>Test User Login</button></p>

        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.form.user,
  loggedIn: state.user.loggedIn,
  redirectToReferrer: state.user.redirectToReferrer,
})

Login = connect(mapStateToProps, {userLogIn, fetchExerciseLog})(Login);

export default reduxForm({ form: 'log-in' })(Login)
