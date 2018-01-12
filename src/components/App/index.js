import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css';
import Header from '../header';
import NavBar from '../nav-bar';
import Home from '../Home';
import Dashboard from '../Dashboard';
import ExerciseLog from '../ExerciseLog';
import Badges from '../Badges';
import Footer from '../footer';
import Login from '../login';
import SignUp from '../signup';

function App(props) {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main role="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/exerciselog" component={ExerciseLog} />
        <Route exact path="/badges" component={Badges} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
