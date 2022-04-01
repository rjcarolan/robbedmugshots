import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Route, Router, BrowserRouter } from "react-router-dom";
import Missing from './Pages/Missing';
import Ferry from './Pages/Ferry';
import Canada from './Pages/Canada';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Route exact path=  "/Missing" component= {Missing}/>
      <Route exact path=  "/Ferry" component= {Ferry}/>
      <Route exact path=  "/Canada" component= {Canada}/>
    </div>
  );
}

export default App;
