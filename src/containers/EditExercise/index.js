import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from '../../components/exercise-form';
import { editExercise } from '../../actions';

export class EditExercise extends React.Component {

  onSubmit(values) {
    this.props.editExercise(values);
    this.props.handleClose();
  }

  render() {
    let exercise = this.props.exerciseLog.find(exercise => exercise._id === this.props.exerciseId);
    const initialValues = exercise;
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
  exerciseLog: state.user.exerciseLog,
  activities: state.user.activities
});

export default connect(mapStateToProps, { editExercise })(EditExercise);
