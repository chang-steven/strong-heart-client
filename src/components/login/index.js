import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { userLogIn, fetchExerciseLog } from '../../actions';

import './login.css';

export class Login extends React.Component {
  onSubmit(values) {
    console.log(values);
    this.props.dispatch(userLogIn(values));
    // this.props.dispatch(fetchExerciseLog());
    //How to do this only on success?
    // this.props.history.push("/dashboard");
  }

  demoUserLogin() {
    const demoUser = {
      email: 'test4@test.com',
      password: 'test',
    }
    this.props.userLogIn(demoUser);
    // this.props.fetchExerciseLog();
    console.log('ran user log in........');
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
          <p>New user? <span onClick={()=>this.props.openModal('signup')}>Sign-up!</span></p>

          <p>Wanna just look around? <button
            onClick={(e)=>{ e.preventDefault();
                            this.demoUserLogin();
                          }
                        }
                          >Demo Login</button></p>
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
