// @flow

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './app.css';

import Header from '../header';
import NavBar from '../nav-bar';
import Home from '../Home';
import Dashboard from '../Dashboard';
import ExerciseLog from '../ExerciseLog';
import AddExercise from '../AddExercise';
import EditExercise from '../EditExercise';
import Badges from '../Badges';
import Footer from '../footer';
import Login from '../login';
import SignUp from '../signup';
import Modalbox from '../modalbox';
// import PrivateRoute from '../private-route';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}/>
);
}

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
      <Router>
        <div className="App">
          <Header />
          <NavBar openModal={this.open.bind(this)} />
          <main role="main">

            { this.state.isModalVisible && this.state.modalName === 'login' &&
            <Modalbox
              handleClose={this.handleClose.bind(this)}>
              <Login openModal={this.open.bind(this)}/>
            </Modalbox>
            }

            { this.state.isModalVisible && this.state.modalName === 'signup' &&
            <Modalbox handleClose={this.handleClose.bind(this)}>
              <SignUp openModal={this.open.bind(this)}/>
            </Modalbox>
            }

            { this.state.isModalVisible && this.state.modalName === 'add-exercise' &&
            <Modalbox handleClose={this.handleClose.bind(this)}>
              <AddExercise />
            </Modalbox>
            }

            { this.state.isModalVisible && this.state.modalName === 'edit-exercise' &&
            <Modalbox
              handleClose={this.handleClose.bind(this)}>
              <EditExercise />
            </Modalbox>
            }

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/exercise-log" component={ExerciseLog} />
            <PrivateRoute exact path="/add-exercise" component={AddExercise} />
            <PrivateRoute path="/edit-exercise" component={EditExercise} />
            <PrivateRoute exact path="/badges" component={Badges} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  redirectToReferrer: state.user.redirectToReferrer
});

export default connect(mapStateToProps)(App);
