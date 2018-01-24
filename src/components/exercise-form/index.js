import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class ExerciseForm extends React.Component {

  render() {

    const activitiesArray = ['basketball', 'tennis', 'running', 'aerobics'];

    const activities = activitiesArray.map( activity => {

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
          <legend>Add Exercise</legend>
          <label for="date">Date</label>
          <Field name="date" id="date" type="date" component="input" />
          <button name ="today" type="button">Today</button>
          <br />

          {activities}

          <Field type="radio" name="activity" id="other" value="other" component="input"  />
          <label for="activity">Other</label>
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
