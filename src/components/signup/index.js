import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

export function SignUp(props) {
  return (
    <form className="signup form" action="index.html" method="post">
      <fieldset>
        <legend>Sign-up</legend>
        <label for="first-name">First Name</label>
        <Field name="first-name" id="first-name" type="text" component="input" placeholder="John" />
        <br />
        <label for="last-name">Last Name</label>
        <Field name="last-name" id="last-name" type="text" component="input" placeholder="Doe" />
        <br />
        <label for="email">Email</label>
        <Field name="email" id="email" type="email" component="input" placeholder="johndoe@mail.com" />
        <br />
        <label for="password">Password</label>
        <Field name="password" id="password" type="password" component="input" />
        <br />
        <label for="re-enter-password">Re-Enter Password</label>
        <Field name="re-enter-password" id="re-enter-password" type="password" component="input" />
        <button name="submit" type="submit">Sign-up</button>
        <p>Already signed up?  <Link to="/login">Log-in!</Link></p>
      </fieldset>
    </form>
  );
}

export default reduxForm({form: 'sign-up'})(SignUp);
