import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import Favorites from './pages/Favorites';
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <Router>
    <div>
     <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Router>
  )
}

export default App
