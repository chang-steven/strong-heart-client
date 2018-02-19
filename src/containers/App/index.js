// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/header';
import NavBar from '../../components/nav-bar';
import Loader from '../../components/loader';
import Home from '../Home';
import Dashboard from '../Dashboard';
import ExerciseLog from '../ExerciseLog';
import AddExercise from '../AddExercise';
import Footer from '../../components/footer';
import Login from '../../components/login';
import SignUp from '../../components/signup';
import Modalbox from '../../components/modalbox';
import PrivateRoute from '../../components/private-route';
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
        return (
          <div className="App">
            <NavBar openModal={this.open.bind(this)} />
            <Header />
            <main role="main">

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

          { this.state.isModalVisible && this.state.modalName === 'login' &&
          <Modalbox handleClose={this.handleClose.bind(this)}>
            <Login
              openModal={this.open.bind(this)}
              handleClose={this.handleClose.bind(this)}
            />
          </Modalbox>
        }
        
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
