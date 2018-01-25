import React from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../../actions';
import ExerciseForm from '../exercise-form';


export class AddExercise extends React.Component {
  onSubmit(values) {
    console.log(values);
    console.log(this);
    this.props.addExercise(values);
    //How to redirect only on success?
    this.props.history.push("/exercise-log");
  }

  render() {
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
  activities: state.user.currentUser.activities
  });



export default connect(mapStateToProps, { addExercise })(AddExercise);
