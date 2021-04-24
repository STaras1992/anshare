import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/pages/Home/Home';
import Header from './components/Header/Header';
import Inbox from './components/pages/Inbox/Inbox';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/inbox' render={() => <Inbox />} />
      </Switch>
    </div>
  );
}

export default App;
