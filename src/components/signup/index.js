import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userSignUp } from '../../actions';

export class SignUp extends React.Component {

  onSubmit(values) {
    console.log(values);
    this.props.userSignUp(values);
  }

  render() {
    return (
      <form
        className="signup form"
        onSubmit = {this.props.handleSubmit(this.onSubmit.bind(this))}>
        <fieldset>
          <legend>Sign-up</legend>
          <label for="email">Email</label>
          <Field name="email" id="email" type="email" component="input" placeholder="johndoe@mail.com" />
          <br />
          <label for="password">Password</label>
          <Field name="password" id="password" type="password" component="input" />
          <br />
          <label for="re-enter-password">Re-Enter Password</label>
          <Field name="re-enter-password" id="re-enter-password" type="password" component="input" />
          <button name="submit" type="submit">Sign-up</button>
          <p>Already signed up?  <span onClick={()=> this.props.openModal('login')}>Log-in!</span></p>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  // user: state.form.user
})

SignUp = connect(mapStateToProps, {userSignUp})(SignUp);

export default reduxForm({form: 'sign-up'})(SignUp);
