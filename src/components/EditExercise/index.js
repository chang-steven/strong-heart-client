import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from '../exercise-form';
import { editExercise } from '../../actions';


export class EditExercise extends React.Component {

  onSubmit(values) {
    console.log(values);
    console.log(this);
    this.props.editExercise(values);
  }

  render() {
    const url = window.location.pathname;
    const exerciseId = url.substring(url.lastIndexOf('/') + 1);
    console.log(exerciseId);

    console.log('logging out ');


    let exercise = this.props.exerciseLog.filter(exercise => exercise._id === exerciseId);
    console.log(exercise[0]);

    console.log(this.props);
    const initialValues = exercise[0];

    return (
      <ExerciseForm onSubmit={this.onSubmit.bind(this)} initialValues={initialValues} />
    );
  }
}

const mapStateToProps = (state) => ({
  exerciseLog: state.exercise.exerciseLog
});

export default connect(mapStateToProps, { editExercise })(EditExercise);
