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
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<PrivateRoute component={Home}/>} />
              <Route path='leaderboard' element={<PrivateRoute component={Leaderboard} />} />
              <Route path='add' element={<PrivateRoute component={NewQuestion} />} />
              <Route path='questions/:question_id' element={<PrivateRoute component={Question} />} />
              <Route path='not-found' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);