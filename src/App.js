import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartHeader from './components/StartHeader';
import MainPage from './pages/MainPage';
import LogInPage from "./pages/LogInPage";
import SignUpPage from './pages/SignUpPage';
import './App.css';


// Set Router
function RouteList() {
  return(
      <Routes>
        <Route path="/" exact Component={MainPage}/>
        <Route path="/LogIn" exact Component={LogInPage}/>
        <Route path="/SignUp" exact Component={SignUpPage}/>
      </Routes>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StartHeader/>
        <RouteList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
