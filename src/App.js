import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from 'react-router-scroll-top'

class App extends Component {
  render() {
    return (
      <ScrollToTop>
          <Header />
          <Main />
          <Footer />
      </ScrollToTop>
    );
  }
}

export default App;
