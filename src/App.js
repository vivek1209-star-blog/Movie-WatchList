import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Watchlist from './components/Watchlist';
import './App.css';


function App() {
  return (
    <Router>
      <header>
        <div className="header-container">
          <h1 className="app-title">My Movie Watchlist</h1>
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/watchlist" className="nav-link">Watchlist</Link>
          </nav>
        </div>
      </header>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/watchlist" element={<Watchlist />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
