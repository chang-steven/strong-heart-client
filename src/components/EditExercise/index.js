import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from '../exercise-form';
import { editExercise } from '../../actions';


export class EditExercise extends React.Component {

//do i need to write a fetch exercise function to get the values for the id?

  onSubmit(values) {
    console.log(values);
    console.log(this);
    this.props.editExercise(values);
  }

  render() {
    console.log('logging out ');
    console.log(this.props);
    const initialValues = {
      duration: 25,
    };

    return (
      <ExerciseForm onSubmit={this.onSubmit.bind(this)} initialValues={initialValues} />
    );
  }
}

const mapStateToProps = (state, props) => {
  let map = {};
    map.initialValues = {
      date: props.date,
      activity: props.activity,
      duration: props.duration,
    }
  return map;
};

export default connect(mapStateToProps, { editExercise })(EditExercise);
