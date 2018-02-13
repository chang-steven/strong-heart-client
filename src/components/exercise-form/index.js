import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import Input from '../input';
import RadioInputs from '../radio-inputs';
import { addActivity } from '../../actions';
import { required } from '../../helpers/validators';
import './exercise-form.css';

export class ExerciseForm extends React.Component {

  addActivity(input) {
    this.props.addActivity({activity: input});
  }

  handleClick(e) {
    e.preventDefault();
    this.addActivity(this.props.activity);
  }

  render() {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const activities = this.props.activities.map( activity => {
      return {
        title: capitalizeFirstLetter(activity),
        value: activity
      }
  });

    return (
      <form className="add-exercise form" onSubmit = {this.props.handleSubmit(this.props.onSubmit)}>
        <fieldset>
          <legend>{this.props.formTitle}</legend>

          <Field
            name="date"
            type="date"
            label="Date"
            validate={required}
            component={Input} />

          <label htmlFor="activity" id="activities-title" className="form-label">Activities</label>
          <div className="activities">
            <Field
              name="activity"
              component={RadioInputs}
              options={activities}
              validate={required}
            />
          </div>

          <Field
            type="text"
            name="newActivity"
            placeholder="Swimming, etc."
            component="input"
          />
          <button className="hvr-bounce-in" onClick={(e) => this.handleClick(e)}>Add New Activity</button>
          {this.props.errorAddActivity && <div className="error">Please enter a valid activity</div>}

          <Field
            name="duration"
            type="number"
            label="How Long?"
            placeholder="in mins"
            component={Input}
            validate={required}
          />
          <br />
          <button className="hvr-bounce-in" type="submit" name="submit">{this.props.formTitle}</button>
        </fieldset>
      </form>
    );
  }
}

const selector = formValueSelector('exercise-form');

const mapStateToProps = state => ({
  activity: selector(state, 'newActivity'),
  errorAddActivity: state.user.errorAddActivity
});

export default connect(mapStateToProps, { addActivity })(reduxForm({ form: 'exercise-form' })(ExerciseForm));
