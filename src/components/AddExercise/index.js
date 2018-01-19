import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addExercise } from '../../actions';


export class AddExercise extends React.Component {

  onSubmit(values) {
    console.log(values);
    this.props.addExercise(values);
  }

  render() {
    return (
      <form className="add-exercise form" onSubmit = {this.props.handleSubmit(values => this.onSubmit(values))}>
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

const mapStateToProps = state => ({
  // user: state.form.user
})

AddExercise = connect(mapStateToProps, {addExercise})(AddExercise);

export default reduxForm({form: 'add-exercise'})(AddExercise);
