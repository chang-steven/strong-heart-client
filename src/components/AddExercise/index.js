import React from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../../actions';
import ExerciseForm from '../exercise-form';


export class AddExercise extends React.Component {
  onSubmit(values) {
    console.log(values);
    console.log(this);
    this.props.addExercise(values);
  }

  render() {
    return (
      <ExerciseForm onSubmit={this.onSubmit.bind(this)} />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
  };



export default connect(mapStateToProps, { addExercise })(AddExercise);
