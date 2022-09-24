import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Navigation from './component/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import queryString from 'querystring';

//fetch token for login
const App = () => {
  const [token, setToken] = useState('')
  useEffect(() => {
    async function fetchToken() {
      const params = queryString.parse(window.location.search.replace(/^\?/, ''))
      localStorage.token = params.token
      const response = await axios('http://localhost:3000/auth/token/', {
        headers: {
          token: localStorage.token
        }
      })
      setToken(response.data.token)
    }
    fetchToken()
  }, []);

  if (!token) {
    return <Login />;
  }

  return (
    <Router>
      <div className="App">
        <Navigation isLoggedIn={token ? true : false} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/quizzes/:id' element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
