

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';
import NoPage from './pages/NoPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
