import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";

const HomePage = ({ isLoggedIn, user, handleLogout }) => {

  return (
    <div>
      <div className="Homepage">
          <Navbar />
      </div>
      <h1>Home Page</h1>
      {
        user &&
        <div>
          Hi {user.username}
        </div>
      }
      {
        !isLoggedIn
        ?
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
        :
        <button onClick={handleLogout}>Logout</button>
      }
    </div>
  );
};

export default HomePage;