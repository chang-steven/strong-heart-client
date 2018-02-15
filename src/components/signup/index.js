import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userSignUp, userLogIn } from '../../actions';
import {required, nonEmpty, matches, isTrimmed, maxLength15, minLength6} from '../../helpers/validators';
import Input from '../input';
import './signup.css';

export class SignUp extends React.Component {

  onSubmit(values) {
    this.props.userSignUp(values);
    this.props.reset()
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
              <Field
                name="email"
                type="email"
                label="Email"
                component={Input}
                validate={[required]}
              />
              <Field
                name="password"
                type="password"
                label="Password"
                component={Input}
                validate={[required, minLength6, maxLength15, isTrimmed]}

              />
              <Field
                name="confirm-password"
                type="password"
                label="Confirm Password"
                component={Input}
                validate={[required, nonEmpty, matches('password')]}

              />
              <div className="form-bottom">
                <button className="active-button hvr-bounce-in" type="submit" disabled={submitting}>
                  Submit
                </button>
                <button className={pristine ? "in-active-button" : "active-button hvr-bounce-in"} type="button" disabled={pristine || submitting} onClick={reset}>
                  Reset
                </button>

                {this.props.errorSignUp && <div className="error"><i className="fas fa-exclamation-triangle"></i>  {this.props.errorMsg || 'Sorry, seems like there was a problem'}</div>}

                {this.props.successMsg && pristine && <div className="success">
                  {this.props.successMsg}
                </div>}

                <p>Already signed up?  <span className='hvr-wobble-vertical form-tag' onClick={()=> this.props.openModal('login')}>Log-in!</span></p>
              </div>
            </fieldset>
          </form>
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    errorSignUp: state.user.errorSignUp,
    errorMsg: state.user.errorMsg,
    successMsg: state.user.successMsg,
  });

  SignUp = connect(mapStateToProps, { userSignUp, userLogIn })(SignUp);

  export default reduxForm({form: 'sign-up'})(SignUp);
