import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import './login.css';

export function Login(props) {
  return (
    <form
      className="login form"
      method="post"
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

export default reduxForm({ form: 'log-in' })(Login)
