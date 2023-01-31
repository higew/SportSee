import React from 'react'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
