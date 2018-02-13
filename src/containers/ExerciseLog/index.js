import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fetchUserInfo, deleteExercise } from '../../actions';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import  { Prompt } from 'react-router';

import Modalbox from '../../components/modalbox';
import EditExercise from '../EditExercise';
import Moment from 'react-moment';
import './exercise-log.css';

export class ExerciseLog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditVisible: false,
      isDeleteVisible: false,
      currentExerciseId: null,
    };
  }

  handleClose(){
    this.setState({
      isEditVisible: false,
      isDeleteVisible: false,
      currentExerciseId: null,
    });
  }

  openEditModal(exerciseId){
    this.setState({
      isEditVisible: true,
      currentExerciseId: exerciseId
    });
  }

  openDeleteModal(exerciseId) {
    console.log('opening delete modal', exerciseId);
    this.setState({
      isDeleteVisible: true,
      currentExerciseId: exerciseId
    })
  }

  deleteExercise() {
    console.log('deleting exercise');
    const deleteId = { id: this.state.currentExerciseId};
    this.props.deleteExercise(deleteId, this.handleClose.bind(this));
  }

  render() {
    if (!this.props.exerciseLog) {
      return null;
    }

    else if (this.props.exerciseLog.length === 0) {
      return (
        <div className='no-data'><h3>Looks like you need to get started with some exercise!</h3></div>
      )
    }

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const exerciseLog  = this.props.exerciseLog.map((exercise, index) => {
      const capitalActivity = capitalizeFirstLetter(exercise.activity);
      return (
      <div className="exercise-card" key={index}>
        <h3 className="duration">{exercise.duration}m</h3>
        <div className='dot-menu'>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem
                primaryText="edit"
                onClick={()=> {
                  this.openEditModal(exercise._id)
                }}
              />
              <MenuItem
                primaryText="delete"
                onClick={()=>this.openDeleteModal(exercise._id)}
                // onClick={()=>this.deleteExercise(exercise._id)}
              />
            </IconMenu>
          </div>
          <p className="date"><Moment format="MM-DD-YY">{exercise.date}</Moment></p>
          <h3 className="activity-title">{capitalActivity}</h3>
        </div>
      )
    });

    return (
      <div>
        <MuiThemeProvider>
          <h2>Exercise Log</h2>
          <section className="exercise-log">
            {exerciseLog}
          </section>

          { this.state.isEditVisible && this.state.currentExerciseId &&
            <Modalbox
              handleClose={this.handleClose.bind(this)}
              >
                <EditExercise
                  exerciseId={this.state.currentExerciseId}
                  handleClose={this.handleClose.bind(this)}
                />
              </Modalbox>
            }

            { this.state.isDeleteVisible && this.state.currentExerciseId &&
              <Modalbox
                handleClose={this.handleClose.bind(this)}
                >
                  <p>Are you sure you want to delete?</p>
                  <button
                    className="button"
                    onClick={()=>this.handleClose()}>Cancel</button>
                  <button
                    className="button"
                    onClick={()=>this.deleteExercise()}>Confirm</button>
                </Modalbox>
              }

          </MuiThemeProvider>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    exerciseLog: state.user.exerciseLog
  })

  export default connect(mapStateToProps, {fetchUserInfo, deleteExercise})(ExerciseLog);
