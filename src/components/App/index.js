// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../header';
import NavBar from '../nav-bar';
import Loader from '../loader';
import Home from '../Home';
import Dashboard from '../Dashboard';
import ExerciseLog from '../ExerciseLog';
import AddExercise from '../AddExercise';
import Footer from '../footer';
import Login from '../login';
import SignUp from '../signup';
import Modalbox from '../modalbox';
import PrivateRoute from '../private-route';
import './app.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      modalName: null,
      };
    }

  handleClose(){
    this.setState({ isModalVisible: false,
                    modalName: null });
  }

  open(modalName){
    this.setState({ isModalVisible: true,
                    modalName });
  }

  render() {
    console.log(this.props);

    return (
        <div className="App">
          <Header />
          <NavBar openModal={this.open.bind(this)} />
          <main role="main">

            { this.state.isModalVisible && this.state.modalName === 'login' &&
            <Modalbox handleClose={this.handleClose.bind(this)}>
              <Login
                openModal={this.open.bind(this)}
                handleClose={this.handleClose.bind(this)}
              />
            </Modalbox>
            }

            { this.state.isModalVisible && this.state.modalName === 'signup' &&
            <Modalbox handleClose={this.handleClose.bind(this)}>
              <SignUp
                openModal={this.open.bind(this)}
                handleClose={this.handleClose.bind(this)}
              />
            </Modalbox>
            }

            { this.state.isModalVisible && this.state.modalName === 'add-exercise' &&
            <Modalbox handleClose={this.handleClose.bind(this)}>
              <AddExercise handleClose={this.handleClose.bind(this)} />
            </Modalbox>
            }

            <Loader>
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/exercise-log"
                  component={()=> <ExerciseLog openModal={this.open.bind(this)}/>}
                />
              </Switch>
            </Loader>
          </main>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(App);
