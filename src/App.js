import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getInitialData } from './actions/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import NewQuestion from './components/NewQuestion';
import NotFound from './components/NotFound';
import Question from './components/Question';
import NavigationBar from './components/NavigationBar';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  render() {
    return (
      <BrowserRouter>        
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='home' element={<Home/>} />
          <Route path='leaderboard' element={<Leaderboard/>} />
          <Route path='new-question' element={<NewQuestion/>} />
          <Route path='question/:question_id' element={<Question/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>       
      </BrowserRouter>
    );
  }
  
}

export default connect()(App);