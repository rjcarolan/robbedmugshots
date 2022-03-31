import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Route, Router, BrowserRouter } from "react-router-dom";
import Missing from './Pages/Missing';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Route exact path=  "/Missing" component= {Missing}/>

      
    </div>
  );
}

export default App;
