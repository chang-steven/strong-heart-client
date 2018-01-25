import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from '../exercise-form';
import { editExercise } from '../../actions';


export class EditExercise extends React.Component {

  onSubmit(values) {
    this.props.editExercise(values);
  }

  render() {
    const url = window.location.pathname;
    const exerciseId = url.substring(url.lastIndexOf('/') + 1);
    let exercise = this.props.exerciseLog.filter(exercise => exercise._id === exerciseId);
    const initialValues = exercise[0];
    const title = 'Edit Exercise';

    return (
      <ExerciseForm
        formTitle={title}
        activities={this.props.activities}
        onSubmit={this.onSubmit.bind(this)}
        initialValues={initialValues}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  exerciseLog: state.exercise.exerciseLog,
  activities: state.user.currentUser.activities
});

export default connect(mapStateToProps, { editExercise })(EditExercise);
