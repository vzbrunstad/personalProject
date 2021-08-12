// import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
// import './App.css'
// import HomePage from './pages/HomePage.js'
// import LoginPage from './pages/LoginPage.js'

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { getLoggedInUser, login } from './api/UserAPI';
import LeaguePage from './pages/LeaguePage.js'
import DraftPlanPage from './pages/DraftPlanPage.js'
import ResearchPage from './pages/ResearchPage.js'
import MockDraftPage from './pages/MockDraftPage.js'
import TestPage from './pages/TestPage.js'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])

  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  }

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }

  const renderLoginPage = () => {
    return (
      <LoginPage
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        user={user}
      />
    )
  }

  const renderHomePage = () => {
    return (
      <HomePage
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
    )
  }

  return (
    <div className="App">
      <Router>
        {/* <UserContext.Provider value={this.state.user}> */}
          <div>
            <Route exact path="/" render={renderHomePage} />
            <Route exact path="/login" render={renderLoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/league" component={LeaguePage} />
            <Route exact path="/league/:id" component={DraftPlanPage} />
            {/* <Route exact path="/research" component={ResearchPage} /> */}
            <Route exact path="/research" component={TestPage} />
            <Route exact path="/mockdraft" component={MockDraftPage} />
          </div>
        {/* </UserContext.Provider> */}
      </Router>
    </div>
  );
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <div>
            // <Route exact path="/" component={HomePage} />
            // <Route exact path="/league" component={LeaguePage} />
            // <Route path="/league/:id" exact component={DraftPlanPage} />
            // <Route exact path="/research" component={ResearchPage} />
            // <Route exact path="/mockdraft" component={MockDraftPage} />
            // <Route exact path="/login" component={LoginPage} />
//           </div>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }

// export default App