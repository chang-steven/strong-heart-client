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
      isModalVisible: false,
      currentlyEditedId: null,
      // showDeletePrompt: false,
    };
  }

  handleClose(){
    this.setState({
      isModalVisible: false,
      currentlyEditedId: null,
    });
  }

  openModal(exerciseId){
    this.setState({
      isModalVisible: true,
      currentlyEditedId: exerciseId
    });
  }

  deleteExercise(id) {
    prompt('Are you sure you want to delete?');
    const deleteId = { id };
    this.props.deleteExercise(deleteId);
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
        <h3>{exercise.duration}m</h3>
        <div className='dot-menu'>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem
                primaryText="edit"
                onClick={()=> {
                  this.openModal(exercise._id)
                }}
              />
              <MenuItem
                primaryText="delete"
                onClick={()=>this.deleteExercise(exercise._id)}
              />
            </IconMenu>
          </div>
          <p><Moment format="MM-DD-YY">{exercise.date}</Moment></p>
          <h3>{capitalActivity}</h3>
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

          { this.state.isModalVisible && this.state.currentlyEditedId &&
            <Modalbox
              handleClose={this.handleClose.bind(this)}
              >
                <EditExercise
                  exerciseId={this.state.currentlyEditedId}
                  handleClose={this.handleClose.bind(this)}
                />
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
