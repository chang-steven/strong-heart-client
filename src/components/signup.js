import React from 'react';

export function SignUp(props) {
  return (
    <form className="signup form" action="index.html" method="post">
      <label for="first-name">First Name</label>
      <input
        type="text"
        name="first-name"
        placeholder="John"
      ></input>
      <label for="last-name">Last Name</label>
      <input
        type="text"
        name="last-name"
        placeholder="Doe"
      ></input>
      <label for="email">Email</label>
      <input
        type="email"
        name="email" placeholder="johndoe@mail.com"
      ></input>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
      ></input>
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
    </form>
  );
}

export default SignUp;
