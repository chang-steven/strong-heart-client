import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { addActivity } from '../../actions';
import './exercise-form.css';

export class ExerciseForm extends React.Component {

  addActivity(input) {
    console.log(input);
    this.props.addActivity({activity: input})

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

            <Field type="text" name="newActivity" placeholder="Swimming, etc." component="input"  />
            <button onClick = {(e) => {
                                  e.preventDefault();
                                  this.addActivity(this.props.activity);
                                  }}>Add New Activity</button>
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

const selector = formValueSelector('exercise-form');

const mapStateToProps = state => ({
  activity: selector(state, 'newActivity')
});

// const Connected = connect(mapStateToProps)(ExerciseForm);
//
// export default reduxForm({ form: 'exercise-form', enableReinitialize: true }, mapStateToProps)(Connected);

export default connect(mapStateToProps, { addActivity })(reduxForm({ form: 'exercise-form' })(ExerciseForm));
