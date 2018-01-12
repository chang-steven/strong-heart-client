import React from 'react';
import {Link} from 'react-router-dom';

export function SignUp(props) {
  return (
    <form className="signup form" action="index.html" method="post">
      <fieldset>
        <legend>Sign-up</legend>
      <label for="first-name">First Name</label>
      <input
        type="text"
        name="first-name"
        placeholder="John"
      ></input>
      <br></br>
      <label for="last-name">Last Name</label>
      <input
        type="text"
        name="last-name"
        placeholder="Doe"
      ></input>
      <br></br>
      <label for="email">Email</label>
      <input
        type="email"
        name="email" placeholder="johndoe@mail.com"
      ></input>
      <br></br>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
      ></input>
      <br></br>
      <label for="re-enter-password">Re-Enter Password</label>
      <input
        type="password"
        name="re-enter-password"
      ></input>
      <input
        type="button"
        name="submit"
        value="Sign-up"
      ></input>
      <p>Already signed up?  <Link to="/login">Log-in!</Link></p>
      </fieldset>
    </form>
  );
}

export default SignUp;
