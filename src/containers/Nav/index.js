import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';

const Nav = () => {
  return (
    <div id="nav">
      <Link to="/">Home</Link>
      <br></br>
      {localStorage.getItem('userId') ?
      <Link to="/new-item">New Item</Link>
      : null }

      <br></br><Link to="/all">All Items</Link>
      <br></br>
      {!localStorage.getItem('userId') ?
      <Link to="/register">Register</Link>
      : <Link to="/users">Users</Link> }
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
      <br></br>
      {!localStorage.getItem('userId') ?
      <Link to="/login">Login</Link>
      :
      <Logout />
      }

      <br></br>
    </div>
  )


}

export default Nav;