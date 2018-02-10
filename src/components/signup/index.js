import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userSignUp, userLogIn } from '../../actions';
import {required, nonEmpty, matches, isTrimmed, maxLength15, minLength6} from '../../helpers/validators';
import Input from '../input';
import './signup.css';

export class SignUp extends React.Component {

  onSubmit(values) {
    this.props.userSignUp(values).then(() => this.props.userLogIn(values, this.props.handleClose));
  }

  render() {
      const { handleSubmit, pristine, reset, submitting } = this.props
      return (
        <div>

          <form
            className="signup form"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
            <fieldset>
              <legend>Sign-up</legend>
              {/* <label htmlFor="email">Email</label> */}
              <Field
                name="email"
                type="email"
                label="Email"
                component={Input}
                validate={[required]}
              />
              {/* <label htmlFor="password">Password</label> */}
              <Field
                name="password"
                type="password"
                label="Password"
                component={Input}
                validate={[required, minLength6, maxLength15, isTrimmed]}

              />
              {/* <label htmlFor="re-enter-password">Re-Enter Password</label> */}
              <Field
                name="confirm-password"
                type="password"
                label="Confirm Password"
                component={Input}
                validate={[required, nonEmpty, matches('password')]}

              />
              <div>
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                  Clear Values
                </button>

                {this.props.errorSignUp && <div className="error">Seems like there was a problem, try again.</div>}

                <p>Already signed up?  <span className='nav-links' onClick={()=> this.props.openModal('login')}>Log-in!</span></p>
              </div>
            </fieldset>
          </form>
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    errorSignUp: state.user.errorSignUp
  });

  SignUp = connect(mapStateToProps, { userSignUp, userLogIn })(SignUp);

  export default reduxForm({form: 'sign-up'})(SignUp);
