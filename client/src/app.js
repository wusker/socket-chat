import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/join/join';
import Chat from './components/chat/chat';

import './app.css';

const App = () => (
  <Router>
    <Route exact path='/' component={Join}></Route>
    <Route path='/chat' component={Chat}></Route>
  </Router>
);

export default App;