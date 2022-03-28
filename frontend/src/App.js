
import React, {Component} from 'react';
import './App.scss';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Search from './components/search';
import MobileMenu from './components/layout/mobile_menu';
import Loader from './components/loader';

import { BrowserRouter as Router } from 'react-router-dom';
import MyRouter from './routes';


class App extends Component {
  render() {
    return (
      <Router >
        <div className="App maincontainer">
          <Loader />
          <MobileMenu />
          <Header />
          <MyRouter />
          <Footer />
          <Search />
        </div>
      </Router>
    );
  }
}

export default App;
