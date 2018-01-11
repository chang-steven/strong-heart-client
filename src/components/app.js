import React from 'react';
import './app.css';
import Header from './header';
import NavBar from './nav-bar';
import Home from './home';
import Footer from './footer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main role="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
export default App;
