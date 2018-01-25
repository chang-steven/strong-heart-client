import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './exercise-form.css';

export class ExerciseForm extends React.Component {

  render() {

    // const activitiesArray = ['basketball', 'tennis', 'running', 'aerobics'];

    const activities = this.props.activities.map( activity => {

      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
      const capitalActivity = capitalizeFirstLetter(activity);
      return (
      <div>
        <Field type="radio" name="activity" id={activity} value={activity} component="input" />
        <label for="activity">{capitalActivity}</label>
      </div>
    )
  });

    return (
      <form className="add-exercise form" onSubmit = {this.props.handleSubmit(this.props.onSubmit)}>
        <fieldset>
          <legend>{this.props.formTitle}</legend>
          <label for="date">Date</label>
          <Field name="date" id="date" type="date" component="input" />
          <button name ="today" type="button">Today</button>
          <br />
          <div id="activities">
            <label for="activity">Activities</label>
            {activities}
            <Field type="radio" name="activity" id="other" value="other" component="input"  />
            <Field type="text" name="specify" placeholder="Swimming, etc." component="input"  />
          </div>

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
