import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userSignUp, userLogIn } from '../../actions';
import {required, email, nonEmpty, matches, length, isTrimmed} from '../../validators';
import './signup.css';

export class SignUp extends React.Component {

  onSubmit(values) {
    this.props.userSignUp(values)
    .then(() => this.props.userLogIn(values));
    this.props.handleClose();
  }

  render() {
    const renderField = ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (
      <div className='form-field'>
        <label>{label}</label>
        <div className='form-input'>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
          </div>
        </div>
      )

      const { handleSubmit, pristine, reset, submitting } = this.props
      return (
        <form
          className="signup form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <fieldset>
            <legend>Sign-up</legend>
            <Field
              name="email"
              type="email"
              label="Email"
              component={renderField}
              validate={[email, required]}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              component={renderField}
              validate={[required, length({min: 10, max: 72}), isTrimmed]}

            />
            <Field
              name="re-enter-password"
              type="password"
              label="Re-Enter Password"
              component={renderField}
              validate={[required, nonEmpty, matches('password')]}

            />
            <div>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </button>
              <p>Already signed up?  <span className='nav-links' onClick={()=> this.props.openModal('login')}>Log-in!</span></p>
            </div>
          </fieldset>
        </form>
      )
    }
  }

  const mapStateToProps = state => ({
    // user: state.form.user
  })

  SignUp = connect(mapStateToProps, { userSignUp, userLogIn })(SignUp);

  export default reduxForm({form: 'sign-up'})(SignUp);
