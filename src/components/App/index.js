// @flow

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';

import Header from '../header';
import NavBar from '../nav-bar';
import Home from '../Home';
import Dashboard from '../Dashboard';
import ExerciseLog from '../ExerciseLog';
import AddExercise from '../AddExercise';
import Badges from '../Badges';
import Footer from '../footer';
import Login from '../login';
import SignUp from '../signup';
// import Modal from '../modal';


export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      loggedIn: false
                    };
  }

  toggleModal = () => {
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <main role="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/exercise-log" component={ExerciseLog} />
            <Route exact path="/add-exercise" component={AddExercise} />
            <Route exact path="/badges" component={Badges} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
// const mapStateToProps = state => ({
//   links: state.heartStrong.navBarLinks.dashboard
// })
//
// export default connect(mapStateToProps)(App);

//
// Modal window code
// <div>
//   <button onClick={this.toggleModal}>Open Modal</button>
//
//   <Modal show={this.state.isOpen}
//    onClose={this.toggleModal}>
//    Here's some content for the modal
//  </Modal>
// </div>
// https://daveceddia.com/open-modal-in-react/
