import React, { Component } from 'react';
import './App.css';
import './index.css';
import { connect } from 'react-redux';
import { getInitialData } from './actions/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import NewQuestion from './components/NewQuestion';
import NotFound from './components/NotFound';
import Question from './components/Question';
import NavigationBar from './components/NavigationBar';
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  render() {
    return (
      <BrowserRouter>
          <NavigationBar />
          <LoadingBar style={{ backgroundColor: "#3B82F6"}}/>
          <div className="p-6 flex flex-col justify-center items-center">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='home' element={<PrivateRoute component={Home}/>} />
              <Route path='leaderboard' element={<PrivateRoute component={Leaderboard} />} />
              <Route path='new-question' element={<PrivateRoute component={NewQuestion} />} />
              <Route path='question/:question_id' element={<PrivateRoute component={Question} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);