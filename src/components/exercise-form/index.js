import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { addActivity } from '../../actions';
import './exercise-form.css';
import { required } from '../../validators';

export class ExerciseForm extends React.Component {

  addActivity(input) {
    this.props.addActivity({activity: input});
  }

  render() {

    console.log(this.props.activity);
    const activities = this.props.activities.map( activity => {

      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
      const capitalActivity = capitalizeFirstLetter(activity);
      return (
      <div>
        <Field
          type="radio"
          name="activity"
          value={activity}
          component="input"
        />
        <label htmlFor="activity">{capitalActivity}</label>
      </div>
    )
  });

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

    return (
      <form className="add-exercise form" onSubmit = {this.props.handleSubmit(this.props.onSubmit)}>
        <fieldset>
          <legend>{this.props.formTitle}</legend>
          <Field
            name="date"
            type="date"
            label="Date"
            validate={required}
            component={renderField} />
          <div id="activities">
            <label htmlFor="activity">Activities</label>
            {activities}

            <Field type="text" name="newActivity" placeholder="Swimming, etc." component="input"  />
            <button onClick = {(e) => {
                                  e.preventDefault();
                                  this.addActivity(this.props.activity);
                                  }}>Add New Activity</button>
          </div>
          <Field
            name="duration"
            type="number"
            label="How long?"
            component={renderField}
            placeholder="in mins"
            validate={required}
          />
          <br />
          <button type="submit" name="submit">{this.props.formTitle}</button>
        </fieldset>
      </form>
    );
  }
}

const selector = formValueSelector('exercise-form');

const mapStateToProps = state => ({
  activity: selector(state, 'newActivity')
});

// const Connected = connect(mapStateToProps)(ExerciseForm);
//
// export default reduxForm({ form: 'exercise-form', enableReinitialize: true }, mapStateToProps)(Connected);

export default connect(mapStateToProps, { addActivity })(reduxForm({ form: 'exercise-form' })(ExerciseForm));
