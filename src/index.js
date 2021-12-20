import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import WeAre from './pages/WeAre';
import Services from './pages/Services';
import Services_op from './pages/Services_op';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/weare" element={<WeAre/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/servicesop" element={<Services_op/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
