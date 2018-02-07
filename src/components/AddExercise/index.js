import React from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../../actions';
import ExerciseForm from '../exercise-form';


export class AddExercise extends React.Component {
  onSubmit(values) {
    const exerciseData = Object.assign({}, values, {userId: this.props.user});
    this.props.addExercise(exerciseData);
    this.props.handleClose();
  }

  render() {
    if (!this.props.activities) {
      return null;
    }
    const title = 'Add Exercise';

    return (
      <ExerciseForm
        formTitle={title}
        activities={this.props.activities}
        onSubmit={this.onSubmit.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  activities: state.user.activities,
  user: state.user.currentUser
  });



export default connect(mapStateToProps, { addExercise })(AddExercise);
