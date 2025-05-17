import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Featuredby from './Pages/Featuredby';
import PortfolioPage from './Pages/PortfolioPage';

const CombinedHome = () => {
  return (
    <>
      <HomePage />
      <About />
      <Featuredby />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CombinedHome />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
};

export default App;
