import React from 'react';
import {Link} from 'react-router-dom';
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
      <input
        type="text"
        name="email"
      >
      </input>
      <br></br>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
      ></input>
      <br></br>
      <input
        type="button"
        name="submit"
        value="Log-in"
      ></input>
      <p>New user? <Link to="/signup">Sign-up!</Link></p>
      </fieldset>
    </form>
  );
}

export default Login;
