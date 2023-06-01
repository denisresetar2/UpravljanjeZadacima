import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


function Header(){
    const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the username from your authentication system or local storage
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);
        return(
            <div className='martin'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center align-content-center">
          <a className="navbar-brand" href="#">Task management</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="http://localhost:5173/dashboard">Home</a>
              <a className="nav-link" href="./AddTask">AddTask</a>
              <a className="nav-link" href="./Edit">Edit</a>
              <a className='nav-link' href="./signout">Sign Out</a>
              <span className="navbar-brand mb-0 h1">Logged in as: {username}</span>
            </div>
          </div>
        </nav>
            </div>
            )
}

export default Header;