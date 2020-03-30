import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import Contact from "./components/contacts.component";

function App() {
  return (
    <Router>
          <Navbar />
          <Route path="/" exact component={Contact} />
    </Router>
  );
}

export default App;
