import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userLogIn } from '../../actions';
import { required } from '../../helpers/validators';
import Input from '../../components/input';

import './login.css';

export class Login extends React.Component {
  onSubmit(values) {
    this.props.userLogIn(values, this.props.handleClose);
  }

  demoUserLogin() {
    const demoUser = {
      email: 'test4@test.com',
      password: 'test',
    };
    this.props.userLogIn(demoUser, this.props.handleClose);
  }

  handleClick(e) {
    e.preventDefault();
    this.demoUserLogin();
  }

  render() {
    return (
      <div>
        <form
          className="login form"
          onSubmit = {this.props.handleSubmit(this.onSubmit.bind(this))}
        >
          <fieldset>
            <legend>Log-in</legend>
            {/* <label for="email">Email</label> */}
            <Field
              name="email"
              type="email"
              label="Email"
              component={Input}
              validate={required}
            />
            <br />
            {/* <label for="password">Password</label> */}
            <Field
              name="password"
              type="password"
              label="Password"
              component={Input}
              validate={required}
            />
            <br />
            <button className="hvr-bounce-in" type="submit">Log-in</button>
            <p id="new-user">New user? <span
              className='hvr-wobble-vertical form-tag' onClick={()=>this.props.openModal('signup')}>Sign-up!</span></p>

            {this.props.errorLogIn && <div className="error">Seems like there was a problem, try again.</div>}

            <p>Wanna just look around? <button className="hvr-bounce-in" onClick={e => this.handleClick(e)}>Demo Login</button></p>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.form.user,
  loggedIn: state.user.loggedIn,
  errorLogIn: state.user.errorLogIn
});

Login = connect(mapStateToProps, { userLogIn })(Login);

export default reduxForm({ form: 'log-in' })(Login)
