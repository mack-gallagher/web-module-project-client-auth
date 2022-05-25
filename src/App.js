import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <div className="header-nav">
        <h2>Friends Database</h2>
        <nav>
          <Link to='/'>Login.</Link>
          <Link to='/friends'>Friends.</Link>
          <Link to='/friends/add'>Addfriend.</Link>
          <Link to='/logout'>Logout.</Link>
        </nav>
      </div>

      <Route exact path='/'>
        <Login />
      </Route>

      <Route exact path='/friends'>
        <FriendsList />
      </Route>

      <Route path='/friends/add'>
        <AddFriend />
      </Route>

      <Route path='/logout'>
        <Logout />
      </Route>

    </div>
  );
}

export default App;
