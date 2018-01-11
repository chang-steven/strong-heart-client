import React from 'react';

export function Login(props) {
  return (
    <form
      className="login form"
      method="post"
    >
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
      ></input>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
      ></input>
      <input
        type="button"
        name="submit"
        value="Sign-in"
      ></input>
    </form>
  );
}

export default Login;
