import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { userLogIn } from '../../actions';

import './login.css';

export class Login extends React.Component {

  onSubmit(values) {
    console.log(values);
    this.props.userLogIn(values);
  }

  render() {
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
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.form.user
})

Login = connect(mapStateToProps, {userLogIn})(Login);

export default reduxForm({ form: 'log-in' })(Login)
