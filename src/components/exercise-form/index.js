import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

export class ExerciseForm extends React.Component {

  render() {
    return (
      <form className="add-exercise form" onSubmit = {this.props.handleSubmit(this.props.onSubmit)}>
        <fieldset>
          <legend>Add Exercise</legend>
          <label for="date">Date</label>
          <Field name="date" id="date" type="date" component="input" />
          <button name ="today" type="button">Today</button>
          <br />

          <Field type="radio" name="activity" id="running" value="running" component="input" />
          <label for="type">Running</label>
          <br />
          <Field type="radio" name="activity" id="basketball" value="basketball" component="input"  />
          <label for="type">Basketball</label>
          <br />
          <Field type="radio" name="activity" id="other" value="other" component="input"  />
          <label for="type">Other</label>
          <br />
          <label for="specify">Please Specify</label>
          <Field type="text" name="specify" placeholder="Swimming, etc." component="input"  />

          <br/>
          <label for="duration">How long?</label>
          <Field name="duration" id="duration" type="number" component="input" placeholder="in mins" />
          <br />
          <button type="submit" name="submit">Add Exercise</button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({ form: 'exercise-form', enableReinitialize: true })(ExerciseForm);
