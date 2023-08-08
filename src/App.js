import React from 'react';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseEffect from './Components/UseEffect/UseEffect';
import UseReducer from './Components/UseReducer/UseReducer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';

function App() {
  return (
    <Router>
      <>
        <h1>Example of useEffect</h1>
        <UseState />
        <UseEffect />
        <UseReducer />

        <Link to="/signup">Go to Signup</Link>
        <Link to="/login">Go to Login</Link>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
