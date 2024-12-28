import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap'
import Header from "./Components/Header";
import Footer from './Components/Footer.js'

function App() {
  return (
    <div className="app">
      <Header/>      
      <Footer/>  
    </div>
  );
}

export default App;
