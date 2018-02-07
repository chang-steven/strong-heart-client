import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userLogIn } from '../../actions';

import './login.css';

export class Login extends React.Component {
  onSubmit(values) {
    this.props.userLogIn(values);
    this.props.handleClose();
  }

  demoUserLogin() {
    const demoUser = {
      email: 'test4@test.com',
      password: 'test',
    };
    this.props.userLogIn(demoUser);
    this.props.handleClose();
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
          <p>New user? <span
            className='nav-links' onClick={()=>this.props.openModal('signup')}>Sign-up!</span></p>

          <p>Wanna just look around? <button
            onClick={e => { e.preventDefault();
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
})

Login = connect(mapStateToProps, { userLogIn })(Login);

export default reduxForm({ form: 'log-in' })(Login)
