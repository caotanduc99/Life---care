import React from 'react';
import './App.css';
import Home from './component/home';
import Foolter from './component/foolter';
import Header from './component/header';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
      <Header/>
      <Home/>
      <Foolter/>
    </div> 
    </BrowserRouter>
    
  );
}

export default App;
