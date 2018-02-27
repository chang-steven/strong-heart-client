import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { fetchUserInfo, deleteExercise } from '../../actions';
import Modalbox from '../../components/modalbox';
import EditExercise from '../EditExercise';
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
    this.setState({
      isDeleteVisible: true,
      currentExerciseId: exerciseId
    })
  }

  deleteExercise() {
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
    const exerciseLog = this.props.exerciseLog.map((exercise, index) => {
      const capitalActivity = capitalizeFirstLetter(exercise.activity);

      return (
        <div className="exercise-card" key={index}>
          <h3 className="duration">{exercise.duration}min</h3>
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
                />
              </IconMenu>
            </div>
            <h3 className="activity-title">{capitalActivity}</h3>
            <p className="date"><Moment format="M/D/YY">{exercise.date}</Moment></p>
          </div>
        )
      });

      return (
        <div>
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
                    className="active-button hvr-bounce-in"
                    onClick={()=>this.handleClose()}>Cancel</button>
                    <button
                      className="active-button hvr-bounce-in"
                      onClick={()=>this.deleteExercise()}>Confirm</button>
                    </Modalbox>
                  }
                  <MuiThemeProvider>
                    <section className="exercise-log">
                      <h2 className="section-title">Exercise Log</h2>
                      {exerciseLog}
                    </section>
                  </MuiThemeProvider>
                </div>
              );
            }
          }

          const mapStateToProps = state => ({
            exerciseLog: state.user.exerciseLog
          })

          export default connect(mapStateToProps, {fetchUserInfo, deleteExercise})(ExerciseLog);
