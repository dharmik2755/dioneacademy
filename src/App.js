import React from 'react';
import "./assets/scss/style.scss";
import Header from './component/Header';
import Home from './component/Home/Home';
import Career from './component/Career/Career';
import { Routes, Route } from "react-router-dom";
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/carrer" element={<Career />}/>
      </Routes >
      <Footer />
    </div>
  );
}

export default App;